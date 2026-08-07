import type { Metadata } from "next";
import { SiteShell } from "../../../components/SiteShell";
import { UploadedResources } from "../../../components/UploadedResources";

export const metadata: Metadata = { title: "Student Project Studio", description: "Affordable biology project ideas for secondary and early university students." };

const projects = [
  ["Water clarity & simple filtration", "Low cost", "Compare locally available filter materials while measuring turbidity consistently. Keep drinking-water safety claims out unless you have microbiological testing."],
  ["School biodiversity transect", "Low cost", "Map plant or invertebrate richness across two school microhabitats; standardise transect length, time and sampling effort."],
  ["Yeast fermentation variables", "Low cost", "Test one variable—temperature or substrate concentration—and quantify gas production with the same setup across treatments."],
  ["Seed germination under water stress", "Low cost", "Compare germination percentage and root growth across defined water treatments with adequate replicates."],
  ["Mosquito habitat mapping", "Low–medium", "Survey standing-water habitats without handling adult mosquitoes; map habitat type and risk-reduction actions."],
  ["School-garden microclimate", "Medium", "Measure shade, temperature, soil moisture and plant performance to ask a small ecological question over time."],
];

export default function ProjectsResources() {
  return (
    <SiteShell><main>
      <header className="page-hero shell compact-hero"><p className="eyebrow">Resource library / Project studio</p><h1>Small question.<br /><em>Clean experiment.</em></h1><p className="page-lede">Good school projects do not need expensive equipment. They need a focused question, one defensible comparison, honest measurements and a conclusion that stays inside the evidence.</p></header>
      <section className="section shell"><div className="project-idea-grid">{projects.map(([title, cost, text], index) => <article key={title}><div><span>{String(index + 1).padStart(2, "0")}</span><span>{cost}</span></div><h2>{title}</h2><p>{text}</p><a href="mailto:contact@alulerobert.me?subject=Student%20project%20question">Discuss an adaptation →</a></article>)}</div></section>
      <section className="section page-section soft-section"><div className="shell"><div className="section-heading"><p className="eyebrow">Project downloads</p><h2>Robert's published project files.</h2><p>Templates and project sheets added to the project folder appear here on the next deployment.</p></div><UploadedResources collection="student-projects" /></div></section>
      <section className="student-guide-band"><div className="shell guide-band-inner"><div><p className="eyebrow">A useful rule</p><h2>Do not start with the title.</h2><p>Start with what you can measure reliably. Then write the question, choose a comparison, decide the analysis and only then give the project a title.</p></div><a className="button button-dark" href="/student-guide">Use the student guide →</a></div></section>
    </main></SiteShell>
  );
}
