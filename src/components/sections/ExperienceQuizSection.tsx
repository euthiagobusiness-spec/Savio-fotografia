"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, RotateCcw } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { LeadCaptureForm } from "@/components/forms/LeadCaptureForm";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { quizQuestions } from "@/data/quiz";
import { sectionContent } from "@/data/sections";
import { createQuizRecommendation } from "@/lib/quiz/recommendation";
import { cn } from "@/lib/utils";
import type { QuizAnswers, QuizOption, QuizQuestionId } from "@/types/quiz";

export function ExperienceQuizSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});

  const currentQuestion = quizQuestions[currentIndex];
  const answeredCount = quizQuestions.filter((question) => answers[question.id]).length;
  const isComplete = answeredCount === quizQuestions.length;
  const recommendation = useMemo(() => createQuizRecommendation(answers), [answers]);

  function selectOption(questionId: QuizQuestionId, option: QuizOption) {
    setAnswers((current) => ({ ...current, [questionId]: option }));

    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex((index) => index + 1);
    }
  }

  function resetQuiz() {
    setAnswers({});
    setCurrentIndex(0);
  }

  return (
    <Section id="ensaio-ideal" className="bg-[#070707]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionLabel
              eyebrow={sectionContent.quiz.eyebrow}
              title={sectionContent.quiz.title}
              description={sectionContent.quiz.description}
            />

            <div className="mt-8 rounded-[8px] border border-white/10 bg-white/[0.035] p-5">
              <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#8c867c]">
                <span>Progresso</span>
                <span>
                  {answeredCount}/{quizQuestions.length}
                </span>
              </div>
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-[#c8b89a]"
                  animate={{ width: `${(answeredCount / quizQuestions.length) * 100}%` }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <p className="mt-5 text-sm leading-7 text-[#b7afa2]">
                A experiência funciona como um pré-atendimento: ela traduz sua
                intenção em um resumo claro antes da conversa.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-x-4 top-10 -z-10 h-72 bg-[radial-gradient(circle_at_center,rgba(166,138,91,0.16),transparent_62%)]" />

            <div className="overflow-hidden rounded-[8px] border border-white/10 bg-[#111111] shadow-2xl shadow-black/30">
              {!isComplete ? (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentQuestion.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="p-5 sm:p-7 lg:p-8"
                  >
                    <div className="flex flex-col gap-5 border-b border-white/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c8b89a]">
                          {currentQuestion.eyebrow}
                        </p>
                        <h3 className="mt-4 max-w-2xl font-display text-4xl font-medium leading-[0.96] text-[#f4f0e8] text-balance sm:text-5xl">
                          {currentQuestion.title}
                        </h3>
                        <p className="mt-4 max-w-xl text-sm leading-7 text-[#b7afa2]">
                          {currentQuestion.description}
                        </p>
                      </div>
                      <span className="shrink-0 rounded-full border border-[#c8b89a]/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#d8c7a5]">
                        {String(currentIndex + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {currentQuestion.options.map((option) => {
                        const selected = answers[currentQuestion.id]?.id === option.id;

                        return (
                          <button
                            key={option.id}
                            type="button"
                            onClick={() => selectOption(currentQuestion.id, option)}
                            className={cn(
                              "group min-h-32 rounded-[8px] border p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-[#c8b89a]/65 hover:bg-[#15120e]",
                              selected
                                ? "border-[#c8b89a]/70 bg-[#15120e]"
                                : "border-white/10 bg-white/[0.035]",
                            )}
                          >
                            <span className="flex items-start justify-between gap-4">
                              <span className="text-base font-semibold text-[#f4f0e8]">
                                {option.label}
                              </span>
                              <span
                                className={cn(
                                  "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition",
                                  selected
                                    ? "border-[#c8b89a] bg-[#c8b89a] text-[#070707]"
                                    : "border-white/15 text-transparent group-hover:border-[#c8b89a]/60",
                                )}
                              >
                                <Check className="h-4 w-4" aria-hidden="true" />
                              </span>
                            </span>
                            <span className="mt-4 block text-sm leading-6 text-[#b7afa2]">
                              {option.description}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    <div className="mt-6 flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => setCurrentIndex((index) => Math.max(0, index - 1))}
                        disabled={currentIndex === 0}
                        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/12 px-4 text-sm font-semibold text-[#d8d1c5] transition hover:border-[#c8b89a]/60 hover:text-[#f4f0e8] disabled:pointer-events-none disabled:opacity-40"
                      >
                        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                        Voltar
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setCurrentIndex((index) =>
                            Math.min(quizQuestions.length - 1, index + 1),
                          )
                        }
                        disabled={!answers[currentQuestion.id] || currentIndex === quizQuestions.length - 1}
                        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/12 px-4 text-sm font-semibold text-[#d8d1c5] transition hover:border-[#c8b89a]/60 hover:text-[#f4f0e8] disabled:pointer-events-none disabled:opacity-40"
                      >
                        Avançar
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              ) : (
                <div className="p-5 sm:p-7 lg:p-8">
                  <div className="border-b border-white/10 pb-7">
                    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c8b89a]">
                          {sectionContent.quiz.resultEyebrow}
                        </p>
                        <h3 className="mt-4 font-display text-4xl font-medium leading-[0.96] text-[#f4f0e8] text-balance sm:text-5xl">
                          {recommendation.title}
                        </h3>
                        <p className="mt-5 text-base leading-8 text-[#d8d1c5]">
                          {recommendation.description}
                        </p>
                      </div>

                      <div className="grid gap-3">
                        {recommendation.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="rounded-[8px] border border-white/10 bg-[#070707]/45 p-4 text-sm leading-6 text-[#d8d1c5]"
                          >
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={resetQuiz}
                      className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/12 px-4 text-sm font-semibold text-[#d8d1c5] transition hover:border-[#c8b89a]/60 hover:text-[#f4f0e8]"
                    >
                      <RotateCcw className="h-4 w-4" aria-hidden="true" />
                      Refazer experiência
                    </button>
                  </div>

                  <div className="pt-7">
                    <div className="mb-6 max-w-2xl">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c8b89a]">
                        Pré-orçamento
                      </p>
                      <h3 className="mt-3 font-display text-3xl font-medium leading-none text-[#f4f0e8]">
                        {sectionContent.quiz.leadTitle}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-[#b7afa2]">
                        {sectionContent.quiz.leadDescription}
                      </p>
                    </div>
                    <LeadCaptureForm answers={answers} recommendation={recommendation} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
