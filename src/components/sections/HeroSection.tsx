"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { sectionContent } from "@/data/sections";
import { authorityItems, siteConfig } from "@/lib/constants";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 700], [0, reduceMotion ? 0 : 70]);

  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden pt-28"
    >
      <motion.div className="absolute inset-0 -z-20" style={{ y: imageY }}>
        <Image
          src="/images/hero-savio-alves.jpg"
          alt="Cena fotográfica cinematográfica para a marca Sávio Alves."
          fill
          priority
          sizes="100vw"
          className="scale-105 object-cover"
        />
      </motion.div>
      <div className="cinematic-vignette absolute inset-0 -z-10" />
      <div className="noise-layer absolute inset-0 -z-10 opacity-70" />

      <Container className="pb-12 sm:pb-16 lg:pb-20">
        <div className="mb-8 hidden items-center gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#8c867c] lg:flex">
          <span>{siteConfig.studio}</span>
          <span className="h-px w-14 bg-[#c8b89a]/45" aria-hidden="true" />
          <span>{sectionContent.hero.signature}</span>
        </div>

        <motion.div
          initial={false}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          <Badge>3ª geração de uma família de fotógrafos</Badge>
          <h1 className="mt-7 max-w-5xl font-display text-[2.7rem] font-medium leading-[0.9] text-[#f4f0e8] text-balance sm:mt-8 sm:text-7xl lg:text-8xl">
            {siteConfig.heroTitle}
          </h1>
          <div className="mt-6 grid max-w-4xl gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <p className="text-base leading-8 text-[#ded7cc] sm:text-lg">
              {siteConfig.heroDescription}
            </p>
            <p className="hidden border-l border-[#c8b89a]/30 pl-5 text-sm leading-7 text-[#b7afa2] lg:block">
              {sectionContent.hero.supporting}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <MagneticButton href={siteConfig.whatsappUrl}>
              Solicitar orçamento
            </MagneticButton>
            <MagneticButton href="#portfolio" variant="secondary">
              Ver portfólio
            </MagneticButton>
          </div>
        </motion.div>

        <div className="mt-8 grid grid-cols-2 gap-2 sm:mt-10 sm:flex sm:flex-wrap sm:gap-3">
          {authorityItems.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/12 bg-[#070707]/40 px-4 py-3 text-center text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#d8d1c5] backdrop-blur-md transition duration-300 hover:border-[#c8b89a]/45 hover:text-[#f4f0e8]"
            >
              {item}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
