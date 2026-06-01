import type { QuizAnswers, QuizRecommendation } from "@/types/quiz";

const fallback = "Ainda não definido";

function labelFor(answers: QuizAnswers, key: keyof QuizAnswers) {
  return answers[key]?.label ?? fallback;
}

function serviceIntro(service: string) {
  const normalized = service.toLowerCase();

  if (normalized.includes("gestante")) {
    return "um ensaio gestante com direção sensível, cuidado com o tempo da família e imagens pensadas para permanecer como memória afetiva";
  }

  if (normalized.includes("casamento")) {
    return "uma cobertura de casamento com narrativa completa, segurança de processo e olhar atento aos gestos que não se repetem";
  }

  if (normalized.includes("pré")) {
    return "um pré-wedding com estética autoral, conexão entre o casal e uma direção visual que antecipa o clima do casamento";
  }

  if (normalized.includes("família")) {
    return "um ensaio de família com ritmo leve, direção acolhedora e atenção aos vínculos reais entre as pessoas";
  }

  if (normalized.includes("retrato")) {
    return "uma sessão de retratos com presença, intenção de imagem e acabamento profissional";
  }

  return "uma experiência em estúdio ou externa com direção visual, sensibilidade e acabamento autoral";
}

function recommendationTitle(service: string, style: string) {
  const normalized = service.toLowerCase();
  const styled = style.toLowerCase();

  if (normalized.includes("gestante")) {
    return `Ensaio gestante ${styled}`;
  }

  if (normalized.includes("família")) {
    return `Ensaio em família ${styled}`;
  }

  if (normalized.includes("estúdio")) {
    return `Ensaio em estúdio ${styled}`;
  }

  if (normalized.includes("externo")) {
    return `Ensaio externo ${styled}`;
  }

  return `${service} ${styled}`;
}

export function createQuizRecommendation(answers: QuizAnswers): QuizRecommendation {
  const service = labelFor(answers, "moment");
  const style = labelFor(answers, "style");
  const setting = labelFor(answers, "setting");
  const stage = labelFor(answers, "stage");

  return {
    title: recommendationTitle(service, style),
    service,
    style,
    setting,
    stage,
    description: `Pelo seu perfil, ${serviceIntro(service)} parece o caminho ideal. A combinação entre estilo ${style.toLowerCase()} e ${setting.toLowerCase()} cria uma experiência com verdade, direção e valor emocional.`,
    highlights: [
      `Direção visual alinhada ao estilo ${style.toLowerCase()}.`,
      `Ambiente sugerido: ${setting.toLowerCase()}.`,
      `Próximo passo coerente com a fase: ${stage.toLowerCase()}.`,
    ],
  };
}
