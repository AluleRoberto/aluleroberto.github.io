import type { Metadata } from "next";
import { SiteShell } from "../../../components/SiteShell";

export const metadata: Metadata = { title: "Biochemical Society Resources", description: "Official Biochemical Society learning, career, funding and engagement resources." };

export default function SocietyResources() {
  return (
    <SiteShell><main>
      <header className="page-hero shell compact-hero"><p className="eyebrow">Resource library / Biochemical Society</p><h1>Go straight to the<br /><em>useful doors.</em></h1><p className="page-lede">A compact directory of official Biochemical Society resources for learning, career development, funding and science communication.</p></header>
      <section className="section shell"><div className="resource-list society-resource-list">
        <a href="https://www.biochemistry.org/careers-and-education/studying-biochemistry/" target="_blank" rel="noreferrer"><span className="resource-type">LEARNING</span><div><h3>Studying Biochemistry & Understanding Biochemistry</h3><p>Core learning and study resources from the Society.</p></div><strong>Open ↗</strong></a>
        <a href="https://www.biochemistry.org/grants-and-awards/grants-and-bursaries/" target="_blank" rel="noreferrer"><span className="resource-type">FUNDING</span><div><h3>Grants & bursaries</h3><p>Current Society grant categories and eligibility guidance.</p></div><strong>Open ↗</strong></a>
        <a href="https://www.biochemistry.org/membership-and-communities/membership/" target="_blank" rel="noreferrer"><span className="resource-type">MEMBERSHIP</span><div><h3>Membership</h3><p>Current categories, fees and benefits from the authoritative source.</p></div><strong>Open ↗</strong></a>
        <a href="https://www.biochemistry.org/public-engagement/science-communication-prize/" target="_blank" rel="noreferrer"><span className="resource-type">ENGAGEMENT</span><div><h3>Science Communication Prize</h3><p>A Society route for practising and recognising excellent science communication.</p></div><strong>Open ↗</strong></a>
      </div><p className="source-note">Independent directory · links point to biochemistry.org · checked 7 Aug 2026.</p></section>
    </main></SiteShell>
  );
}
