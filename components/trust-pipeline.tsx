import { Fingerprint, FileSignature, Boxes, Radar, Landmark, Check, ShieldCheck } from "lucide-react";

// The software lifecycle as a chain of trust boundaries. Each stage verifies in
// sequence and the signal travels down the spine. Pure CSS — the final state is
// a fully verified chain, so it reads correctly even if animation never runs.
const STAGES = [
  { icon: Fingerprint, label: "Developer identity", note: "Verified & attributed" },
  { icon: FileSignature, label: "Commit & build", note: "Signed provenance" },
  { icon: ShieldCheck, label: "Artifact integrity", note: "Tamper-evident" },
  { icon: Boxes, label: "Dependencies", note: "Origin verified" },
  { icon: Radar, label: "Runtime behaviour", note: "Continuously watched" },
  { icon: Landmark, label: "Governance", note: "Owned & evidenced" },
];

export function TrustPipeline() {
  return (
    <div className="relative">
      <div className="mb-5 flex items-center justify-between">
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-soft/70">
          The chain of trust
        </span>
        <span className="rounded-full bg-white/[0.07] px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-blue-soft/70">
          6 domains
        </span>
      </div>

      <div className="pipe-spine relative space-y-2.5 pl-6">
        {/* Static spine the animated signal travels down */}
        <span
          aria-hidden
          className="absolute inset-y-0 left-0 w-0.5 rounded-full bg-white/10"
        />
        {STAGES.map((s, i) => (
          <div
            key={s.label}
            className="pipe-node flex items-center gap-3 rounded-xl border border-blue-bright/40 bg-blue-bright/10 px-3.5 py-2.5"
            style={{ animationDelay: `${i * 0.55}s` }}
          >
            <s.icon className="h-4 w-4 shrink-0 text-blue-soft/90" />
            <div className="min-w-0 flex-1">
              <div className="truncate text-[13px] font-semibold text-white">{s.label}</div>
              <div className="truncate text-[11px] text-blue-soft/80">{s.note}</div>
            </div>
            <span
              className="pipe-check flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-status-active/20"
              style={{ animationDelay: `${i * 0.55}s` }}
            >
              <Check className="h-3 w-3 text-status-active" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
