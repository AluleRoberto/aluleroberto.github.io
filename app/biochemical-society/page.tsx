import type { Metadata } from "next";
import { SiteShell } from "../../components/SiteShell";

export const metadata: Metadata = { title: "Biochemical Society", description: "A practical, independent guide to Biochemical Society membership, benefits and resources for students." };

export default function SocietyPage() {
  return (
    <SiteShell>
      <main id="main-content">
        <header className="page-hero shell society-hero">
          <div>
            <p className="eyebrow">Student Ambassador · Makerere University, Uganda</p>
            <h1>Make membership<br /><em>useful.</em></h1>
            <p className="page-lede">I serve as a Biochemical Society Student Ambassador. This independent guide helps students understand the Society, choose a membership route and find the benefits worth acting on.</p>
            <div className="button-row"><a className="button button-primary" href="https://www.biochemistry.org/membership-and-communities/membership/" target="_blank" rel="noreferrer">Official membership page ↗</a><a className="button button-quiet" href="#join">How to join</a></div>
          </div>
          <aside className="verification-card"><span className="verify-dot" /><p><strong>Verified role</strong>Alule Robert is listed by the Society as a Student Ambassador for Makerere University, Uganda.</p><a href="https://www.biochemistry.org/membership-and-communities/biochemical-society-ambassadors/our-student-ambassadors/" target="_blank" rel="noreferrer">View official ambassador directory ↗</a></aside>
        </header>

        <section className="section shell" id="join">
          <div className="section-heading"><p className="eyebrow">Joining guide</p><h2>Four steps, with the important details up front.</h2><p>Fees and eligibility can change. The figures below were checked against the Society website on 8 August 2026; always confirm on the official page before paying.</p></div>
          <div className="step-grid">
            <article><span>01</span><h3>Choose your category</h3><p>Undergraduate membership is for students aged 18+ working toward a first degree relevant to biochemistry or molecular bioscience. Postgraduate membership covers relevant postgraduate study.</p></article>
            <article><span>02</span><h3>Check the current fee</h3><p>Listed annual rates: undergraduate £19; postgraduate £32.50. The Society currently shows discounted rates of £9.50 and £16 respectively for eligible residents of developing economies.</p></article>
            <article><span>03</span><h3>Apply on the official site</h3><p>Create your account and complete payment only through Biochemical Society channels. Never send fees to an unofficial intermediary.</p></article>
            <article><span>04</span><h3>Use it deliberately</h3><p>Look at training, events, networks and grants early. Some member-exclusive grants have a waiting period before you become eligible.</p></article>
          </div>
          <p className="source-note society-eligibility-note">Uganda is currently listed by the World Bank as a low-income economy, so the Society&apos;s developing-economy discount is relevant to students resident in Uganda. <a href="https://www.biochemistry.org/membership-and-communities/membership/membership-faqs/" target="_blank" rel="noreferrer">Society fee FAQ ↗</a> · <a href="https://datahelpdesk.worldbank.org/knowledgebase/articles/906519-world-bank-country-and-lending-groups" target="_blank" rel="noreferrer">World Bank classification ↗</a></p>
        </section>

        <section className="section page-section soft-section">
          <div className="shell">
            <div className="section-heading"><p className="eyebrow">Where the value is</p><h2>Do more than put “member” on your CV.</h2></div>
            <div className="link-card-grid">
              <a href="https://www.biochemistry.org/grants-and-awards/grants-and-bursaries/" target="_blank" rel="noreferrer"><span>Funding</span><h3>Grants & bursaries</h3><p>Travel, lab visits, events and other schemes for eligible members.</p><strong>Official hub ↗</strong></a>
              <a href="https://www.biochemistry.org/careers-and-education/studying-biochemistry/" target="_blank" rel="noreferrer"><span>Learning</span><h3>Understanding Biochemistry</h3><p>Education material for post-16 learners, teachers and undergraduates.</p><strong>Explore ↗</strong></a>
              <a href="https://www.biochemistry.org/public-engagement/science-communication-prize/" target="_blank" rel="noreferrer"><span>Communication</span><h3>Science Communication Prize</h3><p>A route to practise explaining molecular bioscience clearly to wider audiences.</p><strong>Official page ↗</strong></a>
            </div>
            <p className="source-note">This website is Robert's independent educational guide and is not an official Biochemical Society website.</p>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
