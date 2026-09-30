import { Terminal, Activity, BadgeCheck } from "lucide-react";
import { TrustScoreGauge } from "./trust-score-gauge";
import { TrustPipeline } from "./trust-pipeline";
import { domains } from "@/data/framework";

const CONSOLE = [
  { txt: "verify --artifact paxley-core@4.2.1", cmd: true },
  { txt: "signature valid · sigstore keyless" },
  { txt: "provenance attested · SLSA Build L3" },
  { txt: "SBOM matched · 0 dependency drift" },
  { txt: "runtime baseline nominal · no drift" },
];

const LADDER = [
  { id: "CTA-1", name: "Foundational" },
  { id: "CTA-2", name: "Managed" },
  { id: "CTA-3", name: "Verified" },
  { id: "CTA-4", name: "Adaptive" },
];

const ACHIEVED = 3; // index of CTA-4

export function HeroDashboard() {
  return (
    <div className="relative space-y-4">
      {/* Live verification console */}
      <div className="glow-border rounded-[calc(var(--radius-brand)+4px)] border border-white/[0.16] bg-[#061223]/95 p-5 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
        <div className="flex items-center gap-2 border-b border-white/12 pb-3">
          <Terminal className="h-3.5 w-3.5 shrink-0 text-orange" />
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-soft">
            Live verification
          </span>
          <span className="ml-auto flex items-center gap-1.5">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-[#34d399]" />
            <span className="font-mono text-[10px] font-semibold text-[#34d399]">passing</span>
          </span>
        </div>
        <div className="mt-3 space-y-1.5 overflow-hidden font-mono text-[11px] leading-relaxed">
          {CONSOLE.map((l, i) => (
            <div key={l.txt} className="term-line" style={{ animationDelay: `${0.15 + i * 0.28}s` }}>
              {l.cmd ? (
                <span className="text-white">
                  <span className="text-orange">$</span> {l.txt}
                </span>
              ) : (
                <span className="text-blue-soft/90">
                  <span className="text-[#34d399]">✔</span> {l.txt}
                </span>
              )}
            </div>
          ))}
          <div className="term-line" style={{ animationDelay: "1.55s" }}>
            <span className="text-orange">→</span>{" "}
            <span className="font-semibold text-white">Trust Score 84 · CTA-4 Adaptive Trust</span>
            <span className="term-cursor ml-1 inline-block h-3 w-1.5 translate-y-0.5 bg-orange" />
          </div>
        </div>
      </div>

      {/* Certification ladder */}
      <div className="rounded-[calc(var(--radius-brand)+4px)] border border-white/[0.16] bg-[#0e2143]/90 p-5">
        <div className="flex items-center gap-2">
          <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-orange" />
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-soft">
            Certification ladder
          </span>
        </div>
        <div className="mt-3.5 grid grid-cols-4 gap-2">
          {LADDER.map((l, i) => {
            const reached = i <= ACHIEVED;
            const current = i === ACHIEVED;
            return (
              <div
                key={l.id}
                className={`rung rounded-xl border px-2 py-2.5 text-center ${
                  current
                    ? "border-orange bg-orange text-navy shadow-[var(--shadow-orange)]"
                    : reached
                      ? "border-white/25 bg-white/12 text-white"
                      : "border-white/12 bg-transparent text-blue-soft/80"
                }`}
                style={{ animationDelay: `${0.35 + i * 0.13}s` }}
              >
                <div className="font-display text-[11px] font-bold leading-none">{l.id}</div>
                <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.1em] opacity-90">
                  {l.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Score + domain mix */}
      <div className="grid gap-4 sm:grid-cols-[0.95fr_1.05fr]">
        <div className="relative overflow-hidden rounded-[calc(var(--radius-brand)+4px)] border border-white/[0.16] bg-white p-4 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
          <span
            aria-hidden
            className="spin-slow pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full border-[6px] border-dashed border-blue/15"
          />
          <div className="relative flex justify-center">
            <TrustScoreGauge score={84} size={168} />
          </div>
        </div>

        <div className="rounded-[calc(var(--radius-brand)+4px)] border border-white/[0.16] bg-[#0e2143]/90 p-5">
          <div className="flex items-center gap-2">
            <Activity className="h-3.5 w-3.5 shrink-0 text-orange" />
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-soft">
              Domain mix
            </span>
          </div>
          <div className="mt-4 space-y-2.5">
            {domains.map((d, i) => (
              <div key={d.id} className="flex items-center gap-2.5">
                <span className="tabular w-6 shrink-0 font-mono text-[10px] font-semibold text-blue-soft">
                  {d.id}
                </span>
                <span className="h-1.5 min-w-0 flex-1 overflow-hidden rounded-full bg-white/15">
                  <span
                    className="bar-fill block h-full rounded-full bg-gradient-to-r from-blue-bright to-orange"
                    style={{
                      width: `${(d.weight / 22) * 100}%`,
                      animationDelay: `${0.45 + i * 0.1}s`,
                    }}
                  />
                </span>
                <span className="tabular w-9 shrink-0 text-right font-display text-[11px] font-bold text-white">
                  {d.weight}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chain of trust */}
      <div className="rounded-[calc(var(--radius-brand)+4px)] border border-white/[0.16] bg-[#0e2143]/90 p-5">
        <TrustPipeline />
      </div>
    </div>
  );
}
