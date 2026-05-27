import { AtSign, Mail, MessageCircle } from "lucide-react";
import { FixedWhatsApp } from "@/components/ui/FixedWhatsApp";
import { navLinks, siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer id="contato" className="border-t border-white/10 bg-[#070707]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-10">
        <div>
          <p className="font-display text-4xl font-medium text-[#f4f0e8]">
            {siteConfig.name}
          </p>
          <p className="mt-3 text-sm uppercase tracking-[0.28em] text-[#c8b89a]">
            {siteConfig.tagline}
          </p>
          <p className="mt-6 max-w-md text-sm leading-7 text-[#b7afa2]">
            {siteConfig.footerDescription}
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#8c867c]">
            Links rápidos
          </p>
          <nav className="flex flex-col gap-3" aria-label="Links do rodapé">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#d8d1c5] transition hover:text-[#f4f0e8]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#8c867c]">
            Contato
          </p>
          <div className="flex flex-col gap-3 text-sm text-[#d8d1c5]">
            <a className="inline-flex items-center gap-2 hover:text-[#f4f0e8]" href={siteConfig.instagramUrl}>
              <AtSign className="h-4 w-4 text-[#c8b89a]" />
              Instagram pessoal
            </a>
            <a className="inline-flex items-center gap-2 hover:text-[#f4f0e8]" href={siteConfig.studioInstagramUrl}>
              <AtSign className="h-4 w-4 text-[#c8b89a]" />
              Instagram do estúdio
            </a>
            <a className="inline-flex items-center gap-2 hover:text-[#f4f0e8]" href={siteConfig.whatsappUrl}>
              <MessageCircle className="h-4 w-4 text-[#c8b89a]" />
              WhatsApp
            </a>
            <a className="inline-flex items-center gap-2 hover:text-[#f4f0e8]" href={`mailto:${siteConfig.email}`}>
              <Mail className="h-4 w-4 text-[#c8b89a]" />
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 px-5 py-6 text-xs text-[#8c867c] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <p>© {new Date().getFullYear()} Sávio Alves Fotógrafo. Todos os direitos reservados.</p>
        <p>Prévia conceitual. Imagens temporárias substituíveis.</p>
      </div>

      <FixedWhatsApp href={siteConfig.whatsappUrl} />
    </footer>
  );
}
