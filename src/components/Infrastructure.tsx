import { WorldMap } from "@/components/ui/world-map";

const tiers = [
  { name: "Starter Node", spec: "4 vCPU · 16 GB RAM · 500 GB NVMe" },
  { name: "Business Node", spec: "16 vCPU · 64 GB RAM · 2 TB NVMe" },
  { name: "Enterprise Node", spec: "Dedicated bare-metal · Custom spec" },
];

const serverDots = [
  { start: { lat: 40.71, lng: -74.01, label: "New York" },    end: { lat: 51.51, lng: -0.13,   label: "London" } },
  { start: { lat: 51.51, lng: -0.13,  label: "London" },      end: { lat: 50.11, lng: 8.68,    label: "Frankfurt" } },
  { start: { lat: 50.11, lng: 8.68,   label: "Frankfurt" },   end: { lat: 41.01, lng: 28.97,   label: "Istanbul" } },
  { start: { lat: 41.01, lng: 28.97,  label: "Istanbul" },    end: { lat: 55.75, lng: 37.62,   label: "Moscow" } },
  { start: { lat: 50.11, lng: 8.68,   label: "Frankfurt" },   end: { lat: 19.08, lng: 72.88,   label: "Mumbai" } },
  { start: { lat: 19.08, lng: 72.88,  label: "Mumbai" },      end: { lat: 1.35,  lng: 103.82,  label: "Singapore" } },
  { start: { lat: 1.35,  lng: 103.82, label: "Singapore" },   end: { lat: 35.69, lng: 139.69,  label: "Tokyo" } },
  { start: { lat: 1.35,  lng: 103.82, label: "Singapore" },   end: { lat: -33.87, lng: 151.21, label: "Sydney" } },
];

export default function Infrastructure() {
  return (
    <section id="infrastructure" className="bg-off-white py-24 overflow-hidden">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
          {/* Text */}
          <div className="relative z-10">
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

          {/* World map */}
          <div className="hidden lg:flex flex-col items-center gap-4">
            <div className="w-full bg-navy rounded-xl overflow-hidden shadow-[0_24px_64px_rgba(13,27,42,0.2)] p-6">
              <WorldMap dots={serverDots} lineColor="#1a6bff" />
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
