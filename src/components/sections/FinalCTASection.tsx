import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";
import { sectionContent } from "@/data/sections";
import { siteConfig } from "@/lib/constants";

export function FinalCTASection() {
  return (
    <Section className="bg-[#0b0b0b] py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <div className="image-depth relative isolate overflow-hidden rounded-[8px] border border-white/10 px-6 py-20 text-center sm:px-10 lg:px-20 lg:py-28">
            <Image
              src="/images/portfolio-wedding.jpg"
              alt="Casal em registro fotográfico de casamento com atmosfera cinematográfica."
              fill
              sizes="100vw"
              className="-z-20 object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-[#070707]/82" />
            <div className="absolute inset-x-10 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-[#c8b89a]/55 to-transparent" />
            <div className="noise-layer absolute inset-0 -z-10 opacity-50" />

            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c8b89a]">
              {sectionContent.finalCta.eyebrow}
            </p>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-5xl font-medium leading-[0.95] text-[#f4f0e8] text-balance sm:text-6xl lg:text-7xl">
              {sectionContent.finalCta.title}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#ded7cc] sm:text-lg">
              {sectionContent.finalCta.description}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <MagneticButton href={siteConfig.whatsappUrl}>
                Solicitar orçamento pelo WhatsApp
              </MagneticButton>
              <MagneticButton href="#portfolio" variant="secondary">
                Ver trabalhos recentes
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
