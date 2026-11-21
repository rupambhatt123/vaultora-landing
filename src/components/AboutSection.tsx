"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import websiteData from "@/data/websiteData.json";

export interface AboutSectionProps {
  sectionId?: string;
  eyebrow?: string;
  headlineLine1?: string;
  headlineHighlight?: string;
  summary?: string;
  points?: string[];
  yearsValue?: number;
  yearsLabel?: string;
  bigImage?: string;
  bigImageAlt?: string;
  smallImage?: string;
  smallImageAlt?: string;
  topWord?: string;
  accentWord?: string;
  teamImage?: string;
  teamImageAlt?: string;
  officeImage?: string;
  officeImageAlt?: string;
  missionTitle?: string;
  missionText?: string;
  stats?: unknown;
}

const aboutData =
  websiteData.categories.FinanceBanking.sections.About.variants.VaultAbout1;

const NAVY = "#0A1F4A";
const NAVY_BADGE = "#0A2A52";
const GOLD = "#D4A63A";
const GOLD_LIGHT = "#F0CF7C";
const GOLD_DEEP = "#B58628";
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const font = "'Montserrat', 'Poppins', system-ui, sans-serif";

function CountUp({
  to,
  reduce,
}: {
  to: number;
  reduce: boolean | null;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: "some" });
  const [n, setN] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, to, {
      duration: 1.8,
      delay: 0.9,
      ease: "easeOut",
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, reduce]);

  return <span ref={ref}>{n}</span>;
}

