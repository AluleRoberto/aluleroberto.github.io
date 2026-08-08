import type { Metadata } from "next";
import { SiteShell } from "../../components/SiteShell";
import { SwotPlanner } from "../../components/SwotPlanner";

export const metadata: Metadata = { title: "Student Guide & SWOT", description: "A practical guide for Ugandan biological-sciences students: challenges, SWOT planning and a 90-day action framework." };

const frictions = [
  ["Limited access to equipment", "Design questions around what you can measure reliably; use open datasets and computational methods when wet-lab access is the real bottleneck."],
  ["Opportunities arrive fragmented", "Build a small watchlist of official institutional sources and check on a routine. Treat forwarded posters as leads, not evidence."],
  ["A degree can feel like the whole plan", "Translate courses into demonstrable skills: analysis notebooks, project reports, teaching material, posters and concise explanations."],
  ["Costs block otherwise good options", "Separate application fee, travel, tuition and living support. Prioritise calls that state funding clearly and budget before applying."],
  ["Skills are learned but not shown", "Build one public, ethical portfolio artifact at a time. A clean two-page project report can be more persuasive than a long skills list."],
  ["Scams and expired calls waste time", "Verify the organisation domain, deadline, contact details and payment route. Never pay a 'processing' intermediary for a scholarship application."],
];

export default function StudentGuidePage() {
  return (
    <SiteShell>
      <main id="main-content">
        <header className="page-hero shell student-hero">
          <div><p className="eyebrow">For biological-sciences students</p><h1>Reality check.<br /><em>Then move.</em></h1><p className="page-lede">A practical guide for turning constraints into a clearer plan—especially if you are studying in Uganda and want stronger research, postgraduate or scholarship options.</p><a className="button button-primary" href="#swot">Build my SWOT ↓</a></div>
          <figure className="guide-photo image-frame"><img loading="lazy" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Mobile_Teaching_Laboratory.jpg/960px-Mobile_Teaching_Laboratory.jpg" alt="A mobile teaching laboratory in Lwengo District, Uganda" /><figcaption>Mobile teaching laboratory, Lwengo District, Uganda · CC BY-SA 3.0</figcaption></figure>
        </header>

        <section className="section shell"><div className="section-heading"><p className="eyebrow">Common frictions</p><h2>Name the constraint, then design around it.</h2><p>These are planning prompts, not claims that every student faces the same situation.</p></div><div className="challenge-list">{frictions.map(([title, response], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{response}</p></article>)}</div></section>

        <div id="swot" className="section page-section soft-section"><div className="shell"><SwotPlanner /></div></div>

        <section className="section shell"><div className="section-heading"><p className="eyebrow">90-day plan</p><h2>Turn analysis into evidence.</h2></div><div className="ninety-grid"><article><span>WEEKS 1–2</span><h3>Audit</h3><p>Finish your SWOT. Choose one target—research experience, a scholarship, a skill or an academic project—and define what “better” means.</p></article><article><span>WEEKS 3–6</span><h3>Build</h3><p>Complete one relevant skill block and turn it into a visible artifact: analysis notebook, mini-review, lesson resource, poster or project report.</p></article><article><span>WEEKS 7–10</span><h3>Connect</h3><p>Attend a seminar, join one relevant scientific community and contact two people with specific, answerable questions.</p></article><article><span>WEEKS 11–13</span><h3>Submit & review</h3><p>Make at least one real application or submission. Record what worked, what was missing and the next iteration.</p></article></div></section>
      </main>
    </SiteShell>
  );
}
