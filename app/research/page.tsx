import type { Metadata } from "next";
import { SiteShell } from "../../components/SiteShell";

export const metadata: Metadata = {
  title: "Research",
  description: "Alule Robert's research in biochemistry, host-pathogen biology, modelling and medicinal plants.",
};

export default function ResearchPage() {
  return (
    <SiteShell>
      <main>
        <header className="page-hero shell">
          <p className="eyebrow">Research · Biochemistry · Systems biology</p>
          <h1>Questions first.<br /><em>Methods second.</em></h1>
          <p className="page-lede">
            My work sits between experimental biochemistry, infectious-disease biology and quantitative thinking. I am especially interested in questions that matter in African settings and can be translated into useful evidence.
          </p>
          <div className="button-row">
            <a className="button button-primary" href="#publications">Selected publications</a>
            <a className="button button-quiet" href="https://orcid.org/0009-0002-9314-008X" target="_blank" rel="noreferrer">ORCID ↗</a>
          </div>
        </header>

        <section className="section page-section project-band">
          <div className="shell">
            <div className="section-heading light-heading">
              <p className="eyebrow">Current direction</p>
              <h2>Immunity, malaria and the first months of life.</h2>
              <p>
                A developing MSc research direction asks how maternally acquired anti-CSP antibodies, fetal-haemoglobin trajectories and infant malaria outcomes interact in the era of R21/Matrix-M vaccination. The emphasis is on a biologically interpretable question, careful longitudinal analysis and reproducible workflows.
              </p>
            </div>
            <div className="research-principles">
              <article><span>01</span><h3>Mechanism</h3><p>Link measurable immune and haematological signals to plausible biology.</p></article>
              <article><span>02</span><h3>Time</h3><p>Treat repeated measurements as trajectories, not isolated snapshots.</p></article>
              <article><span>03</span><h3>Reproducibility</h3><p>Make data decisions and computational steps transparent enough to rerun.</p></article>
            </div>
          </div>
        </section>

        <section className="section shell">
          <div className="section-heading">
            <p className="eyebrow">Research portfolio</p>
            <h2>A connected set of experimental and computational projects.</h2>
          </div>
          <div className="feature-grid">
            <article className="feature-card feature-teal">
              <span className="feature-index">01 / MODELLING</span>
              <h3>Dynamical modelling of host–pathogen interactions</h3>
              <p>Ordinary differential-equation models for pathogen growth, immune response, equilibrium behaviour and biological interpretation of parameters.</p>
              <div className="tag-row"><span>ODEs</span><span>systems biology</span><span>Python</span></div>
            </article>
            <article className="feature-card feature-gold">
              <span className="feature-index">02 / WET LAB</span>
              <h3>Medicinal-plant phytochemistry & antibacterial activity</h3>
              <p>Plant extraction, phytochemical profiling and antibacterial assays, connecting measured inhibition to candidate secondary metabolites.</p>
              <div className="tag-row"><span>phytochemistry</span><span>microbiology</span><span>spectrophotometry</span></div>
            </article>
            <article className="feature-card feature-blue">
              <span className="feature-index">03 / WORKFLOW</span>
              <h3>RNA-seq analysis notes</h3>
              <p>An educational Linux workflow from raw FASTQ quality control through trimming, splice-aware alignment and gene-level read quantification.</p>
              <div className="tag-row"><span>RNA-seq</span><span>Linux</span><span>reproducibility</span></div>
            </article>
          </div>
        </section>

        <section className="section shell ruled-section" id="publications">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">Selected publications</p><h2>Published work.</h2></div>
            <p>Use the DOI links for the publication record. Citation details below mirror the journal records.</p>
          </div>
          <div className="publication-list">
            <article>
              <span className="publication-year">2024</span>
              <div><h3>Phytochemical Analysis and Antibacterial Activity of Aloe Vera Leaf Extracts Across Different Leaf Ages</h3><p>Alule Robert & Isabirye Isaac · Journal of Diseases and Medicinal Plants, 10(4), 60–68.</p></div>
              <a href="https://doi.org/10.11648/j.jdmp.20241004.11" target="_blank" rel="noreferrer">DOI ↗</a>
            </article>
            <article>
              <span className="publication-year">2023</span>
              <div><h3>Phytochemistry and Antibacterial Activity of <em>Platycerium coronarium</em> Leaf Extracts</h3><p>Alule Robert, Isabirye Isaac & Walugembe Joel · Journal of Diseases and Medicinal Plants, 9(4), 137–147.</p></div>
              <a href="https://doi.org/10.11648/j.jdmp.20230904.13" target="_blank" rel="noreferrer">DOI ↗</a>
            </article>
          </div>
        </section>

        <section className="student-guide-band">
          <div className="shell guide-band-inner">
            <div><p className="eyebrow">For collaborators & students</p><h2>Good science gets stronger when it is shared.</h2><p>For research discussions, student project mentorship or teaching-resource collaboration, get in touch with a clear question and a short description of what you are working on.</p></div>
            <a className="button button-dark" href="mailto:contact@alulerobert.me">Contact Robert →</a>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
