import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PortfolioGrid } from "@/components/ui/PortfolioGrid";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { sectionContent } from "@/data/sections";

export function PortfolioSection() {
  return (
    <Section id="portfolio" className="bg-[#0b0b0b]">
      <Container>
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionLabel
              eyebrow={sectionContent.portfolio.eyebrow}
              title={sectionContent.portfolio.title}
              description={sectionContent.portfolio.description}
            />
          </Reveal>
          <Reveal delay={0.08} className="max-w-md">
            <div className="border-l border-[#c8b89a]/30 pl-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c8b89a]">
                {sectionContent.portfolio.noteTitle}
              </p>
              <p className="mt-3 text-sm leading-7 text-[#b7afa2]">
                {sectionContent.portfolio.note}
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.14}>
          <PortfolioGrid />
        </Reveal>
      </Container>
    </Section>
  );
}
