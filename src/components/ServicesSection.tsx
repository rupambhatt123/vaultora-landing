"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import websiteData from "@/data/websiteData.json";

const servicesJson =
  websiteData.categories.FinanceBanking.sections.Services.variants.VaultServices1;

const NAVY = "#0B2350";
const GOLD = "#C99A2E";
const GOLD_LIGHT = "#E8C468";
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const font = "'Montserrat', 'Poppins', system-ui, sans-serif";

const svgProps = {
  viewBox: "0 0 64 64",
  fill: "none",
  "aria-hidden": true,
  className: "h-11 w-11 sm:h-12 sm:w-12 lg:h-14 lg:w-14",
} as const;

const BankIcon = () => (
  <svg {...svgProps}>
    <path d="M32 9 L53 21 H11 Z" fill={NAVY} />
    <circle cx="32" cy="17" r="2.4" fill="#fff" />
    <rect x="13" y="23" width="38" height="3.5" fill={NAVY} />
    <rect x="17" y="28" width="6" height="17" fill={NAVY} />
    <rect x="29" y="28" width="6" height="17" fill={NAVY} />
    <rect x="41" y="28" width="6" height="17" fill={NAVY} />
    <rect x="11" y="47" width="42" height="5" rx="1" fill={NAVY} />
  </svg>
);

