# GitHub Pages hand-off — alulerobert.me

This codebase has a dedicated fully static build (`npm run build:github`). It was designed for the existing `robertalule/robertalule.github.io` site and keeps `public/CNAME` set to `alulerobert.me`.

## Safe migration

1. In the current GitHub repository, create a backup branch from the existing site (for example `pre-redesign-2026-08`). Do not delete the old branch until the new site is confirmed live.
2. On a new branch such as `site-redesign`, replace the old Minima/Jekyll source with this package. Keep the supplied `.github`, `app`, `components`, `data`, `public`, and `scripts` folders plus the root configuration files.
3. Run locally with Node 22: `npm ci` then `npm run build:github`. A successful build creates `out/`. The build should list all routes as static (`○`).
4. Push the branch, review it, then merge to `main`.
5. In **Repository → Settings → Pages**, select **GitHub Actions** as the build/deployment source. The supplied `deploy-github-pages.yml` builds and deploys `out/` on every push to `main`.
6. Because the current site already uses `alulerobert.me`, normally leave working DNS records alone. The supplied `CNAME` preserves the custom domain. If GitHub reports a domain problem, follow GitHub's current custom-domain instructions rather than guessing DNS values.
7. After deployment, test `/`, `/research/`, `/opportunities/`, `/resources/`, `/student-guide/`, `/biochemical-society/` and `/cv/` on both phone and desktop.

Official references: [GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) and [custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Adding your own learning files

Put files in one of these folders:

- `public/resources/o-level/`
- `public/resources/a-level/`
- `public/resources/student-projects/`
- `public/resources/biochemical-society/`

Supported automatic-index types are PDF, DOCX, PPTX, XLSX and ZIP. Use readable filenames such as `o-level-genetics-scenario-set-01.pdf`; the deployment build regenerates `public/resource-index.json`, and the relevant page shows the file automatically.

For formal curriculum documents, prefer links to NCDC/UNEB rather than re-uploading their PDFs unless redistribution terms are clear.

## Optional opportunity scout

The site works with **no AI key**. If you want the weekly review helper:

1. Create an OpenAI API key for this project.
2. In **Repository → Settings → Secrets and variables → Actions**, add it as `OPENAI_API_KEY`.
3. The `opportunity-scout.yml` workflow runs weekly and can also be run manually.
4. It asks a cost-sensitive model with web search to review an official-domain allowlist, validates output URLs against that allowlist, and opens a pull request only if candidate data changed.
5. **Verify every candidate manually before merging.** A merge is the publication decision; the AI never publishes directly.

Never put `OPENAI_API_KEY` in `app/`, `components/`, `public/`, a client-side script or a committed `.env` file.
