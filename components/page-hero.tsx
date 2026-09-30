import type { ReactNode } from "react";
import { Container, Eyebrow } from "./ui";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="edge-glow relative overflow-hidden bg-mesh bg-trust-grid text-white">
      {/* Ambient floating orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="orb absolute -left-24 top-0 h-80 w-80 rounded-full bg-blue-bright/20 blur-3xl" />
        <span className="orb orb-2 absolute -right-16 -bottom-10 h-96 w-96 rounded-full bg-orange/12 blur-3xl" />
      </div>
      <Container className="relative py-20 md:py-28">
        <div className="hero-stagger max-w-3xl">
          <Eyebrow light>{eyebrow}</Eyebrow>
          <h1 className="mt-6 text-[2.5rem] font-bold leading-[1.04] !text-white md:text-[3.25rem] lg:text-[3.5rem]">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 text-lg leading-relaxed text-blue-soft/80 md:text-xl">{intro}</p>
          )}
          {children && <div className="mt-9 flex flex-wrap gap-3">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
