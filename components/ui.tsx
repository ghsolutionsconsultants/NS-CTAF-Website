import Link from "next/link";
import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`container-brand ${className}`}>{children}</div>;
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] ${
        light ? "text-blue-soft/90" : "text-blue"
      }`}
    >
      <span className="rule-draw h-px w-7 bg-orange" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={`heading-in max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-5 text-[1.75rem] font-bold leading-[1.12] md:text-[2.35rem] ${light ? "!text-white" : ""}`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-[1.0625rem] leading-relaxed md:text-lg ${
            light ? "text-blue-soft/75" : "text-slate"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "orange" | "dark" | "outline" | "ghost" | "light";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  target?: string;
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-blue text-white shadow-[var(--shadow-blue)] hover:bg-blue-bright hover:shadow-[0_14px_36px_rgba(11,80,200,0.34)] hover:-translate-y-0.5",
  orange:
    "bg-orange text-navy shadow-[var(--shadow-orange)] hover:brightness-[1.06] hover:shadow-[0_14px_36px_rgba(244,128,30,0.34)] hover:-translate-y-0.5",
  dark: "bg-navy text-white hover:bg-ink hover:-translate-y-0.5 hover:shadow-[var(--shadow-brand)]",
  outline:
    "border border-line bg-white text-ink hover:border-blue hover:text-blue hover:shadow-[var(--shadow-brand-sm)]",
  ghost: "text-ink hover:text-blue",
  light: "bg-white text-navy hover:bg-blue-soft hover:-translate-y-0.5",
};

const sizeClasses = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-[3.25rem] px-7 text-base",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  target,
}: ButtonProps) {
  const solid = variant === "primary" || variant === "orange" || variant === "dark";
  const cls = `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium leading-none font-[var(--font-display)] ${solid ? "sheen" : ""} transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  if (href) {
    const external = href.startsWith("http") || target === "_blank";
    if (external) {
      return (
        <a href={href} target={target} rel="noreferrer" className={cls}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={cls}>
      {children}
    </button>
  );
}

export function Badge({
  children,
  color,
  className = "",
}: {
  children: ReactNode;
  color?: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${className}`}
      style={
        color
          ? { backgroundColor: `color-mix(in srgb, ${color} 14%, white)`, color }
          : undefined
      }
    >
      {color && <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} />}
      {children}
    </span>
  );
}

export function StatTile({
  value,
  label,
  light = false,
}: {
  value: ReactNode;
  label: string;
  light?: boolean;
}) {
  return (
    <div className="text-center">
      <div
        className={`count tabular inline-block whitespace-nowrap font-display text-[1.75rem] font-bold leading-none tracking-tight md:text-[2.125rem] ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {value}
      </div>
      <div
        className={`mt-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] ${
          light ? "text-blue-soft/80" : "text-slate"
        }`}
      >
        {label}
      </div>
    </div>
  );
}

export function Card({
  children,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article";
}) {
  const Comp = as;
  return (
    <Comp
      className={`card-accent lift group rounded-[var(--radius-brand)] border border-line bg-white p-6 shadow-[var(--shadow-brand-sm)] hover:border-blue/25 hover:shadow-[var(--shadow-brand)] ${className}`}
    >
      {children}
    </Comp>
  );
}
