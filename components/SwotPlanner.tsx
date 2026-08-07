"use client";

import { useState } from "react";

type SwotKey = "strengths" | "weaknesses" | "opportunities" | "threats";

const prompts: Record<SwotKey, { label: string; hint: string; example: string }> = {
  strengths: {
    label: "Strengths",
    hint: "What can you already prove you do well?",
    example: "Example: strong microscopy practicals; reliable study routine; good science writing.",
  },
  weaknesses: {
    label: "Weaknesses",
    hint: "Which internal gaps are slowing you down?",
    example: "Example: limited R/Python practice; no polished CV; weak statistics confidence.",
  },
  opportunities: {
    label: "Opportunities",
    hint: "Which external openings can you act on soon?",
    example: "Example: departmental seminar; scholarship call; open dataset; Society training.",
  },
  threats: {
    label: "Threats",
    hint: "Which external constraints need a backup plan?",
    example: "Example: application costs; unreliable internet; deadline clashes; limited lab access.",
  },
};

export function SwotPlanner() {
  const [values, setValues] = useState<Record<SwotKey, string>>({
    strengths: "",
    weaknesses: "",
    opportunities: "",
    threats: "",
  });
  const [copied, setCopied] = useState(false);

  async function copyPlan() {
    const summary = (Object.keys(prompts) as SwotKey[])
      .map((key) => `${prompts[key].label.toUpperCase()}\n${values[key] || "—"}`)
      .join("\n\n");
    try {
      await navigator.clipboard.writeText(`MY BIOSCIENCE SWOT\n\n${summary}`);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.print();
    }
  }

  return (
    <section className="swot-tool" aria-labelledby="swot-tool-title">
      <div className="tool-heading">
        <div>
          <p className="eyebrow">Interactive worksheet</p>
          <h2 id="swot-tool-title">Build your own SWOT.</h2>
        </div>
        <button className="button button-primary" type="button" onClick={copyPlan}>
          {copied ? "Copied" : "Copy my SWOT"}
        </button>
      </div>
      <div className="swot-grid">
        {(Object.keys(prompts) as SwotKey[]).map((key) => (
          <label className={`swot-cell swot-${key}`} key={key}>
            <span className="swot-label">{prompts[key].label}</span>
            <span className="swot-hint">{prompts[key].hint}</span>
            <textarea
              value={values[key]}
              onChange={(event) => setValues((current) => ({ ...current, [key]: event.target.value }))}
              placeholder={prompts[key].example}
              rows={6}
            />
          </label>
        ))}
      </div>
      <p className="tool-note">Nothing entered here is uploaded or stored by this website. Copy your plan before leaving the page.</p>
    </section>
  );
}
