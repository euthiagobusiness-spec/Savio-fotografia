export type LeadInput = {
  name: string;
  whatsapp: string;
  email: string;
  serviceType: string;
  city: string;
  desiredDate: string;
  observations: string;
  consent: boolean;
  eventLocation: string;
  guestCount: string;
  fullCoverage: boolean;
  pregnancyWeeks: string;
  includeFamily: boolean;
  participantCount: string;
  hasChildren: boolean;
};

export type LeadValidationErrors = Partial<Record<keyof LeadInput, string>>;
