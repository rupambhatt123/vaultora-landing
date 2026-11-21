"use client";

import React, { useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import websiteData from "@/data/websiteData.json";

const whyChooseJson =
  websiteData.categories.FinanceBanking.sections.WhyChooseUs.variants
    .VaultWhyChoose1;

const NAVY = "#0B2350";
const GOLD = "#D4A63A";
const GOLD_DEEP = "#B58628";
const GOLD_LIGHT = "#F0CF7C";
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const font = "'Montserrat', 'Poppins', system-ui, sans-serif";

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.9, ease: "easeInOut" },
  },
};
const grow: Variants = {
  hidden: { scaleY: 0 },
  show: { scaleY: 1, transition: { duration: 0.6, ease: EASE } },
};
const barStyle = { transformBox: "fill-box", transformOrigin: "bottom" } as const;

function IconSvg({
  children,
  reveal,
  reduce,
  delay,
}: {
  children: React.ReactNode;
  reveal: boolean;
  reduce: boolean | null;
  delay: number;
}) {
  const parent: Variants = {
    hidden: {},
    show: { transition: { delayChildren: delay, staggerChildren: 0.28 } },
  };
  const trigger = reveal
    ? { whileInView: "show", viewport: { once: true, amount: 0.8 } }
    : { animate: "show" };
  return (
    <motion.svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden
      className="h-[54%] w-[54%]"
      variants={parent}
      initial={reduce ? "show" : "hidden"}
      {...trigger}
    >
      {children}
    </motion.svg>
  );
}

type IconProps = { reveal: boolean; reduce: boolean | null; delay: number };

const ShieldIcon = (p: IconProps) => (
  <IconSvg {...p}>
    <motion.path
      variants={draw}
      d="M32 6 L53 14 V30 C53 43 44 51 32 58 C20 51 11 43 11 30 V14 Z"
      stroke={NAVY}
      strokeWidth="4.6"
      strokeLinejoin="round"
    />
    <motion.path
      variants={draw}
      d="M21 32 L29 40 L44 24"
      stroke={GOLD}
      strokeWidth="5.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconSvg>
);

const TeamIcon = (p: IconProps) => (
  <IconSvg {...p}>
    <motion.circle
      variants={draw}
      cx="14"
      cy="28"
      r="5.2"
      stroke={NAVY}
      strokeWidth="3.4"
    />
    <motion.path
      variants={draw}
      d="M5 47 C5 39 9 36 14 36"
      stroke={NAVY}
      strokeWidth="3.4"
      strokeLinecap="round"
    />
    <motion.circle
      variants={draw}
      cx="50"
      cy="28"
      r="5.2"
      stroke={NAVY}
      strokeWidth="3.4"
    />
    <motion.path
      variants={draw}
      d="M59 47 C59 39 55 36 50 36"
      stroke={NAVY}
      strokeWidth="3.4"
      strokeLinecap="round"
    />
    <motion.circle
      variants={draw}
      cx="32"
      cy="19"
      r="7.5"
      stroke={GOLD}
      strokeWidth="3.8"
    />
    <motion.path
      variants={draw}
      d="M18 49 C18 38 24 32 32 32 C40 32 46 38 46 49"
      stroke={GOLD}
      strokeWidth="3.8"
      strokeLinecap="round"
    />
  </IconSvg>
);

const LayersIcon = (p: IconProps) => (
  <IconSvg {...p}>
    <motion.path
      variants={draw}
      d="M32 9 L55 21 L32 33 L9 21 Z"
      stroke={GOLD}
      strokeWidth="4"
      strokeLinejoin="round"
    />
    <motion.path
      variants={draw}
      d="M9 32 L32 44 L55 32"
      stroke={NAVY}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <motion.path
      variants={draw}
      d="M9 43 L32 55 L55 43"
      stroke={NAVY}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconSvg>
);

