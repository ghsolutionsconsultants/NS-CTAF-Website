import { Fingerprint } from "lucide-react";
import { TrustScoreGauge } from "./trust-score-gauge";

const CONSOLE = [
  { txt: "verify --artifact paxley-core@4.2.1", cmd: true },
  { txt: "signature · provenance · SBOM verified" },
  { txt: "runtime baseline nominal · no drift" },
];

const LADDER = ["CTA-1", "CTA-2", "CTA-3", "CTA-4"];
const ACHIEVED = 3;

/** Compact specimen card for the hero: one card, not a column of panels. */
export function HeroDashboard() {
  return (
    <div className="rounded-[calc(var(--radius-brand)+6px)] border border-white/[0.16] bg-[#07172c]/95 p-5 shadow-[0_28px_70px_rgba(0,0,0,0.45)]">
      <div className="flex items-center justify-between gap-3">
        <span className="flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-soft">
          <Fingerprint className="h-3.5 w-3.5 shrink-0 text-orange" />
          Specimen · Paxley Software
        </span>
        <span className="flex items-center gap-1.5">
          <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-[#34d399]" />
          <span className="font-mono text-[10px] font-semibold text-[#34d399]">verified</span>
        </span>
      </div>

      {/* Score */}
      <div className="mt-4 rounded-2xl bg-white p-4">
        <div className="flex justify-center">
          <TrustScoreGauge score={84} size={178} />
        </div>
      </div>

      {/* Live verification — three lines, typed out */}
      <div className="mt-4 space-y-1 overflow-hidden rounded-xl bg-black/30 p-3 font-mono text-[10.5px] leading-relaxed">
        {CONSOLE.map((l, i) => (
          <div key={l.txt} className="term-line" style={{ animationDelay: `${0.15 + i * 0.3}s` }}>
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
      </div>

      {/* Certification ladder */}
      <div className="mt-4 grid grid-cols-4 gap-1.5">
        {LADDER.map((id, i) => {
          const current = i === ACHIEVED;
          return (
            <div
              key={id}
              className={`rung rounded-lg border py-1.5 text-center font-display text-[10px] font-bold ${
                current
                  ? "border-orange bg-orange text-navy"
                  : i < ACHIEVED
                    ? "border-white/25 bg-white/12 text-white"
                    : "border-white/12 text-blue-soft/80"
              }`}
              style={{ animationDelay: `${0.35 + i * 0.1}s` }}
            >
              {id}
            </div>
          );
        })}
      </div>
    </div>
  );
}
