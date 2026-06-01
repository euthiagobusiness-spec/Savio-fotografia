import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { serviceJourneys } from "@/data/serviceJourneys";
import { sectionContent } from "@/data/sections";

export function ServiceJourneysSection() {
  return (
    <Section id="servicos" className="bg-[#0b0b0b]">
      <Container>
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionLabel
              eyebrow={sectionContent.serviceJourneys.eyebrow}
              title={sectionContent.serviceJourneys.title}
              description={sectionContent.serviceJourneys.description}
            />
          </Reveal>
          <Reveal delay={0.08} className="max-w-sm">
            <p className="border-l border-[#c8b89a]/30 pl-5 text-sm leading-7 text-[#b7afa2]">
              Cada bloco foi pensado como base para uma página dedicada no
              futuro, com galeria, narrativa e proposta própria.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5">
          {serviceJourneys.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.04}>
              <article className="group grid overflow-hidden rounded-[8px] border border-white/10 bg-[#111111] transition duration-300 hover:border-[#c8b89a]/45 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-[300px] overflow-hidden lg:min-h-[520px]">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070707]/86 via-[#070707]/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c8b89a]">
                      {service.eyebrow}
                    </p>
                    <h3 className="mt-3 font-display text-5xl font-medium leading-none text-[#f4f0e8]">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-col justify-between p-5 sm:p-7 lg:p-8">
                  <div>
                    <p className="text-base leading-8 text-[#ded7cc] sm:text-lg">
                      {service.description}
                    </p>

                    <div className="mt-7 grid gap-4 lg:grid-cols-2">
                      <div className="rounded-[8px] border border-white/10 bg-white/[0.035] p-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c8b89a]">
                          Para quem é
                        </p>
                        <p className="mt-3 text-sm leading-7 text-[#b7afa2]">
                          {service.idealFor}
                        </p>
                      </div>
                      <div className="rounded-[8px] border border-white/10 bg-white/[0.035] p-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c8b89a]">
                          Contexto
                        </p>
                        <p className="mt-3 text-sm leading-7 text-[#b7afa2]">
                          {service.context}
                        </p>
                      </div>
                    </div>

                    <div className="mt-7 grid gap-5 sm:grid-cols-2">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8c867c]">
                          Como funciona
                        </p>
                        <ul className="mt-4 space-y-3">
                          {service.flow.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-sm leading-6 text-[#d8d1c5]"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c8b89a]" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8c867c]">
                          Inclui
                        </p>
                        <ul className="mt-4 space-y-3">
                          {service.includes.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-sm leading-6 text-[#d8d1c5]"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c8b89a]" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <a
                    href="#ensaio-ideal"
                    className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-[#c8b89a]/45 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#f4f0e8] transition hover:border-[#c8b89a] hover:bg-[#c8b89a]/10"
                  >
                    Iniciar experiência
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
