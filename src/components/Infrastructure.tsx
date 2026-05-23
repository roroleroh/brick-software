const tiers = [
  { name: "Starter Node", spec: "4 vCPU · 16 GB RAM · 500 GB NVMe" },
  { name: "Business Node", spec: "16 vCPU · 64 GB RAM · 2 TB NVMe" },
  { name: "Enterprise Node", spec: "Dedicated bare-metal · Custom spec" },
];

const rackSlots = [
  true, true, false, true, true, false, true, false, true, true, false, true,
];

export default function Infrastructure() {
  return (
    <section id="infrastructure" className="bg-off-white py-24">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Text */}
          <div>
            <span className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-accent mb-4">
              Infrastructure
            </span>
            <h2 className="text-[clamp(28px,3vw,38px)] font-bold leading-[1.15] text-navy mb-5">
              Your Servers. Your Rules.
            </h2>
            <p className="text-[15px] text-text-muted leading-[1.8] mb-4">
              Cloud platforms are convenient until they are not. Brick Software
              operates physical hardware in secured facilities, giving clients
              dedicated capacity with no resource contention and no surprise
              billing.
            </p>
            <p className="text-[15px] text-text-muted leading-[1.8] mb-8">
              Rental agreements are month-to-month or annual with an SLA-backed
              uptime guarantee. Every node is monitored around the clock by our
              operations team.
            </p>

            <div className="flex flex-col gap-3 mb-10">
              {tiers.map((t) => (
                <div
                  key={t.name}
                  className="flex items-center justify-between px-5 py-4 bg-white border border-grey-100 rounded"
                >
                  <span className="text-[14px] font-semibold text-navy">
                    {t.name}
                  </span>
                  <span className="text-[12px] text-text-muted font-mono">
                    {t.spec}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center px-7 py-[13px] bg-accent hover:bg-accent-dim text-white text-[14px] font-semibold rounded transition-colors"
            >
              Request a Quote
            </a>
          </div>

          {/* Visual */}
          <div className="hidden lg:flex flex-col items-center gap-6">
            <div className="w-[220px] bg-navy rounded-lg px-5 py-4 flex flex-col gap-1.5 shadow-[0_24px_64px_rgba(13,27,42,0.2)]">
              {rackSlots.map((active, i) => (
                <div
                  key={i}
                  className={`h-5 rounded-sm relative overflow-hidden ${
                    active ? "bg-accent/15" : "bg-white/06"
                  }`}
                >
                  {active && (
                    <span
                      className={`absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_#4ade80] ${
                        i % 3 === 0
                          ? "animate-blink"
                          : i % 5 === 0
                          ? "animate-blink-3"
                          : "animate-blink-2"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 text-[12px] font-semibold text-text-muted tracking-[0.04em]">
              <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80]" />
              All systems operational
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
