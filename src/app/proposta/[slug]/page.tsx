import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, HelpCircle, MessageCircle } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { mockProposals } from "@/data/proposals";
import { siteConfig } from "@/lib/constants";

type ProposalPageProps = {
  params: Promise<{ slug: string }>;
};

function getProposal(slug: string) {
  return mockProposals.find((proposal) => proposal.slug === slug);
}

export function generateStaticParams() {
  return mockProposals.map((proposal) => ({ slug: proposal.slug }));
}

export async function generateMetadata({
  params,
}: ProposalPageProps): Promise<Metadata> {
  const { slug } = await params;
  const proposal = getProposal(slug);

  if (!proposal) {
    return {
      title: `Proposta personalizada | ${siteConfig.name}`,
    };
  }

  return {
    title: `${proposal.serviceType} para ${proposal.clientName} | ${siteConfig.name}`,
    description: proposal.description,
  };
}

export default async function ProposalPage({ params }: ProposalPageProps) {
  const { slug } = await params;
  const proposal = getProposal(slug);

  if (!proposal) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#070707] pt-28">
        <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
          <div className="noise-layer absolute inset-0 opacity-50" aria-hidden="true" />
          <Container>
            <div className="mx-auto max-w-5xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c8b89a]">
                Proposta personalizada
              </p>
              <h1 className="mt-5 font-display text-5xl font-medium leading-[0.95] text-[#f4f0e8] text-balance sm:text-6xl lg:text-7xl">
                {proposal.recommendedPackage}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-[#d8d1c5] sm:text-lg">
                {proposal.description}
              </p>

              <div className="mt-10 grid gap-4 rounded-[8px] border border-white/10 bg-[#111111] p-5 sm:grid-cols-2 lg:grid-cols-4 lg:p-6">
                {[
                  ["Cliente", proposal.clientName],
                  ["Tipo", proposal.serviceType],
                  ["Período", proposal.period],
                  ["Valor", proposal.value],
                ].map(([label, value]) => (
                  <div key={label}>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8c867c]">
                      {label}
                    </p>
                    <p className="mt-2 text-base font-semibold text-[#f4f0e8]">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_0.82fr]">
                <div className="rounded-[8px] border border-white/10 bg-[#111111] p-5 sm:p-7">
                  <h2 className="font-display text-4xl font-medium text-[#f4f0e8]">
                    Etapas recomendadas
                  </h2>
                  <ul className="mt-6 space-y-4">
                    {proposal.steps.map((step) => (
                      <li key={step} className="flex gap-3 text-sm leading-7 text-[#d8d1c5]">
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#c8b89a]" />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[8px] border border-white/10 bg-white/[0.035] p-5 sm:p-7">
                  <h2 className="font-display text-4xl font-medium text-[#f4f0e8]">
                    FAQ
                  </h2>
                  <div className="mt-6 space-y-5">
                    {proposal.faq.map((item) => (
                      <article key={item.question}>
                        <h3 className="flex gap-2 text-base font-semibold text-[#f4f0e8]">
                          <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#c8b89a]" />
                          {item.question}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-[#b7afa2]">
                          {item.answer}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={siteConfig.whatsappUrl}>
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Falar sobre a proposta
                </Button>
                <Button href="/#ensaio-ideal" variant="secondary">
                  Refazer experiência
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
