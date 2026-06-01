import type { PreparationGuide } from "@/types/service";

export const preparationGuides: PreparationGuide[] = [
  {
    id: "gestante",
    label: "Gestante",
    title: "Preparação para ensaio gestante",
    description:
      "O objetivo é chegar com conforto, intenção visual e elementos que ajudem a contar essa fase sem excesso.",
    tips: [
      "O período mais confortável costuma ficar entre 27 e 32 semanas.",
      "Roupas leves, texturas naturais e tons coordenados ajudam a manter unidade visual.",
      "Parceiro, filhos e objetos afetivos podem entrar quando reforçam a história.",
      "A escolha entre estúdio e externo deve considerar conforto, clima e estilo desejado.",
    ],
  },
  {
    id: "familia",
    label: "Família",
    title: "Preparação para ensaio em família",
    description:
      "A sessão funciona melhor quando todos entendem o clima desejado, sem transformar o encontro em obrigação.",
    tips: [
      "Roupas coordenadas funcionam melhor do que looks exatamente iguais.",
      "Horários com crianças devem respeitar sono, alimentação e disposição.",
      "Levar objetos simples pode ajudar a criança a se sentir mais segura.",
      "Imagens espontâneas e dirigidas podem conviver no mesmo ensaio.",
    ],
  },
  {
    id: "casamento",
    label: "Casamento",
    title: "Preparação para cobertura de casamento",
    description:
      "A segurança do registro nasce do alinhamento prévio entre cronograma, pessoas importantes e momentos essenciais.",
    tips: [
      "Compartilhe horários, deslocamentos e contatos-chave com antecedência.",
      "Liste pessoas e momentos que não podem faltar no registro.",
      "Reserve pequenos intervalos para retratos com calma no dia.",
      "O briefing visual ajuda a equilibrar documental, editorial e clássico.",
    ],
  },
  {
    id: "retrato",
    label: "Retrato",
    title: "Preparação para retratos",
    description:
      "Um bom retrato começa antes da câmera: intenção, uso da imagem e atmosfera desejada definem o caminho.",
    tips: [
      "Defina se a imagem precisa comunicar autoridade, leveza, arte ou proximidade.",
      "Leve variações de roupa com modelagem limpa e boa textura.",
      "Referências ajudam, mas a direção final deve preservar sua presença real.",
      "Evite estampas muito datadas quando a intenção for uma imagem atemporal.",
    ],
  },
  {
    id: "estudio",
    label: "Estúdio",
    title: "Preparação para ensaio em estúdio",
    description:
      "O estúdio permite controle técnico e conforto, mas a experiência fica melhor quando a intenção visual está clara.",
    tips: [
      "Chegue com tempo para respirar, ajustar roupa e entrar no clima da sessão.",
      "Maquiagem e cabelo devem acompanhar o estilo do ensaio, não competir com ele.",
      "Separe peças com cortes diferentes para ampliar possibilidades de direção.",
      "A luz será construída para valorizar volume, expressão e acabamento.",
    ],
  },
];
