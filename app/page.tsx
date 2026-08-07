import { SiteShell } from "../components/SiteShell";

const makChemistryPhoto =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Department_of_Chemistry%2C_Makerere_University.jpg/960px-Department_of_Chemistry%2C_Makerere_University.jpg";

export default function Home() {
  return (
    <SiteShell>
      <main>
        <section className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow">Researcher · Educator · Student Ambassador</p>
            <h1>
              Biology that moves from the <em>classroom</em> to the lab — and out
              into the world.
            </h1>
            <p className="hero-lede">
              I&apos;m Alule Robert, an MSc Biochemistry researcher at Makerere
              University and a biological sciences educator in Uganda. I build
              research, learning resources and practical routes into modern
              bioscience opportunities.
            </p>
            <div className="button-row">
              <a className="button button-primary" href="/opportunities">
                Explore opportunities <span aria-hidden="true">→</span>
              </a>
              <a className="button button-quiet" href="/research">
                View my research
              </a>
            </div>
            <div className="hero-signals" aria-label="Current focus areas">
              <span>Malaria & immunity</span>
              <span>Systems biology</span>
              <span>Biological education</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="image-frame hero-image">
              <img
                src={makChemistryPhoto}
                alt="Department of Chemistry at Makerere University, Kampala"
              />
            </div>
            <div className="floating-card lab-card">
              <span className="card-kicker">Current base</span>
              <strong>Makerere University</strong>
              <span>MSc Biochemistry · Biochemistry & Systems Biology</span>
            </div>
            <div className="floating-card uganda-card" aria-hidden="true">
              <span className="uganda-dot" />
              Uganda → Global bioscience
            </div>
          </div>
        </section>

        <section className="section shell">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Start here</p>
              <h2>One site, three useful doors.</h2>
            </div>
            <p>
              The site is designed to work both as my professional research home
              and as a practical bioscience hub for students and teachers.
            </p>
          </div>
          <div className="path-grid">
            <a className="path-card student-path" href="/opportunities">
              <span className="path-number">01</span>
              <h3>I&apos;m looking for an opportunity</h3>
              <p>
                Scholarships, internships, fellowships, training and trusted
                source pages — filtered for Ugandan and African applicants.
              </p>
              <span className="text-link">Open opportunity hub →</span>
            </a>
            <a className="path-card learning-path" href="/resources">
              <span className="path-number">02</span>
              <h3>I&apos;m learning or teaching Biology</h3>
              <p>
                Uganda-aligned O-Level and A-Level materials, scenario questions,
                project ideas and curated molecular bioscience resources.
              </p>
              <span className="text-link">Browse resources →</span>
            </a>
            <a className="path-card research-path" href="/research">
              <span className="path-number">03</span>
              <h3>I&apos;m here for research</h3>
              <p>
                Current questions, publications, computational workflows and a
                concise view of my training, methods and collaborations.
              </p>
              <span className="text-link">See research profile →</span>
            </a>
          </div>
        </section>

        <section className="section project-band">
          <div className="shell">
            <div className="section-heading light-heading">
              <p className="eyebrow">Research now</p>
              <h2>Connecting malaria biology, immunity and quantitative thinking.</h2>
              <p>
                My current MSc direction asks how early-life biological factors
                shape malaria risk in infants receiving R21/Matrix-M vaccination,
                alongside broader work in host–pathogen systems.
              </p>
            </div>
            <div className="research-strip">
              <article>
                <span>01</span>
                <h3>Infant malaria & R21</h3>
                <p>Maternal anti-CSP IgG, fetal haemoglobin and malaria incidence.</p>
              </article>
              <article>
                <span>02</span>
                <h3>Host–pathogen modelling</h3>
                <p>Dynamical systems for infection, immune response and tolerance.</p>
              </article>
              <article>
                <span>03</span>
                <h3>Medicinal plant research</h3>
                <p>Published phytochemistry and antibacterial activity studies.</p>
              </article>
            </div>
            <a className="button button-light" href="/research">
              Research, publications & workflows →
            </a>
          </div>
        </section>

        <section className="section shell opportunity-preview">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Opportunity radar</p>
              <h2>Start with sources worth checking.</h2>
            </div>
            <p>
              The hub prioritises official sources, clear eligibility and dates.
              Expired calls are separated from active or watch-list opportunities.
            </p>
          </div>
          <div className="mini-opportunity-grid">
            <article className="mini-opportunity">
              <span className="status open">Open-call source</span>
              <h3>DAAD In-Country / In-Region</h3>
              <p>Postgraduate and doctoral routes for applicants from Sub-Saharan Africa.</p>
              <a
                href="https://www.daad.de/en/information-services-for-higher-education-institutions/further-information-on-daad-programmes/in-countryin-region-programme-in-developing-countries/"
                target="_blank"
                rel="noreferrer"
              >
                Official DAAD page ↗
              </a>
            </article>
            <article className="mini-opportunity">
              <span className="status local">Uganda</span>
              <h3>Makerere opportunities</h3>
              <p>Scholarships, research calls and training opportunities from university units.</p>
              <a href="https://news.mak.ac.ug/" target="_blank" rel="noreferrer">
                Makerere News ↗
              </a>
            </article>
            <article className="mini-opportunity">
              <span className="status society">Member funding</span>
              <h3>Biochemical Society grants</h3>
              <p>Travel, lab visits, studentships, events and other molecular bioscience support.</p>
              <a
                href="https://www.biochemistry.org/grants-and-awards/grants-and-bursaries/"
                target="_blank"
                rel="noreferrer"
              >
                Official grants page ↗
              </a>
            </article>
          </div>
          <div className="centered-action">
            <a className="button button-primary" href="/opportunities">
              Browse the full opportunity hub →
            </a>
          </div>
        </section>

        <section className="section shell society-callout">
          <div className="society-copy">
            <p className="eyebrow">Biochemical Society</p>
            <h2>A direct bridge into the molecular bioscience community.</h2>
            <p>
              I serve as a Biochemical Society Student Ambassador at Makerere
              University. I&apos;ve built a plain-language page explaining who can
              join, what student membership offers, current fee guidance and
              where to find official grants, training and career resources.
            </p>
            <div className="button-row">
              <a className="button button-primary" href="/biochemical-society">
                How to join & use membership →
              </a>
              <a
                className="button button-quiet"
                href="https://www.biochemistry.org/membership-and-communities/biochemical-society-ambassadors/our-student-ambassadors/"
                target="_blank"
                rel="noreferrer"
              >
                Verify ambassador listing ↗
              </a>
            </div>
          </div>
          <div className="molecule-card" aria-hidden="true">
            <span className="node node-a" />
            <span className="node node-b" />
            <span className="node node-c" />
            <span className="node node-d" />
            <span className="bond bond-a" />
            <span className="bond bond-b" />
            <span className="bond bond-c" />
            <div className="molecule-label">
              <strong>Learn.</strong>
              <strong>Connect.</strong>
              <strong>Contribute.</strong>
            </div>
          </div>
        </section>

        <section className="section student-guide-band">
          <div className="shell guide-band-inner">
            <div>
              <p className="eyebrow">For students</p>
              <h2>Do not choose a career from a degree title alone.</h2>
              <p>
                Use the student guide to map strengths, skill gaps, opportunities
                and threats; then turn that SWOT into a 90-day action plan.
              </p>
            </div>
            <a className="button button-dark" href="/student-guide">
              Build your bioscience SWOT →
            </a>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