const GrowthIcon = (p: IconProps) => (
  <IconSvg {...p}>
    <motion.rect
      variants={grow}
      style={barStyle}
      x="8"
      y="46"
      width="10"
      height="9"
      rx="2"
      fill={NAVY}
    />
    <motion.rect
      variants={grow}
      style={barStyle}
      x="22"
      y="38"
      width="10"
      height="17"
      rx="2"
      fill={NAVY}
    />
    <motion.rect
      variants={grow}
      style={barStyle}
      x="36"
      y="30"
      width="10"
      height="25"
      rx="2"
      fill={NAVY}
    />
    <motion.rect
      variants={grow}
      style={barStyle}
      x="50"
      y="20"
      width="9"
      height="35"
      rx="2"
      fill={NAVY}
    />
    <motion.path
      variants={draw}
      d="M7 36 C 22 33 36 25 53 11"
      stroke={GOLD}
      strokeWidth="4.2"
      strokeLinecap="round"
    />
    <motion.path
      variants={draw}
      d="M42 9 H55 V22"
      stroke={GOLD}
      strokeWidth="4.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconSvg>
);

function resolveFeatureIcon(
  iconKey: string
): (p: IconProps) => React.ReactElement {
  switch (iconKey) {
    case "shield":
      return ShieldIcon;
    case "team":
      return TeamIcon;
    case "layers":
      return LayersIcon;
    case "growth":
      return GrowthIcon;
    default:
      return ShieldIcon;
  }
}

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  Icon: (p: IconProps) => React.ReactElement;
}

const FEATURES: FeatureItem[] = whyChooseJson.features.map((item) => ({
  id: item.id,
  title: item.title,
  description: item.description,
  Icon: resolveFeatureIcon(item.icon),
}));

