import { promises as fs } from "node:fs";
import path from "node:path";

const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
  console.log("OPENAI_API_KEY is not configured; skipping the optional opportunity scout.");
  process.exit(0);
}

const allowedHosts = [
  "daad.de",
  "mak.ac.ug",
  "air.ug",
  "biochemistry.org",
  "twas.org",
  "must.ac.ug",
  "muni.ac.ug",
  "gu.ac.ug",
  "kyu.ac.ug",
  "uncst.go.ug",
  "health.go.ug",
  "education.go.ug",
  "who.int",
  "wellcome.org",
];

const existingPath = path.resolve("data/opportunities.json");
const existing = JSON.parse(await fs.readFile(existingPath, "utf8"));
const today = new Date().toISOString().slice(0, 10);

const schema = {
  type: "object",
  additionalProperties: false,
  properties: {
    opportunities: {
      type: "array",
      maxItems: 12,
      items: {
        type: "object",
        additionalProperties: false,
        properties: {
          title: { type: "string" },
          provider: { type: "string" },
          region: { type: "string", enum: ["Uganda", "Africa", "International"] },
          level: { type: "string", enum: ["Undergraduate", "Masters", "PhD", "All levels"] },
          status: { type: "string", enum: ["Open", "Closing soon", "Watchlist", "Funding hub"] },
          deadline: { type: "string" },
          note: { type: "string" },
          href: { type: "string" },
        },
        required: ["title", "provider", "region", "level", "status", "deadline", "note", "href"],
      },
    },
  },
  required: ["opportunities"],
};

const response = await fetch("https://api.openai.com/v1/responses", {
  method: "POST",
  headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
  body: JSON.stringify({
    model: "gpt-5.6-luna",
    tools: [{ type: "web_search" }],
    input: `Today is ${today}. Review biological-sciences scholarships, research training, fellowships and funding relevant especially to Ugandan students, then Africa and international developing-country applicants. Use only official institutional sources whose host is on this allowlist: ${allowedHosts.join(", ")}. Preserve useful evergreen funding hubs. Never invent a deadline. Mark a dated call Open only if the official source demonstrates it is currently open; use Closing soon only for a verified deadline within 14 days. Otherwise prefer Watchlist or Funding hub. Return a maximum of 12 high-value listings. Existing editorial list for context: ${JSON.stringify(existing)}`,
    text: { format: { type: "json_schema", name: "opportunity_list", strict: true, schema } },
  }),
});

if (!response.ok) {
  throw new Error(`OpenAI Responses API returned ${response.status}: ${await response.text()}`);
}

const payload = await response.json();
const outputText = payload.output_text ?? payload.output?.flatMap((item) => item.content ?? []).find((item) => item.type === "output_text")?.text;
if (!outputText) throw new Error("The scout returned no structured output text.");

const parsed = JSON.parse(outputText);
const safe = parsed.opportunities.filter((item) => {
  try {
    const host = new URL(item.href).hostname.toLowerCase();
    return allowedHosts.some((allowed) => host === allowed || host.endsWith(`.${allowed}`));
  } catch {
    return false;
  }
});

if (safe.length === 0) throw new Error("Scout returned no URLs on the official-domain allowlist; leaving editorial data unchanged.");
await fs.writeFile(existingPath, `${JSON.stringify(safe, null, 2)}\n`);
console.log(`Opportunity scout produced ${safe.length} allowlisted candidate listing(s). Human review is required before merge.`);
