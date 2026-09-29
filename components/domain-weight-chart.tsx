import { domains } from "@/data/framework";

// Pure-SVG donut of the six domain weights. The final geometry is the default
// rendered state; the sweep-in is a CSS-only enhancement, so the chart is
// always correct even if animations never run.
const COLORS = [
  "var(--color-blue-bright)",
  "var(--color-blue)",
  "var(--color-orange)",
  "#0a3aa0",
  "#1fb5a0",
  "var(--color-slate)",
];

export function DomainWeightChart({ size = 260 }: { size?: number }) {
  const stroke = 30;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;

  let offset = 0;
  const segments = domains.map((d, i) => {
    const len = (d.weight / 100) * c;
    const seg = { d, color: COLORS[i], len, gap: c - len, rotate: (offset / c) * 360 };
    offset += len;
    return seg;
  });

  return (
    <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-10">
      <div className="relative shrink-0" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          role="img"
          aria-label="Domain weights: D1 18%, D2 18%, D3 22%, D4 20%, D5 14%, D6 8%"
        >
          <style>{`
            @keyframes donut-in { from { stroke-dasharray: 0 ${c}; } }
            .donut-seg { animation: donut-in 1.1s cubic-bezier(0.22,1,0.36,1) both; }
            @media (prefers-reduced-motion: reduce) { .donut-seg { animation: none; } }
          `}</style>
          <g transform={`translate(${size / 2} ${size / 2}) rotate(-90)`}>
            {segments.map((s, i) => (
              <circle
                key={s.d.id}
                className="donut-seg"
                r={r}
                fill="none"
                stroke={s.color}
                strokeWidth={stroke}
                strokeDasharray={`${s.len} ${s.gap}`}
                transform={`rotate(${s.rotate})`}
                style={{ animationDelay: `${i * 90}ms` }}
              />
            ))}
          </g>
        </svg>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="tabular font-display text-3xl font-bold leading-none text-navy">86</span>
          <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate">
            Controls
          </span>
        </div>
      </div>

      <ul className="w-full space-y-2.5">
        {segments.map((s) => (
          <li key={s.d.id} className="flex items-center gap-3">
            <span
              className="h-2.5 w-2.5 shrink-0 rounded-full"
              style={{ background: s.color }}
            />
            <span className="tabular w-7 shrink-0 font-mono text-[11px] font-semibold text-slate">
              {s.d.id}
            </span>
            <span className="flex-1 truncate text-sm text-ink">{s.d.title}</span>
            <span className="tabular shrink-0 font-display text-sm font-bold text-navy">
              {s.d.weight}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
