"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "How We Work", href: "#operations" },
  { label: "Infrastructure", href: "#infrastructure" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-navy shadow-[0_1px_0_rgba(255,255,255,0.06)]" : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1160px] mx-auto px-6 flex items-center justify-between h-[68px]">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3">
          <span className="logo-mark block w-7 h-7 bg-accent shrink-0" />
          <span className="text-[13px] font-bold tracking-[0.16em] text-white">
            BRICK SOFTWARE
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[13px] font-medium tracking-[0.04em] text-white/75 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="text-[13px] font-medium text-white px-5 py-2 border border-white/30 rounded hover:bg-white/10 hover:border-white/60 transition-all"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-[22px] h-[2px] bg-white rounded transition-transform origin-center ${
              open ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-[22px] h-[2px] bg-white rounded transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-[22px] h-[2px] bg-white rounded transition-transform origin-center ${
              open ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy border-t border-white/10">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href} className="px-6">
                <a
                  href={l.href}
                  onClick={close}
                  className="block py-3 text-[14px] text-white/75 border-b border-white/08"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="px-6 py-3">
              <a
                href="#contact"
                onClick={close}
                className="block text-[14px] text-white"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
