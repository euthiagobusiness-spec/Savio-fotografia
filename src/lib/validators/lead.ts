import type { LeadInput, LeadValidationErrors } from "@/types/lead";

function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

export function validateLeadInput(input: LeadInput): LeadValidationErrors {
  const errors: LeadValidationErrors = {};

  if (!input.name.trim()) {
    errors.name = "Informe seu nome.";
  }

  if (digitsOnly(input.whatsapp).length < 10) {
    errors.whatsapp = "Informe um WhatsApp válido com DDD.";
  }

  if (input.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
    errors.email = "Informe um e-mail válido ou deixe em branco.";
  }

  if (!input.serviceType.trim()) {
    errors.serviceType = "Escolha o tipo de ensaio.";
  }

  if (!input.city.trim()) {
    errors.city = "Informe a cidade ou local previsto.";
  }

  if (!input.consent) {
    errors.consent = "Autorize o contato para enviar as informações.";
  }

  return errors;
}
