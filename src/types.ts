export interface FieldOption {
  value: string;
  label_fr: string;
  label_ar: string;
}

export interface LetterField {
  key: string;
  label_fr: string;
  label_ar: string;
  type: 'text' | 'date' | 'select' | 'textarea';
  placeholder_fr?: string;
  placeholder_ar?: string;
  options?: FieldOption[];
  required: boolean;
}

export interface LetterTemplate {
  id: string;
  category: string;
  title_fr: string;
  title_ar: string;
  short_description_fr: string;
  short_description_ar: string;
  fields: LetterField[];
  body_fr: string;
  body_ar: string;
  seo_keywords_fr: string[];
}

export type CategoryId =
  | 'emploi-concours'
  | 'etudes-bourse'
  | 'etat-civil-administration'
  | 'consulat-diaspora'
  | 'banque-finance'
  | 'logement'
  | 'reclamations';

export interface Category {
  id: CategoryId;
  label_fr: string;
  label_ar: string;
  icon: string;
}

export type Lang = 'fr' | 'ar';
