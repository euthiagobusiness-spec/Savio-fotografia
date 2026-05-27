import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { sectionContent } from "@/data/sections";
import { testimonials } from "@/data/testimonials";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

export function TestimonialsSection() {
  return (
    <Section className="bg-[#070707]">
      <Container>
        <Reveal>
          <SectionLabel
            eyebrow={sectionContent.testimonials.eyebrow}
            title={sectionContent.testimonials.title}
            description={sectionContent.testimonials.description}
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.06}>
              <TestimonialCard {...item} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
