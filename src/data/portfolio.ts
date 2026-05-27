export type PortfolioItem = {
  id: string;
  category: string;
  eyebrow: string;
  title: string;
  image: string;
  alt: string;
  size: "large" | "wide" | "tall" | "standard";
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "casamentos",
    category: "Casamentos",
    eyebrow: "Histórias reais",
    title: "Ritmo, emoção e direção estética no dia mais simbólico.",
    image: "/images/portfolio-wedding.jpg",
    alt: "Casal em cena de casamento com luz cinematográfica.",
    size: "large",
  },
  {
    id: "gestantes",
    category: "Gestantes",
    eyebrow: "Memória familiar",
    title: "Retratos sensíveis para uma fase que merece permanecer.",
    image: "/images/portfolio-maternity.jpg",
    alt: "Ensaio gestante em estúdio escuro com iluminação suave.",
    size: "tall",
  },
  {
    id: "ensaios",
    category: "Ensaios",
    eyebrow: "Expressão pessoal",
    title: "Imagens autorais com presença, intenção e naturalidade.",
    image: "/images/hero-savio-alves.jpg",
    alt: "Cena editorial de casal com atmosfera documental.",
    size: "wide",
  },
  {
    id: "estudio",
    category: "Estúdio",
    eyebrow: "Controle de luz",
    title: "Retratos com acabamento, direção e precisão técnica.",
    image: "/images/portfolio-studio.jpg",
    alt: "Retrato em estúdio com luz controlada e fundo escuro.",
    size: "standard",
  },
  {
    id: "familias",
    category: "Famílias",
    eyebrow: "Legado afetivo",
    title: "Registros que preservam vínculos, gestos e tempo.",
    image: "/images/portfolio-family.jpg",
    alt: "Família fotografada em momento íntimo com luz natural quente.",
    size: "standard",
  },
];
