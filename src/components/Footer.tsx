"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight, MapPin, Phone, Mail, Globe } from "lucide-react";
import websiteData from "@/data/websiteData.json";

const NAVY = "#0B2350";
const GOLD = "#D4A024";
const GOLD_DEEP = "#B98A1E";
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const font = "'Montserrat', 'Poppins', system-ui, sans-serif";

const commonJson = websiteData.common;
const footerJson =
  websiteData.categories.FinanceBanking.sections.Footer.variants.VaultFooter1;

interface SocialLinkItem {
  id: string;
  label: string;
  mark: string;
  href: string;
}

function FacebookSvg() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
      aria-hidden
    >
      <path d="M13.5 21v-8.2h2.7l.4-3.2h-3.1V7.5c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H8v3.2h2.8V21h2.7Z" />
    </svg>
  );
}

function InstagramSvg() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinSvg() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
      aria-hidden
    >
      <path d="M6.94 8.5H3.56V19.5h3.38V8.5ZM5.25 3.5a1.97 1.97 0 1 0 0 3.94 1.97 1.97 0 0 0 0-3.94ZM20.44 13.02c0-2.76-1.47-4.04-3.44-4.04-1.58 0-2.29.87-2.69 1.48V8.5h-3.38c.04.96 0 11 0 11h3.38v-6.14c0-.33.02-.66.12-.89.27-.66.87-1.35 1.89-1.35 1.33 0 1.86 1.01 1.86 2.5v5.88h3.38v-6.46Z" />
    </svg>
  );
}

function TwitterSvg() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
      aria-hidden
    >
      <path d="M18.24 3h2.78l-6.07 6.94L22.1 21h-5.6l-4.38-5.73L7.1 21H4.32l6.5-7.43L2 3h5.74l3.96 5.24L18.24 3Zm-.98 16.33h1.54L6.9 4.59H5.25l12.01 14.74Z" />
    </svg>
  );
}

function SocialIcon({
  id,
  label,
  mark,
}: {
  id?: string;
  label?: string;
  mark?: string;
}) {
  const key = `${id ?? ""} ${label ?? ""} ${mark ?? ""}`.toLowerCase();

  if (key.includes("insta") || key.includes("ig")) {
    return <InstagramSvg />;
  }
  if (key.includes("face") || key.includes("fb")) {
    return <FacebookSvg />;
  }
  if (key.includes("linked") || key.includes("in")) {
    return <LinkedinSvg />;
  }
  if (key.includes("twit") || key.includes("x")) {
    return <TwitterSvg />;
  }
  return <Globe className="h-4 w-4" aria-hidden />;
}

