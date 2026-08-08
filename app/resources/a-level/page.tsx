import type { Metadata } from "next";
import { SiteShell } from "../../../components/SiteShell";
import { UploadedResources } from "../../../components/UploadedResources";

export const metadata: Metadata = { title: "A-Level Biology Resources", description: "A-Level Biology learning resources and official Uganda curriculum starting points." };

export default function ALevelResources() {
  return (
    <SiteShell><main id="main-content">
      <header className="page-hero shell compact-hero"><p className="eyebrow">Resource library / A-Level</p><h1>Study for depth,<br /><em>not just recall.</em></h1><p className="page-lede">A place for Uganda A-Level Biology learners to organise the curriculum, practise data interpretation and connect familiar topics to modern biological science.</p></header>
      <section className="section shell">
        <div className="two-column-resource"><div><p className="eyebrow">Official sources</p><h2>Start with the current NCDC documents.</h2><p>Uganda&apos;s competency-based Advanced Secondary Biology syllabus and the 2026 assessment framework are now linked directly below. Use these before third-party notes so your practice matches the intended learning outcomes and assessment approach.</p></div><aside className="study-lens"><span>STUDY LENS</span><h3>For every topic, ask three questions.</h3><ol><li>What is the biological mechanism?</li><li>What evidence would support it?</li><li>How could an examiner change the context?</li></ol></aside></div>
        <div className="resource-list official-resource-list">
          <a href="https://ncdc.go.ug/wp-content/uploads/2025/03/Biology.pdf" target="_blank" rel="noreferrer"><span className="resource-type">NCDC · PDF</span><div><h3>Advanced Secondary Biology Syllabus</h3><p>The official competency-based Senior Five and Senior Six Biology syllabus from NCDC.</p></div><strong>Open ↗</strong></a>
          <a href="https://ncdc.go.ug/wp-content/uploads/2026/07/Biology-Assessment-Guidelines_Final-edit-13.05.2026_Web-file.pdf" target="_blank" rel="noreferrer"><span className="resource-type">NCDC · 2026</span><div><h3>Biology Assessment Guidelines</h3><p>The subject-specific guide to Biology constructs, assessment objectives, paper structure, rubrics and performance levels. Essential reading before writing scenario-based practice.</p></div><strong>Open ↗</strong></a>
          <a href="https://ncdc.go.ug/wp-content/uploads/2026/07/ASSESSMENT-FRAMEWORK-FOR-ADVANCED-SECONDARY-CURRICULUM-2026_Web-file.pdf" target="_blank" rel="noreferrer"><span className="resource-type">NCDC · 2026</span><div><h3>Advanced Secondary Assessment Framework</h3><p>Official guidance on constructs, contextualised problems, scenario-based assessment and scoring under the competency-based curriculum.</p></div><strong>Open ↗</strong></a>
          <a href="https://ncdc.go.ug/books/" target="_blank" rel="noreferrer"><span className="resource-type">NCDC · WEB</span><div><h3>NCDC books & curriculum catalogue</h3><p>Use the official catalogue to check for newer editions, related learning materials and future revisions.</p></div><strong>Browse ↗</strong></a>
        </div>
      </section>
      <section className="section page-section soft-section"><div className="shell"><div className="section-heading"><p className="eyebrow">Collection roadmap</p><h2>The first packs to build.</h2></div><div className="placeholder-grid"><article><span>PLANNED</span><h3>Cell & molecular biology</h3><p>Data-led questions on membranes, enzymes, nucleic acids, respiration and photosynthesis.</p></article><article><span>PLANNED</span><h3>Genetics & evolution</h3><p>Pedigrees, probability, selection, variation and evidence-based interpretation.</p></article><article><span>PLANNED</span><h3>Ecology & physiology</h3><p>Uganda-relevant contexts that connect field observations to quantitative reasoning.</p></article></div></div></section>
      <section className="section shell"><div className="section-heading"><p className="eyebrow">Robert's uploads</p><h2>Published from the resource folder.</h2><p>Files added to the A-Level folder are indexed automatically at deployment.</p></div><UploadedResources collection="a-level" /></section>
    </main></SiteShell>
  );
}
