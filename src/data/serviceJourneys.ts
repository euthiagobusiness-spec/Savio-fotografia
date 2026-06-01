import type { ServiceJourney } from "@/types/service";

export const serviceJourneys: ServiceJourney[] = [
  {
    id: "casamentos",
    title: "Casamentos",
    eyebrow: "Narrativa completa",
    description:
      "Um registro para atravessar o tempo: preparação, cerimônia, celebração, pessoas importantes e pequenos gestos que sustentam a memória do dia.",
    image: "/images/portfolio-wedding.jpg",
    alt: "Casal em registro de casamento com atmosfera cinematográfica.",
    idealFor:
      "Casais que querem uma cobertura sensível, organizada e visualmente autoral.",
    flow: ["alinhamento prévio", "cronograma visual", "cobertura dirigida", "curadoria final"],
    includes: ["direção leve", "olhar documental", "galeria final", "acabamento autoral"],
    context:
      "A experiência prioriza segurança, presença discreta e atenção aos momentos que não se repetem.",
  },
  {
    id: "gestantes",
    title: "Gestantes",
    eyebrow: "Memória familiar",
    description:
      "Uma fase breve registrada com delicadeza, direção acolhedora e estética que valoriza vínculo, corpo, espera e afeto.",
    image: "/images/portfolio-maternity.jpg",
    alt: "Ensaio gestante com luz suave e estética intimista.",
    idealFor:
      "Gestantes que desejam guardar essa transição com leveza e cuidado visual.",
    flow: ["escolha do período", "definição de estilo", "direção de poses", "seleção sensível"],
    includes: ["orientação de roupas", "possibilidade de família", "estúdio ou externo", "tratamento fino"],
    context:
      "O ensaio pode seguir uma estética mais afetiva, editorial ou minimalista, conforme o momento da família.",
  },
  {
    id: "familia",
    title: "Família",
    eyebrow: "Legado afetivo",
    description:
      "Fotografias para preservar vínculos reais: encontros, crianças, gerações, casa, rotina e presença.",
    image: "/images/portfolio-family.jpg",
    alt: "Família fotografada em momento afetivo com luz natural.",
    idealFor:
      "Famílias que querem imagens naturais, bem conduzidas e emocionalmente verdadeiras.",
    flow: ["escuta do contexto", "definição do clima", "condução leve", "entrega para memória"],
    includes: ["direção para adultos e crianças", "luz natural ou estúdio", "ritmo respeitoso", "galeria organizada"],
    context:
      "A direção evita rigidez excessiva e busca preservar expressão, vínculo e movimento.",
  },
  {
    id: "retratos",
    title: "Retratos",
    eyebrow: "Presença e intenção",
    description:
      "Imagens para comunicar personalidade, fase profissional, posicionamento ou expressão autoral com direção precisa.",
    image: "/images/hero-savio-alves.jpg",
    alt: "Retrato editorial com atmosfera documental e luz controlada.",
    idealFor:
      "Pessoas que precisam de retratos com presença, elegância e intenção clara.",
    flow: ["intenção da imagem", "referências", "direção de expressão", "curadoria"],
    includes: ["direção de pose", "luz planejada", "variações de enquadramento", "acabamento profissional"],
    context:
      "Funciona para marca pessoal, perfil profissional, projetos autorais e imagens de posicionamento.",
  },
  {
    id: "estudio",
    title: "Estúdio",
    eyebrow: "Controle de luz",
    description:
      "Um ambiente pensado para retratos, gestantes, famílias e projetos personalizados com conforto, precisão e acabamento.",
    image: "/images/portfolio-studio.jpg",
    alt: "Retrato em estúdio com luz controlada e acabamento premium.",
    idealFor:
      "Quem busca previsibilidade, privacidade, luz construída e direção visual completa.",
    flow: ["briefing visual", "preparação", "sessão dirigida", "edição final"],
    includes: ["ambiente profissional", "controle técnico", "direção de pose", "experiência personalizada"],
    context:
      "O estúdio fortalece a percepção de estrutura e permite criar imagens com linguagem mais controlada.",
  },
];
