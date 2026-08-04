import { Container, Button } from "./ui";
import { site } from "@/data/site";

export function CtaBand({
  title = "Turn software assurance into an external trust signal.",
  intro = `Fixed fee ${site.fee} · ${site.turnaround} · Final report, CTA certificate, and improvement roadmap.`,
}: {
  title?: string;
  intro?: string;
}) {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="edge-glow relative overflow-hidden rounded-[calc(var(--radius-brand)+10px)] bg-mesh bg-trust-grid px-8 py-16 text-center shadow-[var(--shadow-brand-lg)] md:px-16 md:py-20">
          <h2 className="mx-auto max-w-2xl text-[1.75rem] font-bold leading-[1.15] !text-white md:text-[2.35rem]">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-blue-soft/75">{intro}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button href="/contact" variant="orange" size="lg">
              Get Assessed
            </Button>
            <Button href="/framework" variant="light" size="lg">
              Explore the Framework
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
