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
        <div className="relative overflow-hidden rounded-[calc(var(--radius-brand)+8px)] bg-mesh bg-trust-grid px-8 py-14 text-center md:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold !text-white md:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-blue-soft/80">{intro}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
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
