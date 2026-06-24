import type { Procedure } from '../types';

// =============================================================================
// Wathaiq DZ · Algerian administrative procedures & required paperwork.
//
// Each entry summarizes WHAT a procedure is, WHERE the dossier is filed, the
// EXACT documents required, cost, delay, validity, the official online portal
// (if any) and authoritative SOURCES. Requirements are reviewed against the
// official sources listed on each entry; they can still change · every detail
// page links the source so the user can verify before going to the counter.
//
// Reviewed: June 2026. Sources: interieur.gov.dz, mjustice.gov.dz, cnrc.dz,
// cnas.dz, casnos.com.dz, cnr.dz, anem.dz, anae.dz, aadl.com.dz, mesrs.dz,
// mfa.gov.dz, bawabatic.dz (Portail des services publics).
// =============================================================================

const REVIEWED = '2026-06-23';

export const PROCEDURES: Procedure[] = [
  // ===========================================================================
  // ÉTAT CIVIL
  // ===========================================================================
  {
    id: 'acte-naissance-12s',
    category: 'etat-civil',
    title_fr: 'Extrait d’acte de naissance spécial n°12 S',
    title_ar: 'مستخرج عقد الميلاد الخاص رقم 12 (S12)',
    summary_fr:
      'Document d’état civil sécurisé établi une seule fois et valable à vie. Il porte le numéro d’identification national (NIN) et est exigé pour le passeport, la CNIBE, le permis et la plupart des dossiers.',
    summary_ar:
      'وثيقة مؤمّنة للحالة المدنية تُحرَّر مرة واحدة وتبقى صالحة مدى الحياة. تحمل رقم التعريف الوطني (NIN) وتُطلب لجواز السفر وبطاقة التعريف ورخصة السياقة ومعظم الملفات.',
    where_fr:
      'Commune (APC) du lieu de naissance, ou en ligne sur le portail du Ministère de l’Intérieur, ou au consulat pour la diaspora.',
    where_ar:
      'بلدية مكان الميلاد، أو عبر بوابة وزارة الداخلية على الإنترنت، أو لدى القنصلية بالنسبة للجالية.',
    documents: [
      { fr: 'Demande (nom, prénom, date et lieu de naissance, n° de l’acte)', ar: 'طلب يتضمن الاسم واللقب وتاريخ ومكان الميلاد ورقم العقد' },
      { fr: 'Livret de famille ou ancien extrait de naissance (pour retrouver le n° d’acte)', ar: 'الدفتر العائلي أو مستخرج ميلاد قديم (لاستخراج رقم العقد)' },
      { fr: 'Pièce d’identité du demandeur', ar: 'وثيقة هوية صاحب الطلب' },
    ],
    cost_fr: 'Gratuit',
    cost_ar: 'مجاني',
    delay_fr: 'Immédiat au guichet ; sous 48 h en ligne',
    delay_ar: 'فوري عند الشباك؛ خلال 48 ساعة عبر الإنترنت',
    validity_fr: 'Permanente (document unique à vie)',
    validity_ar: 'دائمة (وثيقة فريدة مدى الحياة)',
    online_url: 'https://demande12s.interieur.gov.dz/',
    online_label_fr: 'Demander le 12 S en ligne',
    online_label_ar: 'طلب الوثيقة 12S عبر الإنترنت',
    tips_fr: [
      'Le 12 S n’est établi qu’une seule fois : conservez-le précieusement, il servira pour toutes vos démarches.',
      'En ligne, le retrait final se fait en personne à la commune ou au consulat, muni d’une pièce d’identité.',
    ],
    tips_ar: [
      'تُحرَّر الوثيقة 12S مرة واحدة فقط: احتفظ بها جيداً فهي تُستعمل في كل إجراءاتك.',
      'عبر الإنترنت، يتم السحب النهائي شخصياً من البلدية أو القنصلية بوثيقة هوية.',
    ],
    related_letters: ['extrait-naissance'],
    sources: [
      { label: 'Demande 12 S en ligne · Ministère de l’Intérieur', url: 'https://demande12s.interieur.gov.dz/' },
      { label: 'État civil · interieur.gov.dz', url: 'https://interieur.gov.dz/2024/02/29/etat-civil/' },
    ],
    seo_keywords_fr: ['acte de naissance 12s', 's12', 'extrait de naissance algerie', 'demande 12s en ligne', 'numero identification national'],
    updated: REVIEWED,
  },
  {
    id: 'acte-naissance-integral',
    category: 'etat-civil',
    title_fr: 'Copie intégrale d’acte de naissance',
    title_ar: 'نسخة كاملة من عقد الميلاد',
    summary_fr:
      'Reproduction complète de l’acte de naissance (mentions marginales incluses). Souvent demandée pour le mariage, la nationalité ou les dossiers consulaires.',
    summary_ar:
      'نسخة كاملة لعقد الميلاد (مع الهوامش). كثيراً ما تُطلب للزواج أو الجنسية أو الملفات القنصلية.',
    where_fr: 'Commune du lieu de naissance (service de l’état civil), ou consulat.',
    where_ar: 'بلدية مكان الميلاد (مصلحة الحالة المدنية)، أو القنصلية.',
    documents: [
      { fr: 'Pièce d’identité du demandeur', ar: 'وثيقة هوية صاحب الطلب' },
      { fr: 'Livret de famille ou références de l’acte (n°, année)', ar: 'الدفتر العائلي أو مراجع العقد (الرقم والسنة)' },
    ],
    cost_fr: 'Gratuit',
    cost_ar: 'مجاني',
    delay_fr: 'Immédiat au guichet',
    delay_ar: 'فوري عند الشباك',
    tips_fr: ['La copie intégrale diffère de l’extrait 12 S : vérifiez lequel l’organisme exige.'],
    tips_ar: ['تختلف النسخة الكاملة عن المستخرج 12S: تأكّد من النوع الذي تطلبه الجهة.'],
    related_letters: ['extrait-naissance'],
    sources: [
      { label: 'État civil · interieur.gov.dz', url: 'https://interieur.gov.dz/2024/02/29/etat-civil/' },
    ],
    seo_keywords_fr: ['copie integrale acte de naissance', 'acte de naissance complet algerie', 'extrait naissance integral'],
    updated: REVIEWED,
  },
  {
    id: 'fiche-familiale',
    category: 'etat-civil',
    title_fr: 'Fiche familiale d’état civil',
    title_ar: 'البطاقة العائلية للحالة المدنية',
    summary_fr:
      'Document qui récapitule la composition et la situation de la famille (mariage, naissances, divorce, décès). Très demandée pour les dossiers sociaux, scolaires et de logement.',
    summary_ar:
      'وثيقة تلخّص تركيبة الأسرة ووضعيتها (الزواج، الولادات، الطلاق، الوفاة). تُطلب كثيراً في الملفات الاجتماعية والمدرسية والسكنية.',
    where_fr: 'Service de l’état civil de n’importe quelle commune ou annexe administrative.',
    where_ar: 'مصلحة الحالة المدنية في أي بلدية أو ملحقة إدارية.',
    documents: [
      { fr: 'Livret de famille (original)', ar: 'الدفتر العائلي (الأصل)' },
      { fr: 'Pièce d’identité du demandeur', ar: 'وثيقة هوية صاحب الطلب' },
    ],
    cost_fr: 'Gratuit',
    cost_ar: 'مجاني',
    delay_fr: 'Immédiat au guichet',
    delay_ar: 'فوري عند الشباك',
    validity_fr: 'Souvent exigée datée de moins de 3 à 6 mois selon l’organisme',
    validity_ar: 'كثيراً ما تُطلب حديثة بأقل من 3 إلى 6 أشهر حسب الجهة',
    tips_fr: ['La fiche familiale se retire au guichet, sur présentation du livret de famille ; elle n’est pas téléchargeable en ligne.'],
    tips_ar: ['تُسحب البطاقة العائلية من الشباك بتقديم الدفتر العائلي، وهي غير متوفرة للتحميل عبر الإنترنت.'],
    related_letters: ['fiche-familiale'],
    sources: [
      { label: 'La fiche familiale · interieur.gov.dz', url: 'https://interieur.gov.dz/la-fiche-familiale-de-letat-civil/' },
    ],
    seo_keywords_fr: ['fiche familiale', 'fiche familiale etat civil algerie', 'بطاقة عائلية', 'documents fiche familiale'],
    updated: REVIEWED,
  },
  {
    id: 'acte-mariage',
    category: 'etat-civil',
    title_fr: 'Dossier et acte de mariage',
    title_ar: 'ملف وعقد الزواج',
    summary_fr:
      'Constitution du dossier de mariage devant l’officier d’état civil (APC) ou le notaire, puis délivrance de l’acte de mariage.',
    summary_ar:
      'تكوين ملف الزواج أمام ضابط الحالة المدنية (البلدية) أو الموثّق، ثم استخراج عقد الزواج.',
    where_fr: 'Commune (APC) du lieu de résidence de l’un des époux, ou étude notariale.',
    where_ar: 'بلدية مكان إقامة أحد الزوجين، أو مكتب الموثّق.',
    documents: [
      { fr: 'Extrait d’acte de naissance de chaque époux', ar: 'مستخرج عقد ميلاد كلٍّ من الزوجين' },
      { fr: 'Certificat médical prénuptial des deux époux', ar: 'الشهادة الطبية لما قبل الزواج للزوجين', note_fr: 'Daté de moins de 3 mois', note_ar: 'حديثة بأقل من 3 أشهر' },
      { fr: 'Certificat de résidence de chaque époux', ar: 'شهادة إقامة كلٍّ من الزوجين' },
      { fr: 'Pièces d’identité des deux témoins', ar: 'وثيقتا هوية الشاهدين' },
      { fr: 'Photos d’identité', ar: 'صور شمسية' },
      { fr: 'Acte de décès du précédent conjoint ou acte de divorce', ar: 'عقد وفاة الزوج السابق أو عقد الطلاق', note_fr: 'En cas de remariage', note_ar: 'في حالة الزواج مجدداً', conditional: true },
    ],
    cost_fr: 'Délivrance de l’acte gratuite (frais de timbre éventuels)',
    cost_ar: 'استخراج العقد مجاني (مع إمكانية رسوم طابع)',
    delay_fr: 'Selon la fixation de la date de mariage',
    delay_ar: 'حسب تحديد تاريخ الزواج',
    validity_fr: 'Certificat médical valable 3 mois',
    validity_ar: 'الشهادة الطبية صالحة 3 أشهر',
    tips_fr: ['Le certificat médical prénuptial est obligatoire et doit dater de moins de 3 mois au jour de la conclusion du mariage.'],
    tips_ar: ['الشهادة الطبية لما قبل الزواج إجبارية ويجب أن تكون حديثة بأقل من 3 أشهر يوم إبرام العقد.'],
    related_letters: ['acte-mariage-consulat'],
    sources: [
      { label: 'Établissement de l’acte de mariage · interieur.gov.dz', url: 'https://interieur.gov.dz/2024/02/29/etat-civil/' },
    ],
    seo_keywords_fr: ['dossier de mariage algerie', 'acte de mariage', 'certificat medical prenuptial', 'documents mariage algerie'],
    updated: REVIEWED,
  },
  {
    id: 'acte-deces',
    category: 'etat-civil',
    title_fr: 'Déclaration et acte de décès',
    title_ar: 'التصريح بالوفاة وعقد الوفاة',
    summary_fr:
      'Déclaration obligatoire du décès à l’état civil, qui permet l’établissement de l’acte de décès nécessaire à la succession et aux démarches qui suivent.',
    summary_ar:
      'التصريح الإجباري بالوفاة لدى الحالة المدنية، ما يسمح بتحرير عقد الوفاة اللازم للميراث والإجراءات اللاحقة.',
    where_fr: 'Commune (APC) du lieu de décès.',
    where_ar: 'بلدية مكان الوفاة.',
    documents: [
      { fr: 'Certificat médical de décès (ou constat d’un officier de police judiciaire)', ar: 'الشهادة الطبية للوفاة (أو معاينة ضابط الشرطة القضائية)' },
      { fr: 'Livret de famille du défunt', ar: 'الدفتر العائلي للمتوفّى' },
      { fr: 'Pièce d’identité du défunt et du déclarant', ar: 'وثيقة هوية المتوفّى والمصرّح' },
    ],
    cost_fr: 'Gratuit',
    cost_ar: 'مجاني',
    delay_fr: 'Déclaration sous 24 h (20 jours dans les wilayas du Sud) ; extrait délivré immédiatement',
    delay_ar: 'التصريح خلال 24 ساعة (20 يوماً في ولايات الجنوب)؛ المستخرج يُسلَّم فوراً',
    related_letters: ['acte-deces'],
    sources: [
      { label: 'Acte de décès · interieur.gov.dz', url: 'https://interieur.gov.dz/2024/02/29/etat-civil/' },
    ],
    seo_keywords_fr: ['acte de deces algerie', 'declaration deces', 'documents acte de deces', 'delai declaration deces'],
    updated: REVIEWED,
  },
  {
    id: 'certificat-nationalite',
    category: 'etat-civil',
    title_fr: 'Certificat de nationalité algérienne',
    title_ar: 'شهادة الجنسية الجزائرية',
    summary_fr:
      'Document unique prouvant la nationalité algérienne, délivré par le tribunal. Exigé notamment pour une première demande de passeport ou de CNIBE.',
    summary_ar:
      'وثيقة فريدة تُثبت الجنسية الجزائرية، تُسلّمها المحكمة. تُطلب خاصة عند أول طلب لجواز السفر أو بطاقة التعريف.',
    where_fr: 'Tribunal (juridiction) du lieu de résidence ; demande possible en ligne via le Ministère de la Justice.',
    where_ar: 'محكمة مكان الإقامة؛ ويمكن الطلب عبر الإنترنت من خلال وزارة العدل.',
    documents: [
      { fr: 'Extrait d’acte de naissance n°12 S', ar: 'مستخرج عقد الميلاد رقم 12S' },
      { fr: 'Pièce d’identité', ar: 'وثيقة هوية' },
      { fr: 'Acte de naissance du père (et du grand-père selon le cas)', ar: 'عقد ميلاد الأب (والجدّ حسب الحالة)', conditional: true },
      { fr: 'Documents complémentaires selon le fondement (filiation, mariage, naturalisation)', ar: 'وثائق إضافية حسب أساس الجنسية (النسب، الزواج، التجنّس)', conditional: true },
    ],
    cost_fr: 'Procédure en ligne gratuite (dispensée de timbre)',
    cost_ar: 'الإجراء عبر الإنترنت مجاني (معفى من الطابع)',
    delay_fr: 'Rapide ; le certificat est délivré au guichet ou en PDF signé électroniquement',
    delay_ar: 'سريع؛ تُسلَّم الشهادة عند الشباك أو بصيغة PDF موقّعة إلكترونياً',
    online_url: 'https://www.mjustice.gov.dz/',
    online_label_fr: 'Service en ligne (Ministère de la Justice)',
    online_label_ar: 'الخدمة عبر الإنترنت (وزارة العدل)',
    tips_fr: ['Pour le service en ligne, une première présentation au tribunal (avec pièce d’identité et n° de téléphone) est nécessaire pour activer le compte.'],
    tips_ar: ['للخدمة عبر الإنترنت، يلزم الحضور مرة واحدة إلى المحكمة (بوثيقة هوية ورقم هاتف) لتفعيل الحساب.'],
    related_letters: ['certificat-nationalite'],
    sources: [
      { label: 'Certificat de nationalité en ligne · bawabatic.dz', url: 'https://bawabatic.dz/?req=informations&op=detail&id=217&lang=fr' },
      { label: 'Ministère de la Justice', url: 'https://www.mjustice.gov.dz/' },
    ],
    seo_keywords_fr: ['certificat de nationalite algerienne', 'nationalite algerienne tribunal', 'شهادة الجنسية', 'documents certificat nationalite'],
    updated: REVIEWED,
  },

  // ===========================================================================
  // IDENTITÉ & VOYAGE
  // ===========================================================================
  {
    id: 'passeport-biometrique',
    category: 'identite-voyage',
    title_fr: 'Passeport biométrique',
    title_ar: 'جواز السفر البيومتري',
    summary_fr:
      'Titre de voyage électronique. Première demande ou renouvellement ; le dépôt et le retrait se font en personne (prise des empreintes).',
    summary_ar:
      'وثيقة سفر إلكترونية. طلب أول أو تجديد؛ ويتم الإيداع والسحب شخصياً (أخذ البصمات).',
    where_fr: 'Daïra ou commune du lieu de résidence ; consulat pour la diaspora.',
    where_ar: 'الدائرة أو البلدية لمكان الإقامة؛ القنصلية بالنسبة للجالية.',
    documents: [
      { fr: 'Formulaire de demande renseigné et signé', ar: 'استمارة الطلب معبّأة وموقّعة' },
      { fr: 'Extrait d’acte de naissance n°12 S', ar: 'مستخرج عقد الميلاد رقم 12S' },
      { fr: 'Certificat de nationalité', ar: 'شهادة الجنسية', note_fr: 'Pour une première demande', note_ar: 'لأول طلب', conditional: true },
      { fr: 'Ancien passeport', ar: 'جواز السفر القديم', note_fr: 'Pour un renouvellement', note_ar: 'للتجديد', conditional: true },
      { fr: 'Certificat de résidence de moins de 6 mois', ar: 'شهادة إقامة حديثة بأقل من 6 أشهر' },
      { fr: 'Attestation de travail ou certificat de scolarité', ar: 'شهادة عمل أو شهادة مدرسية' },
      { fr: '4 photos d’identité couleur récentes identiques (fond blanc)', ar: '4 صور شمسية ملونة حديثة ومتطابقة (خلفية بيضاء)' },
      { fr: 'Copie de la carte de groupe sanguin', ar: 'نسخة من بطاقة فصيلة الدم' },
      { fr: 'Quittance / timbre fiscal correspondant', ar: 'وصل / طابع جبائي مطابق' },
    ],
    cost_fr: 'Timbre fiscal (montant selon l’âge et le nombre de pages ; gratuit/réduit pour étudiants et cas particuliers)',
    cost_ar: 'طابع جبائي (المبلغ حسب السنّ وعدد الصفحات؛ مجاني/مخفّض للطلبة والحالات الخاصة)',
    delay_fr: 'Variable ; un SMS invite au retrait',
    delay_ar: 'متغيّر؛ تصلك رسالة SMS للسحب',
    validity_fr: '10 ans (adultes), 5 ans (mineurs)',
    validity_ar: '10 سنوات (الكبار)، 5 سنوات (القُصّر)',
    online_url: 'https://passeport.interieur.gov.dz/',
    online_label_fr: 'Portail passeport & suivi de demande',
    online_label_ar: 'بوابة جواز السفر ومتابعة الطلب',
    tips_fr: [
      'Si vous possédez déjà un document biométrique, le dossier administratif et la reprise des empreintes peuvent être allégés.',
      'Le retrait est strictement personnel.',
    ],
    tips_ar: [
      'إذا كنت تملك بالفعل وثيقة بيومترية، قد يُخفَّف الملف الإداري ولا تُعاد أخذ البصمات.',
      'السحب شخصي حصراً.',
    ],
    related_letters: ['passeport-national', 'renouvellement-passeport'],
    sources: [
      { label: 'Pièces à fournir · passeport.interieur.gov.dz', url: 'https://passeport.interieur.gov.dz/fr/Informations_Fr/Pi%C3%A8ces_a_Fournir' },
      { label: 'Passeport biométrique · interieur.gov.dz', url: 'https://interieur.gov.dz/accueil_fr/passeport-biometrique/' },
    ],
    seo_keywords_fr: ['passeport biometrique algerie', 'documents passeport algerie', 'dossier passeport', 'renouvellement passeport algerie'],
    updated: REVIEWED,
  },
  {
    id: 'cnibe',
    category: 'identite-voyage',
    title_fr: 'Carte nationale d’identité biométrique (CNIBE)',
    title_ar: 'بطاقة التعريف الوطنية البيومترية',
    summary_fr:
      'Carte d’identité électronique. Demande en ligne possible, puis dépôt/retrait au guichet pour les données biométriques.',
    summary_ar:
      'بطاقة تعريف إلكترونية. يمكن الطلب عبر الإنترنت، ثم الإيداع/السحب عند الشباك لأخذ البيانات البيومترية.',
    where_fr: 'Commune du lieu de résidence ; consulat pour la diaspora. Pré-demande en ligne sur le portail du Ministère de l’Intérieur.',
    where_ar: 'بلدية مكان الإقامة؛ القنصلية بالنسبة للجالية. طلب مسبق عبر بوابة وزارة الداخلية.',
    documents: [
      { fr: 'Extrait d’acte de naissance n°12 S', ar: 'مستخرج عقد الميلاد رقم 12S' },
      { fr: 'Certificat de nationalité', ar: 'شهادة الجنسية', note_fr: 'Pour une première demande', note_ar: 'لأول طلب', conditional: true },
      { fr: 'Certificat de résidence', ar: 'شهادة الإقامة' },
      { fr: '2 photos d’identité récentes (fond blanc, normes ICAO)', ar: 'صورتان شمسيتان حديثتان (خلفية بيضاء، معايير ICAO)' },
      { fr: 'Copie de la carte de groupe sanguin', ar: 'نسخة من بطاقة فصيلة الدم' },
      { fr: 'Document justifiant l’ancienne carte (pour renouvellement)', ar: 'وثيقة تثبت البطاقة القديمة (للتجديد)', conditional: true },
    ],
    cost_fr: 'Gratuite (timbre en cas de perte/détérioration)',
    cost_ar: 'مجانية (طابع في حالة الضياع/التلف)',
    delay_fr: 'Environ 21 jours ; un SMS invite au retrait',
    delay_ar: 'حوالي 21 يوماً؛ تصلك رسالة SMS للسحب',
    validity_fr: '10 ans',
    validity_ar: '10 سنوات',
    online_url: 'https://passeport.interieur.gov.dz/',
    online_label_fr: 'Demander / suivre la CNIBE en ligne',
    online_label_ar: 'طلب / متابعة بطاقة التعريف عبر الإنترنت',
    tips_fr: ['Si vous avez déjà un passeport biométrique, le dossier de la CNIBE est simplifié.'],
    tips_ar: ['إذا كنت تملك جواز سفر بيومتري، يُبسَّط ملف بطاقة التعريف.'],
    related_letters: ['duplicata-carte-identite'],
    sources: [
      { label: 'Demande CNIBE · passeport.interieur.gov.dz', url: 'https://passeport.interieur.gov.dz/' },
      { label: 'CNIBE · interieur.gov.dz', url: 'https://interieur.gov.dz/' },
    ],
    seo_keywords_fr: ['carte identite biometrique algerie', 'cnibe', 'documents carte identite algerie', 'بطاقة التعريف البيومترية'],
    updated: REVIEWED,
  },
  {
    id: 'permis-conduire',
    category: 'identite-voyage',
    title_fr: 'Permis de conduire biométrique',
    title_ar: 'رخصة السياقة البيومترية',
    summary_fr:
      'Délivrance du permis biométrique : conversion du permis probatoire en permis définitif, ou première délivrance après réussite à l’examen.',
    summary_ar:
      'إصدار الرخصة البيومترية: تحويل الرخصة الاحتمالية إلى نهائية، أو أول إصدار بعد النجاح في الامتحان.',
    where_fr: 'Daïra, circonscription administrative ou wilaya du lieu de résidence.',
    where_ar: 'الدائرة أو المقاطعة الإدارية أو الولاية لمكان الإقامة.',
    documents: [
      { fr: 'Formulaire de demande renseigné et signé', ar: 'استمارة الطلب معبّأة وموقّعة' },
      { fr: 'Acte de naissance', ar: 'عقد الميلاد' },
      { fr: 'Certificat / fiche de résidence en cours de validité', ar: 'شهادة / بطاقة إقامة سارية المفعول' },
      { fr: 'Certificat médical conforme à la réglementation', ar: 'شهادة طبية مطابقة للتنظيم' },
      { fr: 'Copie de la carte de groupe sanguin', ar: 'نسخة من بطاقة فصيلة الدم' },
      { fr: 'Photos d’identité', ar: 'صور شمسية' },
      { fr: 'Permis probatoire expiré', ar: 'الرخصة الاحتمالية المنتهية', note_fr: 'Pour le permis définitif', note_ar: 'للرخصة النهائية', conditional: true },
      { fr: 'Quittance / timbre fiscal (1000 DA pour le biométrique)', ar: 'وصل / طابع جبائي (1000 دج للبيومترية)' },
    ],
    cost_fr: 'Timbre de 1000 DA pour le permis biométrique',
    cost_ar: 'طابع بقيمة 1000 دج للرخصة البيومترية',
    delay_fr: 'Variable ; retrait au lieu de dépôt',
    delay_ar: 'متغيّر؛ السحب من مكان الإيداع',
    online_url: 'https://passeport.interieur.gov.dz/fr/SuiviPCBEP_Fr/Suivi%20Demande%20du%20permis%20de%20conduire',
    online_label_fr: 'Suivi de la demande de permis',
    online_label_ar: 'متابعة طلب الرخصة',
    tips_fr: ['Les titulaires d’un document biométrique sont dispensés d’un dossier administratif complet et d’une nouvelle prise biométrique.'],
    tips_ar: ['حاملو وثيقة بيومترية معفون من ملف إداري كامل ومن إعادة أخذ البصمات.'],
    related_letters: ['duplicata-permis-conduire'],
    sources: [
      { label: 'Permis de conduire · interieur.gov.dz', url: 'https://interieur.gov.dz/accueil_fr/permis-de-conduire/' },
    ],
    seo_keywords_fr: ['permis de conduire biometrique algerie', 'documents permis de conduire', 'dossier permis algerie', 'رخصة السياقة'],
    updated: REVIEWED,
  },
  {
    id: 'carte-grise',
    category: 'identite-voyage',
    title_fr: 'Carte grise (certificat d’immatriculation)',
    title_ar: 'البطاقة الرمادية (شهادة ترقيم المركبة)',
    summary_fr:
      'Document qui relie légalement un véhicule à son propriétaire et autorise sa circulation. Le dossier varie selon qu’il s’agit d’un véhicule neuf, d’occasion ou importé.',
    summary_ar:
      'وثيقة تربط المركبة قانونياً بمالكها وتسمح بسيرها. يختلف الملف حسب ما إذا كانت المركبة جديدة أو مستعملة أو مستوردة.',
    where_fr: 'Daïra ou wilaya du lieu de résidence.',
    where_ar: 'الدائرة أو الولاية لمكان الإقامة.',
    documents: [
      { fr: 'Pièce d’identité en cours de validité', ar: 'وثيقة هوية سارية المفعول' },
      { fr: 'Certificat / carte de résidence', ar: 'شهادة / بطاقة الإقامة' },
      { fr: 'Facture d’achat et/ou contrat de vente', ar: 'فاتورة الشراء و/أو عقد البيع' },
      { fr: 'Timbres fiscaux et droits de dossier', ar: 'الطوابع الجبائية وحقوق الملف' },
      { fr: 'Certificat d’immatriculation étranger + dédouanement (modèle 846) + déclaration douanière + contrôle de conformité', ar: 'شهادة الترقيم الأجنبية + التخليص الجمركي (نموذج 846) + التصريح الجمركي + مراقبة المطابقة', note_fr: 'Pour un véhicule importé', note_ar: 'للمركبة المستوردة', conditional: true },
    ],
    cost_fr: 'Timbres fiscaux selon la puissance du véhicule',
    cost_ar: 'طوابع جبائية حسب قوة المركبة',
    delay_fr: 'Généralement 2 à 4 semaines',
    delay_ar: 'عموماً من أسبوعين إلى 4 أسابيع',
    tips_fr: ['Pour une mutation (achat d’occasion), le contrat de vente doit être légalisé.'],
    tips_ar: ['عند تحويل الملكية (شراء مستعمل)، يجب أن يكون عقد البيع مصدّقاً.'],
    related_letters: ['duplicata-carte-grise'],
    sources: [
      { label: 'Carte d’immatriculation des véhicules · interieur.gov.dz', url: 'https://interieur.gov.dz/2025/03/17/carte-dimmatriculation-des-vehicules/' },
    ],
    seo_keywords_fr: ['carte grise algerie', 'certificat immatriculation algerie', 'documents carte grise', 'ترقيم المركبات'],
    updated: REVIEWED,
  },

  // ===========================================================================
  // RÉSIDENCE & JUSTICE
  // ===========================================================================
  {
    id: 'certificat-residence',
    category: 'residence-justice',
    title_fr: 'Certificat / fiche de résidence',
    title_ar: 'شهادة / بطاقة الإقامة',
    summary_fr:
      'Document attestant votre lieu de résidence. Pièce de base demandée dans presque tous les dossiers administratifs.',
    summary_ar:
      'وثيقة تثبت مكان إقامتك. وثيقة أساسية تُطلب في جلّ الملفات الإدارية.',
    where_fr: 'Commune (APC) du lieu de résidence.',
    where_ar: 'بلدية مكان الإقامة.',
    documents: [
      { fr: 'Pièce d’identité', ar: 'وثيقة الهوية' },
      { fr: 'Un justificatif de domicile : dernière facture Sonelgaz/eau, titre de propriété, ou décision d’attribution de logement', ar: 'إثبات السكن: آخر فاتورة سونلغاز/الماء، سند الملكية، أو قرار منح السكن' },
    ],
    cost_fr: 'Gratuit',
    cost_ar: 'مجاني',
    delay_fr: 'Immédiat au guichet',
    delay_ar: 'فوري عند الشباك',
    validity_fr: '6 mois à compter de la signature',
    validity_ar: '6 أشهر ابتداءً من تاريخ التوقيع',
    related_letters: ['certificat-residence'],
    sources: [
      { label: 'Certificat et fiche de résidence · interieur.gov.dz', url: 'https://interieur.gov.dz/2025/03/16/6262/' },
      { label: 'Documents de résidence · interieur.gov.dz', url: 'https://interieur.gov.dz/2024/03/17/documents-de-residence/' },
    ],
    seo_keywords_fr: ['certificat de residence algerie', 'fiche de residence', 'documents certificat residence', 'شهادة الإقامة'],
    updated: REVIEWED,
  },
  {
    id: 'casier-judiciaire',
    category: 'residence-justice',
    title_fr: 'Extrait de casier judiciaire (bulletin n°3)',
    title_ar: 'مستخرج صحيفة السوابق القضائية (الصحيفة رقم 3)',
    summary_fr:
      'Relevé des condamnations figurant au casier. Exigé pour l’emploi, les concours et de nombreuses démarches. Disponible en ligne.',
    summary_ar:
      'بيان بالإدانات المسجَّلة. يُطلب للتوظيف والمسابقات والعديد من الإجراءات. متوفّر عبر الإنترنت.',
    where_fr: 'Tribunal du lieu de naissance, ou en ligne sur le portail du Ministère de la Justice.',
    where_ar: 'محكمة مكان الميلاد، أو عبر الإنترنت على بوابة وزارة العدل.',
    documents: [
      { fr: 'Formulaire de demande daté et signé', ar: 'استمارة الطلب مؤرّخة وموقّعة' },
      { fr: 'Extrait d’acte de naissance', ar: 'مستخرج عقد الميلاد' },
      { fr: 'Pièce d’identité (ou passeport)', ar: 'وثيقة هوية (أو جواز سفر)' },
    ],
    cost_fr: 'En ligne : gratuit (dispensé de timbre)',
    cost_ar: 'عبر الإنترنت: مجاني (معفى من الطابع)',
    delay_fr: 'En ligne : généralement 5 à 10 jours ouvrables',
    delay_ar: 'عبر الإنترنت: عادة من 5 إلى 10 أيام عمل',
    online_url: 'https://e-casier.mjustice.dz/',
    online_label_fr: 'Casier judiciaire en ligne (Ministère de la Justice)',
    online_label_ar: 'صحيفة السوابق عبر الإنترنت (وزارة العدل)',
    tips_fr: ['Pour activer le service en ligne, une première présentation au tribunal (pièce d’identité + n°12 + n° de téléphone) est requise ; le compte est activé sous 48 h.'],
    tips_ar: ['لتفعيل الخدمة عبر الإنترنت، يلزم الحضور مرة واحدة إلى المحكمة (وثيقة هوية + الوثيقة رقم 12 + رقم هاتف)؛ يُفعَّل الحساب خلال 48 ساعة.'],
    related_letters: ['casier-judiciaire'],
    sources: [
      { label: 'Casier judiciaire en ligne (e-casier.mjustice.dz)', url: 'https://e-casier.mjustice.dz/' },
      { label: 'Ministère de la Justice', url: 'https://www.mjustice.gov.dz/' },
    ],
    seo_keywords_fr: ['casier judiciaire algerie', 'bulletin n 3', 'extrait casier judiciaire en ligne', 'صحيفة السوابق'],
    updated: REVIEWED,
  },
  {
    id: 'legalisation-copie-conforme',
    category: 'residence-justice',
    title_fr: 'Légalisation de signature & copie conforme',
    title_ar: 'التصديق على الإمضاء والنسخة المطابقة للأصل',
    summary_fr:
      'Certification de la conformité d’une copie à l’original, ou de l’authenticité d’une signature, par l’APC.',
    summary_ar:
      'المصادقة على مطابقة النسخة للأصل، أو على صحة الإمضاء، من طرف البلدية.',
    where_fr: 'Service « Légalisation » de la commune (APC).',
    where_ar: 'مصلحة «التصديق» في البلدية.',
    documents: [
      { fr: 'Document original', ar: 'الوثيقة الأصلية' },
      { fr: 'Copie bien lisible (en noir et blanc) du document', ar: 'نسخة واضحة (بالأبيض والأسود) من الوثيقة' },
      { fr: 'Pièce d’identité (du signataire pour la légalisation de signature)', ar: 'وثيقة هوية (صاحب الإمضاء بالنسبة للتصديق على الإمضاء)' },
    ],
    cost_fr: 'Timbre communal (faible)',
    cost_ar: 'طابع بلدي (زهيد)',
    delay_fr: 'Immédiat au guichet',
    delay_ar: 'فوري عند الشباك',
    tips_fr: ['Pour la légalisation de signature, le signataire doit se présenter en personne et signer devant l’agent.'],
    tips_ar: ['للتصديق على الإمضاء، يجب على صاحب الإمضاء الحضور شخصياً والتوقيع أمام الموظّف.'],
    related_letters: ['legalisation-signature'],
    sources: [
      { label: 'Légalisation des copies conformes · algerie-pratique.com', url: 'https://www.algerie-pratique.com/Demarches/Demarche?codeEntite=Demarche000012' },
    ],
    seo_keywords_fr: ['legalisation signature algerie', 'copie conforme algerie', 'copie certifiee conforme', 'التصديق على الإمضاء'],
    updated: REVIEWED,
  },

  // ===========================================================================
  // TRAVAIL & SÉCURITÉ SOCIALE
  // ===========================================================================
  {
    id: 'carte-chifa',
    category: 'travail-protection-sociale',
    title_fr: 'Carte Chifa (CNAS)',
    title_ar: 'بطاقة الشفاء (CNAS)',
    summary_fr:
      'Carte à puce de sécurité sociale identifiant l’assuré et ses ayants droit, et donnant accès au remboursement et au tiers payant.',
    summary_ar:
      'بطاقة ذكية للضمان الاجتماعي تُعرّف المؤمَّن وذوي حقوقه، وتتيح التعويض والدفع من الغير.',
    where_fr: 'Centre payeur CNAS dont vous dépendez (ou via l’employeur / le correspondant social).',
    where_ar: 'مركز الدفع التابع له CNAS (أو عبر المستخدِم / المراسل الاجتماعي).',
    documents: [
      { fr: 'Photo d’identité sur fond clair', ar: 'صورة شمسية بخلفية فاتحة' },
      { fr: 'Photocopie de la carte nationale d’identité', ar: 'نسخة من بطاقة التعريف الوطنية' },
      { fr: 'Photocopie de la carte de groupe sanguin', ar: 'نسخة من بطاقة فصيلة الدم', conditional: true },
      { fr: 'Justificatifs des ayants droit (acte de mariage, actes de naissance des enfants…)', ar: 'وثائق ذوي الحقوق (عقد الزواج، عقود ميلاد الأبناء…)', conditional: true },
    ],
    cost_fr: 'Gratuite',
    cost_ar: 'مجانية',
    delay_fr: 'Variable ; retrait au centre payeur',
    delay_ar: 'متغيّر؛ السحب من مركز الدفع',
    online_url: 'https://www.cnas.dz/',
    online_label_fr: 'Espace EL HANAA · attestation d’affiliation',
    online_label_ar: 'فضاء الهناء · شهادة الانتساب',
    tips_fr: ['L’attestation d’affiliation CNAS et certaines démarches sont accessibles via l’espace EL HANAA ou l’application mobile.'],
    tips_ar: ['شهادة الانتساب لـ CNAS وبعض الإجراءات متاحة عبر فضاء الهناء أو التطبيق على الهاتف.'],
    related_letters: ['attestation-affiliation-cnas', 'demande-remboursement'],
    sources: [
      { label: 'Carte CHIFA · CNAS', url: 'https://cnas.dz/' },
    ],
    seo_keywords_fr: ['carte chifa', 'cnas carte chifa', 'documents carte chifa', 'بطاقة الشفاء'],
    updated: REVIEWED,
  },
  {
    id: 'affiliation-casnos',
    category: 'travail-protection-sociale',
    title_fr: 'Affiliation CASNOS (non-salariés)',
    title_ar: 'الانتساب إلى CASNOS (غير الأجراء)',
    summary_fr:
      'Affiliation obligatoire à la sécurité sociale des travailleurs non-salariés : commerçants, artisans, professions libérales, agriculteurs, auto-entrepreneurs.',
    summary_ar:
      'انتساب إجباري للضمان الاجتماعي لغير الأجراء: التجار، الحرفيون، المهن الحرة، الفلاحون، المقاولون الذاتيون.',
    where_fr: 'Agence CASNOS du lieu d’activité, dans les 10 jours suivant la création de l’activité.',
    where_ar: 'وكالة CASNOS لمكان النشاط، خلال 10 أيام من إنشاء النشاط.',
    documents: [
      { fr: 'Extrait d’acte de naissance (ou passeport pour les étrangers)', ar: 'مستخرج عقد الميلاد (أو جواز السفر للأجانب)' },
      { fr: 'Registre de commerce / carte d’artisan / carte d’agriculteur selon l’activité', ar: 'السجل التجاري / بطاقة الحرفي / بطاقة الفلاح حسب النشاط' },
      { fr: 'Pièce d’identité', ar: 'وثيقة الهوية' },
    ],
    cost_fr: 'Cotisation annuelle (montant minimum fixé chaque année)',
    cost_ar: 'اشتراك سنوي (حدّ أدنى يُحدَّد كل سنة)',
    delay_fr: 'À effectuer dans les 10 jours suivant la création de l’activité',
    delay_ar: 'يجب القيام به خلال 10 أيام من إنشاء النشاط',
    online_url: 'https://www.casnos.com.dz/',
    online_label_fr: 'Télédéclaration & attestations · CASNOS',
    online_label_ar: 'التصريح الإلكتروني والشهادات · CASNOS',
    tips_fr: ['L’affiliation est souvent déclenchée automatiquement à l’ouverture du registre de commerce, mais reste à finaliser auprès de la CASNOS.'],
    tips_ar: ['غالباً ما يُفعَّل الانتساب تلقائياً عند فتح السجل التجاري، لكنه يبقى بحاجة للاستكمال لدى CASNOS.'],
    sources: [
      { label: 'CASNOS · Caisse des non-salariés', url: 'https://www.casnos.com.dz/' },
    ],
    seo_keywords_fr: ['affiliation casnos', 'casnos non salaries', 'cotisation casnos', 'الانتساب كازنوس'],
    updated: REVIEWED,
  },
  {
    id: 'pension-retraite',
    category: 'travail-protection-sociale',
    title_fr: 'Pension de retraite (CNR)',
    title_ar: 'معاش التقاعد (CNR)',
    summary_fr:
      'Demande de liquidation de la pension de retraite auprès de la Caisse Nationale des Retraites.',
    summary_ar:
      'طلب تصفية معاش التقاعد لدى الصندوق الوطني للتقاعد.',
    where_fr: 'Agence de la Caisse Nationale des Retraites (CNR).',
    where_ar: 'وكالة الصندوق الوطني للتقاعد (CNR).',
    documents: [
      { fr: 'Formulaire de demande de retraite renseigné', ar: 'استمارة طلب التقاعد معبّأة' },
      { fr: 'Fiche familiale d’état civil', ar: 'البطاقة العائلية للحالة المدنية' },
      { fr: 'Relevé d’identité bancaire ou postal (RIB/RIP)', ar: 'كشف الحساب البنكي أو البريدي (RIB/RIP)' },
      { fr: 'Photocopie de la pièce d’identité biométrique en cours de validité', ar: 'نسخة من بطاقة التعريف البيومترية سارية المفعول' },
      { fr: 'Attestation de travail et de salaire (à compléter par l’employeur)', ar: 'شهادة العمل والأجر (يملؤها المستخدِم)' },
      { fr: 'Photocopie de la carte militaire (si service national accompli)', ar: 'نسخة من البطاقة العسكرية (إن أُدّيت الخدمة الوطنية)', conditional: true },
    ],
    cost_fr: 'Gratuit',
    cost_ar: 'مجاني',
    delay_fr: 'Environ 3 à 6 mois avant le premier versement',
    delay_ar: 'حوالي 3 إلى 6 أشهر قبل أول صبّ',
    online_url: 'https://www.cnr.dz/',
    online_label_fr: 'e-Retraite & services en ligne · CNR',
    online_label_ar: 'التقاعد الإلكتروني والخدمات · CNR',
    tips_fr: ['Droit à la retraite : 60 ans avec au moins 15 ans de cotisation ; possibilité dès 55 ans pour les femmes.'],
    tips_ar: ['الحق في التقاعد: 60 سنة مع 15 سنة اشتراك على الأقل؛ ويمكن من 55 سنة للنساء.'],
    related_letters: ['mise-retraite'],
    sources: [
      { label: 'Constitution du dossier · CNR', url: 'https://www.cnr.dz/' },
      { label: 'e-Retraite · bawabatic.dz', url: 'https://bawabatic.dz/?req=informations&op=detail&id=652&lang=fr' },
    ],
    seo_keywords_fr: ['retraite cnr algerie', 'dossier retraite algerie', 'pension de retraite', 'معاش التقاعد'],
    updated: REVIEWED,
  },
  {
    id: 'allocation-chomage',
    category: 'travail-protection-sociale',
    title_fr: 'Allocation chômage & demandeur d’emploi (ANEM)',
    title_ar: 'منحة البطالة وطالب العمل (ANEM)',
    summary_fr:
      'Inscription comme demandeur d’emploi auprès de l’ANEM et demande de l’allocation chômage pour les jeunes sans activité.',
    summary_ar:
      'التسجيل كطالب عمل لدى الوكالة الوطنية للتشغيل (ANEM) وطلب منحة البطالة للشباب دون نشاط.',
    where_fr: 'Inscription en ligne sur minha.anem.dz, puis présentation à l’agence ANEM.',
    where_ar: 'التسجيل عبر الإنترنت على minha.anem.dz، ثم الحضور إلى وكالة ANEM.',
    documents: [
      { fr: 'Carte nationale d’identité (originale + copie) en cours de validité', ar: 'بطاقة التعريف الوطنية (الأصل + نسخة) سارية المفعول' },
      { fr: 'Carte de demandeur d’emploi (délivrée par l’ANEM)', ar: 'بطاقة طالب العمل (تسلّمها ANEM)' },
      { fr: 'Certificat de non-emploi (délivré par la mairie)', ar: 'شهادة عدم العمل (تسلّمها البلدية)' },
      { fr: 'Chèque barré pour la validation du compte CCP', ar: 'شيك مشطوب لتفعيل حساب البريد الجاري CCP' },
      { fr: 'Engagement sur l’honneur imprimé depuis la plateforme + reçu de rendez-vous', ar: 'التصريح الشرفي المطبوع من المنصة + وصل الموعد' },
      { fr: 'Diplômes ou attestations de formation', ar: 'الشهادات أو شهادات التكوين', conditional: true },
    ],
    cost_fr: 'Gratuit',
    cost_ar: 'مجاني',
    delay_fr: 'Selon le rendez-vous fixé en ligne',
    delay_ar: 'حسب الموعد المحدّد عبر الإنترنت',
    online_url: 'https://minha.anem.dz/',
    online_label_fr: 'S’inscrire à l’allocation chômage (ANEM)',
    online_label_ar: 'التسجيل في منحة البطالة (ANEM)',
    tips_fr: ['Éligibilité : jeunes résidant en Algérie, âgés de 19 à 40 ans, sans activité ni revenu déclaré et n’ayant pas bénéficié d’un autre dispositif d’aide à l’emploi.'],
    tips_ar: ['الأهلية: الشباب المقيمون بالجزائر بين 19 و40 سنة، دون نشاط أو دخل مصرّح، ولم يستفيدوا من جهاز آخر لدعم التشغيل.'],
    related_letters: ['demande-emploi'],
    sources: [
      { label: 'Allocation Chômage · minha.anem.dz', url: 'https://minha.anem.dz/' },
      { label: 'Wassit en ligne · ANEM', url: 'https://wassitonline.anem.dz/' },
    ],
    seo_keywords_fr: ['allocation chomage algerie', 'minha anem', 'carte demandeur emploi', 'منحة البطالة'],
    updated: REVIEWED,
  },

  // ===========================================================================
  // ENTREPRISE & COMMERCE
  // ===========================================================================
  {
    id: 'registre-commerce',
    category: 'entreprise-commerce',
    title_fr: 'Registre de commerce (personne physique)',
    title_ar: 'السجل التجاري (شخص طبيعي)',
    summary_fr:
      'Immatriculation au registre du commerce conférant la qualité de commerçant. Procédure simplifiée pour la personne physique (sans statuts ni notaire).',
    summary_ar:
      'القيد في السجل التجاري الذي يمنح صفة التاجر. إجراء مبسّط للشخص الطبيعي (دون قانون أساسي أو موثّق).',
    where_fr: 'Antenne du Centre National du Registre du Commerce (CNRC) ; demande possible en ligne.',
    where_ar: 'ملحقة المركز الوطني للسجل التجاري (CNRC)؛ ويمكن الطلب عبر الإنترنت.',
    documents: [
      { fr: 'Demande sur le formulaire fourni par le CNRC', ar: 'طلب على الاستمارة التي يقدّمها CNRC' },
      { fr: 'Acte de propriété du local commercial ou contrat de location notarié', ar: 'سند ملكية المحل التجاري أو عقد إيجار موثّق' },
      { fr: 'Pièce d’identité', ar: 'وثيقة الهوية' },
      { fr: 'Extrait d’acte de naissance', ar: 'مستخرج عقد الميلاد' },
      { fr: 'Quittance des droits de timbre (4 000 DA) + reçu des droits d’immatriculation', ar: 'وصل حقوق الطابع (4000 دج) + وصل حقوق القيد' },
      { fr: 'Agrément / autorisation pour les activités réglementées', ar: 'الاعتماد / الترخيص للأنشطة المقنّنة', conditional: true },
    ],
    cost_fr: 'Droits de timbre 4 000 DA + droits d’immatriculation',
    cost_ar: 'حقوق الطابع 4000 دج + حقوق القيد',
    delay_fr: 'Rapide pour la personne physique',
    delay_ar: 'سريع بالنسبة للشخص الطبيعي',
    online_url: 'https://sidjilcom.cnrc.dz/',
    online_label_fr: 'SIDJILCOM · registre de commerce en ligne',
    online_label_ar: 'سجلكم · السجل التجاري عبر الإنترنت',
    tips_fr: ['L’immatriculation déclenche l’affiliation à la CASNOS et les obligations fiscales (IFU).'],
    tips_ar: ['يؤدّي القيد إلى الانتساب لـ CASNOS والالتزامات الجبائية (الضريبة الجزافية الوحيدة IFU).'],
    related_letters: ['agrement-commercial'],
    sources: [
      { label: 'Dossier à fournir · CNRC', url: 'https://sidjilcom.cnrc.dz/en/web/sidjilcom/-/dossier-a-fournir/1.8' },
      { label: 'Immatriculation personnes physiques · Ministère du Commerce', url: 'https://www.commerce.gov.dz/fr/immatriculation-personnes-physiques' },
    ],
    seo_keywords_fr: ['registre de commerce algerie', 'cnrc', 'creation entreprise personne physique', 'السجل التجاري'],
    updated: REVIEWED,
  },
  {
    id: 'carte-auto-entrepreneur',
    category: 'entreprise-commerce',
    title_fr: 'Carte d’auto-entrepreneur (ANAE)',
    title_ar: 'بطاقة المقاول الذاتي (ANAE)',
    summary_fr:
      'Statut simplifié pour exercer seul une activité éligible (services, numérique, prestations…) sous un plafond de chiffre d’affaires. Inscription 100 % en ligne.',
    summary_ar:
      'وضع مبسّط لممارسة نشاط مؤهَّل بمفردك (خدمات، رقمي، أداءات…) ضمن سقف لرقم الأعمال. التسجيل كلّياً عبر الإنترنت.',
    where_fr: 'En ligne sur le portail de l’Agence Nationale de l’Auto-Entrepreneur (anae.dz).',
    where_ar: 'عبر الإنترنت على بوابة الوكالة الوطنية للمقاول الذاتي (anae.dz).',
    documents: [
      { fr: 'Carte d’identité biométrique valide (photocopie couleur recto-verso)', ar: 'بطاقة تعريف بيومترية صالحة (نسخة ملونة من الوجهين)' },
      { fr: 'Photo d’identité récente (35×45 mm, fond blanc)', ar: 'صورة شمسية حديثة (35×45 مم، خلفية بيضاء)' },
      { fr: 'Photo selfie tenant la carte d’identité (vérification anti-fraude)', ar: 'صورة سيلفي ممسكاً ببطاقة التعريف (للتحقّق من الاحتيال)' },
      { fr: 'Justificatif de domicile de moins de 3 mois', ar: 'إثبات سكن حديث بأقل من 3 أشهر' },
      { fr: 'Diplôme si l’activité l’exige', ar: 'الشهادة إن تطلّبها النشاط', conditional: true },
    ],
    cost_fr: 'Inscription gratuite ; cotisations sociales et fiscales selon le régime',
    cost_ar: 'التسجيل مجاني؛ مع اشتراكات اجتماعية وجبائية حسب النظام',
    delay_fr: 'Vérification ANAE en 3 à 5 jours ouvrables',
    delay_ar: 'تحقّق ANAE خلال 3 إلى 5 أيام عمل',
    online_url: 'https://anae.dz/',
    online_label_fr: 'S’inscrire · ANAE',
    online_label_ar: 'التسجيل · ANAE',
    tips_fr: [
      'Conditions : résider en Algérie, activité individuelle, dans la liste officielle, sous le plafond annuel de chiffre d’affaires.',
      'Les activités réglementées (santé, droit, finance) et l’import-export sont exclues.',
    ],
    tips_ar: [
      'الشروط: الإقامة بالجزائر، نشاط فردي، ضمن القائمة الرسمية، تحت السقف السنوي لرقم الأعمال.',
      'تُستثنى الأنشطة المقنّنة (الصحة، القانون، المالية) والاستيراد والتصدير.',
    ],
    sources: [
      { label: 'Agence Nationale de l’Auto-Entrepreneur · ANAE', url: 'https://anae.dz/' },
    ],
    seo_keywords_fr: ['carte auto entrepreneur algerie', 'anae', 'auto entrepreneur inscription', 'بطاقة المقاول الذاتي'],
    updated: REVIEWED,
  },

  // ===========================================================================
  // LOGEMENT & URBANISME
  // ===========================================================================
  {
    id: 'logement-aadl',
    category: 'logement-urbanisme',
    title_fr: 'Logement AADL (location-vente)',
    title_ar: 'سكن عدل (البيع بالإيجار)',
    summary_fr:
      'Souscription au programme de logements en location-vente de l’AADL. La dernière formule est entièrement numérique.',
    summary_ar:
      'الاكتتاب في برنامج السكن بالبيع بالإيجار لوكالة عدل. الصيغة الأخيرة رقمية بالكامل.',
    where_fr: 'En ligne sur le portail d’inscription de l’AADL.',
    where_ar: 'عبر الإنترنت على بوابة التسجيل لوكالة عدل.',
    documents: [
      { fr: 'Numéro d’identité nationale (NIN)', ar: 'رقم التعريف الوطني (NIN)' },
      { fr: 'Numéro de sécurité sociale', ar: 'رقم الضمان الاجتماعي' },
      { fr: 'Pour le conjoint : fiche familiale, acte de naissance, fiche de paie ou attestation de pension', ar: 'بالنسبة للزوج: البطاقة العائلية، عقد الميلاد، كشف الراتب أو شهادة المعاش', conditional: true },
    ],
    cost_fr: 'Apport et tranches selon le programme',
    cost_ar: 'دفعة أولى وأقساط حسب البرنامج',
    delay_fr: 'Selon les phases du programme et la vérification automatique des données',
    delay_ar: 'حسب مراحل البرنامج والتحقّق الآلي من المعطيات',
    online_url: 'https://www.aadl.com.dz/',
    online_label_fr: 'Portail AADL',
    online_label_ar: 'بوابة عدل',
    tips_fr: ['Conditions habituelles : nationalité algérienne, âge requis et revenu compris entre un minimum et un plafond (multiple du SNMG). La dernière formule ne demande pas de dossier papier (données vérifiées en ligne).'],
    tips_ar: ['الشروط المعتادة: الجنسية الجزائرية، السنّ المطلوب، ودخل بين حدّ أدنى وسقف (مضاعف للأجر الوطني الأدنى). الصيغة الأخيرة لا تتطلّب ملفاً ورقياً (تُتحقَّق المعطيات عبر الإنترنت).'],
    related_letters: ['logement-social'],
    sources: [
      { label: 'AADL · Agence de l’Amélioration et du Développement du Logement', url: 'https://www.aadl.com.dz/' },
    ],
    seo_keywords_fr: ['aadl inscription', 'logement aadl dossier', 'aadl conditions', 'سكن عدل'],
    updated: REVIEWED,
  },
  {
    id: 'permis-construire',
    category: 'logement-urbanisme',
    title_fr: 'Permis de construire',
    title_ar: 'رخصة البناء',
    summary_fr:
      'Autorisation d’urbanisme obligatoire avant toute construction. Le dossier est préparé par un architecte et déposé à la commune.',
    summary_ar:
      'رخصة عمرانية إجبارية قبل أي بناء. يُعدّ الملف مهندس معماري ويُودَع لدى البلدية.',
    where_fr: 'Commune (APC) du lieu du terrain.',
    where_ar: 'بلدية مكان القطعة الأرضية.',
    documents: [
      { fr: 'Formulaire rempli par l’architecte', ar: 'الاستمارة معبّأة من المهندس المعماري' },
      { fr: 'Titre de propriété ou acte de possession', ar: 'سند الملكية أو عقد الحيازة' },
      { fr: 'Plan de situation (1/2000 ou 1/5000)', ar: 'مخطط الموقع (1/2000 أو 1/5000)' },
      { fr: 'Plan de masse (1/200 ou 1/500)', ar: 'مخطط الكتلة (1/200 أو 1/500)' },
      { fr: 'Plans de distribution (1/50)', ar: 'مخططات التوزيع (1/50)' },
      { fr: 'Devis descriptif des travaux', ar: 'الكشف الوصفي للأشغال' },
      { fr: 'Référence du permis de lotir le cas échéant', ar: 'مرجع رخصة التجزئة عند الاقتضاء', conditional: true },
    ],
    cost_fr: 'Droits selon le barème communal',
    cost_ar: 'حقوق حسب التعريفة البلدية',
    delay_fr: 'Réponse légale sous 60 jours',
    delay_ar: 'الردّ القانوني خلال 60 يوماً',
    validity_fr: 'Permis valable 3 ans',
    validity_ar: 'الرخصة صالحة 3 سنوات',
    tips_fr: ['Le dossier est généralement à déposer en 5 exemplaires.'],
    tips_ar: ['يُودَع الملف عموماً في 5 نسخ.'],
    sources: [
      { label: 'e-Permis de construire · bawabatic.dz', url: 'https://bawabatic.dz/?req=informations&op=detail&id=630&lang=fr' },
    ],
    seo_keywords_fr: ['permis de construire algerie', 'dossier permis de construire', 'رخصة البناء', 'documents permis construire'],
    updated: REVIEWED,
  },
  {
    id: 'certificat-urbanisme',
    category: 'logement-urbanisme',
    title_fr: 'Certificat d’urbanisme',
    title_ar: 'شهادة التعمير',
    summary_fr:
      'Document indiquant les droits à construire et les règles d’urbanisme applicables à un terrain. Souvent un préalable au permis de construire.',
    summary_ar:
      'وثيقة تبيّن حقوق البناء وقواعد التعمير المطبَّقة على قطعة أرضية. غالباً ما تكون تمهيداً لرخصة البناء.',
    where_fr: 'Commune (APC) du lieu du terrain.',
    where_ar: 'بلدية مكان القطعة الأرضية.',
    documents: [
      { fr: 'Demande (objet, adresse, nom du propriétaire, références cadastrales, superficie)', ar: 'طلب (الموضوع، العنوان، اسم المالك، المراجع المسحية، المساحة)' },
      { fr: 'Plan de situation à l’échelle', ar: 'مخطط الموقع بالمقياس' },
      { fr: 'Plan de localisation du terrain', ar: 'مخطط تحديد موقع القطعة' },
    ],
    cost_fr: 'Droits selon le barème communal',
    cost_ar: 'حقوق حسب التعريفة البلدية',
    delay_fr: 'Variable ; un reçu de dépôt est remis',
    delay_ar: 'متغيّر؛ يُسلَّم وصل إيداع',
    validity_fr: '1 an à compter de la notification',
    validity_ar: 'سنة واحدة ابتداءً من التبليغ',
    tips_fr: ['Le dossier est généralement à déposer en 5 exemplaires.'],
    tips_ar: ['يُودَع الملف عموماً في 5 نسخ.'],
    sources: [
      { label: 'Actes d’urbanisme · APC / services publics', url: 'https://bawabatic.dz/?lang=fr' },
    ],
    seo_keywords_fr: ['certificat urbanisme algerie', 'documents certificat urbanisme', 'شهادة التعمير'],
    updated: REVIEWED,
  },

  // ===========================================================================
  // ÉDUCATION & ÉTUDES
  // ===========================================================================
  {
    id: 'bourse-universitaire',
    category: 'education',
    title_fr: 'Bourse universitaire & inscription (PROGRES)',
    title_ar: 'المنحة الجامعية والتسجيل (PROGRES)',
    summary_fr:
      'Inscription et demande/renouvellement de la bourse universitaire via la plateforme nationale PROGRES du Ministère de l’Enseignement supérieur.',
    summary_ar:
      'التسجيل وطلب/تجديد المنحة الجامعية عبر المنصة الوطنية PROGRES لوزارة التعليم العالي.',
    where_fr: 'En ligne sur progres.mesrs.dz ; dépôt complémentaire auprès des œuvres universitaires (DOU).',
    where_ar: 'عبر الإنترنت على progres.mesrs.dz؛ مع إيداع تكميلي لدى الخدمات الجامعية (DOU).',
    documents: [
      { fr: 'Copie du baccalauréat', ar: 'نسخة من شهادة البكالوريا' },
      { fr: 'Certificat de scolarité de l’année en cours', ar: 'شهادة مدرسية للسنة الجارية' },
      { fr: 'Extrait d’acte de naissance', ar: 'مستخرج عقد الميلاد' },
      { fr: 'Certificat de nationalité', ar: 'شهادة الجنسية' },
      { fr: 'Relevé de revenu des parents', ar: 'كشف دخل الوالدين' },
      { fr: '2 photos d’identité', ar: 'صورتان شمسيتان' },
      { fr: 'Chèque / RIB du compte de l’étudiant', ar: 'شيك / كشف حساب الطالب البنكي' },
    ],
    cost_fr: 'Gratuit',
    cost_ar: 'مجاني',
    delay_fr: 'Selon le calendrier universitaire',
    delay_ar: 'حسب الرزنامة الجامعية',
    online_url: 'https://progres.mesrs.dz/',
    online_label_fr: 'Plateforme PROGRES',
    online_label_ar: 'منصة PROGRES',
    tips_fr: ['Le renouvellement exige une fiche de suivi signée par l’établissement (et le poste consulaire pour les boursiers à l’étranger).'],
    tips_ar: ['يتطلّب التجديد بطاقة متابعة موقّعة من المؤسسة (والمركز القنصلي بالنسبة للمتمنّحين بالخارج).'],
    related_letters: ['bourse-universitaire', 'reinscription-universitaire'],
    sources: [
      { label: 'Plateforme PROGRES · MESRS', url: 'https://progres.mesrs.dz/' },
      { label: 'Ministère de l’Enseignement supérieur', url: 'https://www.mesrs.dz/' },
    ],
    seo_keywords_fr: ['bourse universitaire algerie', 'progres mesrs', 'inscription universitaire', 'المنحة الجامعية'],
    updated: REVIEWED,
  },
  {
    id: 'certificat-scolarite',
    category: 'education',
    title_fr: 'Certificat de scolarité',
    title_ar: 'الشهادة المدرسية',
    summary_fr:
      'Attestation prouvant l’inscription d’un élève ou étudiant pour l’année en cours. Demandée pour les bourses, allocations et dossiers de transport.',
    summary_ar:
      'شهادة تُثبت تسجيل التلميذ أو الطالب للسنة الجارية. تُطلب للمنح والمنحات وملفات النقل.',
    where_fr: 'Établissement scolaire ou universitaire concerné (secrétariat / scolarité).',
    where_ar: 'المؤسسة المدرسية أو الجامعية المعنية (الأمانة / مصلحة الدراسة).',
    documents: [
      { fr: 'Pièce d’identité ou carte d’étudiant', ar: 'وثيقة هوية أو بطاقة الطالب' },
      { fr: 'Justificatif d’inscription de l’année en cours', ar: 'إثبات التسجيل للسنة الجارية' },
    ],
    cost_fr: 'Gratuit',
    cost_ar: 'مجاني',
    delay_fr: 'Immédiat au guichet de l’établissement',
    delay_ar: 'فوري عند شباك المؤسسة',
    related_letters: ['attestation-scolarite'],
    sources: [
      { label: 'Ministère de l’Enseignement supérieur', url: 'https://www.mesrs.dz/' },
    ],
    seo_keywords_fr: ['certificat de scolarite algerie', 'attestation scolarite', 'الشهادة المدرسية'],
    updated: REVIEWED,
  },

  // ===========================================================================
  // ÉTRANGERS & DIASPORA
  // ===========================================================================
  {
    id: 'immatriculation-consulaire',
    category: 'etranger-diaspora',
    title_fr: 'Carte d’immatriculation consulaire',
    title_ar: 'بطاقة التسجيل القنصلي',
    summary_fr:
      'Inscription des Algériens résidant à l’étranger auprès de leur consulat. Préalable pour bénéficier de la protection et des services consulaires.',
    summary_ar:
      'تسجيل الجزائريين المقيمين بالخارج لدى قنصليتهم. شرط مسبق للاستفادة من الحماية والخدمات القنصلية.',
    where_fr: 'Consulat d’Algérie de la circonscription de résidence.',
    where_ar: 'القنصلية الجزائرية لدائرة الإقامة.',
    documents: [
      { fr: 'Passeport algérien + copies (3 premières pages, page du visa et du cachet d’entrée)', ar: 'جواز السفر الجزائري + نسخ (الصفحات الثلاث الأولى، صفحة التأشيرة وختم الدخول)' },
      { fr: 'Extrait d’acte de naissance n°12 S (original + copie)', ar: 'مستخرج عقد الميلاد 12S (الأصل + نسخة)' },
      { fr: 'Acte de naissance intégral du père (et du grand-père si né à l’étranger)', ar: 'عقد ميلاد كامل للأب (والجدّ إذا وُلد بالخارج)', conditional: true },
      { fr: 'Justificatif de situation familiale (livret de famille, acte de mariage, jugement de divorce)', ar: 'إثبات الحالة العائلية (الدفتر العائلي، عقد الزواج، حكم الطلاق)', conditional: true },
      { fr: 'Titre de séjour valide + justificatif de domicile récent (moins de 3 mois)', ar: 'سند إقامة ساري المفعول + إثبات سكن حديث (أقل من 3 أشهر)' },
    ],
    cost_fr: 'Gratuite',
    cost_ar: 'مجانية',
    delay_fr: 'Variable selon le consulat',
    delay_ar: 'متغيّر حسب القنصلية',
    validity_fr: '5 ans (renouvelable)',
    validity_ar: '5 سنوات (قابلة للتجديد)',
    online_url: 'https://www.mfa.gov.dz/',
    online_label_fr: 'Services consulaires · Ministère des Affaires étrangères',
    online_label_ar: 'الخدمات القنصلية · وزارة الشؤون الخارجية',
    tips_fr: ['Le renouvellement nécessite l’ancienne carte et un justificatif de séjour régulier à jour.'],
    tips_ar: ['يتطلّب التجديد البطاقة القديمة وإثبات إقامة قانونية محيَّن.'],
    related_letters: ['immatriculation-consulaire'],
    sources: [
      { label: 'Immatriculation consulaire · Consulat d’Algérie (mfa.gov.dz)', url: 'https://www.mfa.gov.dz/' },
    ],
    seo_keywords_fr: ['immatriculation consulaire algerie', 'carte consulaire', 'consulat algerie inscription', 'التسجيل القنصلي'],
    updated: REVIEWED,
  },
  {
    id: 'carte-sejour-etranger',
    category: 'etranger-diaspora',
    title_fr: 'Carte de séjour / résident étranger',
    title_ar: 'بطاقة الإقامة / المقيم الأجنبي',
    summary_fr:
      'Titre de séjour pour les étrangers résidant en Algérie, délivré par les services des étrangers de la wilaya.',
    summary_ar:
      'سند إقامة للأجانب المقيمين بالجزائر، تسلّمه مصالح الأجانب بالولاية.',
    where_fr: 'Service des étrangers de la wilaya (ou commissariat de police compétent).',
    where_ar: 'مصلحة الأجانب بالولاية (أو مركز الشرطة المختصّ).',
    documents: [
      { fr: 'Passeport valide', ar: 'جواز سفر ساري المفعول' },
      { fr: 'Certificat d’hébergement légalisé', ar: 'شهادة استضافة مصدّقة' },
      { fr: 'Contrat de travail (si applicable)', ar: 'عقد عمل (إن وُجد)', conditional: true },
      { fr: 'Acte de naissance traduit', ar: 'عقد ميلاد مترجَم' },
      { fr: 'Photos d’identité récentes', ar: 'صور شمسية حديثة' },
      { fr: 'Timbre fiscal', ar: 'طابع جبائي' },
    ],
    cost_fr: 'Timbre fiscal',
    cost_ar: 'طابع جبائي',
    delay_fr: 'Variable selon la wilaya',
    delay_ar: 'متغيّر حسب الولاية',
    online_url: 'https://interieur.gov.dz/2024/02/29/carte-de-resident-etranger/',
    online_label_fr: 'Carte de résident étranger · interieur.gov.dz',
    online_label_ar: 'بطاقة المقيم الأجنبي · interieur.gov.dz',
    tips_fr: ['Pour une simple prolongation de séjour, le dossier se dépose au service des étrangers de la wilaya avec le formulaire dédié.'],
    tips_ar: ['لمجرّد تمديد الإقامة، يُودَع الملف لدى مصلحة الأجانب بالولاية مع الاستمارة المخصّصة.'],
    sources: [
      { label: 'Étranger en Algérie · interieur.gov.dz', url: 'https://interieur.gov.dz/2024/02/29/carte-de-resident-etranger/' },
      { label: 'Guide de l’étranger · mfa.gov.dz', url: 'https://www.mfa.gov.dz/' },
    ],
    seo_keywords_fr: ['carte de sejour algerie', 'resident etranger algerie', 'documents carte sejour', 'بطاقة الإقامة'],
    updated: REVIEWED,
  },
  {
    id: 'visa-entree',
    category: 'etranger-diaspora',
    title_fr: 'Visa d’entrée en Algérie',
    title_ar: 'تأشيرة الدخول إلى الجزائر',
    summary_fr:
      'Demande de visa pour entrer en Algérie, déposée auprès de la représentation diplomatique ou consulaire algérienne (visa électronique pour certaines catégories).',
    summary_ar:
      'طلب تأشيرة لدخول الجزائر، يُودَع لدى التمثيلية الدبلوماسية أو القنصلية الجزائرية (تأشيرة إلكترونية لبعض الفئات).',
    where_fr: 'Ambassade / consulat d’Algérie du pays de résidence.',
    where_ar: 'سفارة / قنصلية الجزائر ببلد الإقامة.',
    documents: [
      { fr: 'Formulaire de demande de visa', ar: 'استمارة طلب التأشيرة' },
      { fr: 'Passeport valable au moins 6 mois + photocopie', ar: 'جواز سفر صالح لـ6 أشهر على الأقل + نسخة' },
      { fr: '2 photos d’identité récentes et identiques', ar: 'صورتان شمسيتان حديثتان ومتطابقتان' },
      { fr: 'Attestation d’assurance voyage / assistance-rapatriement', ar: 'شهادة تأمين السفر / المساعدة والإعادة' },
      { fr: 'Justificatif d’hébergement / invitation et de ressources', ar: 'إثبات الإيواء / الدعوة والموارد' },
      { fr: 'Carte de séjour du pays de résidence + copie (si non-national)', ar: 'بطاقة الإقامة ببلد الإقامة + نسخة (لغير المواطنين)', conditional: true },
    ],
    cost_fr: 'Frais de visa selon le type et la nationalité',
    cost_ar: 'رسوم التأشيرة حسب النوع والجنسية',
    delay_fr: 'Variable selon la représentation',
    delay_ar: 'متغيّر حسب التمثيلية',
    online_url: 'https://www.mfa.gov.dz/fr/services-for-foreigners/entry-visa-to-algeria',
    online_label_fr: 'Visa d’entrée · Ministère des Affaires étrangères',
    online_label_ar: 'تأشيرة الدخول · وزارة الشؤون الخارجية',
    sources: [
      { label: 'Visa d’entrée en Algérie · mfa.gov.dz', url: 'https://www.mfa.gov.dz/fr/services-for-foreigners/entry-visa-to-algeria' },
    ],
    seo_keywords_fr: ['visa algerie', 'demande visa algerie', 'documents visa algerie', 'تأشيرة الجزائر'],
    updated: REVIEWED,
  },
  {
    id: 'procuration-consulaire',
    category: 'etranger-diaspora',
    title_fr: 'Procuration consulaire',
    title_ar: 'الوكالة القنصلية',
    summary_fr:
      'Acte permettant à un Algérien de l’étranger de mandater une personne en Algérie pour agir en son nom (démarches administratives, juridiques, bancaires).',
    summary_ar:
      'عقد يسمح للجزائري بالخارج بتوكيل شخص في الجزائر للتصرّف باسمه (إجراءات إدارية وقانونية وبنكية).',
    where_fr: 'Consulat d’Algérie du lieu de résidence.',
    where_ar: 'القنصلية الجزائرية لمكان الإقامة.',
    documents: [
      { fr: 'Pièce d’identité algérienne (passeport / CNIBE) du mandant', ar: 'وثيقة هوية جزائرية (جواز / بطاقة تعريف) للموكِّل' },
      { fr: 'Identité complète du mandataire (nom, prénom, n° de pièce d’identité)', ar: 'الهوية الكاملة للوكيل (الاسم واللقب ورقم وثيقة الهوية)' },
      { fr: 'Objet précis de la procuration', ar: 'الموضوع الدقيق للوكالة' },
      { fr: 'Documents liés à l’objet (titre de propriété, références du bien…)', ar: 'وثائق متعلّقة بالموضوع (سند الملكية، مراجع العقار…)', conditional: true },
    ],
    cost_fr: 'Droits de chancellerie',
    cost_ar: 'رسوم قنصلية',
    delay_fr: 'Généralement le jour même',
    delay_ar: 'عادة في نفس اليوم',
    related_letters: ['procuration-consulaire'],
    sources: [
      { label: 'Services consulaires · mfa.gov.dz', url: 'https://www.mfa.gov.dz/' },
    ],
    seo_keywords_fr: ['procuration consulaire algerie', 'procuration algerie', 'الوكالة القنصلية'],
    updated: REVIEWED,
  },

  // ===========================================================================
  // ÉTAT CIVIL (suite)
  // ===========================================================================
  {
    id: 'acte-divorce',
    category: 'etat-civil',
    title_fr: 'Acte de divorce',
    title_ar: 'عقد الطلاق',
    summary_fr:
      'Document attestant la dissolution du mariage. Une fois le divorce prononcé, le jugement est transcrit à l’état civil et l’acte de divorce s’obtient auprès de la commune.',
    summary_ar:
      'وثيقة تثبت فكّ الرابطة الزوجية. بعد النطق بالطلاق، يُسجَّل الحكم في الحالة المدنية ويُستخرج عقد الطلاق من البلدية.',
    where_fr: 'Commune (APC), après transcription du jugement de divorce ; consulat pour la diaspora.',
    where_ar: 'البلدية، بعد تسجيل حكم الطلاق؛ القنصلية بالنسبة للجالية.',
    documents: [
      { fr: 'Pièce d’identité', ar: 'وثيقة الهوية' },
      { fr: 'Numéro du dossier du jugement de divorce', ar: 'رقم ملف حكم الطلاق' },
      { fr: 'Copie de la transcription portée sur l’acte de naissance', ar: 'نسخة من التسجيل المدوَّن على عقد الميلاد', conditional: true },
    ],
    cost_fr: 'Gratuit',
    cost_ar: 'مجاني',
    delay_fr: 'Immédiat au guichet après transcription',
    delay_ar: 'فوري عند الشباك بعد التسجيل',
    validity_fr: 'Copie valable 3 mois',
    validity_ar: 'النسخة صالحة 3 أشهر',
    tips_fr: ['L’acte de divorce n’est délivré qu’après transcription du jugement dans les registres de l’état civil.'],
    tips_ar: ['لا يُسلَّم عقد الطلاق إلا بعد تسجيل الحكم في سجلات الحالة المدنية.'],
    sources: [
      { label: 'État civil · interieur.gov.dz', url: 'https://interieur.gov.dz/2024/02/29/etat-civil/' },
    ],
    seo_keywords_fr: ['acte de divorce algerie', 'jugement de divorce', 'transcription divorce', 'عقد الطلاق'],
    updated: REVIEWED,
  },

  // ===========================================================================
  // ENTREPRISE & COMMERCE (suite)
  // ===========================================================================
  {
    id: 'carte-artisan',
    category: 'entreprise-commerce',
    title_fr: 'Carte d’artisan',
    title_ar: 'بطاقة الحرفي',
    summary_fr:
      'Carte professionnelle attestant l’inscription au registre de l’artisanat et des métiers. Obligatoire pour exercer une activité artisanale.',
    summary_ar:
      'بطاقة مهنية تثبت القيد في سجل الصناعة التقليدية والحرف. إجبارية لممارسة نشاط حرفي.',
    where_fr: 'Chambre de l’Artisanat et des Métiers (CAM) de la wilaya.',
    where_ar: 'غرفة الصناعة التقليدية والحرف للولاية.',
    documents: [
      { fr: 'Demande d’inscription au registre de l’artisanat et des métiers', ar: 'طلب القيد في سجل الصناعة التقليدية والحرف' },
      { fr: 'Carte nationale d’identité biométrique', ar: 'بطاقة التعريف الوطنية البيومترية' },
      { fr: 'Extrait d’acte de naissance', ar: 'مستخرج عقد الميلاد' },
      { fr: 'Certificat de résidence', ar: 'شهادة الإقامة' },
      { fr: 'Diplôme ou attestation de qualification dans le métier (activités d’art / qualifiées)', ar: 'شهادة أو إثبات تأهيل في الحرفة (الأنشطة الفنية / المؤهَّلة)', conditional: true },
      { fr: 'Acte de propriété ou contrat de location du local', ar: 'سند ملكية أو عقد إيجار المحل', conditional: true },
      { fr: 'Photos d’identité + droits d’inscription', ar: 'صور شمسية + حقوق القيد' },
    ],
    cost_fr: 'Droits d’inscription',
    cost_ar: 'حقوق القيد',
    delay_fr: 'Variable selon la chambre',
    delay_ar: 'متغيّر حسب الغرفة',
    tips_fr: ['L’inscription entraîne l’affiliation obligatoire à la CASNOS. La carte d’artisan est désormais biométrique.'],
    tips_ar: ['يؤدّي القيد إلى الانتساب الإجباري لـ CASNOS. وبطاقة الحرفي صارت بيومترية.'],
    related_letters: ['agrement-commercial'],
    sources: [
      { label: 'Artisanat et métiers · Ministère du Commerce', url: 'https://www.commerce.gov.dz/fr/reglementation/recueil/artisanat-et-metiers' },
    ],
    seo_keywords_fr: ['carte d artisan algerie', 'registre artisanat metiers', 'chambre artisanat', 'بطاقة الحرفي'],
    updated: REVIEWED,
  },
  {
    id: 'anade-financement',
    category: 'entreprise-commerce',
    title_fr: 'Financement de micro-entreprise (ANADE, ex-ANSEJ)',
    title_ar: 'تمويل مؤسسة مصغّرة (ANADE، سابقاً ANSEJ)',
    summary_fr:
      'Dispositif d’aide à la création de micro-entreprise pour les jeunes : accompagnement, formation et financement (crédit bonifié) jusqu’à 10 millions DA.',
    summary_ar:
      'جهاز لدعم إنشاء المؤسسات المصغّرة للشباب: مرافقة وتكوين وتمويل (قرض مدعَّم) إلى غاية 10 ملايين دج.',
    where_fr: 'Antenne ANADE de la wilaya ; inscription en ligne.',
    where_ar: 'ملحقة ANADE للولاية؛ التسجيل عبر الإنترنت.',
    documents: [
      { fr: 'Formulaire d’inscription + fiche de présentation du projet', ar: 'استمارة التسجيل + بطاقة تعريف المشروع' },
      { fr: 'Carte nationale d’identité', ar: 'بطاقة التعريف الوطنية' },
      { fr: 'Diplôme, qualification ou attestation de savoir-faire', ar: 'شهادة أو تأهيل أو إثبات معرفة وخبرة' },
      { fr: 'Attestation de formation en entrepreneuriat', ar: 'شهادة التكوين في المقاولاتية' },
      { fr: 'Étude technico-économique / business plan', ar: 'دراسة تقنية اقتصادية / مخطط أعمال' },
      { fr: 'Inscription comme demandeur d’emploi (ANEM)', ar: 'التسجيل كطالب عمل (ANEM)' },
    ],
    cost_fr: 'Apport personnel + cotisation au fonds de garantie',
    cost_ar: 'مساهمة شخصية + اشتراك في صندوق الضمان',
    delay_fr: 'Selon l’étude du dossier par le comité',
    delay_ar: 'حسب دراسة اللجنة للملف',
    online_url: 'https://www.anade.dz/',
    online_label_fr: 'ANADE · accompagnement & inscription',
    online_label_ar: 'ANADE · المرافقة والتسجيل',
    tips_fr: ['Conditions : 19 à 35 ans (jusqu’à 40 ans si l’investissement crée au moins 3 emplois), sans emploi rémunéré à l’inscription. Une formation préalable en entrepreneuriat est obligatoire.'],
    tips_ar: ['الشروط: من 19 إلى 35 سنة (إلى 40 سنة إذا وفّر الاستثمار 3 مناصب على الأقل)، دون عمل مأجور عند التسجيل. التكوين المسبق في المقاولاتية إجباري.'],
    sources: [
      { label: 'ANADE · Agence Nationale d’Appui et de Développement de l’Entrepreneuriat', url: 'https://www.anade.dz/' },
      { label: 'Crédit ANADE · BDL', url: 'https://www.bdl.dz/credit-anade/' },
    ],
    seo_keywords_fr: ['anade', 'ansej', 'financement micro entreprise algerie', 'credit jeune promoteur', 'تمويل المؤسسات المصغرة'],
    updated: REVIEWED,
  },
  {
    id: 'angem-microcredit',
    category: 'entreprise-commerce',
    title_fr: 'Microcrédit ANGEM',
    title_ar: 'القرض المصغّر ANGEM',
    summary_fr:
      'Microcrédit destiné aux personnes sans revenu ou à faible revenu (notamment femmes au foyer) pour créer une petite activité, jusqu’à 1 000 000 DA.',
    summary_ar:
      'قرض مصغّر موجَّه للأشخاص بلا دخل أو بدخل ضعيف (خاصة الماكثات في البيت) لإنشاء نشاط صغير، إلى غاية 1.000.000 دج.',
    where_fr: 'Coordination ANGEM de la wilaya ; inscription en ligne.',
    where_ar: 'تنسيقية ANGEM للولاية؛ التسجيل عبر الإنترنت.',
    documents: [
      { fr: 'Demande de financement adressée à la banque', ar: 'طلب تمويل موجَّه للبنك' },
      { fr: 'Acte de naissance', ar: 'عقد الميلاد' },
      { fr: 'Certificat de résidence', ar: 'شهادة الإقامة' },
      { fr: 'Copie d’une pièce d’identité', ar: 'نسخة من وثيقة الهوية' },
      { fr: 'Diplôme, qualification ou attestation de savoir-faire', ar: 'شهادة أو تأهيل أو إثبات معرفة وخبرة', conditional: true },
      { fr: 'Décision d’éligibilité ANGEM + étude technico-économique', ar: 'قرار الأهلية من ANGEM + الدراسة التقنية الاقتصادية' },
      { fr: 'Attestations de non-affiliation CNAS et CASNOS', ar: 'شهادتا عدم الانتساب لـ CNAS وCASNOS' },
    ],
    cost_fr: 'Apport personnel + cotisation au fonds de garantie',
    cost_ar: 'مساهمة شخصية + اشتراك في صندوق الضمان',
    delay_fr: 'Selon l’étude du dossier',
    delay_ar: 'حسب دراسة الملف',
    online_url: 'https://promoteur.angem.dz/',
    online_label_fr: 'Inscription en ligne · ANGEM',
    online_label_ar: 'التسجيل عبر الإنترنت · ANGEM',
    tips_fr: ['Conditions : 18 ans et plus, sans revenu ou revenu faible et instable, résidence fixe, ne pas avoir bénéficié d’une autre aide à la création.'],
    tips_ar: ['الشروط: 18 سنة فأكثر، بلا دخل أو بدخل ضعيف وغير مستقرّ، إقامة ثابتة، وعدم الاستفادة من دعم آخر للإنشاء.'],
    sources: [
      { label: 'ANGEM · Agence Nationale de Gestion du Microcrédit', url: 'https://www.angem.dz/' },
    ],
    seo_keywords_fr: ['angem', 'microcredit algerie', 'credit femme au foyer', 'القرض المصغر'],
    updated: REVIEWED,
  },

  // ===========================================================================
  // BANQUE & FINANCES
  // ===========================================================================
  {
    id: 'nif',
    category: 'banque-finances',
    title_fr: 'Numéro d’Identification Fiscale (NIF)',
    title_ar: 'رقم التعريف الجبائي (NIF)',
    summary_fr:
      'Identifiant fiscal unique (15 chiffres) attribué par la Direction Générale des Impôts à toute personne ou entreprise assujettie à l’impôt. Exigé pour le registre de commerce, les marchés et la facturation.',
    summary_ar:
      'رقم جبائي وحيد (15 رقماً) تمنحه المديرية العامة للضرائب لكل شخص أو مؤسسة خاضعة للضريبة. يُطلب للسجل التجاري والصفقات والفوترة.',
    where_fr: 'Inspection des impôts compétente ; demande en ligne sur le portail de la DGI.',
    where_ar: 'مفتشية الضرائب المختصّة؛ الطلب عبر بوابة المديرية العامة للضرائب.',
    documents: [
      { fr: 'Formulaire de demande d’immatriculation fiscale', ar: 'استمارة طلب التسجيل الجبائي' },
      { fr: 'Pièce d’identité', ar: 'وثيقة الهوية' },
      { fr: 'Extrait du registre de commerce (activité commerciale)', ar: 'مستخرج السجل التجاري (للنشاط التجاري)', conditional: true },
      { fr: 'Statuts enregistrés (pour une société)', ar: 'القانون الأساسي المسجَّل (للشركة)', conditional: true },
      { fr: 'Justificatif d’adresse du siège / domicile', ar: 'إثبات عنوان المقر / السكن' },
    ],
    cost_fr: 'Gratuit',
    cost_ar: 'مجاني',
    delay_fr: 'Récupération signée et cachetée sous 48 à 72 h environ',
    delay_ar: 'السحب موقّعاً وممهوراً خلال 48 إلى 72 ساعة تقريباً',
    online_url: 'http://nifenligne.mfdgi.gov.dz/',
    online_label_fr: 'Demande de NIF en ligne (DGI)',
    online_label_ar: 'طلب الرقم الجبائي عبر الإنترنت (DGI)',
    tips_fr: ['Après la demande en ligne, présentez l’accusé de réception à l’inspection des impôts pour retirer le NIF signé et cacheté.'],
    tips_ar: ['بعد الطلب عبر الإنترنت، قدّم وصل الاستلام إلى مفتشية الضرائب لسحب الرقم الجبائي موقّعاً وممهوراً.'],
    sources: [
      { label: 'NIF en ligne · DGI (Ministère des Finances)', url: 'http://nifenligne.mfdgi.gov.dz/' },
    ],
    seo_keywords_fr: ['nif algerie', 'numero identification fiscale', 'carte fiscale dgi', 'الرقم الجبائي'],
    updated: REVIEWED,
  },
  {
    id: 'compte-ccp-edahabia',
    category: 'banque-finances',
    title_fr: 'Compte CCP & carte Edahabia (Algérie Poste)',
    title_ar: 'الحساب البريدي الجاري وبطاقة الذهبية (بريد الجزائر)',
    summary_fr:
      'Ouverture d’un compte courant postal (CCP) auprès d’Algérie Poste et demande de la carte de paiement Edahabia. Indispensable pour la bourse, le salaire et les paiements en ligne.',
    summary_ar:
      'فتح حساب بريدي جاري (CCP) لدى بريد الجزائر وطلب بطاقة الدفع الذهبية. ضروري للمنحة والراتب والدفع عبر الإنترنت.',
    where_fr: 'Bureau de poste du lieu de résidence.',
    where_ar: 'مكتب البريد لمكان الإقامة.',
    documents: [
      { fr: 'Formulaire d’ouverture CH1', ar: 'استمارة الفتح CH1' },
      { fr: 'Spécimens de signature CH25 et CH25 BIS', ar: 'نموذجا الإمضاء CH25 وCH25 مكرّر' },
      { fr: 'Copie d’une pièce d’identité (CNI, permis ou passeport)', ar: 'نسخة من وثيقة هوية (بطاقة التعريف، الرخصة أو الجواز)' },
      { fr: 'Carte de séjour (pour les résidents étrangers)', ar: 'بطاقة الإقامة (للمقيمين الأجانب)', conditional: true },
    ],
    cost_fr: 'Gratuit (carte Edahabia : frais annuels modiques)',
    cost_ar: 'مجاني (بطاقة الذهبية: رسوم سنوية زهيدة)',
    delay_fr: 'Un SMS signale la disponibilité de la carte et du code au bureau de poste',
    delay_ar: 'تصلك رسالة SMS بتوفّر البطاقة والرمز في مكتب البريد',
    online_url: 'https://www.poste.dz/',
    online_label_fr: 'Algérie Poste · CCP & Edahabia',
    online_label_ar: 'بريد الجزائر · CCP والذهبية',
    tips_fr: ['Cochez « délivrance d’une carte monétaire » sur le formulaire d’ouverture pour demander la carte Edahabia en même temps.'],
    tips_ar: ['أشِّر على خانة «تسليم بطاقة نقدية» في استمارة الفتح لطلب بطاقة الذهبية في الوقت نفسه.'],
    related_letters: ['ouverture-compte-bancaire', 'carte-edahabia'],
    sources: [
      { label: 'CCP / e-CCP · Algérie Poste', url: 'https://www.poste.dz/services/particular/ccp-eccp' },
      { label: 'Carte Edahabia · Algérie Poste', url: 'https://www.poste.dz/services/particular/carte' },
    ],
    seo_keywords_fr: ['compte ccp algerie', 'carte edahabia', 'ouverture ccp algerie poste', 'الحساب البريدي الجاري'],
    updated: REVIEWED,
  },

  // ===========================================================================
  // TRAVAIL & SÉCURITÉ SOCIALE (suite)
  // ===========================================================================
  {
    id: 'carte-handicap',
    category: 'travail-protection-sociale',
    title_fr: 'Carte de la personne handicapée',
    title_ar: 'بطاقة الشخص المعوّق',
    summary_fr:
      'Carte ouvrant droit aux aides et facilités pour les personnes en situation de handicap (et, selon le taux d’invalidité, à une allocation mensuelle).',
    summary_ar:
      'بطاقة تمنح الحق في المساعدات والتسهيلات للأشخاص ذوي الإعاقة (ومنحة شهرية حسب نسبة العجز).',
    where_fr: 'Bureau communal des affaires sociales (dossier transmis à la Direction de l’Action Sociale · DAS de la wilaya).',
    where_ar: 'المكتب البلدي للشؤون الاجتماعية (يُحوَّل الملف إلى مديرية النشاط الاجتماعي · DAS للولاية).',
    documents: [
      { fr: 'Formulaire retiré au bureau communal des affaires sociales', ar: 'الاستمارة المسحوبة من المكتب البلدي للشؤون الاجتماعية' },
      { fr: 'Questionnaire médical rempli par le médecin', ar: 'الاستبيان الطبي معبّأ من الطبيب' },
      { fr: 'Extrait d’acte de naissance', ar: 'مستخرج عقد الميلاد' },
      { fr: 'Certificat de résidence', ar: 'شهادة الإقامة' },
      { fr: 'Photos d’identité', ar: 'صور شمسية' },
      { fr: 'Copie de la pièce d’identité', ar: 'نسخة من وثيقة الهوية' },
    ],
    cost_fr: 'Gratuit',
    cost_ar: 'مجاني',
    delay_fr: 'Examen par la commission médicale de wilaya sous ~1 mois',
    delay_ar: 'دراسة اللجنة الطبية للولاية خلال شهر تقريباً',
    online_url: 'https://bawabatic.dz/?req=informations&op=detail&id=787&lang=fr',
    online_label_fr: 'Carte de la personne handicapée · services publics',
    online_label_ar: 'بطاقة الشخص المعوّق · الخدمات العمومية',
    tips_fr: ['La carte est délivrée par le directeur de l’action sociale de la wilaya sur décision de la commission médicale spécialisée. Une allocation mensuelle est prévue pour les personnes reconnues handicapées à 100 % et sans ressources.'],
    tips_ar: ['تُسلَّم البطاقة من مدير النشاط الاجتماعي للولاية بناءً على قرار اللجنة الطبية المتخصّصة. وتُمنح منحة شهرية للأشخاص المعترف لهم بعجز 100% وبلا موارد.'],
    sources: [
      { label: 'Carte de la personne handicapée · bawabatic.dz', url: 'https://bawabatic.dz/?req=informations&op=detail&id=787&lang=fr' },
    ],
    seo_keywords_fr: ['carte handicape algerie', 'carte invalidite algerie', 'allocation handicape', 'بطاقة المعوق'],
    updated: REVIEWED,
  },
  {
    id: 'concours-fonction-publique',
    category: 'travail-protection-sociale',
    title_fr: 'Concours de recrutement (fonction publique)',
    title_ar: 'مسابقة التوظيف (الوظيفة العمومية)',
    summary_fr:
      'Le recrutement dans la fonction publique se fait par concours. Les offres et inscriptions sont centralisées sur le portail de la DGFP.',
    summary_ar:
      'يتمّ التوظيف في الوظيفة العمومية عبر مسابقة. تُنشر العروض ويتمّ التسجيل عبر بوابة المديرية العامة للوظيفة العمومية.',
    where_fr: 'En ligne sur le portail des concours de la fonction publique ; dépôt du dossier auprès de l’administration organisatrice.',
    where_ar: 'عبر بوابة مسابقات الوظيفة العمومية؛ وإيداع الملف لدى الإدارة المنظِّمة.',
    documents: [
      { fr: 'Extrait d’acte de naissance', ar: 'مستخرج عقد الميلاد' },
      { fr: 'Certificat de nationalité', ar: 'شهادة الجنسية' },
      { fr: 'Extrait de casier judiciaire (bulletin n°3) en cours de validité', ar: 'مستخرج صحيفة السوابق (الصحيفة رقم 3) سارية المفعول' },
      { fr: 'Certificat de résidence', ar: 'شهادة الإقامة' },
      { fr: 'Diplôme requis pour le poste', ar: 'الشهادة المطلوبة للمنصب' },
      { fr: 'Attestations de travail justifiant l’expérience exigée', ar: 'شهادات العمل المثبتة للخبرة المطلوبة', conditional: true },
    ],
    cost_fr: 'Gratuit',
    cost_ar: 'مجاني',
    delay_fr: 'Selon le calendrier de chaque concours',
    delay_ar: 'حسب رزنامة كل مسابقة',
    online_url: 'https://www.concours-fonction-publique.gov.dz/',
    online_label_fr: 'Portail des concours de la fonction publique',
    online_label_ar: 'بوابة مسابقات الوظيفة العمومية',
    tips_fr: ['Les pièces exactes varient selon le grade et l’administration ; le dossier complet est souvent demandé après admission au concours.'],
    tips_ar: ['تختلف الوثائق الدقيقة حسب الرتبة والإدارة؛ وغالباً ما يُطلب الملف الكامل بعد النجاح في المسابقة.'],
    related_letters: ['participation-concours', 'demande-emploi'],
    sources: [
      { label: 'Concours · DGFP (Direction Générale de la Fonction Publique)', url: 'https://www.concours-fonction-publique.gov.dz/' },
      { label: 'DGFP', url: 'https://www.dgfp.gov.dz/' },
    ],
    seo_keywords_fr: ['concours fonction publique algerie', 'recrutement fonction publique', 'inscription concours dgfp', 'مسابقات التوظيف'],
    updated: REVIEWED,
  },

  // ===========================================================================
  // ÉDUCATION & ÉTUDES (suite)
  // ===========================================================================
  {
    id: 'equivalence-diplome',
    category: 'education',
    title_fr: 'Équivalence de diplôme étranger',
    title_ar: 'معادلة الشهادة الأجنبية',
    summary_fr:
      'Reconnaissance d’un diplôme obtenu à l’étranger par le Ministère de l’Enseignement supérieur, via la plateforme PROGRES. Nécessaire pour s’inscrire, passer un concours ou exercer.',
    summary_ar:
      'الاعتراف بشهادة متحصَّل عليها بالخارج من طرف وزارة التعليم العالي، عبر منصة PROGRES. ضرورية للتسجيل أو اجتياز مسابقة أو الممارسة.',
    where_fr: 'En ligne sur la plateforme d’équivalence du MESRS (PROGRES).',
    where_ar: 'عبر منصة المعادلة لوزارة التعليم العالي (PROGRES).',
    documents: [
      { fr: 'Copie certifiée du baccalauréat ou titre étranger reconnu', ar: 'نسخة مصدَّقة من البكالوريا أو الشهادة الأجنبية المعترف بها' },
      { fr: 'Copie certifiée du diplôme soumis à l’équivalence', ar: 'نسخة مصدَّقة من الشهادة موضوع المعادلة' },
      { fr: 'Copies certifiées des relevés de notes', ar: 'نسخ مصدَّقة من كشوف النقاط' },
      { fr: 'Traduction officielle (traducteur assermenté) si le diplôme n’est pas en français/arabe', ar: 'ترجمة رسمية (مترجم محلَّف) إذا لم تكن الشهادة بالفرنسية/العربية', conditional: true },
      { fr: 'Authentification par l’établissement émetteur et la représentation diplomatique algérienne', ar: 'مصادقة المؤسسة المانحة والتمثيلية الدبلوماسية الجزائرية' },
    ],
    cost_fr: 'Gratuit',
    cost_ar: 'مجاني',
    delay_fr: '8 jours (cas standards), jusqu’à 1 mois pour les cas nécessitant une expertise',
    delay_ar: '8 أيام (الحالات العادية)، إلى شهر للحالات التي تتطلّب خبرة',
    online_url: 'https://progres.mesrs.dz/webequivalence/',
    online_label_fr: 'Plateforme d’équivalence (PROGRES)',
    online_label_ar: 'منصة المعادلة (PROGRES)',
    related_letters: ['equivalence-diplome'],
    sources: [
      { label: 'Équivalence des diplômes · MESRS', url: 'https://www.mesrs.dz/fr/equivalence-diplomes' },
    ],
    seo_keywords_fr: ['equivalence diplome algerie', 'homologation diplome etranger', 'reconnaissance diplome mesrs', 'معادلة الشهادة'],
    updated: REVIEWED,
  },

  // ===========================================================================
  // LOGEMENT & URBANISME (suite)
  // ===========================================================================
  {
    id: 'livret-foncier',
    category: 'logement-urbanisme',
    title_fr: 'Livret foncier',
    title_ar: 'الدفتر العقاري',
    summary_fr:
      'Document délivré par la conservation foncière constituant la preuve officielle de la propriété d’un bien immobilier.',
    summary_ar:
      'وثيقة تسلّمها المحافظة العقارية وتشكّل الدليل الرسمي على ملكية عقار.',
    where_fr: 'Conservation foncière du lieu de situation du bien.',
    where_ar: 'المحافظة العقارية لمكان وجود العقار.',
    documents: [
      { fr: 'Demande écrite adressée au conservateur foncier', ar: 'طلب كتابي موجَّه للمحافظ العقاري' },
      { fr: 'Imprimé PR 19 (déclaration de première formalité) légalisé', ar: 'الاستمارة PR 19 (تصريح أول إجراء) مصدَّقة' },
      { fr: 'Acte de propriété authentique (vente, donation ou succession)', ar: 'سند ملكية رسمي (بيع، هبة أو ميراث)' },
      { fr: 'Extrait de la matrice cadastrale ou certificat de conformité cadastrale', ar: 'مستخرج المخطط المسحي أو شهادة المطابقة المسحية' },
      { fr: 'Copie de la pièce d’identité du propriétaire', ar: 'نسخة من وثيقة هوية المالك' },
    ],
    cost_fr: 'Droits de la conservation foncière',
    cost_ar: 'حقوق المحافظة العقارية',
    delay_fr: 'Variable',
    delay_ar: 'متغيّر',
    online_url: 'https://bawabatic.dz/',
    online_label_fr: 'Demande en ligne · services publics (bawabatic)',
    online_label_ar: 'الطلب عبر الإنترنت · الخدمات العمومية (bawabatic)',
    tips_fr: ['Selon la Cour suprême, le livret foncier est le seul document faisant preuve de la propriété ; il se distingue de l’acte de propriété notarié.'],
    tips_ar: ['حسب المحكمة العليا، الدفتر العقاري هو الوثيقة الوحيدة التي تُثبت الملكية؛ وهو يختلف عن سند الملكية الموثَّق.'],
    sources: [
      { label: 'Livret foncier · services publics (bawabatic.dz)', url: 'https://bawabatic.dz/' },
    ],
    seo_keywords_fr: ['livret foncier algerie', 'conservation fonciere', 'acte de propriete algerie', 'الدفتر العقاري'],
    updated: REVIEWED,
  },
];

export function getProcedure(id: string): Procedure | undefined {
  return PROCEDURES.find((p) => p.id === id);
}
