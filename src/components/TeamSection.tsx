"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import websiteData from "@/data/websiteData.json";

const teamJson =
  websiteData.categories.FinanceBanking.sections.Team.variants.VaultTeam1;

const NAVY = "#0B2350";
const GOLD = "#D4A024";
const GOLD_LIGHT = "#EDC45E";
const GOLD_DEEP = "#B98A1E";
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const font = "'Montserrat', 'Poppins', system-ui, sans-serif";

const mobileArrowBtnClass =
  "flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0B2350] shadow-md transition-all duration-200 hover:border-[#EDC45E] hover:bg-gradient-to-br hover:from-[#EDC45E] hover:to-[#B98A1E] hover:text-white active:scale-95";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

function TeamCard({
  member,
  idx,
  reduce,
  animateOnMount = false,
}: {
  member: TeamMember;
  idx: number;
  reduce: boolean | null;
  animateOnMount?: boolean;
}) {
  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 24 }}
      {...(animateOnMount
        ? { animate: { opacity: 1, y: 0 } }
        : {
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.25 },
          })}
      transition={{ duration: 0.6, delay: idx * 0.1, ease: EASE }}
      whileHover={reduce ? undefined : { y: -5 }}
      className="group rounded-[26px] border border-slate-200/80 bg-white p-3 text-center shadow-[0_4px_18px_rgba(11,35,80,0.05)] transition-shadow duration-300 hover:shadow-[0_16px_36px_rgba(11,35,80,0.12)] sm:p-3.5 lg:rounded-[32px] lg:p-4"
    >
      <div className="relative aspect-[1.16] overflow-hidden rounded-[22px] bg-slate-100 lg:rounded-[28px]">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <svg
          aria-hidden
          viewBox="0 0 56 56"
          className="pointer-events-none absolute bottom-0 right-0 h-[18%] w-[20%] origin-bottom-right transition-transform duration-300 group-hover:scale-110"
          preserveAspectRatio="none"
        >
          <path
            d="M56 4 C 54 32 32 54 4 56 L56 56 Z"
            fill={GOLD}
          />
        </svg>
      </div>

      <h3
        className="mt-3.5 text-lg font-extrabold leading-tight sm:text-[17px] lg:mt-4 lg:text-[22px]"
        style={{ color: NAVY }}
      >
        {member.name}
      </h3>
      <span
        aria-hidden
        className="mx-auto mt-2 block h-[3px] w-14 rounded-full transition-all duration-300 group-hover:w-20 lg:w-20 lg:group-hover:w-28"
        style={{ backgroundColor: GOLD }}
      />
      <p className="mt-2 text-sm text-slate-700 lg:text-base">
        {member.role}
      </p>
    </motion.article>
  );
}

export default function TeamSection() {
  const reduce = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const members = teamJson.members;
  const total = members.length;

  const slideBy = (delta: number) =>
    setActiveIndex((prev) => (prev + delta + total) % total);

  return (
    <section
      id={teamJson.sectionId}
      className="relative isolate overflow-hidden py-8 sm:py-10 lg:py-12"
      style={{
        fontFamily: font,
        background: "linear-gradient(180deg, #FFFFFF 0%, #F6F8FC 100%)",
      }}
    >
      <style>{`@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap");`}</style>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-0 -z-10 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl"
        animate={reduce ? undefined : { x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl"
        animate={reduce ? undefined : { x: [0, -40, 0], y: [0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
              {teamJson.badge}
            </span>
            <span
              aria-hidden
              className="h-[3px] w-10 rounded-full sm:w-14 lg:w-20"
              style={{ backgroundColor: GOLD }}
            />
          </div>

          <h2
            className="mt-3 text-[28px] font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[44px]"
            style={{ color: NAVY }}
          >
            {teamJson.titlePrefix}{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(100deg, ${GOLD_DEEP} 0%, ${GOLD} 50%, ${GOLD_LIGHT} 70%, ${GOLD_DEEP} 100%)`,
              }}
            >
              {teamJson.titleHighlight}
            </span>
          </h2>

          <p className="mx-auto mt-2.5 max-w-xl text-sm leading-relaxed text-slate-700 sm:text-base lg:max-w-none lg:text-[17px]">
            {teamJson.subtitle}
          </p>
        </motion.div>

        <div className="mt-6 hidden grid-cols-3 gap-4 sm:grid lg:mt-8 lg:gap-6">
          {members.map((member, idx) => (
            <TeamCard
              key={member.id}
              member={member}
              idx={idx}
              reduce={reduce}
            />
          ))}
        </div>

        <div
          className="mt-6 sm:hidden"
          role="region"
          aria-roledescription="carousel"
          aria-label="Our team"
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
              {members.map((member, idx) => (
                <div
                  key={member.id}
                  className="w-full shrink-0 px-1 py-1"
                  aria-hidden={idx !== activeIndex}
                >
                  <TeamCard
                    member={member}
                    idx={idx}
                    reduce={reduce}
                    animateOnMount
                  />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-4 flex items-center justify-between gap-3 px-1">
            <button
              type="button"
              onClick={() => slideBy(-1)}
              aria-label="Previous team member"
              className={mobileArrowBtnClass}
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
              {members.map((member, idx) => (
                <button
                  key={member.id}
                  type="button"
                  tabIndex={-1}
                  onClick={() => setActiveIndex(idx)}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: idx === activeIndex ? 22 : 8,
                    backgroundColor: idx === activeIndex ? GOLD_DEEP : "#CBD5E1",
                  }}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => slideBy(1)}
              aria-label="Next team member"
              className={mobileArrowBtnClass}
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