function RevealWord({
  children,
  delay,
  className,
  style,
  reduce,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
  style?: React.CSSProperties;
  reduce: boolean | null;
}) {
  return (
    <span className="-mb-[0.18em] inline-block overflow-hidden pb-[0.18em] align-bottom">
      <motion.span
        className={`inline-block ${className ?? ""}`}
        style={style}
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

function CheckBadge({
  delay,
  reduce,
}: {
  delay: number;
  reduce: boolean | null;
}) {
  return (
    <motion.span
      className="relative inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full sm:h-9 sm:w-9 lg:h-10 lg:w-10"
      style={{
        background: `linear-gradient(145deg, ${GOLD_LIGHT} 0%, ${GOLD} 55%, ${GOLD_DEEP} 100%)`,
        boxShadow: "0 6px 16px rgba(181,134,40,0.35)",
      }}
      initial={reduce ? false : { scale: 0, rotate: -40 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ type: "spring", stiffness: 260, damping: 16, delay }}
    >
      {!reduce && (
        <motion.span
          aria-hidden
          className="absolute inset-0 rounded-full border-2"
          style={{ borderColor: GOLD }}
          animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
          transition={{
            duration: 2.4,
            delay: delay + 1,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      )}
      <svg
        viewBox="0 0 24 24"
        className="relative h-[52%] w-[52%]"
        fill="none"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <motion.path
          d="M5 12.5 L10 17.5 L19 7"
          initial={reduce ? false : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 0.5, delay: delay + 0.25, ease: "easeOut" }}
        />
      </svg>
    </motion.span>
  );
}

const DOT_COLS = 9;
const DOT_ROWS = 8;

export default function AboutSection({
  sectionId = aboutData.sectionId,
  eyebrow = aboutData.eyebrow,
  headlineLine1 = aboutData.headlineLine1,
  headlineHighlight = aboutData.headlineHighlight,
  summary = aboutData.summary,
  points = aboutData.points,
  yearsValue = aboutData.yearsValue,
  yearsLabel = aboutData.yearsLabel,
  bigImage = aboutData.bigImage,
  bigImageAlt = aboutData.bigImageAlt,
  smallImage = aboutData.smallImage,
  smallImageAlt = aboutData.smallImageAlt,
}: AboutSectionProps) {
  const reduce = useReducedMotion();

  const line1 = headlineLine1.split(" ");
  const line2 = headlineHighlight.split(" ");
  let n = 0;
  const next = () => 0.15 + 0.08 * n++;

  const labelParts = yearsLabel.split(" ");
  const labelTop = labelParts.slice(0, 2).join(" ");
  const labelBottom = labelParts.slice(2).join(" ");

  return (
    <section
      id={sectionId}
      className="relative isolate overflow-hidden py-12 sm:py-16 lg:py-20"
      style={{
        fontFamily: font,
        background: "linear-gradient(180deg, #FFFFFF 0%, #F5F8FD 100%)",
      }}
    >
      <style>{`@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap");`}</style>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-10 -z-10 h-[420px] w-[420px] rounded-full blur-3xl"
        style={{ background: "rgba(150,190,245,0.28)" }}
        animate={reduce ? undefined : { x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-[380px] w-[380px] rounded-full blur-3xl"
        style={{ background: "rgba(240,207,124,0.30)" }}
        animate={reduce ? undefined : { x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.10]"
        style={{
          backgroundImage: `radial-gradient(${NAVY} 1.2px, transparent 1.6px)`,
          backgroundSize: "24px 24px",
          WebkitMaskImage:
            "radial-gradient(60% 55% at 100% 0%, #000 0%, transparent 100%)",
          maskImage:
            "radial-gradient(60% 55% at 100% 0%, #000 0%, transparent 100%)",
        }}
      />
      <motion.svg
        aria-hidden
        viewBox="0 0 400 400"
        className="pointer-events-none absolute -right-40 top-1/2 -z-10 hidden h-[640px] w-[640px] -translate-y-1/2 opacity-60 lg:block"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        <circle
          cx="200"
          cy="200"
          r="190"
          fill="none"
          stroke={GOLD}
          strokeOpacity="0.28"
          strokeWidth="1.2"
          strokeDasharray="3 9"
        />
        <circle
          cx="200"
          cy="200"
          r="150"
          fill="none"
          stroke={NAVY}
          strokeOpacity="0.10"
          strokeWidth="1"
        />
        <circle cx="200" cy="10" r="5" fill={GOLD} fillOpacity="0.7" />
        <circle cx="350" cy="200" r="3.5" fill={NAVY} fillOpacity="0.35" />
      </motion.svg>

      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:gap-10 lg:px-8">
        <div
          className="relative mx-auto w-full max-w-[820px]"
          style={{ aspectRatio: "900 / 830", containerType: "inline-size" }}
        >
          <motion.div
            className="absolute inset-0"
            animate={reduce ? undefined : { y: [0, -7, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              aria-hidden
              viewBox="0 0 900 830"
              className="pointer-events-none absolute inset-0 h-full w-full"
              fill="none"
            >
              <defs>
                <linearGradient id="bracketGold" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor={GOLD_DEEP} />
                  <stop offset="50%" stopColor={GOLD_LIGHT} />
                  <stop offset="100%" stopColor={GOLD} />
                </linearGradient>
              </defs>
              <motion.path
                d="M25 190 L25 58 Q25 5 78 5 L212 5"
                stroke="url(#bracketGold)"
                strokeWidth="6"
                strokeLinecap="round"
                initial={reduce ? false : { pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: 0.3, ease: "easeInOut" }}
              />
            </svg>

            <svg
              aria-hidden
              viewBox="0 0 900 830"
              className="pointer-events-none absolute inset-0 h-full w-full"
            >
              {Array.from({ length: DOT_ROWS }).map((_, r) =>
                Array.from({ length: DOT_COLS }).map((__, c) => (
                  <motion.circle
                    key={`${r}-${c}`}
                    cx={5 + c * 39}
                    cy={535 + r * 36}
                    r="2.6"
                    fill={NAVY}
                    initial={reduce ? false : { opacity: 0, scale: 0 }}
                    whileInView={{ opacity: [0, 1, 0.75], scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.6 + (r + c) * 0.04,
                    }}
                    style={{ transformBox: "fill-box", transformOrigin: "center" }}
                  />
                ))
              )}
            </svg>

            <motion.div
              className="absolute z-10 overflow-hidden"
              style={{
                left: "5.11%",
                top: "3.37%",
                width: "66.89%",
                height: "76.63%",
                borderRadius: "4cqw",
                boxShadow: "0 24px 50px rgba(10,31,74,0.14)",
              }}
              initial={reduce ? false : { opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: "some" }}
              transition={{ duration: 0.9, ease: EASE }}
            >
              <img
                src={bigImage}
                alt={bigImageAlt}
                className="h-full w-full object-cover"
              />
              {!reduce && (
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 left-0 w-1/3 skew-x-[-18deg]"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",
                  }}
                  initial={{ x: "-150%" }}
                  animate={{ x: "420%" }}
                  transition={{
                    duration: 2,
                    delay: 1.6,
                    repeat: Infinity,
                    repeatDelay: 8,
                    ease: "easeInOut",
                  }}
                />
              )}
            </motion.div>

            <motion.div
              className="absolute z-20 flex items-center"
              style={{
                left: "58.11%",
                top: "10.24%",
                width: "38.89%",
                height: "15.42%",
                borderRadius: "3.1cqw",
                backgroundColor: NAVY_BADGE,
                boxShadow: "0 18px 36px rgba(10,42,82,0.30)",
                paddingLeft: "4.4cqw",
              }}
              initial={reduce ? false : { opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: "some" }}
              transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
            >
              <span
                className="font-bold leading-none"
                style={{
                  color: GOLD,
                  fontSize: "9cqw",
                  fontFamily: font,
                }}
              >
                <CountUp to={yearsValue} reduce={reduce} />
              </span>
              <span
                aria-hidden
                className="bg-white/35"
                style={{ width: "1px", height: "55%", margin: "0 2.8cqw" }}
              />
              <span
                className="font-medium leading-[1.35] text-white"
                style={{ fontSize: "2.2cqw" }}
              >
                {labelTop}
                {labelBottom && (
                  <>
                    <br />
                    {labelBottom}
                  </>
                )}
              </span>
              {!reduce && (
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    borderRadius: "3.1cqw",
                    boxShadow: "0 0 0 0 rgba(212,166,58,0.45)",
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(212,166,58,0.45)",
                      "0 0 0 14px rgba(212,166,58,0)",
                    ],
                  }}
                  transition={{
                    duration: 2.6,
                    delay: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              )}
            </motion.div>

            <motion.div
              className="group absolute z-20 bg-white"
              style={{
                left: "44.44%",
                top: "41.57%",
                width: "53.67%",
                height: "57.47%",
                borderRadius: "3.9cqw",
                padding: "1.33cqw",
                boxShadow: "0 22px 50px rgba(10,31,74,0.20)",
              }}
              initial={reduce ? false : { opacity: 0, y: 50, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: "some" }}
              transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
            >
              <div
                className="relative h-full w-full overflow-hidden"
                style={{ borderRadius: "2.7cqw" }}
              >
                <img
                  src={smallImage}
                  alt={smallImageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {!reduce && (
                  <motion.span
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 left-0 w-1/3 skew-x-[-18deg]"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",
                    }}
                    initial={{ x: "-150%" }}
                    animate={{ x: "420%" }}
                    transition={{
                      duration: 2,
                      delay: 4,
                      repeat: Infinity,
                      repeatDelay: 8,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="relative lg:pl-2">
          <motion.div
            className="flex items-center gap-3.5"
            initial={reduce ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <span
              className="text-xs font-extrabold uppercase tracking-[0.28em] sm:text-sm"
              style={{ color: NAVY }}
            >
              {eyebrow}
            </span>
            <motion.span
              aria-hidden
              className="h-[2.5px] w-12 origin-left sm:w-16 lg:w-20"
              style={{ backgroundColor: GOLD }}
              initial={reduce ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
            />
          </motion.div>

          <h2
            className="mt-3 text-[26px] font-extrabold leading-[1.15] tracking-tight sm:text-4xl lg:mt-4 lg:text-[40px]"
            style={{ color: NAVY }}
          >
            <span className="block">
              {line1.map((w, i) => (
                <React.Fragment key={`a-${i}`}>
                  <RevealWord delay={next()} reduce={reduce}>
                    {w}
                  </RevealWord>{" "}
                </React.Fragment>
              ))}
            </span>
            <span className="block">
              {line2.map((w, i) => (
                <React.Fragment key={`b-${i}`}>
                  <RevealWord
                    delay={next()}
                    reduce={reduce}
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(100deg, ${GOLD_DEEP} 0%, ${GOLD} 45%, ${GOLD_LIGHT} 60%, ${GOLD_DEEP} 100%)`,
                    }}
                  >
                    {w}
                  </RevealWord>{" "}
                </React.Fragment>
              ))}
            </span>
          </h2>

          <motion.p
            className="mt-4 max-w-xl text-sm font-medium leading-[1.7] text-[#3B4663] sm:text-[15px] lg:mt-5 lg:text-[16px]"
            initial={reduce ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
          >
            {summary}
          </motion.p>

          <ul className="mt-6 space-y-3.5 sm:space-y-4 lg:mt-7">
            {points.map((p, i) => (
              <motion.li
                key={p}
                className="group flex items-center gap-3.5 lg:gap-4"
                initial={reduce ? false : { opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: "some" }}
                transition={{ duration: 0.6, delay: 0.15 * i, ease: EASE }}
                whileHover={{ x: 6 }}
              >
                <CheckBadge delay={0.15 * i + 0.1} reduce={reduce} />
                <span
                  className="text-sm font-bold transition-colors duration-300 group-hover:text-[#B58628] sm:text-base lg:text-[17px]"
                  style={{ color: NAVY }}
                >
                  {p}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}