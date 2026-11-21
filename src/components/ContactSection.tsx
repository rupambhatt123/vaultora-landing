"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import websiteData from "@/data/websiteData.json";

const NAVY = "#0B2350";
const GOLD = "#D4A024";
const GOLD_LIGHT = "#EDC45E";
const GOLD_DEEP = "#B98A1E";
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const font = "'Montserrat', 'Poppins', system-ui, sans-serif";

const contactJson =
  websiteData.categories.FinanceBanking.sections.Contact.variants.VaultContact1;

function DrawIcon({
  children,
  reduce,
  delay,
}: {
  children: React.ReactNode;
  reduce: boolean | null;
  delay: number;
}) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={GOLD}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="h-[48%] w-[48%]"
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.8 }}
      variants={{
        hidden: {},
        show: { transition: { delayChildren: delay, staggerChildren: 0.2 } },
      }}
    >
      {children}
    </motion.svg>
  );
}

const drawV = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut" as const },
  },
};

const PinIcon = ({ reduce, delay }: { reduce: boolean | null; delay: number }) => (
  <DrawIcon reduce={reduce} delay={delay}>
    <motion.path
      variants={drawV}
      d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11Z"
    />
    <motion.circle variants={drawV} cx="12" cy="10" r="2.6" />
  </DrawIcon>
);

const PhoneIcon = ({ reduce, delay }: { reduce: boolean | null; delay: number }) => (
  <DrawIcon reduce={reduce} delay={delay}>
    <motion.path
      variants={drawV}
      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"
    />
  </DrawIcon>
);

const MailIcon = ({ reduce, delay }: { reduce: boolean | null; delay: number }) => (
  <DrawIcon reduce={reduce} delay={delay}>
    <motion.rect variants={drawV} x="3" y="5" width="18" height="14" rx="2" />
    <motion.path variants={drawV} d="m3 7 9 6 9-6" />
  </DrawIcon>
);

function DetailIcon({
  icon,
  reduce,
  delay,
}: {
  icon: string;
  reduce: boolean | null;
  delay: number;
}) {
  if (icon === "phone") return <PhoneIcon reduce={reduce} delay={delay} />;
  if (icon === "mail") return <MailIcon reduce={reduce} delay={delay} />;
  return <PinIcon reduce={reduce} delay={delay} />;
}

function getDetailHref(icon: string, value: string): string | undefined {
  if (icon === "phone") {
    return `tel:${value.replace(/[^+\d]/g, "")}`;
  }
  if (icon === "mail") {
    return `mailto:${value}`;
  }
  return undefined;
}

const fieldClass =
  "w-full rounded-[14px] border border-slate-200 bg-white px-4 py-2.5 text-sm text-[#0B2350] shadow-[0_2px_6px_rgba(11,35,80,0.04)] outline-none transition duration-200 placeholder:text-slate-500 hover:border-slate-300 focus:border-[#D4A024] focus:shadow-[0_0_0_3px_rgba(212,160,36,0.16)] lg:rounded-[16px] lg:px-4 lg:py-2.5 lg:text-[15px]";

