"use client";

import { useId, useState } from "react";
import { BookOpenCheck } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { preparationGuides } from "@/data/preparation";
import { sectionContent } from "@/data/sections";
import { cn } from "@/lib/utils";

export function PreparationGuideSection() {
  const [activeId, setActiveId] = useState(preparationGuides[0].id);
  const baseId = useId();
  const activeGuide =
    preparationGuides.find((guide) => guide.id === activeId) ?? preparationGuides[0];

  return (
    <Section id="preparacao" className="bg-[#070707]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionLabel
            eyebrow={sectionContent.preparation.eyebrow}
            title={sectionContent.preparation.title}
            description={sectionContent.preparation.description}
          />

          <div className="rounded-[8px] border border-white/10 bg-[#111111] p-4 shadow-2xl shadow-black/25 sm:p-5">
            <div
              role="tablist"
              aria-label="Categorias do guia preparatório"
              className="grid gap-2 sm:grid-cols-5"
            >
              {preparationGuides.map((guide) => (
                <button
                  key={guide.id}
                  id={`${baseId}-${guide.id}-tab`}
                  type="button"
                  role="tab"
                  aria-selected={activeGuide.id === guide.id}
                  aria-controls={`${baseId}-${guide.id}-panel`}
                  onClick={() => setActiveId(guide.id)}
                  className={cn(
                    "min-h-12 rounded-[8px] border px-3 text-xs font-semibold uppercase tracking-[0.16em] transition duration-300",
                    activeGuide.id === guide.id
                      ? "border-[#c8b89a]/70 bg-[#c8b89a]/12 text-[#f4f0e8]"
                      : "border-white/10 bg-white/[0.035] text-[#b7afa2] hover:border-[#c8b89a]/45 hover:text-[#f4f0e8]",
                  )}
                >
                  {guide.label}
                </button>
              ))}
            </div>

            <div
              id={`${baseId}-${activeGuide.id}-panel`}
              role="tabpanel"
              aria-labelledby={`${baseId}-${activeGuide.id}-tab`}
              className="mt-5 rounded-[8px] border border-white/10 bg-[#070707]/45 p-5 sm:p-7"
            >
              <div className="flex flex-col gap-5 border-b border-white/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#c8b89a]">
                    <BookOpenCheck className="h-4 w-4" aria-hidden="true" />
                    Guia útil
                  </p>
                  <h3 className="mt-4 font-display text-4xl font-medium leading-none text-[#f4f0e8]">
                    {activeGuide.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-[#b7afa2]">
                    {activeGuide.description}
                  </p>
                </div>
              </div>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {activeGuide.tips.map((tip, index) => (
                  <li
                    key={tip}
                    className="rounded-[8px] border border-white/10 bg-white/[0.035] p-4 text-sm leading-7 text-[#d8d1c5]"
                  >
                    <span className="mb-3 block font-display text-3xl leading-none text-[#a68a5b]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
