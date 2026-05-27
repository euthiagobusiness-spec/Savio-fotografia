import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { legacyStats } from "@/data/legacy";
import { sectionContent } from "@/data/sections";

export function LegacySection() {
  return (
    <Section className="bg-[#070707]">
      <Container>
        <div className="editorial-rule mb-14" aria-hidden="true" />
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <Reveal>
            <SectionLabel
              eyebrow={sectionContent.legacy.eyebrow}
              title={sectionContent.legacy.title}
              description={sectionContent.legacy.description}
            />
            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-[8px] border border-white/10 bg-white/10 sm:grid-cols-4 lg:grid-cols-2">
              {legacyStats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#0b0b0b] p-5 transition duration-300 hover:bg-[#111111]"
                >
                  <p className="font-display text-4xl font-medium leading-none text-[#f4f0e8]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#8c867c]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="image-depth relative min-h-[520px] overflow-hidden rounded-[8px] border border-white/10 bg-[#111111] lg:min-h-[640px]">
              <Image
                src="/images/portfolio-family.jpg"
                alt="Registro familiar com atmosfera emocional e luz quente."
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070707]/72 via-transparent to-transparent" />
              <div className="absolute bottom-0 max-w-md p-7 sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c8b89a]">
                  {sectionContent.legacy.imageEyebrow}
                </p>
                <p className="mt-4 font-display text-4xl font-medium leading-none text-[#f4f0e8]">
                  {sectionContent.legacy.imageTitle}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