function RevealWord({
  children,
  delay,
  gold,
  reduce,
}: {
  children: React.ReactNode;
  delay: number;
  gold?: boolean;
  reduce: boolean | null;
}) {
  return (
    <span className="-mb-[0.2em] inline-block overflow-hidden pb-[0.2em] align-bottom">
      <motion.span
        className={`inline-block ${gold ? "bg-clip-text text-transparent" : ""}`}
        style={
          gold
            ? {
                backgroundImage: `linear-gradient(100deg, ${GOLD_DEEP} 0%, ${GOLD} 45%, ${GOLD_LIGHT} 62%, ${GOLD_DEEP} 100%)`,
              }
            : undefined
        }
        initial={reduce ? false : { y: "115%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: "some" }}
        transition={{ duration: 0.85, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function FeatureColumn({
  item,
  idx,
  isLast,
  reveal,
  reduce,
}: {
  item: FeatureItem;
  idx: number;
  isLast: boolean;
  reveal: boolean;
  reduce: boolean | null;
}) {
  const revealProps =
    reveal && !reduce
      ? {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: "some" as const },
          transition: { duration: 0.7, delay: idx * 0.12, ease: EASE },
        }
      : {};

  const { Icon } = item;

  return (
    <motion.div
      {...revealProps}
      className="group relative flex flex-col items-center px-3 py-1.5 text-center sm:px-4"
    >
      {!isLast && (
        <motion.span
          aria-hidden
          className="absolute right-0 top-[16%] hidden h-[80%] w-px origin-top bg-gradient-to-b from-transparent via-slate-300/80 to-transparent lg:block"
          initial={reduce || !reveal ? false : { scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 0.9, delay: 0.5 + idx * 0.12 }}
        />
      )}

      <motion.div
        className="relative"
        animate={reduce ? undefined : { y: [0, -6, 0] }}
        transition={{
          duration: 4.5,
          delay: idx * 0.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {!reduce && (
          <motion.span
            aria-hidden
            className="absolute inset-0 rounded-[20px] border-2 lg:rounded-[24px]"
            style={{ borderColor: GOLD }}
            animate={{ scale: [1, 1.28], opacity: [0.4, 0] }}
            transition={{
              duration: 2.8,
              delay: 1 + idx * 0.5,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        )}
        <motion.div
          whileHover={reduce ? undefined : { scale: 1.07, rotate: -2 }}
          transition={{ type: "spring", stiffness: 280, damping: 16 }}
          className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-[20px] bg-[#F3F5F9] shadow-[0_6px_20px_rgba(11,35,80,0.07)] transition-all duration-300 group-hover:bg-[#FBF3DD] group-hover:shadow-[0_16px_36px_rgba(181,134,40,0.28)] sm:h-20 sm:w-20 lg:h-24 lg:w-24 lg:rounded-[24px]"
        >
          <Icon reveal={reveal} reduce={reduce} delay={0.3 + idx * 0.12} />
          {!reduce && (
            <motion.span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-1/3 skew-x-[-18deg]"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
              }}
              initial={{ x: "-150%" }}
              animate={{ x: "420%" }}
              transition={{
                duration: 1.6,
                delay: 2 + idx * 0.7,
                repeat: Infinity,
                repeatDelay: 6,
                ease: "easeInOut",
              }}
            />
          )}
        </motion.div>
      </motion.div>

      <h3
        className="mt-3.5 text-base font-extrabold leading-tight sm:text-lg lg:mt-4 lg:text-[20px]"
        style={{ color: NAVY }}
      >
        {item.title}
      </h3>
      <span
        aria-hidden
        className="mt-2 block h-[3px] w-8 rounded-full transition-all duration-300 group-hover:w-14"
        style={{ backgroundColor: GOLD }}
      />
      <p className="mt-2 max-w-[16em] text-xs leading-relaxed text-slate-700 sm:text-sm lg:text-[14px]">
        {item.description}
      </p>
    </motion.div>
  );
}

const SPARKLES = [
  { l: 8, t: 18, d: 7, s: 5 },
  { l: 90, t: 30, d: 9, s: 4 },
  { l: 20, t: 72, d: 8, s: 4 },
  { l: 78, t: 80, d: 10, s: 5 },
  { l: 50, t: 8, d: 11, s: 3 },
];

const line1Words = whyChooseJson.titleLine1.split(" ");
const highlightWords = whyChooseJson.titleHighlight.split(" ");

export default function WhyChooseUsSection() {
  const reduce = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const lastIndex = FEATURES.length - 1;

  const slideBy = (delta: number) =>
    setActiveIndex((prev) => Math.min(lastIndex, Math.max(0, prev + delta)));

  let w = 0;
  const next = () => 0.1 + 0.09 * w++;

  return (
    <section
      id={whyChooseJson.sectionId}
      className="relative isolate scroll-mt-20 overflow-hidden py-8 sm:py-10 lg:py-12"
      style={{
        fontFamily: font,
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #F4F7FB 55%, #FFFFFF 100%)",
      }}
    >
      <style>{`@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap");`}</style>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-28 top-6 -z-10 h-80 w-80 rounded-full bg-sky-300/25 blur-3xl"
        animate={reduce ? undefined : { x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-28 bottom-6 -z-10 h-80 w-80 rounded-full bg-amber-200/35 blur-3xl"
        animate={reduce ? undefined : { x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.09]"
        style={{
          backgroundImage: `radial-gradient(${NAVY} 1.2px, transparent 1.6px)`,
          backgroundSize: "24px 24px",
          WebkitMaskImage:
            "radial-gradient(45% 55% at 0% 0%, #000 0%, transparent 100%), radial-gradient(45% 55% at 100% 100%, #000 0%, transparent 100%)",
          maskImage:
            "radial-gradient(45% 55% at 0% 0%, #000 0%, transparent 100%), radial-gradient(45% 55% at 100% 100%, #000 0%, transparent 100%)",
        }}
      />
      <motion.svg
        aria-hidden
        viewBox="0 0 400 400"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 hidden h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/3 opacity-50 lg:block"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
      >
        <circle
          cx="200"
          cy="200"
          r="190"
          fill="none"
          stroke={GOLD}
          strokeOpacity="0.3"
          strokeWidth="1.2"
          strokeDasharray="3 9"
        />
        <circle
          cx="200"
          cy="200"
          r="150"
          fill="none"
          stroke={NAVY}
          strokeOpacity="0.08"
          strokeWidth="1"
        />
        <circle cx="200" cy="10" r="5" fill={GOLD} fillOpacity="0.7" />
        <circle cx="390" cy="200" r="3.5" fill={NAVY} fillOpacity="0.3" />
      </motion.svg>
      {!reduce &&
        SPARKLES.map((s, i) => (
          <motion.span
            key={i}
            aria-hidden
            className="pointer-events-none absolute -z-10 rounded-full"
            style={{
              left: `${s.l}%`,
              top: `${s.t}%`,
              width: s.s,
              height: s.s,
              backgroundColor: GOLD,
              boxShadow: "0 0 12px 2px rgba(212,166,58,0.5)",
            }}
            animate={{ y: [0, -22, 0], opacity: [0.2, 0.9, 0.2] }}
            transition={{
              duration: s.d,
              delay: i * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            className="flex items-center justify-center gap-3 sm:gap-4"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <motion.span
              aria-hidden
              className="h-[3px] w-10 origin-right rounded-full sm:w-14 lg:w-20"
              style={{ backgroundColor: GOLD }}
              initial={reduce ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: "some" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <span
              className="text-[11px] font-extrabold uppercase tracking-[0.28em] sm:text-xs lg:text-sm"
              style={{ color: NAVY }}
            >
              {whyChooseJson.badge}
            </span>
            <motion.span
              aria-hidden
              className="h-[3px] w-10 origin-left rounded-full sm:w-14 lg:w-20"
              style={{ backgroundColor: GOLD }}
              initial={reduce ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: "some" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>

          <h2
            className="mt-2.5 text-[26px] font-extrabold leading-[1.15] tracking-tight sm:text-4xl lg:mt-3 lg:text-[42px]"
            style={{ color: NAVY }}
          >
            <span className="block">
              {line1Words.map((word, idx) => (
                <React.Fragment key={`${word}-${idx}`}>
                  <RevealWord delay={next()} reduce={reduce}>
                    {word}
                  </RevealWord>{" "}
                </React.Fragment>
              ))}
            </span>
            <span className="block">
              {whyChooseJson.titleLine2Prefix && (
                <>
                  <RevealWord delay={next()} reduce={reduce}>
                    {whyChooseJson.titleLine2Prefix}
                  </RevealWord>{" "}
                </>
              )}
              {highlightWords.map((word, idx) => (
                <React.Fragment key={`${word}-${idx}`}>
                  <RevealWord delay={next()} gold reduce={reduce}>
                    {word}
                  </RevealWord>{" "}
                </React.Fragment>
              ))}
            </span>
          </h2>

          <motion.p
            className="mx-auto mt-2.5 max-w-xl text-sm leading-relaxed text-slate-700 sm:text-base lg:mt-3 lg:max-w-2xl lg:text-[17px]"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 0.65, delay: 0.15, ease: EASE }}
          >
            {whyChooseJson.subtitle}
          </motion.p>
        </div>

        <div className="mt-6 hidden grid-cols-2 gap-x-4 gap-y-6 sm:grid lg:mt-8 lg:grid-cols-4 lg:gap-0">
          {FEATURES.map((item, idx) => (
            <FeatureColumn
              key={item.id}
              item={item}
              idx={idx}
              isLast={idx === lastIndex}
              reveal
              reduce={reduce}
            />
          ))}
        </div>

        <div
          className="mt-6 sm:hidden"
          role="region"
          aria-roledescription="carousel"
          aria-label="Why choose us"
        >
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={
                reduce
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 260, damping: 30 }
              }
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.18}
              onDragEnd={(_, info) => {
                if (info.offset.x < -50 || info.velocity.x < -350) slideBy(1);
                else if (info.offset.x > 50 || info.velocity.x > 350)
                  slideBy(-1);
              }}
            >
              {FEATURES.map((item, idx) => (
                <div
                  key={item.id}
                  className="w-full shrink-0 px-2 py-2"
                  aria-hidden={idx !== activeIndex}
                >
                  <FeatureColumn
                    item={item}
                    idx={idx}
                    isLast
                    reveal={false}
                    reduce={reduce}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-4 flex items-center justify-between gap-3 px-1">
            <button
              type="button"
              onClick={() => slideBy(-1)}
              disabled={activeIndex === 0}
              aria-label="Previous reason"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white shadow-md transition active:scale-95 disabled:opacity-35 disabled:shadow-none"
              style={{ color: NAVY }}
            >
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
                <path d="M12.5 4 L6.5 10 L12.5 16" />
              </svg>
            </button>

            <div className="flex items-center gap-1.5" aria-hidden>
              {FEATURES.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  tabIndex={-1}
                  onClick={() => setActiveIndex(idx)}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: idx === activeIndex ? 22 : 8,
                    backgroundColor: idx === activeIndex ? GOLD : "#CBD5E1",
                  }}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => slideBy(1)}
              disabled={activeIndex === lastIndex}
              aria-label="Next reason"
              className="flex h-11 w-11 items-center justify-center rounded-full shadow-md transition active:scale-95 disabled:opacity-35 disabled:shadow-none"
              style={{
                color: NAVY,
                background: `linear-gradient(135deg, ${GOLD_LIGHT}, ${GOLD})`,
              }}
            >
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
                <path d="M7.5 4 L13.5 10 L7.5 16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}