export default function ContactSection() {
  const reduce = useReducedMotion();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const update =
    (key: keyof typeof formState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFormState({ ...formState, [key]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ name: "", email: "", phone: "", subject: "", message: "" });
    setSent(true);
    window.setTimeout(() => setSent(false), 4000);
  };

  return (
    <section
      id={contactJson.sectionId}
      className="relative isolate overflow-hidden py-8 sm:py-9 lg:py-10"
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
              {contactJson.badge}
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
            {contactJson.titlePrefix}{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(100deg, ${GOLD_DEEP} 0%, ${GOLD} 50%, ${GOLD_LIGHT} 70%, ${GOLD_DEEP} 100%)`,
              }}
            >
              {contactJson.titleHighlight}
            </span>
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-slate-700 sm:text-base lg:max-w-2xl lg:text-[17px]">
            {contactJson.subtitle}
          </p>
        </motion.div>

        <div className="mt-5 grid grid-cols-1 items-stretch gap-5 lg:mt-7 lg:grid-cols-[0.9fr_1.5fr] lg:gap-0">
          <div className="relative flex flex-col justify-center lg:pr-7">
            <ul className="divide-y divide-slate-200/80">
              {contactJson.details.map((item, i) => {
                const href = getDetailHref(item.icon, item.value);
                return (
                  <motion.li
                    key={item.id}
                    className="group flex items-center gap-3.5 py-3 first:pt-0 last:pb-0 lg:gap-4 lg:py-3.5"
                    initial={reduce ? false : { opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.6, delay: i * 0.12, ease: EASE }}
                  >
                    <motion.div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F3F5F9] shadow-[0_4px_14px_rgba(11,35,80,0.06)] transition-all duration-300 group-hover:bg-[#FBF3DD] group-hover:shadow-[0_10px_24px_rgba(185,138,30,0.25)] lg:h-14 lg:w-14"
                      whileHover={reduce ? undefined : { scale: 1.07, rotate: -3 }}
                      transition={{ type: "spring", stiffness: 280, damping: 16 }}
                    >
                      <DetailIcon
                        icon={item.icon}
                        reduce={reduce}
                        delay={0.3 + i * 0.15}
                      />
                    </motion.div>

                    <div className="min-w-0">
                      <h3
                        className="text-base font-extrabold leading-tight lg:text-[19px]"
                        style={{ color: NAVY }}
                      >
                        {item.label}
                      </h3>
                      {href ? (
                        <a
                          href={href}
                          className="mt-0.5 block text-sm text-slate-700 transition-colors hover:text-[#B98A1E] lg:text-[15px]"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-sm leading-snug text-slate-700 lg:text-[15px]">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </motion.li>
                );
              })}
            </ul>

            <motion.span
              aria-hidden
              className="absolute right-0 top-[6%] hidden h-[88%] w-px origin-top bg-gradient-to-b from-transparent via-slate-300 to-transparent lg:block"
              initial={reduce ? false : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </div>

          <motion.form
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            onSubmit={handleSubmit}
            className="rounded-[22px] bg-[#F3F5F8] p-4 shadow-[inset_0_0_0_1px_rgba(11,35,80,0.03)] sm:p-5 lg:ml-7 lg:rounded-[26px] lg:p-6"
          >
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:gap-3.5">
              <input
                type="text"
                name="name"
                autoComplete="name"
                required
                aria-label={contactJson.form.namePlaceholder}
                placeholder={contactJson.form.namePlaceholder}
                value={formState.name}
                onChange={update("name")}
                className={fieldClass}
              />
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                aria-label={contactJson.form.emailPlaceholder}
                placeholder={contactJson.form.emailPlaceholder}
                value={formState.email}
                onChange={update("email")}
                className={fieldClass}
              />
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                aria-label={contactJson.form.phonePlaceholder}
                placeholder={contactJson.form.phonePlaceholder}
                value={formState.phone}
                onChange={update("phone")}
                className={fieldClass}
              />
              <input
                type="text"
                name="subject"
                aria-label={contactJson.form.subjectPlaceholder}
                placeholder={contactJson.form.subjectPlaceholder}
                value={formState.subject}
                onChange={update("subject")}
                className={fieldClass}
              />
            </div>

            <textarea
              rows={4}
              name="message"
              required
              aria-label={contactJson.form.messagePlaceholder}
              placeholder={contactJson.form.messagePlaceholder}
              value={formState.message}
              onChange={update("message")}
              className={`${fieldClass} mt-3 resize-none lg:mt-3.5 lg:min-h-[116px]`}
            />

            <div className="mt-3.5 flex flex-wrap items-center gap-4 lg:mt-4">
              <motion.button
                type="submit"
                whileHover={reduce ? undefined : { y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="group relative overflow-hidden rounded-full px-6 py-2.5 text-sm font-bold outline-none focus-visible:ring-2 focus-visible:ring-[#0B2350] focus-visible:ring-offset-2 lg:px-7 lg:py-2.5 lg:text-[15px]"
                style={{
                  color: NAVY,
                  background: `linear-gradient(135deg, ${GOLD_LIGHT} 0%, ${GOLD} 55%, ${GOLD_DEEP} 100%)`,
                  boxShadow: "0 10px 24px rgba(212,160,36,0.32)",
                }}
              >
                {!reduce && (
                  <motion.span
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 left-0 w-1/3 skew-x-[-20deg]"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
                    }}
                    initial={{ x: "-150%" }}
                    animate={{ x: "420%" }}
                    transition={{
                      duration: 1.4,
                      delay: 2,
                      repeat: Infinity,
                      repeatDelay: 4,
                      ease: "easeInOut",
                    }}
                  />
                )}
                <span className="relative">Send Message</span>
              </motion.button>

              <motion.p
                role="status"
                aria-live="polite"
                initial={false}
                animate={{ opacity: sent ? 1 : 0, x: sent ? 0 : -10 }}
                transition={{ duration: 0.4 }}
                className="text-sm font-semibold text-emerald-700"
              >
                {sent ? "Thank you! Your message has been sent." : ""}
              </motion.p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}