export default function Footer() {
  const reduce = useReducedMotion();
  const socialLinks = (commonJson.socialLinks ?? []) as SocialLinkItem[];

  return (
    <motion.footer
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: EASE }}
      className="relative isolate overflow-hidden pt-12 sm:pt-14 lg:pt-16"
      style={{
        fontFamily: font,
        color: NAVY,
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
        className="pointer-events-none absolute -right-24 bottom-12 -z-10 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl"
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
            "radial-gradient(45% 55% at 100% 0%, #000 0%, transparent 100%)",
          maskImage:
            "radial-gradient(45% 55% at 100% 0%, #000 0%, transparent 100%)",
        }}
      />

      <div className="mx-auto max-w-[1500px] px-4 pb-12 sm:px-6 lg:px-[4.5%]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex flex-col justify-center lg:col-span-4 lg:border-r lg:border-slate-200/80 lg:pr-8"
          >
            <a
              href="#home"
              className="group inline-flex items-center gap-3 outline-none"
            >
              <motion.img
                src={footerJson.logo}
                alt={`${commonJson.siteNamePrimary}${commonJson.siteNameAccent} ${commonJson.tagline}`}
                whileHover={reduce ? undefined : { scale: 1.04 }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
                className="h-20 w-auto max-w-[280px] object-contain sm:h-24 sm:max-w-[320px] lg:h-[clamp(84px,6.4vw,116px)] lg:max-w-[360px]"
              />
            </a>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
            className="lg:col-span-2 lg:border-r lg:border-slate-200/80 lg:pr-6"
          >
            <h3
              className="text-base font-extrabold sm:text-lg lg:text-[clamp(16px,1.2vw,22px)]"
              style={{ color: NAVY }}
            >
              {footerJson.quickLinksHeading}
            </h3>
            <span
              aria-hidden
              className="mt-2 block h-[3px] w-10 rounded-full"
              style={{ backgroundColor: GOLD }}
            />
            <ul className="mt-4 space-y-3">
              {footerJson.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 transition hover:text-[#B98A1E] sm:text-[15px] lg:text-[clamp(13.5px,1vw,18px)]"
                  >
                    <ChevronRight
                      className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                      style={{ color: GOLD }}
                    />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.16, ease: EASE }}
            className="lg:col-span-2 lg:border-r lg:border-slate-200/80 lg:pr-6"
          >
            <h3
              className="text-base font-extrabold sm:text-lg lg:text-[clamp(16px,1.2vw,22px)]"
              style={{ color: NAVY }}
            >
              {footerJson.supportHeading}
            </h3>
            <span
              aria-hidden
              className="mt-2 block h-[3px] w-10 rounded-full"
              style={{ backgroundColor: GOLD }}
            />
            <ul className="mt-4 space-y-3">
              {footerJson.supportLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 transition hover:text-[#B98A1E] sm:text-[15px] lg:text-[clamp(13.5px,1vw,18px)]"
                  >
                    <ChevronRight
                      className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                      style={{ color: GOLD }}
                    />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.24, ease: EASE }}
            className="lg:col-span-4"
          >
            <h3
              className="text-base font-extrabold sm:text-lg lg:text-[clamp(16px,1.2vw,22px)]"
              style={{ color: NAVY }}
            >
              {footerJson.contactHeading}
            </h3>
            <span
              aria-hidden
              className="mt-2 block h-[3px] w-10 rounded-full"
              style={{ backgroundColor: GOLD }}
            />
            <ul className="mt-4 space-y-4 text-sm font-medium text-slate-700 sm:text-[15px] lg:text-[clamp(13.5px,1vw,18px)]">
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FBF3DD] shadow-[0_4px_12px_rgba(185,138,30,0.14)]">
                  <MapPin className="h-4 w-4" style={{ color: GOLD_DEEP }} />
                </span>
                <span className="leading-relaxed">{commonJson.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FBF3DD] shadow-[0_4px_12px_rgba(185,138,30,0.14)]">
                  <Phone className="h-4 w-4" style={{ color: GOLD_DEEP }} />
                </span>
                <span>{commonJson.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FBF3DD] shadow-[0_4px_12px_rgba(185,138,30,0.14)]">
                  <Mail className="h-4 w-4" style={{ color: GOLD_DEEP }} />
                </span>
                <span>{commonJson.email}</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      <div
        className="py-4 text-white"
        style={{
          background: `linear-gradient(90deg, ${NAVY} 0%, #192838 100%)`,
        }}
      >
        <div className="mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-4 px-4 text-xs font-medium text-slate-200 sm:flex-row sm:px-6 lg:px-[4.5%] lg:text-[clamp(12px,0.95vw,16px)]">
          <p>{footerJson.copyright}</p>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const isExternal =
                typeof social.href === "string" &&
                social.href.startsWith("http");

              return (
                <motion.a
                  key={social.id}
                  href={social.href}
                  aria-label={social.label}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  whileHover={reduce ? undefined : { y: -2, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-[#EDC45E] hover:bg-[#D4A024]/20 hover:text-[#EDC45E]"
                >
                  <SocialIcon
                    id={social.id}
                    label={social.label}
                    mark={social.mark}
                  />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </motion.footer>
  );
}