"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import websiteData from "@/data/websiteData.json";

const headerJson =
  websiteData.categories.FinanceBanking.sections.Header.variants.VaultHeader1;

const ALL_TARGETS = [
  ...headerJson.navLinks.map((item) => item.href),
  headerJson.ctaButton.href,
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState(headerJson.homeHref);

  useEffect(() => {
    const sections = ALL_TARGETS.map((href) => ({
      href,
      el: document.querySelector<HTMLElement>(href),
    })).filter((entry): entry is { href: string; el: HTMLElement } =>
      Boolean(entry.el)
    );

    if (!sections.length) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      if (window.scrollY < 100) {
        setActiveHref(headerJson.homeHref);
        return;
      }

      for (let idx = sections.length - 1; idx >= 0; idx -= 1) {
        const current = sections[idx];
        if (current.el.offsetTop <= scrollPosition) {
          setActiveHref(current.href);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isContactActive = activeHref === headerJson.ctaButton.href;

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:h-24 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <a
            href={headerJson.homeHref}
            aria-label={headerJson.homeAriaLabel}
            className="flex shrink-0 items-center gap-2.5"
          >
            <img
              src={headerJson.logo}
              alt={headerJson.homeAriaLabel}
              className="h-14 w-auto max-w-[220px] object-contain sm:h-16 sm:max-w-[250px]"
            />
          </a>

          <span className="hidden h-7 w-px bg-slate-200 xl:block" />

          <nav className="hidden items-center gap-6 xl:flex">
            {headerJson.navLinks.map((item) => {
              const isActive = activeHref === item.href;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setActiveHref(item.href)}
                  className={`relative py-1 text-[15px] font-bold transition-colors ${
                    isActive
                      ? "text-[#b58b2a]"
                      : "text-[#0b233d] hover:text-[#b58b2a]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-[#e4b649]" />
                  )}
                </a>
              );
            })}
          </nav>
        </div>

        <div className="hidden items-center md:flex">
          <a
            href={headerJson.ctaButton.href}
            onClick={() => setActiveHref(headerJson.ctaButton.href)}
            className={`inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              isContactActive
                ? "bg-[#b58b2a] text-[#072242] ring-2 ring-[#e4b649]"
                : "bg-[#072242] text-white hover:bg-[#0c325e]"
            }`}
          >
            <Phone
              className={`h-4 w-4 ${
                isContactActive ? "text-[#072242]" : "text-white"
              }`}
            />
            <span>{headerJson.ctaButton.label}</span>
            <ArrowRight
              className={`h-4 w-4 ${
                isContactActive ? "text-[#072242]" : "text-white"
              }`}
            />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={headerJson.menuAriaLabel}
          className="inline-flex items-center justify-center rounded-lg p-2 text-[#082545] xl:hidden"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-slate-100 bg-white xl:hidden"
          >
            <div className="space-y-2 px-4 py-4">
              {headerJson.navLinks.map((item) => {
                const isActive = activeHref === item.href;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => {
                      setActiveHref(item.href);
                      setMobileOpen(false);
                    }}
                    className={`block rounded-md px-3 py-2.5 text-[15px] font-bold ${
                      isActive
                        ? "bg-amber-50 text-[#b58b2a]"
                        : "text-[#0b233d] hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="pt-2">
                <a
                  href={headerJson.ctaButton.href}
                  onClick={() => {
                    setActiveHref(headerJson.ctaButton.href);
                    setMobileOpen(false);
                  }}
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${
                    isContactActive
                      ? "bg-[#b58b2a] text-[#072242] ring-2 ring-[#e4b649]"
                      : "bg-[#072242] text-white"
                  }`}
                >
                  <Phone className="h-4 w-4" />
                  <span>{headerJson.ctaButton.label}</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}