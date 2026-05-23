export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-navy flex items-center overflow-hidden"
    >
      {/* Grid overlay */}
      <div className="hero-grid absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-[1160px] mx-auto px-6 pt-28 pb-20">
        <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-accent mb-6">
          Enterprise Technology Partner
        </p>
        <h1 className="text-[clamp(42px,6vw,72px)] font-bold leading-[1.06] text-white mb-7 max-w-[700px]">
          Software Built<br />
          for the Work<br />
          You Actually Do
        </h1>
        <p className="text-[18px] text-white/60 leading-[1.75] max-w-[520px] mb-11">
          From point-of-sale systems to dedicated server infrastructure,
          Brick Software delivers purpose-built technology for businesses
          that cannot afford downtime.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#services"
            className="inline-flex items-center px-7 py-[13px] bg-accent hover:bg-accent-dim text-white text-[14px] font-semibold rounded transition-colors"
          >
            View Services
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-7 py-[13px] border-2 border-white/40 hover:border-white hover:bg-white/08 text-white text-[14px] font-semibold rounded transition-all"
          >
            Talk to an Engineer
          </a>
        </div>
      </div>
    </section>
  );
}
