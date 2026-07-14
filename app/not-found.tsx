import { Container, Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="bg-mesh bg-trust-grid text-white">
      <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <span className="font-mono text-sm uppercase tracking-[0.2em] text-orange">404</span>
        <h1 className="mt-4 text-4xl font-bold !text-white md:text-5xl">Page not found</h1>
        <p className="mt-4 max-w-md text-blue-soft/80">
          The page you’re looking for doesn’t exist. Try the framework, the Trust Registry, or verify
          a certificate.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/" variant="light" size="lg">
            Back home
          </Button>
          <Button href="/registry" variant="orange" size="lg">
            Search the registry
          </Button>
        </div>
      </Container>
    </section>
  );
}
