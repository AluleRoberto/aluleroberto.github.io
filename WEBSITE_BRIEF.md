# AluleRobert.me — corrected master prompt

Use this prompt when continuing the site with an AI designer/developer:

> Act as a senior product designer, front-end engineer, science communicator and digital strategist. Audit my existing website, **alulerobert.me**, and redesign it into a credible, fast, accessible personal research site and practical bioscience hub, prioritising students in Uganda while remaining useful internationally.
>
> The site must serve two purposes without feeling confused: (1) present **Alule Robert** professionally as a biological-sciences educator, MSc Biochemistry researcher and Biochemical Society Student Ambassador; and (2) help students find trustworthy learning resources, project guidance and biological-sciences opportunities.
>
> Build a coherent visual identity and simplify my existing crest-style logo into a distinctive mark that remains legible as a favicon. Use a restrained scientific palette and responsive, accessible layouts. Source only legally reusable photographs and preserve visible attribution/licence information.
>
> Required site areas: **Home; Research & Projects; CV; Biochemical Society (including an independent “how to join” guide); Biological Sciences Opportunities; Resource Library; and Student Guide / Current Challenges / SWOT**. The Resource Library must have separate collections for **Uganda O-Level competency-based Biology**, my future **scenario-based questions**, **A-Level Biology**, **student project ideas/resources**, and **Biochemical Society resources**. Never fabricate a resource I have not uploaded: show honest placeholders instead.
>
> For opportunities, prioritise Uganda first, then Africa, then international routes relevant to Ugandan applicants. Every opportunity must link to an official source, display a meaningful status/deadline, and make clear when the information was last checked. Do not auto-publish AI-discovered scholarships without human review.
>
> Use automation only where it reduces maintenance safely and cheaply. Resource files should index automatically during deployment without AI. An optional low-cost AI job may periodically scan an allowlist of official opportunity sources and open a review pull request; API keys must stay in GitHub Actions Secrets and must never be exposed in browser JavaScript. Research/publication metadata may later be refreshed from authoritative identifiers such as ORCID/DOI.
>
> Technical constraint: the production site is hosted on **GitHub Pages** at **alulerobert.me**. Generate a fully static build, preserve the custom-domain `CNAME`, include a GitHub Actions deployment workflow, test the production build, and provide precise deployment and content-upload instructions. Keep JavaScript light and do not add a chatbot unless there is a secure server-side proxy and a clear user need.
>
> Quality bar: factual, calm, human, professional and useful. Prefer source transparency over flashy claims. Ensure responsive behaviour, semantic HTML, keyboard accessibility, meaningful alt text, clear focus states, strong contrast, good metadata and no dead navigation. Deliver the complete code, logo assets, content architecture, automation scripts, deployment workflow and hand-off guide.

## Design direction chosen

- **Positioning:** “Research, education and opportunity — built from Uganda, connected to the world.”
- **Audience hierarchy:** Ugandan bioscience students and teachers; research peers/collaborators; scholarship and scientific-community visitors.
- **Visual system:** deep navy for scientific credibility, teal/mint for biological life, warm gold for opportunity/education, warm paper background instead of clinical white.
- **Logo:** a compact `A`-shaped scientific mark with a gold crossbar/data point. It keeps the blue–green–gold spirit of the old crest but removes the tiny DNA/test-tube/book detail that disappears at favicon scale.
- **Content rule:** official material is labelled as such; Robert's own material is labelled separately; placeholders are explicit.
