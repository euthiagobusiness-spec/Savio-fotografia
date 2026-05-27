"use client";

import { ArrowUpRight, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type FixedWhatsAppProps = {
  href: string;
};

export function FixedWhatsApp({ href }: FixedWhatsAppProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      setVisible(window.matchMedia("(min-width: 640px)").matches || window.scrollY > 360);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <a
      href={href}
      className={cn(
        "fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#c8b89a] bg-[#f4f0e8] text-[#070707] shadow-2xl shadow-black/40 transition duration-300 hover:bg-[#c8b89a] sm:bottom-7 sm:right-7 sm:w-auto sm:gap-2 sm:px-5",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0 sm:pointer-events-auto sm:translate-y-0 sm:opacity-100",
      )}
      style={{ color: "#070707" }}
      aria-label="Solicitar orçamento pelo WhatsApp"
      tabIndex={visible ? undefined : -1}
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="hidden text-sm font-semibold uppercase tracking-[0.16em] sm:inline">
        WhatsApp
      </span>
      <ArrowUpRight className="hidden h-4 w-4 sm:block" aria-hidden="true" />
    </a>
  );
}
