// A semicircular Trust Score gauge (0–100).
//
// The correct value is the *default* rendered state: the arc's final
// stroke-dashoffset and the score number are always present. The sweep-in is a
// CSS-only enhancement, so the score is never blank if animations don't run.

export function TrustScoreGauge({
  score = 84,
  label = "Trust Score",
  size = 220,
}: {
  score?: number;
  label?: string;
  size?: number;
}) {
  const stroke = 16;
  const r = (size - stroke) / 2;
  const cy = size / 2;
  const circumference = Math.PI * r; // half circle
  const pct = Math.max(0, Math.min(100, score)) / 100;
  const finalOffset = circumference * (1 - pct);
  const arc = `M ${stroke / 2} ${cy} A ${r} ${r} 0 0 1 ${size - stroke / 2} ${cy}`;
  const gradientId = `tsg-${Math.round(pct * 1000)}-${size}`;

  return (
    <div className="flex flex-col items-center" style={{ width: size }}>
      <style>{`
        @keyframes tsg-sweep-${gradientId} {
          from { stroke-dashoffset: ${circumference}; }
          to { stroke-dashoffset: ${finalOffset}; }
        }
        .tsg-arc-${gradientId} {
          stroke-dasharray: ${circumference};
          stroke-dashoffset: ${finalOffset};
          animation: tsg-sweep-${gradientId} 1.4s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        @media (prefers-reduced-motion: reduce) {
          .tsg-arc-${gradientId} { animation: none; }
        }
      `}</style>
      <svg
        width={size}
        height={size / 2 + 12}
        viewBox={`0 0 ${size} ${size / 2 + 12}`}
        role="img"
        aria-label={`${label}: ${score} out of 100`}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1565e0" />
            <stop offset="70%" stopColor="#0b50c8" />
            <stop offset="100%" stopColor="#f4801e" />
          </linearGradient>
        </defs>
        <path
          d={arc}
          fill="none"
          stroke="#e3e9f1"
          strokeWidth={stroke}
          strokeLinecap="round"
        />
        <path
          className={`tsg-arc-${gradientId}`}
          d={arc}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={stroke}
          strokeLinecap="round"
        />
      </svg>
      <div className="-mt-10 text-center">
        <div className="tabular font-display text-4xl font-bold leading-none text-navy">
          {score}
          <span className="text-lg text-slate">/100</span>
        </div>
        <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate">
          {label}
        </div>
      </div>
    </div>
  );
}
