"use client";

import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, MessageCircle } from "lucide-react";
import { buildWhatsAppMessage, buildWhatsAppUrl } from "@/lib/whatsapp/message";
import { validateLeadInput } from "@/lib/validators/lead";
import type { LeadInput, LeadValidationErrors } from "@/types/lead";
import type { QuizAnswers, QuizRecommendation } from "@/types/quiz";

type LeadCaptureFormProps = {
  answers: QuizAnswers;
  recommendation: QuizRecommendation;
};

const initialLead: LeadInput = {
  name: "",
  whatsapp: "",
  email: "",
  serviceType: "",
  city: "",
  desiredDate: "",
  observations: "",
  consent: false,
  eventLocation: "",
  guestCount: "",
  fullCoverage: false,
  pregnancyWeeks: "",
  includeFamily: false,
  participantCount: "",
  hasChildren: false,
};

const inputClass =
  "min-h-12 w-full rounded-[8px] border border-white/12 bg-[#070707]/45 px-4 text-sm text-[#f4f0e8] outline-none transition placeholder:text-[#8c867c] focus:border-[#c8b89a]/70 focus:bg-[#070707]/70";

const labelClass = "mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[#c8b89a]";

function FieldError({ error }: { error?: string }) {
  if (!error) {
    return null;
  }

  return <span className="mt-2 block text-sm text-[#f0b8a8]">{error}</span>;
}

