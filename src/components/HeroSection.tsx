"use client";

import React from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import websiteData from "@/data/websiteData.json";

export interface HeroCta {
  label: string;
  href: string;
}

export interface HeroSectionProps {
  sectionId?: string;
  eyebrow?: string;
  headlineLine1?: string;
  headlinePrefix?: string;
  headlineHighlight?: string;
  headlineEnd?: string;
  subheadline?: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  image?: string;
  imageAlt?: string;
  roles?: unknown;
  bursts?: unknown;
}

const bannerJson =
  websiteData.categories.FinanceBanking.sections.Banner.variants.VaultBanner1;

const GOLD = "#E3B65B";
const GOLD_LIGHT = "#F8E1A4";
const GOLD_DEEP = "#B88A2D";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const PARTICLES = [
  { l: 6, s: 4, d: 9, t: 0 },
  { l: 14, s: 3, d: 11, t: 2 },
  { l: 22, s: 5, d: 10, t: 4 },
  { l: 30, s: 3, d: 12, t: 1 },
  { l: 38, s: 4, d: 9, t: 6 },
  { l: 10, s: 3, d: 13, t: 7 },
  { l: 26, s: 4, d: 11, t: 3 },
  { l: 44, s: 3, d: 10, t: 5 },
  { l: 18, s: 5, d: 12, t: 8 },
  { l: 34, s: 3, d: 14, t: 9 },
];

