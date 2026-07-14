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
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-blue">
      <span className="h-px w-6 bg-orange" />
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
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-4 text-3xl font-bold md:text-4xl ${light ? "!text-white" : ""}`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? "text-blue-soft/80" : "text-slate"}`}>
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
  primary: "bg-blue text-white hover:bg-blue-bright shadow-[0_10px_30px_rgba(11,80,200,0.28)]",
  orange: "bg-orange text-white hover:brightness-105 shadow-[0_10px_30px_rgba(244,128,30,0.28)]",
  dark: "bg-navy text-white hover:bg-ink",
  outline: "border border-line bg-white text-ink hover:border-blue hover:text-blue",
  ghost: "text-ink hover:text-blue",
  light: "bg-white text-navy hover:bg-blue-soft",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
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
  const cls = `inline-flex items-center justify-center gap-2 rounded-full font-medium font-[var(--font-display)] transition-all duration-200 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
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
        className={`font-display text-3xl font-bold md:text-4xl ${light ? "text-white" : "text-navy"}`}
      >
        {value}
      </div>
      <div className={`mt-1 text-xs font-medium uppercase tracking-wider ${light ? "text-blue-soft/70" : "text-slate"}`}>
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
      className={`rounded-[var(--radius-brand)] border border-line bg-white p-6 shadow-[var(--shadow-brand-sm)] transition-shadow duration-300 hover:shadow-[var(--shadow-brand)] ${className}`}
    >
      {children}
    </Comp>
  );
}
