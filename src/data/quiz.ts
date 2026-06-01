import type { QuizQuestion } from "@/types/quiz";

export const quizQuestions: QuizQuestion[] = [
  {
    id: "moment",
    eyebrow: "Momento",
    title: "Qual história você deseja registrar agora?",
    description:
      "Escolha o ponto de partida. A recomendação considera o momento, a intenção visual e a fase do contato.",
    options: [
      {
        id: "casamento",
        label: "Casamento",
        description: "Cobertura do dia, narrativa completa e direção de momentos-chave.",
      },
      {
        id: "pre-wedding",
        label: "Pré-wedding",
        description: "Ensaio de casal com estética afetiva antes do casamento.",
      },
      {
        id: "gestante",
        label: "Gestante",
        description: "Registro sensível de uma fase breve, familiar e simbólica.",
      },
      {
        id: "familia",
        label: "Família",
        description: "Vínculos, crianças, encontros e memória afetiva.",
      },
      {
        id: "retrato",
        label: "Retrato",
        description: "Imagem pessoal, profissional ou autoral com presença.",
      },
      {
        id: "estudio",
        label: "Ensaio em estúdio",
        description: "Luz controlada, direção de pose e acabamento premium.",
      },
      {
        id: "externo",
        label: "Ensaio externo",
        description: "Ambiente aberto, luz natural e narrativa mais espontânea.",
      },
    ],
  },
  {
    id: "style",
    eyebrow: "Linguagem",
    title: "Qual estilo mais combina com você?",
    description:
      "A estética orienta luz, direção, composição e ritmo do ensaio.",
    options: [
      {
        id: "cinematografico",
        label: "Cinematográfico",
        description: "Contraste, atmosfera e composição com sensação de cena.",
      },
      {
        id: "afetivo",
        label: "Afetivo",
        description: "Gestos, proximidade e imagens com verdade emocional.",
      },
      {
        id: "editorial",
        label: "Editorial",
        description: "Direção mais precisa, presença e acabamento sofisticado.",
      },
      {
        id: "classico",
        label: "Clássico",
        description: "Retratos elegantes, atemporais e seguros.",
      },
      {
        id: "minimalista",
        label: "Minimalista",
        description: "Poucos elementos, foco em expressão, forma e luz.",
      },
      {
        id: "espontaneo",
        label: "Espontâneo",
        description: "Movimento, naturalidade e menos interferência aparente.",
      },
    ],
  },
  {
    id: "setting",
    eyebrow: "Ambiente",
    title: "Onde você imagina essas imagens acontecendo?",
    description:
      "O local define ritmo, conforto, controle de luz e tipo de direção.",
    options: [
      {
        id: "estudio",
        label: "Estúdio",
        description: "Controle de luz, privacidade e direção visual completa.",
      },
      {
        id: "luz-natural",
        label: "Luz natural",
        description: "Leveza, textura real e sensação mais orgânica.",
      },
      {
        id: "externo",
        label: "Ambiente externo",
        description: "Paisagem, movimento e narrativa mais aberta.",
      },
      {
        id: "local-afetivo",
        label: "Local afetivo",
        description: "Um espaço com significado para a história registrada.",
      },
      {
        id: "indefinido",
        label: "Ainda não sei",
        description: "A direção criativa pode ajudar a encontrar o melhor caminho.",
      },
    ],
  },
  {
    id: "stage",
    eyebrow: "Fase",
    title: "Em que fase está sua decisão?",
    description:
      "Isso ajuda a orientar o próximo contato com a profundidade certa.",
    options: [
      {
        id: "pesquisando",
        label: "Estou pesquisando",
        description: "Quero entender estilos, formatos e possibilidades.",
      },
      {
        id: "orcamento",
        label: "Quero orçamento",
        description: "Já tenho intenção e quero avaliar proposta.",
      },
      {
        id: "data-prevista",
        label: "Tenho uma data prevista",
        description: "Preciso confirmar agenda e viabilidade.",
      },
      {
        id: "agendar-breve",
        label: "Quero agendar em breve",
        description: "Estou pronto para alinhar detalhes e disponibilidade.",
      },
    ],
  },
];
