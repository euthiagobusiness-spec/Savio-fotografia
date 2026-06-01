import { siteConfig } from "@/lib/constants";
import type { LeadInput } from "@/types/lead";
import type { QuizAnswers, QuizRecommendation } from "@/types/quiz";

function answerLabel(answers: QuizAnswers, key: keyof QuizAnswers) {
  return answers[key]?.label ?? "não informado";
}

function optionalLine(label: string, value: string | boolean) {
  if (typeof value === "boolean") {
    return value ? `${label}: sim` : "";
  }

  return value.trim() ? `${label}: ${value.trim()}` : "";
}

export function buildWhatsAppMessage({
  answers,
  lead,
  recommendation,
}: {
  answers: QuizAnswers;
  lead: LeadInput;
  recommendation: QuizRecommendation;
}) {
  const details = [
    optionalLine("Cidade/local", lead.city),
    optionalLine("Data ou previsão", lead.desiredDate),
    optionalLine("Local do evento", lead.eventLocation),
    optionalLine("Convidados aproximados", lead.guestCount),
    optionalLine("Deseja cobertura completa", lead.fullCoverage),
    optionalLine("Semanas de gestação", lead.pregnancyWeeks),
    optionalLine("Deseja incluir família", lead.includeFamily),
    optionalLine("Pessoas no ensaio", lead.participantCount),
    optionalLine("Há crianças", lead.hasChildren),
    optionalLine("Observações", lead.observations),
  ].filter(Boolean);

  return [
    `Olá, Sávio. Vim pelo site e fiz a experiência do ensaio ideal.`,
    `Meu nome é ${lead.name.trim()}.`,
    `Quero um ${recommendation.service.toLowerCase()}, estilo ${answerLabel(
      answers,
      "style",
    ).toLowerCase()}, em ${answerLabel(answers, "setting").toLowerCase()}.`,
    `Minha fase atual: ${answerLabel(answers, "stage").toLowerCase()}.`,
    details.length ? `Detalhes: ${details.join(" | ")}` : "",
    `Gostaria de receber orientação sobre disponibilidade e proposta.`,
  ]
    .filter(Boolean)
    .join("\n");
}

export function buildWhatsAppUrl(message: string) {
  const phone = siteConfig.whatsappPhone.replace(/\D/g, "");

  if (!phone) {
    return "#contato";
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
