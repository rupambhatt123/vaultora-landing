"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import websiteData from "@/data/websiteData.json";

const testimonialsJson =
  websiteData.categories.FinanceBanking.sections.Testimonials.variants
    .VaultTestimonials1;

const NAVY = "#0B2350";
const GOLD = "#D4A024";
const GOLD_LIGHT = "#EDC45E";
const GOLD_DEEP = "#B98A1E";
const STAR = "#E0A100";
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const font = "'Montserrat', 'Poppins', system-ui, sans-serif";

interface TestimonialEntry {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
}

const TESTIMONIALS: TestimonialEntry[] = testimonialsJson.items.map((item) => ({
  id: item.id,
  quote: item.quote,
  name: item.name,
  role: item.role,
  avatar: item.avatar,
  rating: testimonialsJson.starCount,
}));

function QuoteMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 46 32"
      className={className}
      aria-hidden
      fill="currentColor"
    >
      <circle cx="11" cy="21" r="9.5" />
      <path d="M2 21 C2 9 9 3 19 1 L20.8 6 C15 8 13 11.5 13 16 Z" />
      <circle cx="35" cy="21" r="9.5" />
      <path d="M26 21 C26 9 33 3 43 1 L44.8 6 C39 8 37 11.5 37 16 Z" />
    </svg>
  );
}

function Star({ delay, reduce }: { delay: number; reduce: boolean | null }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5 lg:h-4 lg:w-4"
      fill={STAR}
      aria-hidden
      initial={reduce ? false : { scale: 0, rotate: -40, opacity: 0 }}
      whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 320, damping: 14, delay }}
    >
      <path d="M12 2.5 L14.9 8.8 L21.7 9.6 L16.6 14.2 L18 21 L12 17.6 L6 21 L7.4 14.2 L2.3 9.6 L9.1 8.8 Z" />
    </motion.svg>
  );
}

function Arrow({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {dir === "left" ? (
        <path d="M12.5 4 L6.5 10 L12.5 16" />
      ) : (
        <path d="M7.5 4 L13.5 10 L7.5 16" />
      )}
    </svg>
  );
}

