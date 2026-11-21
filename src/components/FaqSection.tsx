"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import websiteData from "@/data/websiteData.json";

const NAVY = "#0B2350";
const GOLD = "#D4A024";
const GOLD_LIGHT = "#EDC45E";
const GOLD_DEEP = "#B98A1E";
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const font = "'Montserrat', 'Poppins', system-ui, sans-serif";

const faqJson =
  websiteData.categories.FinanceBanking.sections.Faq.variants.VaultFaq1;

export default function FaqSection() {
  const reduce = useReducedMotion();
  const [openKey, setOpenKey] = useState<string | null>(
    faqJson.defaultOpenKey ?? null
  );

  const toggleItem = (key: string) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };

  return (
    <section
      id={faqJson.sectionId}
      className="relative isolate overflow-hidden py-8 sm:py-10 lg:py-12"
      style={{
        fontFamily: font,
        background: "linear-gradient(180deg, #FFFFFF 0%, #F6F8FC 100%)",
      }}
    >
      <style>{`@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap");`}</style>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-16 -z-10 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl"
        animate={reduce ? undefined : { x: [0, 40, 0], y: [0, 24, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl"
        animate={reduce ? undefined : { x: [0, -40, 0], y: [0, -24, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(${NAVY} 1.2px, transparent 1.6px)`,
          backgroundSize: "24px 24px",
          WebkitMaskImage:
            "radial-gradient(40% 50% at 0% 100%, #000 0%, transparent 100%)",
          maskImage:
            "radial-gradient(40% 50% at 0% 100%, #000 0%, transparent 100%)",
        }}
      />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="flex items-center justify-center gap-2.5 sm:gap-4">
            <span
              aria-hidden
              className="h-[3px] w-7 rounded-full sm:w-14 lg:w-20"
              style={{ backgroundColor: GOLD }}
            />
            <span
              className="whitespace-nowrap text-[11px] font-extrabold uppercase tracking-[0.25em] sm:text-xs sm:tracking-[0.28em] lg:text-sm"
              style={{ color: NAVY }}
            >
              {faqJson.badge}
            </span>
            <span
              aria-hidden
              className="h-[3px] w-7 rounded-full sm:w-14 lg:w-20"
              style={{ backgroundColor: GOLD }}
            />
          </div>

          <h2
            className="mt-2.5 whitespace-nowrap text-[20px] font-extrabold leading-tight tracking-tight sm:text-4xl lg:mt-3 lg:text-[42px]"
            style={{ color: NAVY }}
          >
            {faqJson.titlePrefix}{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(100deg, ${GOLD_DEEP} 0%, ${GOLD} 50%, ${GOLD_LIGHT} 70%, ${GOLD_DEEP} 100%)`,
              }}
            >
              {faqJson.titleHighlight}
            </span>
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-[13px] leading-relaxed text-slate-700 sm:mt-2.5 sm:text-base lg:max-w-2xl lg:text-[17px]">
            {faqJson.subtitle}
          </p>
        </motion.div>

        <div className="mt-6 grid grid-cols-1 items-start gap-3 sm:mt-7 sm:gap-4 lg:mt-8 lg:grid-cols-2 lg:gap-5">
          <div className="space-y-3">
            {faqJson.leftItems.map((item, idx) => {
              const key = `left-${idx}`;
              const isOpen = openKey === key;
              return (
                <motion.div
                  key={item.question}
                  initial={reduce ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: idx * 0.08, ease: EASE }}
                  className="overflow-hidden rounded-[16px] border border-slate-200/80 bg-white shadow-[0_4px_14px_rgba(11,35,80,0.04)]"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(key)}
                    className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-[13.5px] font-bold leading-snug transition-colors sm:px-5 sm:py-3.5 sm:text-[15px]"
                    style={{
                      backgroundColor: isOpen ? GOLD_DEEP : "#FFFFFF",
                      color: isOpen ? "#FFFFFF" : NAVY,
                    }}
                  >
                    <span>{item.question}</span>
                    {isOpen ? (
                      <Minus className="h-4 w-4 shrink-0 text-white" />
                    ) : (
                      <Plus
                        className="h-4 w-4 shrink-0"
                        style={{ color: GOLD }}
                      />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={reduce ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: reduce ? 0 : 0.25, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <div className="bg-[#F3F5F8] px-4 py-3 text-[13px] leading-relaxed text-slate-700 sm:px-5 sm:py-3.5 sm:text-sm">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          <div className="space-y-3">
            {faqJson.rightItems.map((item, idx) => {
              const key = `right-${idx}`;
              const isOpen = openKey === key;
              return (
                <motion.div
                  key={item.question}
                  initial={reduce ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: idx * 0.08, ease: EASE }}
                  className="overflow-hidden rounded-[16px] border border-slate-200/80 bg-white shadow-[0_4px_14px_rgba(11,35,80,0.04)]"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(key)}
                    className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-[13.5px] font-bold leading-snug transition-colors sm:px-5 sm:py-3.5 sm:text-[15px]"
                    style={{
                      backgroundColor: isOpen ? GOLD_DEEP : "#FFFFFF",
                      color: isOpen ? "#FFFFFF" : NAVY,
                    }}
                  >
                    <span>{item.question}</span>
                    {isOpen ? (
                      <Minus className="h-4 w-4 shrink-0 text-white" />
                    ) : (
                      <Plus
                        className="h-4 w-4 shrink-0"
                        style={{ color: GOLD }}
                      />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={reduce ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: reduce ? 0 : 0.25, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <div className="bg-[#F3F5F8] px-4 py-3 text-[13px] leading-relaxed text-slate-700 sm:px-5 sm:py-3.5 sm:text-sm">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}