export function LeadCaptureForm({ answers, recommendation }: LeadCaptureFormProps) {
  const [lead, setLead] = useState<LeadInput>({
    ...initialLead,
    serviceType: recommendation.service,
  });
  const [errors, setErrors] = useState<LeadValidationErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const momentId = answers.moment?.id ?? "";
  const isWedding = momentId === "casamento" || momentId === "pre-wedding";
  const isMaternity = momentId === "gestante";
  const isFamily = momentId === "familia";

  const message = useMemo(
    () => buildWhatsAppMessage({ answers, lead, recommendation }),
    [answers, lead, recommendation],
  );

  function updateField(
    field: keyof LeadInput,
    value: string | boolean,
  ) {
    setLead((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function handleTextChange(field: keyof LeadInput) {
    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      updateField(field, event.target.value);
    };
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateLeadInput(lead);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[8px] border border-white/10 bg-[#0b0b0b]/82 p-5 shadow-2xl shadow-black/25 backdrop-blur-md sm:p-6"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="lead-name">
            Nome
          </label>
          <input
            id="lead-name"
            value={lead.name}
            onChange={handleTextChange("name")}
            className={inputClass}
            placeholder="Seu nome"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "lead-name-error" : undefined}
          />
          <span id="lead-name-error">
            <FieldError error={errors.name} />
          </span>
        </div>

        <div>
          <label className={labelClass} htmlFor="lead-whatsapp">
            WhatsApp
          </label>
          <input
            id="lead-whatsapp"
            value={lead.whatsapp}
            onChange={handleTextChange("whatsapp")}
            className={inputClass}
            placeholder="(00) 00000-0000"
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={Boolean(errors.whatsapp)}
            aria-describedby={errors.whatsapp ? "lead-whatsapp-error" : undefined}
          />
          <span id="lead-whatsapp-error">
            <FieldError error={errors.whatsapp} />
          </span>
        </div>

        <div>
          <label className={labelClass} htmlFor="lead-email">
            E-mail opcional
          </label>
          <input
            id="lead-email"
            value={lead.email}
            onChange={handleTextChange("email")}
            className={inputClass}
            placeholder="voce@email.com"
            autoComplete="email"
            inputMode="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "lead-email-error" : undefined}
          />
          <span id="lead-email-error">
            <FieldError error={errors.email} />
          </span>
        </div>

        <div>
          <label className={labelClass} htmlFor="lead-service">
            Tipo de ensaio
          </label>
          <select
            id="lead-service"
            value={lead.serviceType}
            onChange={handleTextChange("serviceType")}
            className={inputClass}
            aria-invalid={Boolean(errors.serviceType)}
            aria-describedby={errors.serviceType ? "lead-service-error" : undefined}
          >
            <option value="">Selecione</option>
            <option>Casamento</option>
            <option>Pré-wedding</option>
            <option>Gestante</option>
            <option>Família</option>
            <option>Retrato</option>
            <option>Ensaio em estúdio</option>
            <option>Ensaio externo</option>
          </select>
          <span id="lead-service-error">
            <FieldError error={errors.serviceType} />
          </span>
        </div>

        <div>
          <label className={labelClass} htmlFor="lead-city">
            Cidade
          </label>
          <input
            id="lead-city"
            value={lead.city}
            onChange={handleTextChange("city")}
            className={inputClass}
            placeholder="Cidade ou região"
            autoComplete="address-level2"
            aria-invalid={Boolean(errors.city)}
            aria-describedby={errors.city ? "lead-city-error" : undefined}
          />
          <span id="lead-city-error">
            <FieldError error={errors.city} />
          </span>
        </div>

        <div>
          <label className={labelClass} htmlFor="lead-date">
            Data desejada ou previsão
          </label>
          <input
            id="lead-date"
            value={lead.desiredDate}
            onChange={handleTextChange("desiredDate")}
            className={inputClass}
            placeholder="Ex.: julho, 15/08 ou ainda sem data"
          />
        </div>
      </div>

      {isWedding ? (
        <div className="mt-5 grid gap-4 rounded-[8px] border border-white/10 bg-white/[0.035] p-4 sm:grid-cols-3">
          <div>
            <label className={labelClass} htmlFor="lead-location">
              Cidade/local
            </label>
            <input
              id="lead-location"
              value={lead.eventLocation}
              onChange={handleTextChange("eventLocation")}
              className={inputClass}
              placeholder="Cerimônia ou festa"
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="lead-guests">
              Convidados
            </label>
            <input
              id="lead-guests"
              value={lead.guestCount}
              onChange={handleTextChange("guestCount")}
              className={inputClass}
              placeholder="Aproximado"
              inputMode="numeric"
            />
          </div>
          <label className="flex items-center gap-3 rounded-[8px] border border-white/10 bg-[#070707]/35 p-4 text-sm leading-6 text-[#d8d1c5]">
            <input
              type="checkbox"
              checked={lead.fullCoverage}
              onChange={(event) => updateField("fullCoverage", event.target.checked)}
              className="h-4 w-4 accent-[#c8b89a]"
            />
            Desejo avaliar cobertura completa
          </label>
        </div>
      ) : null}

      {isMaternity ? (
        <div className="mt-5 grid gap-4 rounded-[8px] border border-white/10 bg-white/[0.035] p-4 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="lead-weeks">
              Semanas de gestação
            </label>
            <input
              id="lead-weeks"
              value={lead.pregnancyWeeks}
              onChange={handleTextChange("pregnancyWeeks")}
              className={inputClass}
              placeholder="Ex.: 28 semanas"
            />
          </div>
          <label className="flex items-center gap-3 rounded-[8px] border border-white/10 bg-[#070707]/35 p-4 text-sm leading-6 text-[#d8d1c5]">
            <input
              type="checkbox"
              checked={lead.includeFamily}
              onChange={(event) => updateField("includeFamily", event.target.checked)}
              className="h-4 w-4 accent-[#c8b89a]"
            />
            Quero incluir parceiro ou família
          </label>
        </div>
      ) : null}

      {isFamily ? (
        <div className="mt-5 grid gap-4 rounded-[8px] border border-white/10 bg-white/[0.035] p-4 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="lead-participants">
              Quantas pessoas
            </label>
            <input
              id="lead-participants"
              value={lead.participantCount}
              onChange={handleTextChange("participantCount")}
              className={inputClass}
              placeholder="Ex.: 4 pessoas"
            />
          </div>
          <label className="flex items-center gap-3 rounded-[8px] border border-white/10 bg-[#070707]/35 p-4 text-sm leading-6 text-[#d8d1c5]">
            <input
              type="checkbox"
              checked={lead.hasChildren}
              onChange={(event) => updateField("hasChildren", event.target.checked)}
              className="h-4 w-4 accent-[#c8b89a]"
            />
            Há crianças no ensaio
          </label>
        </div>
      ) : null}

      <div className="mt-5">
        <label className={labelClass} htmlFor="lead-observations">
          Observações
        </label>
        <textarea
          id="lead-observations"
          value={lead.observations}
          onChange={handleTextChange("observations")}
          className={`${inputClass} min-h-28 resize-y py-3`}
          placeholder="Conte algo importante sobre o momento, local, estilo ou dúvida."
        />
      </div>

      <label className="mt-5 flex gap-3 rounded-[8px] border border-white/10 bg-[#070707]/40 p-4 text-sm leading-6 text-[#d8d1c5]">
        <input
          type="checkbox"
          checked={lead.consent}
          onChange={(event) => updateField("consent", event.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 accent-[#c8b89a]"
          aria-invalid={Boolean(errors.consent)}
          aria-describedby={errors.consent ? "lead-consent-error" : undefined}
        />
        <span>
          Autorizo o contato para receber informações sobre disponibilidade,
          valores e orientações relacionadas ao ensaio, conforme a{" "}
          <a className="text-[#c8b89a] underline-offset-4 hover:underline" href="/privacidade">
            Política de Privacidade
          </a>
          .
          <span id="lead-consent-error">
            <FieldError error={errors.consent} />
          </span>
        </span>
      </label>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
        <p className="text-sm leading-7 text-[#b7afa2]">
          O WhatsApp será aberto com o resumo da experiência para iniciar o
          atendimento com contexto e intenção claros.
        </p>
        <button
          type="submit"
          className="premium-button inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#d6c7aa] bg-[#f4f0e8] px-6 text-center text-[0.78rem] font-semibold uppercase tracking-[0.17em] text-[#070707] transition duration-300 hover:border-[#d8c7a5] hover:bg-[#d8c7a5]"
          style={{ color: "#070707" }}
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Receber orientação
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      {submitted ? (
        <p className="mt-4 inline-flex items-center gap-2 text-sm text-[#d8c7a5]">
          <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
          Resumo gerado. Se o WhatsApp não abriu, confira o bloqueio de pop-ups.
        </p>
      ) : null}
    </form>
  );
}
