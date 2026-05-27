"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { navLinks, siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const mobileMenuId = "mobile-navigation";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#070707]/62 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a
          href="#inicio"
          className="group inline-flex flex-col"
          aria-label="Voltar para o início"
        >
          <span className="font-display text-2xl font-semibold leading-none text-[#f4f0e8]">
            Sávio Alves
          </span>
          <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#c8b89a]">
            Fotógrafo
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#d8d1c5] transition hover:text-[#f4f0e8]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            href={siteConfig.whatsappUrl}
            variant="secondary"
            className="min-h-11 px-4"
            aria-label="Entrar em contato pelo WhatsApp"
          >
            WhatsApp
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-[#f4f0e8] lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-controls={mobileMenuId}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id={mobileMenuId}
        className={cn(
          "grid border-t border-white/10 bg-[#070707]/96 transition-[grid-template-rows] duration-300 lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
        aria-hidden={!open}
      >
        <div className="overflow-hidden">
          {open ? (
            <nav className="flex flex-col gap-1 px-5 py-5" aria-label="Menu mobile">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-[8px] px-4 py-3 text-base font-medium text-[#f4f0e8] hover:bg-white/[0.06]"
                >
                  {link.label}
                </a>
              ))}
              <Button
                href={siteConfig.whatsappUrl}
                className="mt-3 w-full"
                aria-label="Entrar em contato pelo WhatsApp"
              >
                WhatsApp
              </Button>
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  );
}
