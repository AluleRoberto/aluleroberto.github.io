import type { Metadata } from "next";
import { SiteShell } from "../../components/SiteShell";

export const metadata: Metadata = { title: "Sources & Image Credits", description: "Source, verification and image licensing notes for alulerobert.me." };

export default function CreditsPage() {
  return (
    <SiteShell><main>
      <header className="page-hero shell compact-hero"><p className="eyebrow">Transparency</p><h1>Sources, dates<br />& <em>image credits.</em></h1><p className="page-lede">Educational pages are most useful when readers can trace what is official, what is Robert's guidance and when time-sensitive facts were last checked.</p></header>
      <section className="section shell credits-layout"><div><p className="eyebrow">Images</p><div className="credit-list"><article><h2>Department of Chemistry, Makerere University</h2><p>Photograph by Gyagenda Marvin Paul · Wikimedia Commons · CC BY-SA 4.0. Used on the homepage.</p><a href="https://commons.wikimedia.org/wiki/File:Department_of_Chemistry,_Makerere_University.jpg" target="_blank" rel="noreferrer">Source & licence ↗</a></article><article><h2>Mobile Teaching Laboratory, Uganda</h2><p>Photograph by Weather4cast · Wikimedia Commons · CC BY-SA 3.0. Used in the Student Guide.</p><a href="https://commons.wikimedia.org/wiki/File:Mobile_Teaching_Laboratory.jpg" target="_blank" rel="noreferrer">Source & licence ↗</a></article></div></div><div><p className="eyebrow">Information sources</p><div className="credit-list"><article><h2>Curriculum & assessment</h2><p>NCDC and UNEB are used for official Uganda curriculum and assessment links. Always confirm the current document on the originating site.</p><a href="https://ncdc.go.ug/" target="_blank" rel="noreferrer">NCDC ↗</a> · <a href="https://uneb.ac.ug/" target="_blank" rel="noreferrer">UNEB ↗</a></article><article><h2>Biochemical Society</h2><p>Membership, ambassador and funding facts are linked directly to biochemistry.org and were checked 7 Aug 2026.</p><a href="https://www.biochemistry.org/" target="_blank" rel="noreferrer">Official site ↗</a></article><article><h2>Opportunities</h2><p>Listings point to the relevant organisation's own site. Status is editorial guidance, not a guarantee of eligibility or funding.</p><a href="/opportunities">See opportunity methodology →</a></article></div></div></section>
    </main></SiteShell>
  );
}