const CoinsIcon = () => (
  <svg {...svgProps}>
    <rect x="8" y="48" width="20" height="7" rx="3.5" fill={NAVY} />
    <rect x="8" y="40" width="20" height="7" rx="3.5" fill={NAVY} />
    <rect x="34" y="48" width="22" height="7" rx="3.5" fill={NAVY} />
    <rect x="34" y="40" width="22" height="7" rx="3.5" fill={NAVY} />
    <rect x="34" y="32" width="22" height="7" rx="3.5" fill={NAVY} />
    <path
      d="M9 34 L22 24 L31 29 L51 11"
      stroke={GOLD}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M42 10 H53 V21"
      stroke={GOLD}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HandCoinIcon = () => (
  <svg {...svgProps}>
    <circle cx="36" cy="21" r="12" stroke={GOLD} strokeWidth="3.5" />
    <path
      d="M40 16.5 C38 14.5 32 15 32 19 C32 23 40 21 40 25 C40 29 34 28.5 32 26.5 M36 13 V30"
      stroke={GOLD}
      strokeWidth="2.6"
      strokeLinecap="round"
    />
    <rect x="6" y="40" width="10" height="16" rx="1.5" fill={NAVY} />
    <path
      d="M19 43 H32 L44 39.5 C48 38.5 51 41 49 44 L38 52 H19 Z"
      fill="none"
      stroke={NAVY}
      strokeWidth="3.5"
      strokeLinejoin="round"
    />
    <path
      d="M38 52 L52 47 C55 46 58 44 58 42"
      stroke={NAVY}
      strokeWidth="3.5"
      strokeLinecap="round"
    />
  </svg>
);

const CardIcon = () => (
  <svg {...svgProps}>
    <rect
      x="8"
      y="14"
      width="40"
      height="28"
      rx="4"
      transform="rotate(-8 28 28)"
      stroke={GOLD}
      strokeWidth="2.6"
      fill="#fff"
    />
    <rect x="14" y="22" width="44" height="30" rx="4.5" fill={NAVY} />
    <rect x="14" y="29" width="44" height="7" fill={GOLD} />
    <rect x="20" y="43" width="12" height="3" rx="1.5" fill={GOLD_LIGHT} />
    <circle cx="48" cy="44.5" r="2.2" fill={GOLD_LIGHT} />
  </svg>
);

const GrowthBarsIcon = () => (
  <svg {...svgProps}>
    <rect x="10" y="44" width="11" height="11" rx="2" fill={NAVY} />
    <rect x="25" y="35" width="11" height="20" rx="2" fill={NAVY} />
    <rect x="40" y="27" width="11" height="28" rx="2" fill={NAVY} />
    <path
      d="M9 32 L26 20 L36 15 L52 6"
      stroke={GOLD}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M43 5 H54 V16"
      stroke={GOLD}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ShieldIcon = () => (
  <svg {...svgProps}>
    <path
      d="M32 7 L52 15 V30 C52 42 44 50 32 57 C20 50 12 42 12 30 V15 Z"
      stroke={NAVY}
      strokeWidth="4"
      strokeLinejoin="round"
    />
    <path
      d="M22 31 L29.5 38.5 L43 24"
      stroke={GOLD}
      strokeWidth="4.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SproutBarsIcon = () => (
  <svg {...svgProps}>
    <rect x="10" y="44" width="11" height="11" rx="2" fill={NAVY} />
    <rect x="25" y="34" width="11" height="21" rx="2" fill={NAVY} />
    <rect x="40" y="26" width="11" height="29" rx="2" fill={NAVY} />
    <path d="M30.5 32 V20" stroke={GOLD} strokeWidth="3.4" strokeLinecap="round" />
    <path d="M30.5 22 C24 22 22 16 23 12 C29 12 32 16 30.5 22 Z" fill={GOLD} />
    <path d="M30.5 20 C32 14 38 11 44 12 C43 18 38 21 30.5 20 Z" fill={GOLD} />
  </svg>
);

const LaptopBankIcon = () => (
  <svg {...svgProps}>
    <rect x="13" y="12" width="38" height="29" rx="3.5" stroke={NAVY} strokeWidth="3.6" />
    <path d="M32 17 L40 22 H24 Z" fill={GOLD} />
    <rect x="25" y="24" width="2.6" height="9" fill={GOLD} />
    <rect x="30.7" y="24" width="2.6" height="9" fill={GOLD} />
    <rect x="36.4" y="24" width="2.6" height="9" fill={GOLD} />
    <rect x="23" y="34" width="18" height="2.6" fill={GOLD} />
    <path d="M6 48 H58" stroke={NAVY} strokeWidth="4" strokeLinecap="round" />
    <path d="M10 48 L12 44 H52 L54 48" stroke={NAVY} strokeWidth="3" strokeLinejoin="round" />
  </svg>
);

function renderServiceIcon(iconKey: string): React.ReactNode {
  switch (iconKey) {
    case "bank":
      return <BankIcon />;
    case "coins":
      return <CoinsIcon />;
    case "hand-coin":
      return <HandCoinIcon />;
    case "card":
      return <CardIcon />;
    case "growth-bars":
      return <GrowthBarsIcon />;
    case "shield":
      return <ShieldIcon />;
    case "sprout-bars":
      return <SproutBarsIcon />;
    case "laptop-bank":
      return <LaptopBankIcon />;
    default:
      return <BankIcon />;
  }
}

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const SERVICES: ServiceItem[] = servicesJson.items.map((item) => ({
  id: item.id,
  title: item.title,
  description: item.description,
  icon: renderServiceIcon(item.icon),
}));

function ServiceCard({
  service,
  index,
  reveal,
  reduce,
}: {
  service: ServiceItem;
  index: number;
  reveal: boolean;
  reduce: boolean | null;
}) {
  const revealProps =
    reveal && !reduce
      ? {
          initial: { opacity: 0, y: 26 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: {
            duration: 0.6,
            delay: (index % 4) * 0.08 + Math.floor(index / 4) * 0.12,
            ease: EASE,
          },
        }
      : {};

  return (
    <motion.article
      {...revealProps}
      whileHover={reduce ? undefined : { y: -5 }}
      className="group relative h-full overflow-hidden rounded-[22px] border border-slate-200/80 bg-white p-5 shadow-[0_4px_18px_rgba(11,35,80,0.05)] transition-shadow duration-300 hover:shadow-[0_14px_34px_rgba(11,35,80,0.12)] sm:p-5 lg:rounded-[26px]"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#C99A2E]/0 via-transparent to-[#C99A2E]/0 opacity-0 transition-opacity duration-500 group-hover:from-[#C99A2E]/[0.06] group-hover:opacity-100"
      />

      <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F0F3F8] transition-colors duration-300 group-hover:bg-[#FBF3DD] sm:h-[68px] sm:w-[68px] lg:h-20 lg:w-20">
        <motion.span
          className="flex"
          whileHover={reduce ? undefined : { scale: 1.1, rotate: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 14 }}
        >
          {service.icon}
        </motion.span>
      </div>

      <h3
        className="relative mt-4 text-[18px] font-bold leading-tight lg:text-[20px]"
        style={{ color: NAVY }}
      >
        {service.title}
      </h3>

      <span
        aria-hidden
        className="relative mt-2 block h-[2.5px] w-7 rounded-full transition-all duration-300 group-hover:w-14"
        style={{ backgroundColor: GOLD }}
      />

      <p className="relative mt-2.5 max-w-[92%] pr-4 text-[13.5px] leading-[1.6] text-slate-600 lg:text-sm">
        {service.description}
      </p>

      <svg
        aria-hidden
        viewBox="0 0 56 56"
        className="pointer-events-none absolute bottom-0 right-0 h-11 w-11 origin-bottom-right transition-transform duration-300 group-hover:scale-125 lg:h-12 lg:w-12"
      >
        <defs>
          <linearGradient id={`corner-${index}`} x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor={GOLD} />
            <stop offset="100%" stopColor={GOLD_LIGHT} />
          </linearGradient>
        </defs>
        <path
          d="M56 4 C 54 32 32 54 4 56 L56 56 Z"
          fill={`url(#corner-${index})`}
        />
      </svg>
    </motion.article>
  );
}

export default function ServicesSection() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const last = SERVICES.length - 1;
  const go = (d: number) => setI((v) => Math.min(last, Math.max(0, v + d)));

  return (
    <section
      id={servicesJson.sectionId}
      className="relative isolate overflow-hidden py-10 sm:py-12 lg:py-14"
      style={{
        fontFamily: font,
        background: "linear-gradient(180deg, #FBFCFE 0%, #F4F7FB 100%)",
      }}
    >
      <style>{`@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap");`}</style>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-0 -z-10 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl"
        animate={reduce ? undefined : { x: [0, 40, 0], y: [0, 24, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl"
        animate={reduce ? undefined : { x: [0, -40, 0], y: [0, -24, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-[3%]">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            className="flex items-center justify-center gap-3 sm:gap-4"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <motion.span
              aria-hidden
              className="h-[2.5px] w-10 origin-right rounded-full sm:w-16 lg:w-24"
              style={{ backgroundColor: GOLD }}
              initial={reduce ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <span
              className="whitespace-nowrap text-[11px] font-extrabold uppercase tracking-[0.3em] sm:text-xs lg:text-sm"
              style={{ color: NAVY }}
            >
              {servicesJson.badge}
            </span>
            <motion.span
              aria-hidden
              className="h-[2.5px] w-10 origin-left rounded-full sm:w-16 lg:w-24"
              style={{ backgroundColor: GOLD }}
              initial={reduce ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>

          <motion.h2
            className="mt-3 whitespace-nowrap text-[21px] font-extrabold leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-[44px]"
            style={{ color: NAVY }}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          >
            {servicesJson.titlePrefix}{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(100deg, #B58628 0%, ${GOLD} 45%, ${GOLD_LIGHT} 65%, #B58628 100%)`,
              }}
            >
              {servicesJson.titleHighlight}
            </span>
          </motion.h2>

          <motion.p
            className="mx-auto mt-3 max-w-xl text-sm text-slate-700 sm:text-base lg:max-w-none lg:text-[17px]"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
          >
            {servicesJson.description}
          </motion.p>
        </div>

        <div className="mt-7 hidden grid-cols-2 gap-4 sm:grid lg:mt-9 lg:grid-cols-4 lg:gap-5">
          {SERVICES.map((s, idx) => (
            <ServiceCard
              key={s.id}
              service={s}
              index={idx}
              reveal
              reduce={reduce}
            />
          ))}
        </div>

        <div
          className="mt-6 sm:hidden"
          role="region"
          aria-roledescription="carousel"
          aria-label="Our services"
        >
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${i * 100}%` }}
              transition={
                reduce
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 260, damping: 30 }
              }
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.18}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60 || info.velocity.x < -400) go(1);
                else if (info.offset.x > 60 || info.velocity.x > 400) go(-1);
              }}
            >
              {SERVICES.map((s, idx) => (
                <div
                  key={s.id}
                  className="w-full shrink-0 px-1 py-2"
                  aria-hidden={idx !== i}
                >
                  <ServiceCard
                    service={s}
                    index={idx}
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
              onClick={() => go(-1)}
              disabled={i === 0}
              aria-label="Previous service"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0B2350] shadow-md transition active:scale-95 disabled:opacity-35 disabled:shadow-none"
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
              {SERVICES.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  tabIndex={-1}
                  onClick={() => setI(idx)}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: idx === i ? 22 : 8,
                    backgroundColor: idx === i ? GOLD : "#CBD5E1",
                  }}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(1)}
              disabled={i === last}
              aria-label="Next service"
              className="flex h-11 w-11 items-center justify-center rounded-full text-[#0B2350] shadow-md transition active:scale-95 disabled:opacity-35 disabled:shadow-none"
              style={{
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