const navBtnClass =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0B2350] shadow-[0_6px_18px_rgba(11,35,80,0.12)] transition-all duration-200 hover:scale-105 hover:border-[#EDC45E] hover:bg-gradient-to-br hover:from-[#EDC45E] hover:to-[#B98A1E] hover:text-white hover:shadow-[0_8px_20px_rgba(185,138,30,0.38)] active:scale-95 lg:h-12 lg:w-12";

export default function TestimonialsSection() {
  const reduce = useReducedMotion();
  const [startIndex, setStartIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const total = TESTIMONIALS.length;

  const visibleCards = [0, 1, 2].map(
    (offset) => TESTIMONIALS[(startIndex + offset) % total]
  );

  const handlePrev = () => {
    setDir(-1);
    setStartIndex((p) => (p - 1 + total) % total);
  };
  const handleNext = () => {
    setDir(1);
    setStartIndex((p) => (p + 1) % total);
  };
  const goTo = (i: number) => {
    setDir(i > startIndex ? 1 : -1);
    setStartIndex(i);
  };

  return (
    <section
      id={testimonialsJson.sectionId}
      className="relative isolate overflow-hidden py-9 sm:py-11 lg:py-12"
      style={{
        fontFamily: font,
        background: "linear-gradient(180deg, #FFFFFF 0%, #F6F8FC 100%)",
      }}
    >
      <style>{`@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap");`}</style>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 -z-10 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl"
        animate={reduce ? undefined : { x: [0, 40, 0], y: [0, 24, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl"
        animate={reduce ? undefined : { x: [0, -40, 0], y: [0, -24, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-6 left-[6%] -z-10 hidden text-[#D4A024]/[0.07] lg:block"
        animate={reduce ? undefined : { y: [0, 14, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      >
        <QuoteMark className="h-48 w-72" />
      </motion.div>

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <span
              aria-hidden
              className="h-[3px] w-10 rounded-full sm:w-14 lg:w-20"
              style={{ backgroundColor: GOLD }}
            />
            <span
              className="text-[11px] font-extrabold uppercase tracking-[0.3em] sm:text-xs lg:text-sm"
              style={{ color: NAVY }}
            >
              {testimonialsJson.badge}
            </span>
            <span
              aria-hidden
              className="h-[3px] w-10 rounded-full sm:w-14 lg:w-20"
              style={{ backgroundColor: GOLD }}
            />
          </div>

          <h2
            className="mt-2.5 text-[28px] font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[42px]"
            style={{ color: NAVY }}
          >
            {testimonialsJson.titlePrefix}{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(100deg, ${GOLD_DEEP} 0%, ${GOLD} 50%, ${GOLD_LIGHT} 70%, ${GOLD_DEEP} 100%)`,
              }}
            >
              {testimonialsJson.titleHighlight}
            </span>
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-slate-700 sm:text-base lg:max-w-2xl lg:text-[17px]">
            {testimonialsJson.subtitle}
          </p>
        </motion.div>

        <div className="mt-6 lg:mt-8 lg:grid lg:grid-cols-[52px_minmax(0,1fr)_52px] lg:items-center lg:gap-3">
          <div className="hidden justify-center lg:flex">
            <button
              type="button"
              onClick={handlePrev}
              aria-label={testimonialsJson.prevAriaLabel}
              className={navBtnClass}
            >
              <Arrow dir="left" />
            </button>
          </div>

          <motion.div
            key={startIndex}
            initial={reduce ? false : { opacity: 0, x: dir * 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5"
          >
            {visibleCards.map((item, idx) => (
              <motion.article
                key={`${item.id}-${idx}`}
                whileHover={reduce ? undefined : { y: -4 }}
                className={`group flex flex-col justify-between rounded-[24px] border border-slate-200/80 bg-white p-5 shadow-[0_4px_18px_rgba(11,35,80,0.05)] transition-shadow duration-300 hover:shadow-[0_14px_32px_rgba(11,35,80,0.11)] lg:rounded-[28px] lg:p-6 ${
                  idx === 1 ? "hidden md:flex" : ""
                } ${idx === 2 ? "hidden lg:flex" : ""}`}
              >
                <div>
                  <motion.span
                    className="block origin-left text-[#D4A024]"
                    initial={reduce ? false : { scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 240,
                      damping: 16,
                      delay: 0.12 + idx * 0.06,
                    }}
                  >
                    <QuoteMark className="h-6 w-9 lg:h-7 lg:w-10" />
                  </motion.span>
                  <p
                    className="mt-2.5 text-sm leading-[1.65] sm:text-[15px] lg:mt-3.5 lg:text-[15px] lg:leading-[1.65]"
                    style={{ color: "#1E2A4A" }}
                  >
                    {item.quote}
                  </p>
                </div>

                <div className="mt-4 lg:mt-6">
                  <span
                    aria-hidden
                    className="mb-3.5 block h-[3px] w-9 rounded-full transition-all duration-300 group-hover:w-14 lg:mb-4 lg:w-11"
                    style={{ backgroundColor: GOLD }}
                  />
                  <div className="flex items-center gap-3 lg:gap-3.5">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="h-12 w-12 shrink-0 rounded-full object-cover object-top ring-2 ring-white shadow-[0_6px_16px_rgba(11,35,80,0.18)] transition-transform duration-300 group-hover:scale-105 lg:h-14 lg:w-14"
                      style={{ aspectRatio: "1 / 1" }}
                    />
                    <div className="min-w-0">
                      <h3
                        className="truncate text-base font-extrabold leading-tight lg:text-[17px]"
                        style={{ color: NAVY }}
                      >
                        {item.name}
                      </h3>
                      <p className="mt-0.5 truncate text-xs text-slate-600 lg:text-[13px]">
                        {item.role}
                      </p>
                      <div className="mt-1.5 flex items-center gap-1">
                        {Array.from({ length: item.rating }).map((_, s) => (
                          <Star
                            key={s}
                            delay={0.2 + s * 0.06}
                            reduce={reduce}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <div className="hidden justify-center lg:flex">
            <button
              type="button"
              onClick={handleNext}
              aria-label={testimonialsJson.nextAriaLabel}
              className={navBtnClass}
            >
              <Arrow dir="right" />
            </button>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-4 lg:mt-6">
          <button
            type="button"
            onClick={handlePrev}
            aria-label={testimonialsJson.prevAriaLabel}
            className={`${navBtnClass} lg:hidden`}
          >
            <Arrow dir="left" />
          </button>

          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.id}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: startIndex === i ? 22 : 8,
                  backgroundColor: startIndex === i ? GOLD_DEEP : "#CBD5E1",
                }}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label={testimonialsJson.nextAriaLabel}
            className={`${navBtnClass} lg:hidden`}
          >
            <Arrow dir="right" />
          </button>
        </div>
      </div>
    </section>
  );
}

