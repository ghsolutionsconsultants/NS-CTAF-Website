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
    <section className="relative overflow-hidden bg-mesh bg-trust-grid text-white">
      <Container className="relative py-20 md:py-28">
        <div className="max-w-3xl animate-fade-up">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 text-4xl font-bold leading-[1.05] !text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 text-lg leading-relaxed text-blue-soft/85 md:text-xl">{intro}</p>
          )}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
