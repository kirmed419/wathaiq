import type { Category } from '../types';

export const CATEGORIES: Category[] = [
  { id: 'emploi-concours',         label_fr: 'Emploi & Concours',          label_ar: 'التوظيف والمسابقات',   icon: '💼' },
  { id: 'etudes-bourse',           label_fr: 'Études & Bourse',             label_ar: 'الدراسة والمنحة',      icon: '🎓' },
  { id: 'etat-civil-administration', label_fr: 'État civil & Administration', label_ar: 'الحالة المدنية والإدارة', icon: '🏛️' },
  { id: 'consulat-diaspora',       label_fr: 'Consulat & Diaspora',         label_ar: 'القنصلية والجالية',    icon: '🌍' },
  { id: 'banque-finance',          label_fr: 'Banque & Finance',            label_ar: 'البنك والمالية',       icon: '🏦' },
  { id: 'logement',                label_fr: 'Logement',                    label_ar: 'السكن',                icon: '🏠' },
  { id: 'reclamations',            label_fr: 'Réclamations',                label_ar: 'الشكاوى والمطالبات',   icon: '📢' },
];
