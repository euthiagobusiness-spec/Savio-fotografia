export type ServiceJourney = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  alt: string;
  idealFor: string;
  flow: string[];
  includes: string[];
  context: string;
};

export type PreparationGuide = {
  id: string;
  label: string;
  title: string;
  description: string;
  tips: string[];
};
