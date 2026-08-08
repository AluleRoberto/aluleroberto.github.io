import type { Metadata } from "next";
import { SiteShell } from "../../../components/SiteShell";
import { UploadedResources } from "../../../components/UploadedResources";

export const metadata: Metadata = { title: "O-Level Biology Resources", description: "Uganda lower-secondary competency-based biology resources and official curriculum links." };

export default function OLevelResources() {
  return (
    <SiteShell><main id="main-content">
      <header className="page-hero shell compact-hero"><p className="eyebrow">Resource library / O-Level</p><h1>Lower-secondary Biology,<br /><em>built around competency.</em></h1><p className="page-lede">Start with the official Uganda curriculum documents, then use teacher-created practice to turn knowledge into observation, interpretation and problem solving.</p></header>
      <section className="section shell"><div className="section-heading"><p className="eyebrow">Official starting points</p><h2>Curriculum before worksheets.</h2></div><div className="resource-list">
        <a href="https://ncdc.go.ug/wp-content/uploads/2024/02/Biology_Syllabus_compressed.pdf" target="_blank" rel="noreferrer"><span className="resource-type">NCDC · PDF</span><div><h3>New Lower Secondary Biology Syllabus</h3><p>The official four-year Biology syllabus from Uganda's National Curriculum Development Centre.</p></div><strong>Open ↗</strong></a>
        <a href="https://uneb.ac.ug/2024/03/26/nlsc_sample_papers/" target="_blank" rel="noreferrer"><span className="resource-type">UNEB · WEB</span><div><h3>New Lower Secondary sample papers</h3><p>Official sample assessment material from the Uganda National Examinations Board.</p></div><strong>Open ↗</strong></a>
        <a href="https://ereg.uneb.ac.ug/files/S3TERM3BIOLOGY.pdf" target="_blank" rel="noreferrer"><span className="resource-type">UNEB · PDF</span><div><h3>S3 Term 3 Biology assessment checklist</h3><p>An official UNEB biology checklist useful for seeing how competencies are observed.</p></div><strong>Open ↗</strong></a>
        <a href="https://uneb.ac.ug/2026/02/27/circular-on-handling-of-continuous-assessment-for-s-3-s-4-2026/" target="_blank" rel="noreferrer"><span className="resource-type">UNEB · 2026</span><div><h3>S3 & S4 continuous assessment circular</h3><p>Current UNEB guidance for handling continuous assessment in 2026. Check this before planning formal school assessment.</p></div><strong>Open ↗</strong></a>
        <a href="https://uneb.ac.ug/2026/02/18/project-theme-for-s-3-2026/" target="_blank" rel="noreferrer"><span className="resource-type">UNEB · 2026</span><div><h3>Senior 3 project theme — 2026</h3><p>The official UNEB project-theme notice for Senior 3 learners in the current assessment cycle.</p></div><strong>Open ↗</strong></a>
        <a href="https://ereg.uneb.ac.ug/files/REVISEDPROJECTOBSERVATIONCHECKLIST2026-20272511.pdf" target="_blank" rel="noreferrer"><span className="resource-type">UNEB · PDF</span><div><h3>Revised project observation checklist</h3><p>UNEB's 2026 revised project-observation checklist. Verify the current version before formal use.</p></div><strong>Open ↗</strong></a>
      </div></section>
      <section className="section page-section soft-section"><div className="shell"><div className="section-heading"><p className="eyebrow">Alule learning sets</p><h2>Scenario practice will live here.</h2><p>These slots are intentionally marked as pending until Robert uploads the actual material—no invented download buttons.</p></div><div className="placeholder-grid"><article><span>COMING NEXT</span><h3>Scenario-based question sets</h3><p>Topic-tagged CBC questions with enough context to practise explanation, interpretation and decision-making.</p></article><article><span>UPLOAD-READY</span><h3>Teacher marking guides</h3><p>Paired guidance that focuses on evidence of competency, not memorised key words alone.</p></article><article><span>UPLOAD-READY</span><h3>Practical & project sheets</h3><p>Printable instructions and observation templates for manageable school investigations.</p></article></div></div></section>
      <section className="section shell"><div className="section-heading"><p className="eyebrow">Robert's uploads</p><h2>Published from the resource folder.</h2><p>Files added to the O-Level folder are indexed automatically at deployment.</p></div><UploadedResources collection="o-level" /></section>
    </main></SiteShell>
  );
}