function Word({
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
    <span className="-mb-[0.14em] inline-block overflow-hidden pb-[0.14em] align-bottom">
      <motion.span
        className="inline-block"
        style={gold ? { color: GOLD } : undefined}
        initial={reduce ? false : { y: "115%", opacity: 0 }}
        animate={
          gold && !reduce
            ? {
                y: 0,
                opacity: 1,
                textShadow: [
                  "0 0 0px rgba(227,182,91,0)",
                  "0 0 26px rgba(227,182,91,0.55)",
                  "0 0 0px rgba(227,182,91,0)",
                ],
              }
            : { y: 0, opacity: 1 }
        }
        transition={{
          y: { duration: 0.85, delay, ease: EASE },
          opacity: { duration: 0.6, delay },
          textShadow: {
            duration: 3.6,
            delay: delay + 1,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}

const defaultPrimaryCta: HeroCta = {
  label: bannerJson.buttons[0].label,
  href: bannerJson.buttons[0].href,
};

const defaultSecondaryCta: HeroCta = {
  label: bannerJson.buttons[1].label,
  href: bannerJson.buttons[1].href,
};

export default function HeroSection({
  sectionId = bannerJson.sectionId,
  eyebrow = bannerJson.eyebrow,
  headlineLine1 = bannerJson.headlinePrefix,
  headlinePrefix = "",
  headlineHighlight = bannerJson.headlineHighlight,
  headlineEnd,
  subheadline = bannerJson.description,
  primaryCta = defaultPrimaryCta,
  secondaryCta = defaultSecondaryCta,
  image = bannerJson.backgroundImage,
  imageAlt = bannerJson.backgroundAlt,
}: HeroSectionProps) {
  const reduce = useReducedMotion();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const photoX = useTransform(sx, [-1, 1], [-18, 18]);
  const photoY = useTransform(sy, [-1, 1], [-10, 10]);
  const arcX = useTransform(sx, [-1, 1], [14, -14]);
  const arcY = useTransform(sy, [-1, 1], [8, -8]);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 2);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 2);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const line1 = headlineLine1.split(" ");
  const highlight = headlineHighlight.split(" ");
  const end = headlineEnd ? headlineEnd.split(" ") : [];

  let n = 0;
  const next = () => 0.45 + 0.09 * n++;

  return (
    <section
      id={sectionId}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative isolate overflow-hidden text-white"
      style={{
        fontFamily: "'Montserrat', 'Poppins', 'Inter', system-ui, sans-serif",
        background:
          "radial-gradient(60% 80% at 8% 12%, #1A4685 0%, rgba(26,70,133,0) 70%)," +
          "linear-gradient(100deg, #0A2250 0%, #0C2B5C 45%, #11386B 100%)",
      }}
    >
      <style>{`@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");`}</style>

      <motion.svg
        aria-hidden
        viewBox="0 0 600 600"
        className="pointer-events-none absolute -left-10 -top-10 -z-10 h-[75%] w-[45%] min-w-[320px]"
        style={{ x: arcX, y: arcY }}
        animate={reduce ? undefined : { rotate: [0, 2, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      >
        <defs>
          <linearGradient id="arcFill" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#2E64A8" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#2E64A8" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0 330 C 60 170, 190 40, 330 0 L0 0 Z" fill="url(#arcFill)" />
        <path
          d="M0 330 C 60 170, 190 40, 330 0"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1.5"
          fill="none"
        />
      </motion.svg>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 -z-10 h-96 w-96 rounded-full bg-sky-500/15 blur-3xl"
        animate={reduce ? undefined : { x: [0, 60, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/3 top-0 -z-10 h-72 w-72 rounded-full bg-amber-300/10 blur-3xl"
        animate={reduce ? undefined : { x: [0, -50, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          WebkitMaskImage:
            "linear-gradient(to right, #000 0%, transparent 55%)",
          maskImage: "linear-gradient(to right, #000 0%, transparent 55%)",
        }}
      />

      {!reduce &&
        PARTICLES.map((p, i) => (
          <motion.span
            key={i}
            aria-hidden
            className="pointer-events-none absolute bottom-0 -z-10 hidden rounded-full sm:block"
            style={{
              left: `${p.l}%`,
              width: p.s,
              height: p.s,
              backgroundColor: GOLD,
              boxShadow: "0 0 10px 2px rgba(227,182,91,0.6)",
            }}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: -520, opacity: [0, 0.85, 0] }}
            transition={{
              duration: p.d,
              delay: p.t,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

      <motion.div
        className="absolute inset-y-0 right-0 -z-10 w-full overflow-hidden lg:w-[56%]"
        initial={{ opacity: 0, x: reduce ? 0 : 70 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: EASE }}
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, #000 16%, #000 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, #000 16%, #000 100%)",
        }}
      >
        <motion.div
          className="h-full w-full"
          style={{ x: photoX, y: photoY, scale: 1.08 }}
        >
          <motion.img
            src={image}
            alt={imageAlt}
            className="h-full w-full object-cover object-[40%_20%]"
            animate={reduce ? undefined : { scale: [1, 1.05, 1] }}
            transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {!reduce && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-1/3 skew-x-[-18deg]"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
            }}
            initial={{ x: "-150%" }}
            animate={{ x: "420%" }}
            transition={{
              duration: 2.4,
              delay: 2,
              repeat: Infinity,
              repeatDelay: 7,
              ease: "easeInOut",
            }}
          />
        )}
      </motion.div>

      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0A2250]/85 via-[#0A2250]/78 to-[#0A2250]/90 lg:hidden"
      />

      <motion.svg
        aria-hidden
        viewBox="0 0 640 200"
        preserveAspectRatio="none"
        className="pointer-events-none absolute bottom-0 left-0 h-16 w-[75%] sm:h-24 lg:h-[24%] lg:w-[36%]"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 1.8, delay: 0.5, ease: "easeInOut" }}
      >
        <defs>
          <linearGradient id="swooshGold" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={GOLD_DEEP} />
            <stop offset="22%" stopColor={GOLD_LIGHT} />
            <stop offset="65%" stopColor={GOLD} stopOpacity="0.75" />
            <stop offset="100%" stopColor={GOLD} stopOpacity="0" />
          </linearGradient>
          <motion.linearGradient
            id="swooshGlint"
            gradientUnits="objectBoundingBox"
            initial={{ x1: -0.6, x2: -0.1 }}
            animate={reduce ? undefined : { x1: 1.1, x2: 1.6 }}
            transition={{
              duration: 2.4,
              delay: 2.4,
              repeat: Infinity,
              repeatDelay: 4,
              ease: "easeInOut",
            }}
            y1="0"
            y2="0"
          >
            <stop offset="0%" stopColor="#fff" stopOpacity="0" />
            <stop offset="50%" stopColor="#fff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </motion.linearGradient>
        </defs>
        <path
          d="M0 4 C 70 100 230 165 640 193 C 240 176 90 118 0 30 Z"
          fill="url(#swooshGold)"
        />
        <path
          d="M0 4 C 70 100 230 165 640 193 C 240 176 90 118 0 30 Z"
          fill="url(#swooshGlint)"
        />
      </motion.svg>

      <div className="relative z-10 flex min-h-[540px] flex-col justify-center px-5 py-20 sm:min-h-[620px] sm:px-10 sm:py-28 lg:min-h-[740px] lg:py-36 lg:pl-[4.6%] lg:pr-6 xl:min-h-[800px]">
        <div className="max-w-lg lg:max-w-[48%]">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            className="flex items-center gap-2.5 sm:gap-4"
          >
            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/90 sm:text-xs sm:tracking-[0.35em] lg:text-[clamp(12px,1.05vw,20px)]">
              {eyebrow}
            </span>
            <motion.span
              aria-hidden
              className="h-[2px] w-8 origin-left sm:w-16 lg:w-24"
              style={{ backgroundColor: GOLD }}
              initial={reduce ? false : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.7, ease: "easeOut" }}
            />
          </motion.div>

          <h1 className="mt-4 break-words text-[28px] font-semibold leading-[1.16] tracking-tight sm:mt-5 sm:text-5xl lg:mt-7 lg:text-[clamp(3rem,4.1vw,5.25rem)] lg:leading-[1.1]">
            <span className="block">
              {line1.map((w, i) => (
                <React.Fragment key={`l1-${i}`}>
                  <Word delay={next()} reduce={reduce}>
                    {w}
                  </Word>{" "}
                </React.Fragment>
              ))}
            </span>
            <span className="mt-0.5 block sm:mt-1">
              {headlinePrefix && (
                <>
                  <Word delay={next()} reduce={reduce}>
                    {headlinePrefix}
                  </Word>{" "}
                </>
              )}
              {highlight.map((w, i) => (
                <React.Fragment key={`h-${i}`}>
                  <Word delay={next()} gold reduce={reduce}>
                    {w}
                  </Word>{" "}
                </React.Fragment>
              ))}
              {end.map((w, i) => (
                <React.Fragment key={`e-${i}`}>
                  <Word delay={next()} reduce={reduce}>
                    {w}
                  </Word>{" "}
                </React.Fragment>
              ))}
            </span>
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: EASE }}
            className="mt-5 max-w-sm text-sm leading-relaxed text-white/90 sm:mt-6 sm:max-w-md sm:text-lg lg:mt-8 lg:max-w-[34em] lg:text-[clamp(16px,1.35vw,26px)]"
          >
            {subheadline}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease: EASE }}
            className="mt-7 flex flex-wrap gap-3 sm:mt-8 sm:gap-4 lg:mt-10"
          >
            <motion.a
              href={primaryCta.href}
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold text-[#0B1A3A] outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A2250] sm:px-8 sm:py-4 sm:text-base"
              style={{
                background: `linear-gradient(135deg, ${GOLD_LIGHT} 0%, ${GOLD} 50%, ${GOLD_DEEP} 100%)`,
                boxShadow: "0 12px 32px rgba(227,182,91,0.35)",
              }}
            >
              {!reduce && (
                <motion.span
                  aria-hidden
                  className="absolute inset-0 rounded-full border-2"
                  style={{ borderColor: GOLD }}
                  animate={{ scale: [1, 1.22], opacity: [0.6, 0] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              )}
              <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
                {!reduce && (
                  <motion.span
                    className="absolute inset-y-0 left-0 w-1/3 skew-x-[-20deg]"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.65), transparent)",
                    }}
                    initial={{ x: "-150%" }}
                    animate={{ x: "420%" }}
                    transition={{
                      duration: 1.4,
                      delay: 2.5,
                      repeat: Infinity,
                      repeatDelay: 3.5,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </span>
              <span className="relative z-10">{primaryCta.label}</span>
              <svg
                viewBox="0 0 20 20"
                className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M4 10h12M11 5l5 5-5 5" />
              </svg>
            </motion.a>

            <motion.a
              href={secondaryCta.href}
              whileHover={{
                y: -3,
                backgroundColor: "rgba(255,255,255,0.12)",
                borderColor: GOLD,
              }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center rounded-full border-2 border-white/90 bg-[#0A2250]/30 px-5 py-2.5 text-xs font-bold text-white outline-none backdrop-blur-sm focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A2250] sm:px-8 sm:py-4 sm:text-base"
            >
              {secondaryCta.label}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}