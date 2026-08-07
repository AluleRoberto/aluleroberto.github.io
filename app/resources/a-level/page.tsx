import type { Metadata } from "next";
import { SiteShell } from "../../../components/SiteShell";
import { UploadedResources } from "../../../components/UploadedResources";

export const metadata: Metadata = { title: "A-Level Biology Resources", description: "A-Level Biology learning resources and official Uganda curriculum starting points." };

export default function ALevelResources() {
  return (
    <SiteShell><main>
      <header className="page-hero shell compact-hero"><p className="eyebrow">Resource library / A-Level</p><h1>Study for depth,<br /><em>not just recall.</em></h1><p className="page-lede">A place for Uganda A-Level Biology learners to organise the curriculum, practise data interpretation and connect familiar topics to modern biological science.</p></header>
      <section className="section shell"><div className="two-column-resource"><div><p className="eyebrow">Official source</p><h2>NCDC curriculum library</h2><p>NCDC's books and curriculum area is the safest starting point for the current Advanced Secondary syllabus and official materials. Because curricula are revised, use the official catalogue rather than an old reposted PDF.</p><a className="button button-primary" href="https://ncdc.go.ug/books/" target="_blank" rel="noreferrer">Browse NCDC books ↗</a></div><aside className="study-lens"><span>STUDY LENS</span><h3>For every topic, ask three questions.</h3><ol><li>What is the biological mechanism?</li><li>What evidence would support it?</li><li>How could an examiner change the context?</li></ol></aside></div></section>
      <section className="section page-section soft-section"><div className="shell"><div className="section-heading"><p className="eyebrow">Collection roadmap</p><h2>The first packs to build.</h2></div><div className="placeholder-grid"><article><span>PLANNED</span><h3>Cell & molecular biology</h3><p>Data-led questions on membranes, enzymes, nucleic acids, respiration and photosynthesis.</p></article><article><span>PLANNED</span><h3>Genetics & evolution</h3><p>Pedigrees, probability, selection, variation and evidence-based interpretation.</p></article><article><span>PLANNED</span><h3>Ecology & physiology</h3><p>Uganda-relevant contexts that connect field observations to quantitative reasoning.</p></article></div></div></section>
      <section className="section shell"><div className="section-heading"><p className="eyebrow">Robert's uploads</p><h2>Published from the resource folder.</h2><p>Files added to the A-Level folder are indexed automatically at deployment.</p></div><UploadedResources collection="a-level" /></section>
    </main></SiteShell>
  );
}
