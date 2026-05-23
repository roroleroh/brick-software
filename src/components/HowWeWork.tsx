const steps = [
  {
    num: "01",
    title: "Discovery & Scoping",
    desc: "We meet with your stakeholders, map your current workflows, and define deliverables with fixed milestones. You receive a written scope document before a single line of code is written.",
  },
  {
    num: "02",
    title: "Design & Architecture",
    desc: "Our engineers produce system architecture diagrams and wireframes. You review and approve before development begins. Changes at this stage cost minutes, not months.",
  },
  {
    num: "03",
    title: "Iterative Development",
    desc: "Work happens in two-week sprints. You receive a demo at the end of every sprint and can re-prioritize the backlog. Feedback is incorporated before the next cycle begins.",
  },
  {
    num: "04",
    title: "QA & Acceptance Testing",
    desc: "Dedicated QA engineers run regression, performance, and user-acceptance tests. Nothing ships without a signed-off test report. Critical bugs are resolved before delivery.",
  },
  {
    num: "05",
    title: "Deployment & Handover",
    desc: "We manage the production rollout, document the system end-to-end, and train your team. You own the code, the infrastructure, and the knowledge.",
  },
  {
    num: "06",
    title: "Ongoing Support",
    desc: "Retainer and SLA agreements available for teams that need a standing technical partner — from minor updates to full infrastructure management.",
  },
];

export default function HowWeWork() {
  return (
    <section id="operations" className="bg-navy py-24">
      <div className="max-w-[1160px] mx-auto px-6">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <span className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-accent mb-4">
            Day-to-Day Operations
          </span>
          <h2 className="text-[clamp(28px,3vw,38px)] font-bold leading-[1.15] text-white mb-4">
            How an Engagement Works
          </h2>
          <p className="text-[17px] text-white/55 leading-[1.7]">
            No black boxes. Every project follows a defined process so you
            know where things stand at all times.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 border border-white/08 rounded-lg overflow-hidden">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`flex gap-6 p-10 hover:bg-accent/05 transition-colors
                ${i % 2 === 0 ? "md:border-r border-white/08" : ""}
                ${i < steps.length - 2 ? "border-b border-white/08" : ""}
              `}
            >
              <span className="text-[13px] font-bold tracking-[0.1em] text-accent shrink-0 pt-0.5 w-7">
                {step.num}
              </span>
              <div>
                <h3 className="text-[16px] font-semibold text-white mb-2.5">
                  {step.title}
                </h3>
                <p className="text-[14px] text-white/50 leading-[1.75]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
