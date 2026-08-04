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
      <Container className="relative py-20 md:py-28">
        <div className="max-w-3xl animate-fade-up">
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
