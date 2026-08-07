import type { Metadata } from "next";
import { SiteShell } from "../../components/SiteShell";

export const metadata: Metadata = { title: "CV", description: "Education, experience, skills and training — Alule Robert." };

export default function CvPage() {
  return (
    <SiteShell>
      <main>
        <header className="page-hero shell compact-hero">
          <p className="eyebrow">Curriculum vitae</p>
          <h1>Biology educator.<br /><em>Biochemistry researcher.</em></h1>
          <p className="page-lede">A concise web CV focused on research, teaching and technical development. For a formal application copy, contact me for the latest PDF.</p>
          <div className="button-row"><a className="button button-primary" href="mailto:contact@alulerobert.me?subject=CV%20request">Request current PDF CV</a><a className="button button-quiet" href="https://github.com/robertalule" target="_blank" rel="noreferrer">GitHub ↗</a></div>
        </header>

        <section className="section shell cv-layout">
          <aside className="cv-sidebar">
            <p className="eyebrow">Profile</p>
            <p>Researcher and educator of biological sciences based in Mukono, Uganda, with interests in infectious disease, systems biology and immunometabolism.</p>
            <div className="cv-contact"><a href="mailto:contact@alulerobert.me">contact@alulerobert.me</a><a href="https://orcid.org/0009-0002-9314-008X" target="_blank" rel="noreferrer">ORCID ↗</a></div>
            <p className="small-note">Last structured from the public CV: Aug 2026. Confirm dates before using for a formal application.</p>
          </aside>
          <div className="cv-main">
            <section className="cv-section"><p className="eyebrow">Education</p><div className="timeline-item"><span>2025/26—present</span><div><h2>MSc Biochemistry</h2><p>Makerere University · Department of Biochemistry & Systems Biology</p></div></div><div className="timeline-item"><span>2019—2023</span><div><h2>BSc with Education (Biological Sciences)</h2><p>Kyambogo University · Thesis on phytochemistry and antibacterial activity of <em>Platycerium coronarium</em>.</p></div></div></section>
            <section className="cv-section"><p className="eyebrow">Experience</p><div className="timeline-item"><span>Feb 2025—present</span><div><h2>Biology & Chemistry Teacher</h2><p>Seeta High School — Green Campus · Research-aligned science instruction and student project mentorship.</p></div></div><div className="timeline-item"><span>May 2022—Feb 2025</span><div><h2>Biology & Chemistry Teacher</h2><p>Our Lady of Africa S.S., Namilyango · Classroom teaching and science-seminar organisation.</p></div></div></section>
            <section className="cv-section"><p className="eyebrow">Selected training</p><div className="compact-list"><p><strong>Parasite Single-Cell OMICS Workshop</strong><span>Makerere University · 2025</span></p><p><strong>Chemical Biology</strong><span>University of Geneva · 2025</span></p><p><strong>Dynamical Modelling Methods for Systems Biology</strong><span>Icahn School of Medicine · 2025</span></p><p><strong>Biology Research Job Simulation</strong><span>LifeArc · 2024</span></p></div></section>
            <section className="cv-section"><p className="eyebrow">Technical toolkit</p><div className="skill-cloud"><span>Python / Pandas / NumPy</span><span>R — foundational</span><span>Dynamical modelling</span><span>RNA-seq workflows</span><span>Protein extraction</span><span>Antibacterial assays</span><span>Spectrophotometry</span><span>Microscopy</span></div></section>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
