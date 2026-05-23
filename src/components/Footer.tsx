const cols = [
  {
    title: "Services",
    links: [
      { label: "Custom Software", href: "#services" },
      { label: "Infrastructure", href: "#infrastructure" },
      { label: "Game Development", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "How We Work", href: "#operations" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "SLA", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/06">
      <div className="max-w-[1160px] mx-auto px-6 pt-16 pb-12 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 border-b border-white/06">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img src="/logo.png" alt="Brick Software" className="w-6 h-6 object-contain shrink-0" />
            <span className="text-[12px] font-bold tracking-[0.16em] text-white">
              BRICK SOFTWARE
            </span>
          </div>
          <p className="text-[14px] text-white/40 max-w-[240px] leading-[1.6]">
            We build the software your business runs on.
          </p>
        </div>

        {/* Cols */}
        <div className="grid grid-cols-3 gap-6">
          {cols.map((col) => (
            <div key={col.title}>
              <span className="block text-[11px] font-bold tracking-[0.12em] uppercase text-white/35 mb-4">
                {col.title}
              </span>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[13px] text-white/50 hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1160px] mx-auto px-6 py-5">
        <span className="text-[12px] text-white/25">
          &copy; {new Date().getFullYear()} Brick Software. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
