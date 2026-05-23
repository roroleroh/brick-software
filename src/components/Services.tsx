const services = [
  {
    index: "01",
    title: "Custom Software Development",
    desc: "Off-the-shelf rarely fits. We design and build software around your specific workflows — from retail point-of-sale and cash register systems to full-featured accounting and ERP platforms, deployed on your timeline.",
    items: [
      "Point-of-sale & cash register systems",
      "Accounting & invoicing platforms",
      "Inventory management tools",
      "Internal business dashboards",
      "API integrations & automation",
    ],
    href: "#contact",
    cta: "Start a project →",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="3" y="5" width="26" height="18" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M10 23v4M22 23v4M7 27h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M10 12l3 3-3 3M15 18h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    index: "02",
    title: "Infrastructure & Hosting",
    desc: "Own your stack. We provide dedicated server rentals, managed hosting environments, and network infrastructure — with engineers who respond to incidents, not ticket queues.",
    items: [
      "Dedicated & co-located servers",
      "Managed web & application hosting",
      "VPN & private network setup",
      "Backup & disaster recovery",
      "24/7 monitoring & support",
    ],
    href: "#infrastructure",
    cta: "See infrastructure →",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="8" width="24" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M4 13h24" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="8" cy="10.5" r="1" fill="currentColor"/>
        <circle cx="12" cy="10.5" r="1" fill="currentColor"/>
        <path d="M16 27v-5M10 27h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    index: "03",
    title: "Game Development",
    desc: "From concept to launch. Our game development team covers the full production pipeline — design, engineering, and deployment — for studios and independent publishers who need a reliable technical partner.",
    items: [
      "PC, console & mobile titles",
      "Gameplay & engine programming",
      "Tools & pipeline development",
      "Porting & platform certification",
      "Post-launch support & patches",
    ],
    href: "#contact",
    cta: "Discuss your project →",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="24" height="18" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M4 9h24" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="13" cy="15" r="3" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M21 13l2 2-2 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 26l2-4h4l2 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-off-white py-24">
      <div className="max-w-[1160px] mx-auto px-6">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <span className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-accent mb-4">
            What We Do
          </span>
          <h2 className="text-[clamp(28px,3vw,38px)] font-bold leading-[1.15] text-navy mb-4">
            Three Pillars. One Partner.
          </h2>
          <p className="text-[17px] text-text-muted leading-[1.7]">
            We keep our scope tight so our execution stays sharp. Every
            engagement falls into one of three practice areas.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.index}
              className="bg-white border border-grey-100 rounded-lg p-9 flex flex-col hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(13,27,42,0.1)] transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-navy rounded flex items-center justify-center text-white shrink-0">
                  {s.icon}
                </div>
                <span className="text-[11px] font-bold tracking-[0.1em] text-grey-300">
                  {s.index}
                </span>
              </div>
              <h3 className="text-[20px] font-bold text-navy leading-[1.3] mb-3">
                {s.title}
              </h3>
              <p className="text-[14px] text-text-muted leading-[1.75] mb-6">
                {s.desc}
              </p>
              <ul className="flex-1 mb-7">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="text-[13px] text-text py-2 border-b border-grey-100 last:border-0 pl-4 relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[5px] before:h-[5px] before:bg-accent before:rounded-full"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={s.href}
                className="text-[13px] font-semibold text-accent hover:text-accent-dim transition-colors"
              >
                {s.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
