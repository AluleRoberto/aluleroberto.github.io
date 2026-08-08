import type { Metadata } from "next";
import { SiteShell } from "../../components/SiteShell";
import { OpportunityExplorer } from "../../components/OpportunityExplorer";

export const metadata: Metadata = { title: "Biological Sciences Opportunities", description: "Verified starting points for bioscience scholarships, training and funding, prioritising Ugandan students." };

export default function OpportunitiesPage() {
  return (
    <SiteShell>
      <main id="main-content">
        <header className="page-hero shell compact-hero">
          <p className="eyebrow">Uganda first · Africa next · world open</p>
          <h1>Opportunity should be<br /><em>searchable.</em></h1>
          <p className="page-lede">A curated starting point for scholarships, research training, fellowships and bioscience funding. Every listing points back to an official source so you can verify eligibility, dates and terms yourself.</p>
        </header>
        <section className="section shell opportunity-section">
          <div className="freshness-banner"><div><span className="live-dot" /><strong>Listings reviewed 8 Aug 2026</strong></div><p>“Watchlist” means the source is worth monitoring; it does not mean applications are open today.</p></div>
          <OpportunityExplorer />
        </section>
        <section className="section page-section project-band">
          <div className="shell application-grid"><div><p className="eyebrow">Before you apply</p><h2>Five checks that prevent wasted applications.</h2></div><ol><li><strong>Eligibility:</strong> citizenship, programme, academic level and graduation date.</li><li><strong>Deadline:</strong> convert time zones and aim 48 hours early.</li><li><strong>Funding:</strong> distinguish fully funded from fee waiver or partial support.</li><li><strong>Evidence:</strong> match every selection criterion to something you can prove.</li><li><strong>Source:</strong> apply from the institution's own domain, not a forwarded poster alone.</li></ol></div>
        </section>
      </main>
    </SiteShell>
  );
}
