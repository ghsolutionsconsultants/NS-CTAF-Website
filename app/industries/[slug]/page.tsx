import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Section, SectionHeading, Button } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Icon } from "@/components/icon";
import { industries } from "@/data/content";
import { ArrowRight, Target, Layers, TrendingUp } from "lucide-react";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) return { title: "Industry not found" };
  return {
    title: `Code Trust Assurance for ${ind.title}`,
    description: ind.focus,
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) notFound();

  return (
    <>
      <PageHero eyebrow={`Code Trust Assurance for ${ind.title}`} title={ind.focus}>
        <Button href="/contact" variant="orange" size="lg">
          Get Assessed <ArrowRight className="h-4 w-4" />
        </Button>
      </PageHero>

      <Section>
        <Container>
          <div className="stagger-in grid gap-8 lg:grid-cols-3">
            <div className="rounded-[var(--radius-brand)] border border-line bg-white p-6">
              <Target className="h-6 w-6 text-orange" />
              <h3 className="mt-4 font-display font-bold text-navy">The trust problem</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{ind.problem}</p>
            </div>
            <div className="rounded-[var(--radius-brand)] border border-line bg-white p-6">
              <Layers className="h-6 w-6 text-blue" />
              <h3 className="mt-4 font-display font-bold text-navy">Priority domains</h3>
              <ul className="mt-3 space-y-2">
                {ind.priorityDomains.map((d) => (
                  <li key={d} className="rounded-lg bg-blue-soft/60 px-3 py-2 text-sm font-medium text-blue">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[var(--radius-brand)] border border-line bg-navy p-6 text-white">
              <TrendingUp className="h-6 w-6 text-orange" />
              <h3 className="mt-4 font-display font-bold !text-white">Target level</h3>
              <p className="mt-2 text-lg font-semibold text-orange">{ind.targetLevel}</p>
              <p className="mt-3 text-sm text-blue-soft/80">{ind.value}</p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="font-display text-xl font-bold text-navy">Other sectors</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {industries
                .filter((i) => i.slug !== ind.slug)
                .map((i) => (
                  <Link
                    key={i.slug}
                    href={`/industries/${i.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink transition hover:border-blue hover:text-blue"
                  >
                    <Icon name={i.icon} className="h-4 w-4" /> {i.title}
                  </Link>
                ))}
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
