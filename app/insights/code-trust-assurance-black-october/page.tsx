import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Download } from "lucide-react";
import { Container, Section, Button, Eyebrow } from "@/components/ui";
import { CtaBand } from "@/components/cta-band";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Code Trust Assurance and the Security Controls That Could Have Interrupted October's Attacks",
  description:
    "October 2026 produced a cluster of supply chain compromises, credential failures and a certificate authority key exposure. An analysis of which controls would have interrupted the documented attack paths — and which would not.",
  openGraph: {
    title: "Code Trust Assurance and the Security Controls That Could Have Interrupted October's Attacks",
    description:
      "A verified review of October 2026: supply chain compromises, platform breaches and critical disclosures, grouped by what each one actually establishes.",
    images: [{ url: "/insights/black-october-2026-og.jpg", width: 1200, height: 628 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/insights/black-october-2026-og.jpg"],
  },
};

const SECTIONS: { id: string; label: string }[] = [
  { id: "what-the-incidents-show", label: "What the incidents actually demonstrate" },
  { id: "in-practice", label: "What code trust assurance should mean in practice" },
  { id: "the-machinery", label: "Protecting the machinery that produces software" },
  { id: "malicious-packages", label: "Malicious packages and vulnerability scanning" },
  { id: "cicd", label: "Separation of privilege in CI/CD" },
  { id: "signing", label: "Signing and provenance" },
  { id: "credentials", label: "Making exposed credentials less useful" },
  { id: "secret-storage", label: "Secret storage under compromise" },
  { id: "runtime", label: "Runtime restrictions" },
  { id: "cryptographic", label: "Cryptographic assurance" },
  { id: "vulnerability-management", label: "Vulnerability management and ransomware" },
  { id: "validation", label: "Validation must demonstrate refusal" },
  { id: "operational", label: "Making it operational" },
];

/** Body copy shares one measure and rhythm across the article. */
function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-5 text-[1.0625rem] leading-[1.75] text-ink">{children}</p>;
}

