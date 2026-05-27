import Image from "next/image";
import { Camera, LampDesk, Sparkles, UserRoundCheck } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { serviceTags, studioHighlights } from "@/data/services";
import { sectionContent } from "@/data/sections";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const icons = [UserRoundCheck, LampDesk, Camera, Sparkles];

export function StudioSection() {
  return (
    <Section id="estudio" className="bg-[#070707]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <Reveal className="relative min-h-[520px] overflow-hidden rounded-[8px] border border-white/10 bg-[#111111]">
            <Image
              src="/images/portfolio-studio.jpg"
              alt="Retrato em ambiente de estúdio com luz controlada."
              fill
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070707]/86 via-[#070707]/18 to-transparent" />
            <div className="absolute bottom-0 p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c8b89a]">
                {sectionContent.studio.imageEyebrow}
              </p>
              <p className="mt-4 max-w-sm font-display text-4xl leading-none text-[#f4f0e8]">
                {sectionContent.studio.imageTitle}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="flex flex-col justify-center">
            <SectionLabel
              eyebrow={sectionContent.studio.eyebrow}
              title={sectionContent.studio.title}
              description={sectionContent.studio.description}
            />

            <div className="mt-8 flex flex-wrap gap-2">
              {serviceTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#b7afa2]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {studioHighlights.map((item, index) => {
                const Icon = icons[index];
                return (
                  <article
                    key={item.title}
                    className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#c8b89a]/45 hover:bg-[#15120e]"
                  >
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#c8b89a]/25 bg-[#c8b89a]/10">
                      <Icon className="h-5 w-5 text-[#c8b89a]" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 text-base font-semibold text-[#f4f0e8]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#b7afa2]">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
