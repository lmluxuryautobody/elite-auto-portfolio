import { useEffect, useRef, useState } from "react";

interface CounterStatProps {
  end: number;
  duration?: number;
  label: string;
  suffix?: string;
  prefix?: string;
  light?: boolean;
}

const CounterStat = ({
  end,
  duration = 2000,
  label,
  suffix = "",
  prefix = "",
  light = false,
}: CounterStatProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef} className="text-center">
      <div className="font-display text-5xl md:text-6xl font-extrabold text-accent mb-2 tabular-nums">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <div
        className={`text-sm uppercase tracking-[0.2em] font-semibold ${
          light ? "text-white/60" : "text-muted-foreground"
        }`}
      >
        {label}
      </div>
    </div>
  );
};

export default CounterStat;
