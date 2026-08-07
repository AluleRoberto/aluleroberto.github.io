export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      role="img"
      aria-label="Alule Robert mark"
      className={className}
    >
      <rect width="48" height="48" rx="15" fill="#0b2742" />
      <path
        d="M13.5 35.5 23.2 11.8c.3-.8 1.4-.8 1.8 0l9.5 23.7"
        fill="none"
        stroke="#7de0c3"
        strokeWidth="4.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.1 25.7h12"
        fill="none"
        stroke="#f2bd5a"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <circle cx="35.2" cy="13.4" r="3.2" fill="#f2bd5a" />
    </svg>
  );
}

export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="brand-logo">
      <BrandMark className="brand-mark" />
      {!compact && (
        <span className="brand-copy">
          <span className="brand-name">Alule Robert</span>
          <span className="brand-tagline">Bioscience · Research · Education</span>
        </span>
      )}
    </span>
  );
}