function H({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="mt-14 scroll-mt-24 font-display text-[1.6rem] font-bold leading-[1.2] text-navy md:text-[1.9rem]"
    >
      {children}
    </h2>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-2.5">
      {items.map((t) => (
        <li key={t} className="flex gap-3 text-[1.0625rem] leading-[1.7] text-ink">
          <span className="mt-[0.6rem] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ArticlePage() {
  return (
    <>
      {/* Article header */}
      <section className="edge-glow relative overflow-hidden bg-mesh bg-trust-grid text-white">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <span className="orb absolute -left-24 top-0 h-80 w-80 rounded-full bg-blue-bright/20 blur-3xl" />
          <span className="orb orb-2 absolute -right-16 -bottom-10 h-96 w-96 rounded-full bg-orange/12 blur-3xl" />
        </div>
        <Container className="relative py-16 md:py-24">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-soft transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Resources
          </Link>
          <div className="hero-stagger mt-8 max-w-4xl">
            <Eyebrow light>Analysis · October 2026</Eyebrow>
            <h1 className="mt-6 text-[2rem] font-bold leading-[1.1] !text-white md:text-[2.75rem]">
              Code Trust Assurance and the Security Controls That Could Have Interrupted
              October’s Attacks
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-blue-soft/90 md:text-xl">
              Secure development and strong cyber hygiene could have reduced exposure to these
              attacks. Independently tested technical enforcement determines whether those
              protections hold when credentials, dependencies, and trusted systems are
              compromised.
            </p>
          </div>
        </Container>
      </section>

      <Section className="!pt-14">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_minmax(0,46rem)_1fr]">
            {/* Contents rail */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-[var(--radius-brand)] border border-line bg-grey p-5">
                <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-slate">
                  Contents
                </div>
                <nav className="mt-4 space-y-2.5">
                  {SECTIONS.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="block text-[13px] leading-snug text-slate transition-colors hover:text-blue"
                    >
                      {s.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Body */}
            <article className="min-w-0">
              <P>
                A cluster of incidents disclosed through October 2026 raises a difficult question:
                how can organisations operating sophisticated digital platforms remain vulnerable
                to malicious releases, stolen credentials, compromised infrastructure and failures
                in cryptographic trust?
              </P>
              <P>
                There is no single explanation. However, several verified reports illustrate how an
                initial weakness can become a wider compromise when attackers inherit permissions,
                manipulate trusted automation, or move between systems without encountering an
                effective boundary.
              </P>
              <P>
                Code trust assurance provides a practical way to examine these relationships. It
                asks whether software, its dependencies, and the systems used to build, distribute,
                and operate it deserve the trust placed in them — and what evidence supports that
                judgment.
              </P>
              <P>
                Applied properly, this approach could have reduced exposure, interrupted some
                documented attack paths and limited the consequences of successful intrusion. It
                cannot establish that every incident would have been prevented. Prevention depends
                on the specific weakness, the attacker’s access and whether the relevant controls
                remain effective under compromise.
              </P>

              {/* The verified incident review */}
              <figure className="mt-12">
                <a
                  href="/insights/Black-October-2026-Nucleus-Systems.jpg"
                  target="_blank"
                  rel="noreferrer"
                  className="group block overflow-hidden rounded-[calc(var(--radius-brand)+4px)] border border-line shadow-[var(--shadow-brand)] transition-shadow duration-300 hover:shadow-[var(--shadow-brand-lg)]"
                >
                  <img
                    src="/insights/black-october-2026.jpg"
                    alt="Black October — October 2026. A verified review grouping the month's incidents into eight supply chain compromises, eight platform and data breaches, and five critical vulnerability disclosures, with the three failures that recur across them."
                    width={1200}
                    height={1500}
                    className="block h-auto w-full"
                  />
                </a>
                <figcaption className="mt-4 flex flex-wrap items-start gap-x-6 gap-y-3 border-t border-line pt-4">
                  <p className="min-w-0 flex-1 text-sm leading-relaxed text-slate">
                    Grouped by what each incident establishes. Dates reflect when the incident
                    occurred where known, not when it was disclosed. Compiled from the affected
                    organisations’ own disclosures and published security research.
                  </p>
                  <a
                    href="/insights/Black-October-2026-Nucleus-Systems.jpg"
                    download
                    className="inline-flex h-10 shrink-0 items-center gap-2 rounded-full border border-line bg-white px-4 text-sm font-medium text-ink transition-all duration-300 hover:border-blue hover:text-blue hover:shadow-[var(--shadow-brand-sm)]"
                  >
                    <Download className="h-4 w-4" />
                    Download (JPEG, 2400×3000)
                  </a>
                </figcaption>
              </figure>

              <H id="what-the-incidents-show">Establishing what the incidents actually demonstrate</H>
              <P>
                October’s disclosures combine different categories of security event: reported
                breaches, malicious software releases, vulnerability disclosures and cryptographic
                failures. These should not be treated as equivalent. A vulnerability announcement
                does not, by itself, establish exploitation or a breach.
              </P>
              <P>
                This analysis therefore draws on selected verified examples rather than treating a
                circulated list as an established incident chronology.
              </P>
              <P>
                LiteLLM’s investigation describes a sequence involving an exposed administrative
                key, stolen GitHub tokens, malicious workflow activity and a release built from an
                attacker-controlled fork. Branch protection initially rejected a workflow change,
                but an organisation owner’s token was used to override it. The resulting malicious
                release was signed and published through the release pipeline.
              </P>
              <P>
                Research into SubQuery’s <code className="rounded bg-grey px-1.5 py-0.5 font-mono text-[0.9em] text-navy">@subql/common</code>{" "}
                package describes malicious code published after changes to its CI/CD workflow.
                Publication used GitHub Actions OIDC through npm Trusted Publisher. This
                illustrates why an authenticated publishing mechanism cannot, on its own, establish
                that the published contents are safe.
              </P>
              <P>
                Zeabur’s preliminary report attributes its October incident to leaked internal
                credentials, including long-lived administrative credentials accessible from the
                public internet. Railway separately reported that an attacker accessed internal
                systems and decrypted stored environment variables for a subset of workspaces.
              </P>
              <div className="mt-8 rounded-[var(--radius-brand)] border-l-4 border-blue bg-blue-soft/50 p-6">
                <p className="font-display text-lg font-semibold leading-snug text-navy">
                  Trust in an account, pipeline or platform must be constrained by controls that
                  remain useful when that trusted component is compromised.
                </p>
              </div>

              <H id="in-practice">What code trust assurance should mean in practice</H>
              <P>
                Code trust assurance is used here as an assurance discipline, rather than a claim
                of certification under a single universal standard. Its purpose is to connect
                security requirements to implemented controls, test results and accountable
                decisions throughout the software lifecycle.
              </P>
              <P>Its scope extends beyond application source code to include:</P>
              <Bullets
                items={[
                  "Third-party packages, libraries and container images.",
                  "Build scripts, release workflows and infrastructure configuration.",
                  "Developer identities, machine identities and publishing permissions.",
                  "Secrets, signing keys and cryptographic operations.",
                  "Deployment policies, runtime permissions and recovery mechanisms.",
                ]}
              />
              <P>
                Secure development establishes practices for producing safer software. Cyber
                hygiene maintains the conditions those practices depend on. Technical enforcement
                makes critical requirements binding at the point where an action occurs.
                Independent validation establishes whether those restrictions work.
              </P>
              <P>
                This is consistent with the intent of NIST’s Secure Software Development Framework:
                reducing vulnerabilities, limiting the impact of weaknesses that remain and
                addressing root causes to prevent recurrence.
              </P>
              <P>
                The assurance question is therefore concrete: if an attacker obtains a developer
                account, alters a dependency or compromises a workload, which actions can they
                still perform — and which controls demonstrably stop them?
              </P>

              <H id="the-machinery">Secure development must protect the machinery that produces software</H>
              <P>
                Application testing alone leaves an important gap if attackers can change how an
                application is built or published.
              </P>
              <P>
                A release pipeline can introduce files absent from the reviewed source, retrieve an
                unapproved dependency or package software from an unexpected repository. Workflow
                definitions, build images and deployment scripts therefore require security
                treatment comparable to production code.
              </P>
              <P>A stronger development model would require protected review of changes affecting:</P>
              <Bullets
                items={[
                  "Release source repositories and permitted source references.",
                  "Build-time scripts and dependency installation behaviour.",
                  "Workflow permissions and access to secrets.",
                  "Signing, publishing and production deployment.",
                  "Infrastructure access and tenant isolation.",
                ]}
              />
              <P>
                For sensitive changes, approval should come from someone with the expertise and
                authority to assess the security effect. Automated checks should also examine
                whether a change expands privileges, introduces a new external destination or makes
                an approved source configurable by an untrusted caller.
              </P>
              <P>
                However, review requirements are only as strong as their enforcement. A control
                that an ordinary development identity cannot bypass may still be removable by a
                compromised administrator.
              </P>
              <P>
                The architecture should therefore separate routine development authority from
                authority to weaken the release process. Emergency access should be narrowly
                scoped, time limited and independently monitored.
              </P>

              <H id="malicious-packages">Malicious packages require controls beyond vulnerability scanning</H>
              <P>
                A vulnerability scanner generally looks for recognised weaknesses. A newly
                introduced credential stealer may have no published advisory when it first appears.
              </P>
              <P>
                Dependency assurance must consequently examine both known vulnerabilities and
                suspicious behaviour. Before approving a new or changed package, organisations
                should consider whether it introduces installation hooks, unexpected executables,
                obfuscated code, unusual startup behaviour or network connections unrelated to its
                stated purpose.
              </P>
              <P>
                The SubQuery analysis identified credential theft and backdoor functionality
                associated with installation and package execution. Research into the LiteLLM
                compromise described malicious files capable of running during Python startup,
                without an application needing to import LiteLLM. These are examples of why package
                assessment must consider execution outside normal application functionality.
              </P>
              <P>
                Practical enforcement could include an internal package repository that admits only
                approved artefacts, controlled dependency updates, exact version and integrity
                locking, and isolated evaluation of higher-risk releases.
              </P>
              <P>
                Dependency installation should occur without production credentials. Installation
                scripts should be disabled where unnecessary, with explicit approval for packages
                that require them. Evaluation environments should have restricted network access
                and no route into sensitive infrastructure.
              </P>
              <P>
                These controls offer different benefits. Approval gates can stop a suspicious
                release from entering the organisation. Isolation can reduce the consequences when
                detection fails. Version pinning alone is insufficient: it can faithfully preserve
                a malicious version once that version has been selected. Approval must establish
                why the selected artefact is acceptable.
              </P>

              <H id="cicd">CI/CD must enforce meaningful separation of privilege</H>
              <P>
                A CI/CD system can combine source access, cloud access, package publishing and
                production deployment. That makes it a powerful target. The central design
                requirement is to prevent untrusted code from inheriting privileged execution.
              </P>
              <P>
                Pull request validation should run separately from release execution. Untrusted
                contributions should not receive production secrets, publishing permissions or
                access to privileged persistent runners. Artefacts passed between stages should be
                treated as untrusted until verified.
              </P>
              <P>
                GitHub’s security guidance specifically warns about privileged workflow triggers
                processing untrusted content. It also recommends controlling workflow dependencies
                and using OIDC to reduce reliance on stored, long-lived cloud credentials.
              </P>
              <P>
                OIDC nevertheless requires restrictive trust policies. A short-lived credential can
                still be dangerous if any branch, repository or workflow can request it. The
                receiving service should verify the permitted repository, workflow, environment and
                source context before granting narrowly defined privileges. A test job should not
                be able to obtain a production publishing identity merely because it belongs to the
                same organisation.
              </P>
              <P>
                These restrictions need negative testing. Assurance should demonstrate that a
                workflow on an unauthorised branch cannot retrieve a release credential, that a
                fork cannot impersonate an approved source and that a build identity cannot modify
                the policy governing its own approval.
              </P>

              <H id="signing">Signing and provenance must be verified against expectations</H>
              <P>
                Digital signatures answer questions about integrity and signing identity. They do
                not establish that the signer was uncompromised or that the contents are benign.
              </P>
              <P>
                Build provenance can record how an artefact was produced. Its value depends on
                verifying that information against trusted expectations. SLSA’s verification
                guidance explicitly connects provenance to inspection and verification.
              </P>
              <P>
                A deployment gate should therefore evaluate more than whether a signature is valid.
                It should establish whether:
              </P>
              <Bullets
                items={[
                  "The artefact came from the approved source repository and reviewed revision.",
                  "The authorised builder and workflow produced it.",
                  "Required tests and approvals apply to that exact artefact.",
                  "Its digest matches the artefact being deployed.",
                  "Its signing identity and associated evidence remain trusted.",
                ]}
              />
              <P>
                The organisation should build once and promote that same immutable artefact through
                environments. Rebuilding separately for production creates an opportunity for the
                deployed software to differ from what was assessed.
              </P>
              <P>
                A software bill of materials supports this process by identifying components. It
                remains an inventory, however; it does not independently prove that those
                components are safe.
              </P>

              <H id="credentials">Cyber hygiene must make exposed credentials less useful</H>
              <P>
                Credential hygiene is central to code trust because credentials determine who can
                change software and what software can access.
              </P>
              <P>
                Secret detection should operate before commits are accepted, during CI and across
                existing repositories and artefacts. Yet detection must trigger an operational
                response. Removing a secret from current source does not invalidate copies already
                obtained. The response should include revocation, replacement, investigation of
                prior use and examination of related permissions.
              </P>
              <P>
                Long-lived human tokens should be removed from automation wherever practical.
                Workloads should use short-lived identities with permissions limited to their
                specific task. Developer accounts should use phishing-resistant authentication,
                while session and token controls address access that survives an interactive login.
              </P>
              <P>
                For AI services, keys should be separated by application and environment, with
                spending limits, rate limits and restrictions supported by the provider. A
                compromised development workload should not inherit unrestricted production AI
                access.
              </P>
              <P>
                The important measure is the authority an exposed credential confers. A short-lived
                token with broad administrative permissions can still cause significant damage
                before it expires.
              </P>

              <H id="secret-storage">Secret storage must withstand compromise of adjacent systems</H>
              <P>
                Railway’s disclosure demonstrates a distinction between encrypting stored secrets
                and preventing an attacker from obtaining their plaintext through compromised
                internal systems.
              </P>
              <P>
                Encryption at rest remains valuable. Its protection is limited when the same
                compromised identity can read encrypted records and invoke the mechanism that
                decrypts them.
              </P>
              <P>
                A stronger design separates storage access from decryption authority. Workloads
                should retrieve only the secrets they require, and bulk retrieval should require
                additional controls. Tenant boundaries should apply to secret access as well as to
                application data.
              </P>
              <P>
                Administrative support access should be temporary and auditable. Sensitive material
                should be excluded from build logs, diagnostic exports and unnecessary
                configuration copies.
              </P>
              <P>
                For assurance purposes, teams should test whether an ordinary platform identity can
                enumerate another tenant’s secrets, whether a database reader can invoke decryption
                and whether unusual retrieval volume produces an actionable response. These tests
                turn a general claim about encryption into evidence about actual access boundaries.
              </P>

              <H id="runtime">Runtime restrictions can contain software that passes earlier checks</H>
              <P>
                Even a carefully controlled build process will sometimes admit vulnerable or
                malicious software. Runtime controls provide another opportunity to interrupt harm.
              </P>
              <P>
                Applications should operate with the minimum filesystem, network and cloud
                permissions needed for their function. Containers should avoid unnecessary root
                privileges and privileged host access. Sensitive credentials should not be
                available to unrelated processes.
              </P>
              <P>
                Network egress restrictions are especially relevant to credential theft. A
                malicious package may execute successfully yet fail to send collected information
                to an unauthorised destination.
              </P>
              <P>
                Such restrictions need careful design. Broad outbound HTTPS access can permit
                exfiltration, while an overly restrictive policy can disrupt essential services.
                The objective is to identify legitimate communication requirements and enforce them
                through controlled paths. These measures primarily contain impact. They should not
                be presented as proof that malicious code cannot execute.
              </P>

              <H id="cryptographic">Cryptographic assurance must test generated outputs</H>
              <P>
                The eMudhra incident illustrates why assurance must extend to the outputs of
                security processes.
              </P>
              <P>
                Its statements acknowledge recoverable private keys associated with eight
                intermediate TLS certificate authorities and attribute the weakness to a script
                error. The company also states that HSMs were used during key generation. The
                lesson is that approved equipment does not, by itself, validate every operation or
                resulting key.
              </P>
              <P>
                Cryptographic assurance should examine the complete generation, import, wrapping,
                export and publication process. It should include independent review of ceremony
                tooling, strict control of parameter changes and checks designed to identify known
                weak-key conditions.
              </P>
              <P>
                Some defects can be detected from public keys. Broader confidence in randomness and
                key generation requires evidence about the underlying process and implementation;
                no single public-key test proves adequate entropy.
              </P>
              <P>
                Technical enforcement should prevent publication when mandatory checks fail or
                required evidence is missing. This moves validation to the point before a weak
                output becomes part of a wider trust infrastructure.
              </P>

              <H id="vulnerability-management">Vulnerability management and ransomware resilience remain essential</H>
              <P>
                Code trust assurance must also address conventional vulnerabilities and operational
                compromise.
              </P>
              <P>
                For disclosed weaknesses, organisations need an accurate inventory linking software
                versions to deployed workloads and accountable owners. Remediation priority should
                reflect exposure, exploitability, privileges and service importance.
              </P>
              <P>
                Where immediate patching is impractical, temporary controls may include disabling
                affected functionality, restricting network access or isolating a workload. Closure
                should require verification of the deployed fix.
              </P>
              <P>
                For ransomware, development controls help where the entry path involves vulnerable
                software or compromised updates. Wider resilience also requires protected
                administrative identities, segmentation, endpoint controls and backups isolated
                from routine production authority.
              </P>
              <P>
                Recovery testing must demonstrate that essential services can be restored within
                required times, that backup deletion is restricted and that recovered environments
                do not simply reintroduce compromised credentials. A successful restore can reduce
                disruption. It cannot reverse data already stolen.
              </P>

              <H id="validation">Validation must demonstrate refusal as well as success</H>
              <P>
                The most valuable assurance tests often attempt actions that should be impossible.
              </P>
              <P>
                Can a developer deploy an unsigned artefact? Can a build job request another
                environment’s secrets? Can one compromised identity both weaken a release rule and
                approve the resulting release? Can an administrator erase the only evidence of an
                override?
              </P>
              <P>
                Testing should use controlled environments, synthetic secrets and agreed
                boundaries. It should cover configuration changes and policy drift as well as the
                initial implementation.
              </P>
              <P>
                Evidence should include the attempted action, the expected restriction, the
                observed result and any corrective work. Logs should be retained outside the
                administrative boundary of the system being assessed.
              </P>
              <P>
                Independence matters because the people operating a control may share assumptions
                about how it works. A reviewer should be able to reproduce material results and
                challenge exceptions. Automation can collect evidence continuously. Human judgment
                remains necessary to assess whether the policy itself is adequate and whether
                exceptions create unacceptable exposure.
              </P>

              <H id="operational">Making code trust assurance operational</H>
              <P>
                Organisations can begin by identifying their most consequential trust transitions:
                source to build, build to registry, registry to production, workload to secret
                store and administrator to security policy.
              </P>
              <P>
                For each transition, they should define the permitted action, identity, evidence
                and enforcement mechanism. They should then test whether an attacker controlling
                one side can bypass the restriction.
              </P>
              <P>
                Useful measures include the proportion of production deployments subject to
                enforced verification, the number of persistent privileged credentials, time to
                revoke an exposed secret, coverage of tenant-isolation tests and success rates for
                restoration exercises.
              </P>
              <P>
                Exceptions require owners, expiry dates and compensating controls. A permanent
                bypass gradually becomes part of the normal operating model.
              </P>
              <P>
                The incidents examined here show why the security of a trusted system must include
                what happens when its trust is abused. Secure development reduces the introduction
                of weaknesses. Cyber hygiene reduces exploitable exposure. Technical enforcement
                restricts what a compromised identity or component can do. Independent validation
                establishes whether those restrictions hold.
              </P>
              <P>
                Together, these practices could have blocked particular steps in the documented
                attack chains and reduced the reach of others. The defensible promise is measurable
                reduction in exposure and impact, supported by evidence about the controls that
                protect each critical boundary.
              </P>

              {/* How the framework maps to this */}
              <div className="mt-14 rounded-[calc(var(--radius-brand)+4px)] border border-line bg-grey p-7 md:p-8">
                <h2 className="font-display text-xl font-bold text-navy">
                  Where the framework formalises this
                </h2>
                <p className="mt-3 text-[1.0625rem] leading-[1.7] text-slate">
                  Every control discussed above corresponds to a scored requirement in the{" "}
                  {site.fullName} (NS-CTAF). The framework turns these judgments into evidence and
                  a number.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    { d: "D1 · Identity & Provenance", t: "Developer and machine identity, signing, attribution." },
                    { d: "D2 · Integrity & Immutability", t: "Artefact integrity, provenance verification, tamper evidence." },
                    { d: "D3 · Secure Development", t: "Pipeline protection, review enforcement, privilege separation." },
                    { d: "D4 · Dependency & Supply Chain", t: "Package approval, isolation, integrity locking." },
                    { d: "D5 · Runtime Behaviour", t: "Least privilege, egress control, drift detection." },
                    { d: "D6 · Governance", t: "Exceptions, ownership, independent validation." },
                  ].map((x) => (
                    <div
                      key={x.d}
                      className="rounded-[var(--radius-brand)] border border-line bg-white p-5"
                    >
                      <div className="font-display text-sm font-bold text-navy">{x.d}</div>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate">{x.t}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button href="/framework" variant="primary">
                    Explore the framework <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button href="/contact" variant="outline">
                    Get assessed
                  </Button>
                </div>
              </div>

              <p className="mt-10 border-t border-line pt-6 text-sm leading-relaxed text-slate">
                Incident descriptions in this article are drawn from the affected organisations’ own
                disclosures and published security research. They are summarised to illustrate
                control design, not to characterise any organisation’s overall security posture.
              </p>
            </article>

            <div className="hidden lg:block" />
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Find out which of these boundaries hold in your own pipeline."
        intro="An assessment tests the controls above and scores them against evidence."
      />
    </>
  );
}
