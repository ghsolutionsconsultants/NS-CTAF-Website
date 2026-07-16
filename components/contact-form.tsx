"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { ctaLevels } from "@/data/certification";

// To make the form send real emails on static hosting, paste a form-service
// endpoint here (e.g. Web3Forms https://api.web3forms.com/submit or a Formspree
// URL). Leave empty to run in demo mode (client-side confirmation only).
const FORM_ENDPOINT = "";

type State =
  | { s: "idle" }
  | { s: "loading" }
  | { s: "ok"; message: string; reference: string }
  | { s: "error"; message: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [state, setState] = useState<State>({ s: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    if (!data.name?.trim() || !data.company?.trim() || !EMAIL_RE.test(data.email ?? "")) {
      setState({ s: "error", message: "Please provide your name, a valid email, and your company." });
      return;
    }

    setState({ s: "loading" });
    const reference = `NS-LEAD-${Date.now().toString(36).toUpperCase()}`;

    if (FORM_ENDPOINT) {
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ ...data, reference, subject: "New NS-CTAF assessment request" }),
        });
        if (!res.ok) throw new Error();
      } catch {
        setState({ s: "error", message: "Network error — please email us instead." });
        return;
      }
    } else {
      // Demo mode — simulate processing latency.
      await new Promise((r) => setTimeout(r, 400));
    }

    setState({
      s: "ok",
      message: "Thank you — our team will be in touch within one business day.",
      reference,
    });
    form.reset();
  }

  if (state.s === "ok") {
    return (
      <div className="rounded-[var(--radius-brand)] border border-status-active/40 bg-status-active/5 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-status-active" />
        <h3 className="mt-4 font-display text-xl font-bold text-navy">Request received</h3>
        <p className="mt-2 text-sm text-slate">{state.message}</p>
        <p className="mt-4 font-mono text-xs text-slate">Reference: {state.reference}</p>
        <button
          onClick={() => setState({ s: "idle" })}
          className="mt-6 rounded-full border border-line px-5 py-2 text-sm font-medium text-ink hover:border-blue hover:text-blue"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[var(--radius-brand)] border border-line bg-white p-6 md:p-8 shadow-[var(--shadow-brand-sm)]">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" placeholder="Jane Doe" required />
        <Field label="Work email" name="email" type="email" placeholder="jane@company.com" required />
        <Field label="Company" name="company" placeholder="Company name" required />
        <Field label="Role" name="role" placeholder="CISO, Head of Engineering…" />
        <label className="block sm:col-span-1">
          <span className="mb-1.5 block text-sm font-semibold text-navy">Target CTA level</span>
          <select
            name="targetLevel"
            defaultValue=""
            className="w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/15"
          >
            <option value="">Not sure yet</option>
            {ctaLevels.map((l) => (
              <option key={l.id} value={l.id}>
                {l.id} · {l.name}
              </option>
            ))}
          </select>
        </label>
        <Field label="Country" name="country" placeholder="Country" />
      </div>
      <label className="mt-5 block">
        <span className="mb-1.5 block text-sm font-semibold text-navy">What would you like to assess?</span>
        <textarea
          name="message"
          rows={4}
          placeholder="Briefly describe your repositories, pipelines, products, and any regulatory drivers…"
          className="w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/15"
        />
      </label>

      {state.s === "error" && (
        <div className="mt-4 flex items-center gap-2 rounded-lg border border-status-expired/40 bg-status-expired/5 px-4 py-3 text-sm text-status-expired">
          <AlertCircle className="h-4 w-4" /> {state.message}
        </div>
      )}

      <button
        type="submit"
        disabled={state.s === "loading"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange px-6 py-3.5 text-base font-medium text-white shadow-[0_10px_30px_rgba(244,128,30,0.28)] transition hover:brightness-105 disabled:opacity-60 sm:w-auto"
      >
        {state.s === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Submitting…
          </>
        ) : (
          "Request assessment"
        )}
      </button>
      <p className="mt-3 text-xs text-slate">
        By submitting you agree to be contacted about a NS-CTAF assessment. We never share your details.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-navy">
        {label} {required && <span className="text-orange">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/15"
      />
    </label>
  );
}
