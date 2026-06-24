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

// ============================================================================
// PROCEDURES (the app's core): each entry is a guide to an Algerian
// administrative procedure and the exact paperwork (dossier) it requires.
// ============================================================================

/** One required piece of paperwork inside a dossier. */
export interface RequiredDoc {
  fr: string;
  ar: string;
  /** Extra precision shown under the item (quantity, format, validity…). */
  note_fr?: string;
  note_ar?: string;
  /** Only required in specific situations (renewal, minor, abroad…). */
  conditional?: boolean;
}

/** An official / authoritative reference backing a procedure. */
export interface OfficialSource {
  label: string;
  url: string;
}

export type ProcedureCategoryId =
  | 'etat-civil'
  | 'identite-voyage'
  | 'residence-justice'
  | 'travail-protection-sociale'
  | 'entreprise-commerce'
  | 'banque-finances'
  | 'logement-urbanisme'
  | 'education'
  | 'etranger-diaspora';

export interface ProcedureCategory {
  id: ProcedureCategoryId;
  label_fr: string;
  label_ar: string;
  /** Short helper line shown under the category title. */
  blurb_fr: string;
  blurb_ar: string;
  icon: string;
}

export interface Procedure {
  id: string;
  category: ProcedureCategoryId;
  title_fr: string;
  title_ar: string;
  /** What it is / when you need it (1–2 sentences). */
  summary_fr: string;
  summary_ar: string;
  /** Where the dossier is filed (APC, daïra, wilaya, court, consulate…). */
  where_fr: string;
  where_ar: string;
  /** The dossier: ordered list of required documents. */
  documents: RequiredDoc[];
  /** Optional ordered steps for procedures that are a sequence. */
  steps_fr?: string[];
  steps_ar?: string[];
  cost_fr: string;
  cost_ar: string;
  delay_fr: string;
  delay_ar: string;
  validity_fr?: string;
  validity_ar?: string;
  /** Official online portal for this procedure, if one exists. */
  online_url?: string;
  online_label_fr?: string;
  online_label_ar?: string;
  /** Good-to-know tips. */
  tips_fr?: string[];
  tips_ar?: string[];
  /** Ids of letter templates relevant to this procedure (cross-links). */
  related_letters?: string[];
  /** Official / authoritative sources (shown and linked). */
  sources: OfficialSource[];
  seo_keywords_fr: string[];
  /** ISO date the content was last reviewed against sources. */
  updated: string;
}
