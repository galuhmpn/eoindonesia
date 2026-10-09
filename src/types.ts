export type Language = 'id' | 'en';

export interface NavItem {
  id: string;
  label: {
    id: string;
    en: string;
  };
}

export type EventCategory = 'all' | 'mice' | 'corporate' | 'festival' | 'activation' | 'protocol';

export type EventScale = 'all' | 'small' | 'medium' | 'large';

export interface CaseStudy {
  id: string;
  title: {
    id: string;
    en: string;
  };
  category: EventCategory;
  categoryLabel: {
    id: string;
    en: string;
  };
  client: string;
  clientType: 'BUMN' | 'Multinational' | 'Government' | 'Private';
  location: string;
  province: string;
  year: string;
  attendance: string;
  scale: EventScale;
  tagline: {
    id: string;
    en: string;
  };
  objective: {
    id: string;
    en: string;
  };
  technicalChallenge: {
    id: string;
    en: string;
  };
  technicalSolution: {
    id: string;
    en: string;
  };
  specs: {
    audio: string;
    visual: string;
    riggingLoad: string;
    turnaroundTime: string;
  };
  metrics: {
    satisfaction: string;
    punctuality: string;
    safetyRecord: string;
  };
  highlights: {
    id: string[];
    en: string[];
  };
  visualTheme: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: {
    id: string;
    en: string;
  };
  subtitle: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
  deliverables: {
    id: string[];
    en: string[];
  };
  technicalFeatures: {
    id: string[];
    en: string[];
  };
  typicalClients: string[];
}

export interface TeamMember {
  name: string;
  role: {
    id: string;
    en: string;
  };
  experience: string;
  credentials: string;
  bio: {
    id: string;
    en: string;
  };
}

export interface ArticleSection {
  id: string;
  heading: {
    id: string;
    en: string;
  };
  body: {
    id: string;
    en: string;
  };
  keyTakeaway?: {
    id: string;
    en: string;
  };
}

export interface InsightArticle {
  id: string;
  title: {
    id: string;
    en: string;
  };
  category: {
    id: string;
    en: string;
  };
  readTime: string;
  date: string;
  summary: {
    id: string;
    en: string;
  };
  content: {
    id: string;
    en: string;
  };
  sections?: ArticleSection[];
}

export interface RegionHub {
  id: string;
  name: string;
  provinces: string[];
  mainWarehouse: string;
  activePartners: number;
  specialties: string[];
}

export interface RfpFormData {
  organizationName: string;
  contactPerson: string;
  email: string;
  phone: string;
  eventType: string;
  locationCity: string;
  audienceScale: string;
  targetDate: string;
  budgetRange: string;
  technicalNeeds: string[];
  additionalNotes: string;
}
