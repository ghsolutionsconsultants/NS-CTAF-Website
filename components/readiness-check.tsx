"use client";

import { useState } from "react";
import { Check, X, RotateCcw } from "lucide-react";
import { fiveQuestions } from "@/data/framework-detail";

type Answer = "yes" | "no" | null;

const BANDS = [
  { min: 0, label: "Unproven", note: "You cannot currently evidence code trust. Start with identity and build provenance.", tone: "var(--color-status-expired)" },
  { min: 1, label: "Emerging", note: "Some controls exist, but the chain breaks before it can be independently verified.", tone: "var(--color-status-suspended)" },
  { min: 3, label: "Developing", note: "A real foundation. The gap is continuity and independent validation.", tone: "var(--color-blue-bright)" },
  { min: 4, label: "Defensible", note: "Close to assurable. A formal assessment would confirm and quantify it.", tone: "var(--color-blue)" },
  { min: 5, label: "Assurable", note: "You can likely evidence trust end to end. Certification turns that into a public signal.", tone: "var(--color-status-active)" },
];

export function ReadinessCheck() {
  const [answers, setAnswers] = useState<Answer[]>(Array(fiveQuestions.length).fill(null));

  const yes = answers.filter((a) => a === "yes").length;
  const answered = answers.filter((a) => a !== null).length;
  const band = [...BANDS].reverse().find((b) => yes >= b.min)!;
  const pct = (yes / fiveQuestions.length) * 100;

  const set = (i: number, v: Answer) =>
    setAnswers((prev) => prev.map((a, j) => (j === i ? (a === v ? null : v) : a)));

  return (
    <div className="rounded-[calc(var(--radius-brand)+4px)] border border-white/12 bg-[#0e2143]/90 p-6 md:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="font-display text-lg font-bold !text-white">
          Answer them for your own organisation
        </h3>
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-soft">
          {answered} of {fiveQuestions.length} answered
        </span>
      </div>

      <ul className="mt-6 space-y-2.5">
        {fiveQuestions.map((q, i) => {
          const a = answers[i];
          return (
            <li
              key={q}
              className={`flex flex-col gap-3 rounded-[var(--radius-brand)] border p-4 transition-colors duration-300 sm:flex-row sm:items-center ${
                a === "yes"
                  ? "border-status-active/50 bg-status-active/10"
                  : a === "no"
                    ? "border-orange/40 bg-orange/10"
                    : "border-white/12 bg-white/[0.04]"
              }`}
            >
              <p className="flex-1 text-sm leading-relaxed text-blue-soft/90">{q}</p>
              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  onClick={() => set(i, "yes")}
                  aria-pressed={a === "yes"}
                  className={`inline-flex h-9 items-center gap-1.5 rounded-full px-4 text-xs font-semibold transition-all duration-300 ${
                    a === "yes"
                      ? "bg-status-active text-white"
                      : "border border-white/25 text-white hover:border-white/50 hover:bg-white/10"
                  }`}
                >
                  <Check className="h-3.5 w-3.5" /> Yes
                </button>
                <button
                  type="button"
                  onClick={() => set(i, "no")}
                  aria-pressed={a === "no"}
                  className={`inline-flex h-9 items-center gap-1.5 rounded-full px-4 text-xs font-semibold transition-all duration-300 ${
                    a === "no"
                      ? "bg-orange text-navy"
                      : "border border-white/25 text-white hover:border-white/50 hover:bg-white/10"
                  }`}
                >
                  <X className="h-3.5 w-3.5" /> No
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Live readout */}
      <div className="mt-6 rounded-[var(--radius-brand)] border border-white/12 bg-[#071324]/80 p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-baseline gap-2.5">
            <span className="tabular font-display text-3xl font-bold !text-white">
              {yes}
              <span className="text-lg text-blue-soft/80">/{fiveQuestions.length}</span>
            </span>
            <span
              className="rounded-full px-3 py-1 font-display text-xs font-bold"
              style={{ background: band.tone, color: "#fff" }}
            >
              {band.label}
            </span>
          </div>
          {answered > 0 && (
            <button
              type="button"
              onClick={() => setAnswers(Array(fiveQuestions.length).fill(null))}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-soft/85 transition-colors hover:text-white"
            >
              <RotateCcw className="h-3.5 w-3.5" /> Reset
            </button>
          )}
        </div>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ width: `${pct}%`, background: band.tone }}
          />
        </div>
        <p className="mt-3 text-sm leading-relaxed text-blue-soft/85">{band.note}</p>
      </div>
      <p className="mt-3 text-xs text-blue-soft/80">
        Indicative only. A formal assessment scores 86 controls across six domains and five axes.
      </p>
    </div>
  );
}
