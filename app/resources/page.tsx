import type { Metadata } from "next";
import { SiteShell } from "../../components/SiteShell";

export const metadata: Metadata = { title: "Resource Library", description: "Uganda-focused biology learning materials, project ideas and biochemical science resources." };

const collections = [
  { number: "01", title: "O-Level Biology · Uganda CBC", text: "Official syllabus links, UNEB sample material and an upload-ready home for Robert's scenario-based questions.", href: "/resources/o-level", className: "library-mint", count: "CBC / NLSC" },
  { number: "02", title: "A-Level Biology", text: "Curriculum starting points, study structures and a growing collection for Advanced Level learners.", href: "/resources/a-level", className: "library-gold", count: "UACE" },
  { number: "03", title: "Student project studio", text: "Affordable, testable project ideas designed around materials and questions students can realistically access.", href: "/resources/student-projects", className: "library-blue", count: "6 starters" },
  { number: "04", title: "Biochemical Society resources", text: "Direct routes to learning, careers, grants, public engagement and membership resources from the Society.", href: "/resources/biochemical-society", className: "library-navy", count: "Official links" },
];

export default function ResourcesPage() {
  return (
    <SiteShell>
      <main>
        <header className="page-hero shell compact-hero">
          <p className="eyebrow">Library · Uganda-focused · Teacher-curated</p>
          <h1>Useful material,<br /><em>not a file dump.</em></h1>
          <p className="page-lede">A growing learning library for biology students and teachers. Official curriculum sources are kept separate from Robert's own notes and scenario-based questions, so you always know what you are using.</p>
        </header>
        <section className="section shell library-section">
          <div className="library-grid">
            {collections.map((item) => <a className={`library-card ${item.className}`} href={item.href} key={item.href}><div className="library-card-top"><span>{item.number}</span><span>{item.count}</span></div><h2>{item.title}</h2><p>{item.text}</p><strong>Open collection →</strong></a>)}
          </div>
        </section>
        <section className="section page-section soft-section"><div className="shell upload-callout"><div><p className="eyebrow">Designed to grow</p><h2>Your own questions can slot in cleanly.</h2><p>The structure is ready for PDFs, worksheets, marking guides and scenario sets without mixing them up with official NCDC or UNEB material. Each future item can carry level, topic, type, year and source labels.</p></div><div className="manifest-example"><span>LEVEL</span><strong>O-Level</strong><span>TOPIC</span><strong>Genetics</strong><span>TYPE</span><strong>Scenario set</strong><span>SOURCE</span><strong>Alule Robert</strong></div></div></section>
      </main>
    </SiteShell>
  );
}
