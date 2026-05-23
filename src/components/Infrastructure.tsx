const tiers = [
  { name: "Starter Node", spec: "4 vCPU · 16 GB RAM · 500 GB NVMe" },
  { name: "Business Node", spec: "16 vCPU · 64 GB RAM · 2 TB NVMe" },
  { name: "Enterprise Node", spec: "Dedicated bare-metal · Custom spec" },
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

          {/* World map visual */}
          <div className="hidden lg:flex flex-col items-center gap-5">
            <div className="relative bg-navy rounded-xl p-5 shadow-[0_24px_64px_rgba(13,27,42,0.25)] border border-white/06">
              <svg
                viewBox="0 0 520 300"
                className="w-[460px]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Simplified world landmasses */}
                {/* North America */}
                <path d="M55 55 L95 48 L120 52 L130 65 L125 80 L115 95 L105 115 L95 130 L85 135 L75 128 L65 115 L55 100 L48 82 Z" fill="rgba(255,255,255,0.07)" />
                {/* South America */}
                <path d="M105 145 L125 138 L138 148 L142 165 L138 185 L130 205 L118 218 L108 210 L100 192 L98 170 Z" fill="rgba(255,255,255,0.07)" />
                {/* Europe */}
                <path d="M215 45 L240 40 L255 48 L258 60 L248 68 L235 72 L222 68 L212 58 Z" fill="rgba(255,255,255,0.07)" />
                {/* Africa */}
                <path d="M218 82 L245 78 L262 88 L268 110 L265 138 L255 162 L240 175 L225 168 L214 148 L210 122 L212 98 Z" fill="rgba(255,255,255,0.07)" />
                {/* Asia */}
                <path d="M268 38 L310 32 L360 36 L395 42 L410 55 L405 72 L385 80 L355 84 L320 82 L295 75 L272 65 L262 52 Z" fill="rgba(255,255,255,0.07)" />
                {/* Southeast Asia / Indonesia */}
                <path d="M368 110 L388 106 L400 112 L402 122 L390 128 L374 124 Z" fill="rgba(255,255,255,0.07)" />
                {/* Australia */}
                <path d="M388 165 L425 158 L448 165 L455 182 L448 200 L428 210 L405 205 L390 192 L382 175 Z" fill="rgba(255,255,255,0.07)" />
                {/* Japan */}
                <path d="M415 55 L424 52 L430 58 L426 66 L418 64 Z" fill="rgba(255,255,255,0.07)" />

                {/* Grid lines */}
                <line x1="0" y1="150" x2="520" y2="150" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                <line x1="260" y1="0" x2="260" y2="300" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                <ellipse cx="260" cy="150" rx="200" ry="140" stroke="rgba(255,255,255,0.03)" strokeWidth="1" fill="none" />
                <ellipse cx="260" cy="150" rx="120" ry="140" stroke="rgba(255,255,255,0.03)" strokeWidth="1" fill="none" />

                {/* Server location dots */}
                {/* New York */}
                <circle cx="108" cy="88" r="5" fill="#4ade80" className="animate-blink" style={{filter:"drop-shadow(0 0 6px #4ade80)"}} />
                {/* London */}
                <circle cx="228" cy="57" r="5" fill="#4ade80" className="animate-blink-2" style={{filter:"drop-shadow(0 0 6px #4ade80)"}} />
                {/* Frankfurt */}
                <circle cx="248" cy="54" r="5" fill="#4ade80" className="animate-blink-3" style={{filter:"drop-shadow(0 0 6px #4ade80)"}} />
                {/* Singapore */}
                <circle cx="378" cy="138" r="5" fill="#4ade80" className="animate-blink" style={{filter:"drop-shadow(0 0 6px #4ade80)"}} />
                {/* Sydney */}
                <circle cx="428" cy="190" r="5" fill="#4ade80" className="animate-blink-2" style={{filter:"drop-shadow(0 0 6px #4ade80)"}} />
                {/* Tokyo */}
                <circle cx="422" cy="60" r="5" fill="#4ade80" className="animate-blink-3" style={{filter:"drop-shadow(0 0 6px #4ade80)"}} />

                {/* Connection lines between dots */}
                <line x1="108" y1="88" x2="228" y2="57" stroke="rgba(26,107,255,0.2)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="228" y1="57" x2="248" y2="54" stroke="rgba(26,107,255,0.2)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="248" y1="54" x2="378" y2="138" stroke="rgba(26,107,255,0.2)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="378" y1="138" x2="428" y2="190" stroke="rgba(26,107,255,0.2)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="378" y1="138" x2="422" y2="60" stroke="rgba(26,107,255,0.2)" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
            </div>
            <div className="flex items-center gap-2 text-[12px] font-semibold text-text-muted tracking-[0.04em]">
              <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80] animate-blink" />
              All systems operational
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
