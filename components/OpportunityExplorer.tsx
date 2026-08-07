"use client";

import { useMemo, useState } from "react";
import opportunityData from "../data/opportunities.json";

type Opportunity = {
  title: string;
  provider: string;
  region: "Uganda" | "Africa" | "International";
  level: "Undergraduate" | "Masters" | "PhD" | "All levels";
  status: "Open" | "Closing soon" | "Watchlist" | "Funding hub";
  deadline: string;
  note: string;
  href: string;
};

const opportunities = opportunityData as Opportunity[];

const filters = ["All", "Uganda", "Africa", "International"] as const;

export function OpportunityExplorer() {
  const [region, setRegion] = useState<(typeof filters)[number]>("All");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return opportunities.filter((item) => {
      const regionMatch = region === "All" || item.region === region;
      const text = `${item.title} ${item.provider} ${item.level} ${item.note}`.toLowerCase();
      return regionMatch && (!needle || text.includes(needle));
    });
  }, [region, query]);

  return (
    <div>
      <div className="opportunity-controls" aria-label="Opportunity filters">
        <label className="search-box">
          <span>Search</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="e.g. malaria, Masters, DAAD"
          />
        </label>
        <div className="filter-chips" aria-label="Filter by region">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={region === filter ? "filter-chip active" : "filter-chip"}
              onClick={() => setRegion(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="opportunity-list" aria-live="polite">
        {visible.map((item) => (
          <article className="opportunity-card" key={`${item.provider}-${item.title}`}>
            <div className="opportunity-meta">
              <span className={`status ${item.status === "Open" ? "open" : item.status === "Closing soon" ? "local" : "society"}`}>
                {item.status}
              </span>
              <span>{item.region}</span>
              <span>{item.level}</span>
            </div>
            <h3>{item.title}</h3>
            <p className="opportunity-provider">{item.provider}</p>
            <p>{item.note}</p>
            <div className="opportunity-foot">
              <span><strong>Deadline:</strong> {item.deadline}</span>
              <a href={item.href} target="_blank" rel="noreferrer">Official source ↗</a>
            </div>
          </article>
        ))}
        {visible.length === 0 && (
          <p className="empty-state">No matches yet. Try a broader region or search term.</p>
        )}
      </div>
    </div>
  );
}
