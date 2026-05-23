const stats = [
  { number: "200+", label: "Projects Delivered" },
  { number: "99.9%", label: "Infrastructure Uptime" },
  { number: "15+", label: "Industries Served" },
  { number: "4yr", label: "In Operation" },
];

export default function StatBar() {
  return (
    <section className="bg-navy-mid border-t border-b border-white/06 py-8">
      <div className="max-w-[1160px] mx-auto px-6 flex flex-wrap items-center justify-center gap-0">
        {stats.map((s, i) => (
          <div key={s.label} className="flex items-center">
            <div className="flex flex-col items-center px-10 sm:px-12">
              <span className="text-[32px] font-bold text-white leading-none">
                {s.number}
              </span>
              <span className="text-[12px] font-medium tracking-[0.06em] uppercase text-grey-300 mt-1.5">
                {s.label}
              </span>
            </div>
            {i < stats.length - 1 && (
              <div className="w-px h-12 bg-white/10 hidden sm:block" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
