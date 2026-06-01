import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { privacyContent } from "@/data/privacy";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${privacyContent.title} | ${siteConfig.name}`,
  description: privacyContent.description,
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#070707] pt-28">
        <section className="py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="mx-auto max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c8b89a]">
                LGPD e consentimento
              </p>
              <h1 className="mt-5 font-display text-5xl font-medium leading-[0.95] text-[#f4f0e8] sm:text-6xl">
                {privacyContent.title}
              </h1>
              <p className="mt-6 text-base leading-8 text-[#d8d1c5] sm:text-lg">
                {privacyContent.description}
              </p>

              <div className="mt-10 grid gap-4">
                {privacyContent.sections.map((section) => (
                  <article
                    key={section.title}
                    className="rounded-[8px] border border-white/10 bg-[#111111] p-5 sm:p-6"
                  >
                    <h2 className="font-display text-3xl font-medium text-[#f4f0e8]">
                      {section.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-[#b7afa2]">
                      {section.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
