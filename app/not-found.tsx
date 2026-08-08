import { SiteShell } from "../components/SiteShell";

export default function NotFound() {
  return (
    <SiteShell>
      <main id="main-content" className="shell not-found-page">
        <p className="eyebrow">404 · Not found</p>
        <h1>This route has wandered out of the lab.</h1>
        <p>The page may have moved during the redesign. Start again from the homepage or use the main navigation.</p>
        <a className="button button-primary" href="/">Back home →</a>
      </main>
    </SiteShell>
  );
}
