"use client";

import { useEffect, useState } from "react";

type ResourceItem = {
  collection: string;
  title: string;
  type: string;
  href: string;
  sizeBytes: number;
};

function formatSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

export function UploadedResources({ collection }: { collection: string }) {
  const [items, setItems] = useState<ResourceItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("/resource-index.json")
      .then((response) => (response.ok ? response.json() : { items: [] }))
      .then((data) => setItems((data.items ?? []).filter((item: ResourceItem) => item.collection === collection)))
      .catch(() => setItems([]))
      .finally(() => setLoaded(true));
  }, [collection]);

  if (!loaded) return <p className="upload-status">Checking Robert's uploaded materials…</p>;
  if (items.length === 0) return <p className="upload-status">No locally authored files are published in this collection yet. The page is ready for Robert's uploads.</p>;

  return (
    <div className="uploaded-grid">
      {items.map((item) => (
        <a href={item.href} key={item.href} target="_blank" rel="noreferrer">
          <span>{item.type} · {formatSize(item.sizeBytes)}</span>
          <strong>{item.title}</strong>
          <small>Open resource ↗</small>
        </a>
      ))}
    </div>
  );
}
