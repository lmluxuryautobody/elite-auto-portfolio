import { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
  children?: ReactNode;
}

const PageHero = ({ eyebrow, title, subtitle, image, children }: PageHeroProps) => {
  return (
    <section className="relative flex min-h-[60vh] items-center pt-20 text-white">
      <img src={image} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 red-glow opacity-50" />
      <div className="container-narrow relative z-10 py-16">
        <div className="max-w-3xl animate-fade-in">
          <span className="eyebrow">
            <span className="h-px w-8 bg-accent" />
            {eyebrow}
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight sm:text-6xl">
            {title}
          </h1>
          {subtitle && <p className="mt-5 max-w-xl text-lg text-white/75">{subtitle}</p>}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
