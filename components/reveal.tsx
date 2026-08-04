import type { ReactNode } from "react";

/**
 * Scroll-triggered entrance animations.
 *
 * These are CSS scroll-driven animations (see `.reveal` in globals.css), not
 * JS. That means: no client bundle, no IntersectionObserver, and — most
 * importantly — content is fully visible when scroll-timeline animations
 * aren't supported or animations are disabled. The motion is enhancement only,
 * never a precondition for reading the page.
 */

export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  /** @deprecated retained for call-site compatibility; timing is CSS-driven */
  delay?: number;
  y?: number;
  className?: string;
}) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

export function Stagger({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`reveal-group ${className}`}>{children}</div>;
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}
