"use client";

import { motion } from "framer-motion";

// A semicircular Trust Score gauge (0–100).
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
  const cx = size / 2;
  const cy = size / 2;
  const circumference = Math.PI * r; // half circle
  const pct = Math.max(0, Math.min(100, score)) / 100;

  return (
    <div className="flex flex-col items-center" style={{ width: size }}>
      <svg width={size} height={size / 2 + 12} viewBox={`0 0 ${size} ${size / 2 + 12}`}>
        <defs>
          <linearGradient id="tsg" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1565e0" />
            <stop offset="70%" stopColor="#0b50c8" />
            <stop offset="100%" stopColor="#f4801e" />
          </linearGradient>
        </defs>
        <path
          d={`M ${stroke / 2} ${cy} A ${r} ${r} 0 0 1 ${size - stroke / 2} ${cy}`}
          fill="none"
          stroke="#e3e9f1"
          strokeWidth={stroke}
          strokeLinecap="round"
        />
        <motion.path
          d={`M ${stroke / 2} ${cy} A ${r} ${r} 0 0 1 ${size - stroke / 2} ${cy}`}
          fill="none"
          stroke="url(#tsg)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: circumference * (1 - pct) }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div className="-mt-10 text-center">
        <motion.div
          className="font-display text-4xl font-bold text-navy"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {score}
          <span className="text-lg text-slate">/100</span>
        </motion.div>
        <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate">{label}</div>
      </div>
    </div>
  );
}
