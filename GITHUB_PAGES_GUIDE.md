# GitHub Pages hand-off — alulerobert.me

The migration is complete. Production now lives in `AluleRoberto/AluleRoberto.github.io`, deploys a fully static build with `npm run build:github`, and serves the custom domain `https://alulerobert.me` with HTTPS enforced.

## Current production setup — keep this stable

- **GitHub repository:** `AluleRoberto/AluleRoberto.github.io`
- **Pages source:** GitHub Actions
- **Deployment workflow:** `.github/workflows/deploy-github-pages.yml`
- **Node version:** 22
- **Custom domain:** `alulerobert.me`
- **DNS provider:** Cloudflare is authoritative for the domain.
- **Apex DNS:** the four GitHub Pages A records should remain DNS-only (grey cloud).
- **`www`:** CNAME to `aluleroberto.github.io`, also DNS-only.
- **Domain verification:** keep the `_github-pages-challenge-AluleRoberto` TXT record unless GitHub explicitly documents that it is no longer required.
- **HTTPS:** keep **Enforce HTTPS** enabled in Repository → Settings → Pages.

Do not move the domain back to the previous GitHub account while this repository is live. Keep the previous account/repository only as a backup until you are satisfied with the new site.

## Safe update procedure

1. Upload or commit the changed source files to `AluleRoberto/AluleRoberto.github.io`.
2. Keep `public/CNAME` as `alulerobert.me` and do not change working Cloudflare DNS during an ordinary content update.
3. If working locally, use Node 22 and run `npm ci` followed by `npm run build:github`. A successful build creates `out/` and lists the site routes as static (`○`).
4. Push to `main`. The Pages workflow builds and deploys `out/` automatically.
5. In **Actions → Deploy alulerobert.me**, wait for both `build` and `deploy` to turn green.
6. Open `https://alulerobert.me` in a private/incognito window and test `/research/`, `/opportunities/`, `/resources/`, `/student-guide/`, `/biochemical-society/` and `/cv/` on phone and desktop.
7. If a deployment fails, inspect the failed Actions step before changing DNS. A build failure and a DNS failure are different problems.

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
