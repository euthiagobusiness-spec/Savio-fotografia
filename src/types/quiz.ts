export type QuizQuestionId = "moment" | "style" | "setting" | "stage";

export type QuizOption = {
  id: string;
  label: string;
  description: string;
};

export type QuizQuestion = {
  id: QuizQuestionId;
  eyebrow: string;
  title: string;
  description: string;
  options: QuizOption[];
};

export type QuizAnswers = Partial<Record<QuizQuestionId, QuizOption>>;

export type QuizRecommendation = {
  title: string;
  description: string;
  service: string;
  style: string;
  setting: string;
  stage: string;
  highlights: string[];
};
