import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { processSteps } from "@/data/process";
import { sectionContent } from "@/data/sections";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ProcessSection() {
  return (
    <Section id="experiencia" className="bg-[#0b0b0b]">
      <Container>
        <Reveal>
          <SectionLabel
            eyebrow={sectionContent.process.eyebrow}
            title={sectionContent.process.title}
            description={sectionContent.process.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-3 lg:grid-cols-5 lg:border-t lg:border-white/10 lg:pt-5">
          {processSteps.map((item, index) => (
            <Reveal key={item.step} delay={index * 0.05}>
              <article className="group relative flex min-h-[250px] flex-col justify-between rounded-[8px] border border-white/10 bg-[#111111] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#c8b89a]/50 hover:bg-[#15120e] lg:min-h-[300px]">
                <span
                  className="absolute -top-[27px] left-6 hidden h-3 w-3 rounded-full border border-[#c8b89a] bg-[#070707] lg:block"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-display text-5xl leading-none text-[#a68a5b] transition duration-300 group-hover:text-[#c8b89a]">
                    {item.step}
                  </p>
                  <h3 className="mt-8 text-xl font-semibold leading-tight text-[#f4f0e8]">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-6 text-sm leading-7 text-[#b7afa2]">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
