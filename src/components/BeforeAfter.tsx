import { useRef, useState, useCallback } from "react";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterProps {
  before: string;
  after: string;
  beforeLabel: string;
  afterLabel: string;
}

const BeforeAfter = ({ before, after, beforeLabel, afterLabel }: BeforeAfterProps) => {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const percent = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, percent)));
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl shadow-luxury select-none cursor-ew-resize"
      onMouseMove={(e) => dragging.current && move(e.clientX)}
      onMouseDown={(e) => {
        dragging.current = true;
        move(e.clientX);
      }}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchMove={(e) => move(e.touches[0].clientX)}
    >
      {/* After (full) */}
      <img
        src={after}
        alt={afterLabel}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      <span className="absolute top-4 right-4 z-10 rounded-full bg-black/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white">
        {afterLabel}
      </span>

      {/* Before (clipped) */}
      <div
        className="absolute inset-0 h-full overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <img
          src={before}
          alt={beforeLabel}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ width: containerRef.current?.offsetWidth || "100%" }}
          draggable={false}
        />
        <span className="absolute top-4 left-4 z-10 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white">
          {beforeLabel}
        </span>
      </div>

      {/* Handle */}
      <div
        className="absolute top-0 bottom-0 z-20 w-0.5 bg-white"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary shadow-luxury">
          <MoveHorizontal className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

export default BeforeAfter;
