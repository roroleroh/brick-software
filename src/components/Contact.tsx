"use client";

import { useState, FormEvent } from "react";

const contactDetails = [
  { label: "General Inquiries", value: "hello@bricksoftware.io" },
  { label: "Infrastructure & Hosting", value: "infra@bricksoftware.io" },
  { label: "Support Hotline", value: "+1 (800) 000-0000" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="bg-white py-24">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-20 items-start">
          {/* Left */}
          <div>
            <span className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-accent mb-4">
              Get in Touch
            </span>
            <h2 className="text-[clamp(24px,3vw,34px)] font-bold leading-[1.2] text-navy mb-4">
              Let&apos;s Talk About Your Project
            </h2>
            <p className="text-[15px] text-text-muted leading-[1.8] mb-9">
              Whether you have a detailed brief or just an idea, reach out.
              An engineer — not a salesperson — will respond within one
              business day.
            </p>
            <div className="flex flex-col gap-5">
              {contactDetails.map((d) => (
                <div key={d.label} className="flex flex-col gap-1">
                  <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-grey-500">
                    {d.label}
                  </span>
                  <span className="text-[14px] font-medium text-text">
                    {d.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 bg-off-white border border-grey-100 rounded-lg px-9 py-10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-semibold text-text tracking-[0.04em]">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Jane Smith"
                  required
                  className="bg-white border border-grey-100 rounded px-3.5 py-[11px] text-[14px] text-text placeholder:text-grey-300 outline-none focus:border-accent focus:ring-2 focus:ring-accent/12 transition-all"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-semibold text-text tracking-[0.04em]">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="Acme Corp"
                  className="bg-white border border-grey-100 rounded px-3.5 py-[11px] text-[14px] text-text placeholder:text-grey-300 outline-none focus:border-accent focus:ring-2 focus:ring-accent/12 transition-all"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold text-text tracking-[0.04em]">
                Business Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="jane@acmecorp.com"
                required
                className="bg-white border border-grey-100 rounded px-3.5 py-[11px] text-[14px] text-text placeholder:text-grey-300 outline-none focus:border-accent focus:ring-2 focus:ring-accent/12 transition-all"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold text-text tracking-[0.04em]">
                Service Area
              </label>
              <select
                name="service"
                className="bg-white border border-grey-100 rounded px-3.5 py-[11px] text-[14px] text-text outline-none focus:border-accent focus:ring-2 focus:ring-accent/12 transition-all appearance-none cursor-pointer"
              >
                <option value="">Select a service...</option>
                <option value="custom-software">Custom Software Development</option>
                <option value="infrastructure">Infrastructure &amp; Hosting</option>
                <option value="game-dev">Game Development</option>
                <option value="other">Other / Not Sure Yet</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold text-text tracking-[0.04em]">
                Project Brief
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder="Describe your project or question..."
                required
                className="bg-white border border-grey-100 rounded px-3.5 py-[11px] text-[14px] text-text placeholder:text-grey-300 outline-none focus:border-accent focus:ring-2 focus:ring-accent/12 transition-all resize-y min-h-[120px]"
              />
            </div>
            <button
              type="submit"
              className={`w-full py-[13px] text-[14px] font-semibold text-white rounded transition-all ${
                submitted
                  ? "bg-green-500"
                  : "bg-accent hover:bg-accent-dim"
              }`}
            >
              {submitted ? "Message Sent ✓" : "Send Message"}
            </button>
            <p className="text-[12px] text-grey-500 text-center">
              We do not share your information with third parties.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
