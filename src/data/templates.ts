import type { LetterTemplate } from '../types';

// Shared field fragments reused across many templates --------------------------
const F = {
  nom_prenom: {
    key: 'nom_prenom',
    label_fr: 'Nom et prénom',
    label_ar: 'الاسم واللقب',
    type: 'text' as const,
    required: true,
  },
  adresse: {
    key: 'adresse',
    label_fr: 'Adresse complète',
    label_ar: 'العنوان الكامل',
    type: 'text' as const,
    required: true,
  },
  telephone: {
    key: 'telephone',
    label_fr: 'Téléphone',
    label_ar: 'الهاتف',
    type: 'text' as const,
    required: false,
  },
  ville: {
    key: 'ville',
    label_fr: 'Ville (lieu de rédaction)',
    label_ar: 'المدينة (مكان التحرير)',
    type: 'text' as const,
    required: true,
  },
  date: {
    key: 'date',
    label_fr: 'Date',
    label_ar: 'التاريخ',
    type: 'date' as const,
    required: true,
  },
};

export const TEMPLATES: LetterTemplate[] = [
  // ===========================================================================
  // 1. DUPLICATA CARTE D'IDENTITÉ  (worked example)
  // ===========================================================================
  {
    id: 'duplicata-carte-identite',
    category: 'etat-civil-administration',
    title_fr: 'Demande de duplicata de carte d\'identité nationale',
    title_ar: 'طلب نسخة ثانية من بطاقة التعريف الوطنية',
    short_description_fr:
      'À adresser au Chef de Daïra en cas de perte, vol ou détérioration de votre carte d\'identité nationale.',
    short_description_ar:
      'توجَّه إلى السيد رئيس الدائرة في حالة ضياع أو سرقة أو تلف بطاقة التعريف الوطنية.',
    fields: [
      F.nom_prenom,
      F.adresse,
      F.telephone,
      {
        key: 'daira',
        label_fr: 'Daïra',
        label_ar: 'الدائرة',
        type: 'text',
        required: true,
      },
      {
        key: 'motif',
        label_fr: 'Motif',
        label_ar: 'السبب',
        type: 'select',
        required: true,
        options: [
          { value: 'la perte', label_fr: 'la perte', label_ar: 'الضياع' },
          { value: 'le vol', label_fr: 'le vol', label_ar: 'السرقة' },
          { value: 'la détérioration', label_fr: 'la détérioration', label_ar: 'التلف' },
        ],
      },
      {
        key: 'date_incident',
        label_fr: 'Date de l\'incident',
        label_ar: 'تاريخ الحادث',
        type: 'date',
        required: true,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
{{adresse}}
{{telephone}}

À Monsieur le Chef de Daïra de {{daira}}

Objet : Demande de duplicata de carte d'identité nationale

Monsieur le Chef de Daïra,

J'ai l'honneur de solliciter de votre haute bienveillance la délivrance d'un duplicata de ma carte d'identité nationale, suite à {{motif}} de celle-ci, survenu(e) le {{date_incident}}.

Je vous prie de bien vouloir trouver ci-joint les pièces justificatives nécessaires à l'appui de ma présente demande.

Dans l'attente d'une réponse favorable, je vous prie d'agréer, Monsieur le Chef de Daïra, l'expression de mes salutations distinguées.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
{{adresse}}
{{telephone}}

إلى السيد رئيس دائرة {{daira}}

الموضوع: طلب نسخة ثانية من بطاقة التعريف الوطنية

سيدي رئيس الدائرة المحترم،

يشرفني أن ألتمس من سيادتكم الموقرة منحي نسخة ثانية من بطاقة التعريف الوطنية، وذلك على إثر {{motif}} بتاريخ {{date_incident}}.

وتجدون رفقته الوثائق الثبوتية اللازمة دعماً لطلبي هذا.

وفي انتظار ردكم الإيجابي، تفضلوا سيدي رئيس الدائرة بقبول فائق عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite duplicata carte d\'identité algerie',
      'modèle demande carte d\'identité nationale perdue',
      'exemple demande duplicata CNI algerie',
    ],
  },

  // ===========================================================================
  // 2. ATTESTATION DE TRAVAIL  (worked example)
  // ===========================================================================
  {
    id: 'attestation-travail',
    category: 'emploi-concours',
    title_fr: 'Demande d\'attestation de travail',
    title_ar: 'طلب شهادة عمل',
    short_description_fr:
      'À adresser à votre employeur pour justifier votre activité (démarche bancaire, visa, administration…).',
    short_description_ar:
      'توجَّه إلى مستخدِمك لإثبات نشاطك المهني (إجراء بنكي، تأشيرة، إدارة…).',
    fields: [
      F.nom_prenom,
      {
        key: 'poste',
        label_fr: 'Poste occupé',
        label_ar: 'المنصب',
        type: 'text',
        required: true,
      },
      {
        key: 'entreprise',
        label_fr: 'Nom de l\'entreprise / organisme',
        label_ar: 'اسم المؤسسة',
        type: 'text',
        required: true,
      },
      {
        key: 'date_entree',
        label_fr: 'Date d\'entrée en fonction',
        label_ar: 'تاريخ الالتحاق بالعمل',
        type: 'date',
        required: true,
      },
      {
        key: 'motif',
        label_fr: 'Motif de la demande',
        label_ar: 'سبب الطلب',
        type: 'text',
        required: true,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
{{poste}}

À Monsieur le Directeur des Ressources Humaines
{{entreprise}}

Objet : Demande d'attestation de travail

Monsieur le Directeur,

J'ai l'honneur de solliciter de votre bienveillance la délivrance d'une attestation de travail justifiant mon activité au sein de {{entreprise}}, en qualité de {{poste}}, depuis le {{date_entree}}.

Cette attestation m'est demandée dans le cadre de {{motif}}.

Je vous remercie par avance de l'attention que vous porterez à ma requête et vous prie d'agréer, Monsieur le Directeur, l'expression de mes salutations respectueuses.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
{{poste}}

إلى السيد مدير الموارد البشرية
{{entreprise}}

الموضوع: طلب شهادة عمل

سيدي المدير المحترم،

يشرفني أن ألتمس من سيادتكم منحي شهادة عمل تثبت نشاطي المهني داخل مؤسسة {{entreprise}}، بصفتي {{poste}}، منذ تاريخ {{date_entree}}.

وأحتاج هذه الشهادة في إطار {{motif}}.

أشكركم مسبقاً على حسن اهتمامكم بطلبي، وتفضلوا سيدي المدير بقبول عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite attestation de travail algerie',
      'modèle demande attestation de travail',
      'exemple lettre demande attestation travail algerie',
    ],
  },

  // ===========================================================================
  // EMPLOI & CONCOURS
  // ===========================================================================
  {
    id: 'demande-emploi',
    category: 'emploi-concours',
    title_fr: 'Demande d\'emploi (candidature spontanée)',
    title_ar: 'طلب عمل (ترشّح تلقائي)',
    short_description_fr:
      'Lettre de candidature spontanée à adresser au directeur d\'une entreprise ou d\'un organisme.',
    short_description_ar:
      'رسالة ترشّح تلقائي توجَّه إلى مدير مؤسسة أو هيئة للحصول على منصب عمل.',
    fields: [
      F.nom_prenom,
      F.adresse,
      F.telephone,
      {
        key: 'entreprise',
        label_fr: 'Entreprise / organisme destinataire',
        label_ar: 'المؤسسة المعنية',
        type: 'text',
        required: true,
      },
      {
        key: 'poste',
        label_fr: 'Poste souhaité',
        label_ar: 'المنصب المطلوب',
        type: 'text',
        required: true,
      },
      {
        key: 'diplome',
        label_fr: 'Diplôme / qualification',
        label_ar: 'الشهادة / المؤهل',
        type: 'text',
        required: true,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
{{adresse}}
{{telephone}}

À Monsieur le Directeur
{{entreprise}}

Objet : Demande d'emploi

Monsieur le Directeur,

J'ai l'honneur de solliciter de votre haute bienveillance un poste de {{poste}} au sein de votre estimable entreprise.

Titulaire d'un(e) {{diplome}}, je dispose des compétences et de la motivation nécessaires pour mettre mon savoir-faire au service de votre organisme et contribuer à son développement.

Vous trouverez ci-joint mon curriculum vitae ainsi que les copies de mes diplômes. Je me tiens à votre entière disposition pour tout entretien que vous jugerez utile.

Dans l'attente d'une suite favorable, je vous prie d'agréer, Monsieur le Directeur, l'expression de mes salutations distinguées.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
{{adresse}}
{{telephone}}

إلى السيد مدير
{{entreprise}}

الموضوع: طلب عمل

سيدي المدير المحترم،

يشرفني أن ألتمس من سيادتكم الموقرة منحي منصب {{poste}} داخل مؤسستكم الموقرة.

وبصفتي حاملاً لشهادة {{diplome}}، فإنني أتوفر على الكفاءة والإرادة اللازمتين لوضع خبرتي في خدمة مؤسستكم والمساهمة في تطويرها.

تجدون رفقته سيرتي الذاتية ونسخاً من شهاداتي، وأبقى رهن إشارتكم لأي مقابلة ترونها مناسبة.

وفي انتظار ردكم الإيجابي، تفضلوا سيدي المدير بقبول فائق عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite demande d\'emploi algerie',
      'modèle lettre demande emploi algerie',
      'exemple demande d\'emploi candidature spontanée',
    ],
  },

  {
    id: 'participation-concours',
    category: 'emploi-concours',
    title_fr: 'Demande de participation à un concours de recrutement',
    title_ar: 'طلب المشاركة في مسابقة توظيف',
    short_description_fr:
      'Pour vous inscrire à un concours de recrutement dans la fonction publique ou un établissement.',
    short_description_ar:
      'للتسجيل في مسابقة توظيف في الوظيف العمومي أو إحدى المؤسسات.',
    fields: [
      F.nom_prenom,
      F.adresse,
      F.telephone,
      {
        key: 'organisme',
        label_fr: 'Organisme organisateur',
        label_ar: 'الهيئة المنظِّمة',
        type: 'text',
        required: true,
      },
      {
        key: 'grade',
        label_fr: 'Grade / poste mis en concours',
        label_ar: 'الرتبة / المنصب المفتوح للمسابقة',
        type: 'text',
        required: true,
      },
      {
        key: 'diplome',
        label_fr: 'Diplôme détenu',
        label_ar: 'الشهادة المتحصَّل عليها',
        type: 'text',
        required: true,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
{{adresse}}
{{telephone}}

À Monsieur le Directeur
{{organisme}}

Objet : Demande de participation à un concours de recrutement

Monsieur le Directeur,

J'ai l'honneur de solliciter de votre haute bienveillance mon inscription au concours de recrutement ouvert pour le poste de {{grade}}.

Titulaire d'un(e) {{diplome}}, je remplis les conditions requises pour participer à ce concours. Vous trouverez ci-joint le dossier complet comportant l'ensemble des pièces justificatives exigées.

Dans l'attente d'une réponse favorable, je vous prie d'agréer, Monsieur le Directeur, l'expression de mes salutations distinguées.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
{{adresse}}
{{telephone}}

إلى السيد مدير
{{organisme}}

الموضوع: طلب المشاركة في مسابقة توظيف

سيدي المدير المحترم،

يشرفني أن ألتمس من سيادتكم الموقرة تسجيلي في مسابقة التوظيف المفتوحة لمنصب {{grade}}.

وبصفتي حاملاً لشهادة {{diplome}}، فإنني أستوفي الشروط المطلوبة للمشاركة في هذه المسابقة. وتجدون رفقته الملف الكامل المتضمن جميع الوثائق الثبوتية المطلوبة.

وفي انتظار ردكم الإيجابي، تفضلوا سيدي المدير بقبول فائق عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite participation concours algerie',
      'modèle demande concours de recrutement algerie',
      'exemple demande inscription concours fonction publique',
    ],
  },

  {
    id: 'conge-annuel',
    category: 'emploi-concours',
    title_fr: 'Demande de congé annuel',
    title_ar: 'طلب عطلة سنوية',
    short_description_fr:
      'Pour solliciter votre congé annuel payé auprès de votre employeur.',
    short_description_ar: 'لطلب العطلة السنوية المدفوعة من مستخدِمك.',
    fields: [
      F.nom_prenom,
      {
        key: 'poste',
        label_fr: 'Poste occupé',
        label_ar: 'المنصب',
        type: 'text',
        required: true,
      },
      {
        key: 'entreprise',
        label_fr: 'Entreprise / organisme',
        label_ar: 'المؤسسة',
        type: 'text',
        required: true,
      },
      {
        key: 'duree',
        label_fr: 'Durée (nombre de jours)',
        label_ar: 'المدة (عدد الأيام)',
        type: 'text',
        required: true,
      },
      {
        key: 'date_debut',
        label_fr: 'Date de début',
        label_ar: 'تاريخ البداية',
        type: 'date',
        required: true,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
{{poste}}

À Monsieur le Directeur
{{entreprise}}

Objet : Demande de congé annuel

Monsieur le Directeur,

J'ai l'honneur de solliciter de votre bienveillance l'octroi de mon congé annuel d'une durée de {{duree}}, à compter du {{date_debut}}.

Je m'engage à reprendre mes fonctions à l'issue de cette période et à assurer, au préalable, la passation des dossiers en cours.

Dans l'attente de votre accord, je vous prie d'agréer, Monsieur le Directeur, l'expression de mes salutations respectueuses.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
{{poste}}

إلى السيد المدير
{{entreprise}}

الموضوع: طلب عطلة سنوية

سيدي المدير المحترم،

يشرفني أن ألتمس من سيادتكم الموافقة على منحي عطلتي السنوية لمدة {{duree}}، ابتداءً من تاريخ {{date_debut}}.

وألتزم باستئناف مهامي عند انتهاء هذه المدة، وبضمان تسليم الملفات الجارية قبل ذلك.

وفي انتظار موافقتكم، تفضلوا سيدي المدير بقبول عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite congé annuel algerie',
      'modèle demande de congé algerie',
      'exemple lettre demande congé annuel',
    ],
  },

  {
    id: 'conge-sans-solde',
    category: 'emploi-concours',
    title_fr: 'Demande de congé sans solde',
    title_ar: 'طلب عطلة بدون أجر',
    short_description_fr:
      'Pour demander une absence prolongée non rémunérée, en précisant le motif.',
    short_description_ar:
      'لطلب غياب طويل غير مدفوع الأجر مع توضيح السبب.',
    fields: [
      F.nom_prenom,
      {
        key: 'poste',
        label_fr: 'Poste occupé',
        label_ar: 'المنصب',
        type: 'text',
        required: true,
      },
      {
        key: 'entreprise',
        label_fr: 'Entreprise / organisme',
        label_ar: 'المؤسسة',
        type: 'text',
        required: true,
      },
      {
        key: 'duree',
        label_fr: 'Durée souhaitée',
        label_ar: 'المدة المطلوبة',
        type: 'text',
        required: true,
      },
      {
        key: 'motif',
        label_fr: 'Motif',
        label_ar: 'السبب',
        type: 'textarea',
        required: true,
      },
      {
        key: 'date_debut',
        label_fr: 'Date de début',
        label_ar: 'تاريخ البداية',
        type: 'date',
        required: true,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
{{poste}}

À Monsieur le Directeur
{{entreprise}}

Objet : Demande de congé sans solde

Monsieur le Directeur,

J'ai l'honneur de solliciter de votre bienveillance l'octroi d'un congé sans solde d'une durée de {{duree}}, à compter du {{date_debut}}, pour le motif suivant : {{motif}}.

Je m'engage à reprendre mes fonctions à l'expiration de ce congé et reste à votre disposition pour toute information complémentaire.

Dans l'attente de votre accord, je vous prie d'agréer, Monsieur le Directeur, l'expression de mes salutations respectueuses.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
{{poste}}

إلى السيد المدير
{{entreprise}}

الموضوع: طلب عطلة بدون أجر

سيدي المدير المحترم،

يشرفني أن ألتمس من سيادتكم الموافقة على منحي عطلة بدون أجر لمدة {{duree}}، ابتداءً من تاريخ {{date_debut}}، وذلك للسبب التالي: {{motif}}.

وألتزم باستئناف مهامي عند انتهاء هذه العطلة، وأبقى رهن إشارتكم لأي معلومة إضافية.

وفي انتظار موافقتكم، تفضلوا سيدي المدير بقبول عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite congé sans solde algerie',
      'modèle demande congé sans solde',
      'exemple lettre congé sans solde algerie',
    ],
  },

  {
    id: 'lettre-demission',
    category: 'emploi-concours',
    title_fr: 'Lettre de démission',
    title_ar: 'رسالة استقالة',
    short_description_fr:
      'Pour notifier officiellement votre démission, en respectant le préavis prévu.',
    short_description_ar:
      'لتقديم استقالتك رسمياً مع احترام مهلة الإشعار المسبق.',
    fields: [
      F.nom_prenom,
      {
        key: 'poste',
        label_fr: 'Poste occupé',
        label_ar: 'المنصب',
        type: 'text',
        required: true,
      },
      {
        key: 'entreprise',
        label_fr: 'Entreprise / organisme',
        label_ar: 'المؤسسة',
        type: 'text',
        required: true,
      },
      {
        key: 'preavis',
        label_fr: 'Durée du préavis',
        label_ar: 'مدة الإشعار المسبق',
        type: 'text',
        required: true,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
{{poste}}

À Monsieur le Directeur
{{entreprise}}

Objet : Lettre de démission

Monsieur le Directeur,

Par la présente, j'ai l'honneur de vous informer de ma décision de démissionner de mon poste de {{poste}} au sein de votre entreprise.

Conformément à la réglementation en vigueur, je respecterai un préavis de {{preavis}} à compter de la date de réception de la présente lettre.

Je vous remercie pour la confiance que vous m'avez accordée durant la période de mon activité et vous prie d'agréer, Monsieur le Directeur, l'expression de mes salutations distinguées.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
{{poste}}

إلى السيد المدير
{{entreprise}}

الموضوع: رسالة استقالة

سيدي المدير المحترم،

يشرفني أن أحيطكم علماً بقراري التخلي عن منصبي بصفتي {{poste}} داخل مؤسستكم.

وطبقاً للتنظيم المعمول به، سألتزم بمهلة إشعار مسبق مدتها {{preavis}} ابتداءً من تاريخ استلام هذه الرسالة.

أشكركم على الثقة التي منحتموني إياها طيلة فترة عملي، وتفضلوا سيدي المدير بقبول فائق عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'lettre de démission manuscrite algerie',
      'modèle lettre démission algerie',
      'exemple demande de démission avec préavis',
    ],
  },

  {
    id: 'demande-mutation',
    category: 'emploi-concours',
    title_fr: 'Demande de mutation / transfert',
    title_ar: 'طلب نقل / تحويل',
    short_description_fr:
      'Pour demander votre mutation vers un autre service, wilaya ou établissement.',
    short_description_ar:
      'لطلب نقلك إلى مصلحة أو ولاية أو مؤسسة أخرى.',
    fields: [
      F.nom_prenom,
      {
        key: 'poste',
        label_fr: 'Poste / grade actuel',
        label_ar: 'المنصب / الرتبة الحالية',
        type: 'text',
        required: true,
      },
      {
        key: 'lieu_actuel',
        label_fr: 'Lieu d\'affectation actuel',
        label_ar: 'مكان العمل الحالي',
        type: 'text',
        required: true,
      },
      {
        key: 'lieu_souhaite',
        label_fr: 'Lieu d\'affectation souhaité',
        label_ar: 'مكان العمل المطلوب',
        type: 'text',
        required: true,
      },
      {
        key: 'motif',
        label_fr: 'Motif de la demande',
        label_ar: 'سبب الطلب',
        type: 'textarea',
        required: true,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
{{poste}}
{{lieu_actuel}}

À Monsieur le Directeur

Objet : Demande de mutation

Monsieur le Directeur,

J'ai l'honneur de solliciter de votre haute bienveillance ma mutation de {{lieu_actuel}} vers {{lieu_souhaite}}.

Cette demande est motivée par {{motif}}.

Je reste à votre entière disposition pour fournir toute pièce justificative complémentaire et vous remercie de l'attention que vous porterez à ma requête.

Dans l'attente d'une suite favorable, je vous prie d'agréer, Monsieur le Directeur, l'expression de mes salutations distinguées.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
{{poste}}
{{lieu_actuel}}

إلى السيد المدير

الموضوع: طلب نقل

سيدي المدير المحترم،

يشرفني أن ألتمس من سيادتكم الموقرة الموافقة على نقلي من {{lieu_actuel}} إلى {{lieu_souhaite}}.

ويعود سبب هذا الطلب إلى {{motif}}.

وأبقى رهن إشارتكم لتقديم أي وثيقة ثبوتية إضافية، وأشكركم على حسن اهتمامكم بطلبي.

وفي انتظار ردكم الإيجابي، تفضلوا سيدي المدير بقبول فائق عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite mutation algerie',
      'modèle demande de mutation algerie',
      'exemple lettre demande transfert travail',
    ],
  },

  {
    id: 'autorisation-absence',
    category: 'emploi-concours',
    title_fr: 'Demande d\'autorisation d\'absence',
    title_ar: 'طلب رخصة غياب',
    short_description_fr:
      'Pour vous absenter quelques heures ou quelques jours pour un motif précis.',
    short_description_ar:
      'للتغيب بضع ساعات أو أيام لسبب محدّد.',
    fields: [
      F.nom_prenom,
      {
        key: 'poste',
        label_fr: 'Poste occupé',
        label_ar: 'المنصب',
        type: 'text',
        required: true,
      },
      {
        key: 'entreprise',
        label_fr: 'Entreprise / organisme',
        label_ar: 'المؤسسة',
        type: 'text',
        required: true,
      },
      {
        key: 'duree',
        label_fr: 'Durée de l\'absence',
        label_ar: 'مدة الغياب',
        type: 'text',
        required: true,
      },
      {
        key: 'motif',
        label_fr: 'Motif',
        label_ar: 'السبب',
        type: 'textarea',
        required: true,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
{{poste}}

À Monsieur le Directeur
{{entreprise}}

Objet : Demande d'autorisation d'absence

Monsieur le Directeur,

J'ai l'honneur de solliciter de votre bienveillance une autorisation d'absence pour {{duree}}, pour le motif suivant : {{motif}}.

Je m'engage à rattraper, si nécessaire, les heures de travail correspondantes et à assurer la continuité de mes tâches.

Dans l'attente de votre accord, je vous prie d'agréer, Monsieur le Directeur, l'expression de mes salutations respectueuses.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
{{poste}}

إلى السيد المدير
{{entreprise}}

الموضوع: طلب رخصة غياب

سيدي المدير المحترم،

يشرفني أن ألتمس من سيادتكم الموافقة على منحي رخصة غياب لمدة {{duree}}، وذلك للسبب التالي: {{motif}}.

وألتزم بتعويض ساعات العمل المقابلة عند الاقتضاء، وبضمان استمرارية مهامي.

وفي انتظار موافقتكم، تفضلوا سيدي المدير بقبول عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite autorisation d\'absence algerie',
      'modèle demande autorisation absence travail',
      'exemple lettre autorisation d\'absence',
    ],
  },

  // ===========================================================================
  // ÉTUDES & BOURSE
  // ===========================================================================
  {
    id: 'bourse-universitaire',
    category: 'etudes-bourse',
    title_fr: 'Demande de bourse universitaire',
    title_ar: 'طلب منحة جامعية',
    short_description_fr:
      'Pour solliciter une bourse d\'études auprès des œuvres universitaires.',
    short_description_ar:
      'لطلب منحة دراسية من الخدمات الجامعية.',
    fields: [
      F.nom_prenom,
      F.adresse,
      {
        key: 'specialite',
        label_fr: 'Spécialité / filière',
        label_ar: 'التخصص / الشعبة',
        type: 'text',
        required: true,
      },
      {
        key: 'universite',
        label_fr: 'Université / établissement',
        label_ar: 'الجامعة / المؤسسة',
        type: 'text',
        required: true,
      },
      {
        key: 'annee',
        label_fr: 'Année universitaire',
        label_ar: 'السنة الجامعية',
        type: 'text',
        required: true,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
{{adresse}}

À Monsieur le Directeur des Œuvres Universitaires

Objet : Demande de bourse universitaire

Monsieur le Directeur,

J'ai l'honneur de solliciter de votre haute bienveillance l'octroi d'une bourse universitaire pour l'année universitaire {{annee}}.

Inscrit(e) en {{specialite}} à {{universite}}, je sollicite cette aide afin de poursuivre mes études dans de bonnes conditions. Vous trouverez ci-joint l'ensemble des pièces justificatives requises.

Dans l'attente d'une réponse favorable, je vous prie d'agréer, Monsieur le Directeur, l'expression de mes salutations distinguées.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
{{adresse}}

إلى السيد مدير الخدمات الجامعية

الموضوع: طلب منحة جامعية

سيدي المدير المحترم،

يشرفني أن ألتمس من سيادتكم الموقرة منحي منحة جامعية برسم السنة الجامعية {{annee}}.

وبصفتي مسجَّلاً في تخصص {{specialite}} بـ {{universite}}، ألتمس هذه المساعدة لمواصلة دراستي في ظروف حسنة. وتجدون رفقته جميع الوثائق الثبوتية المطلوبة.

وفي انتظار ردكم الإيجابي، تفضلوا سيدي المدير بقبول فائق عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite bourse universitaire algerie',
      'modèle demande de bourse algerie',
      'exemple lettre demande bourse étudiant',
    ],
  },

  {
    id: 'duplicata-diplome',
    category: 'etudes-bourse',
    title_fr: 'Demande de duplicata de diplôme / relevé de notes',
    title_ar: 'طلب نسخة ثانية من الشهادة / كشف النقاط',
    short_description_fr:
      'En cas de perte de votre diplôme ou relevé de notes, à adresser à votre établissement.',
    short_description_ar:
      'في حالة ضياع الشهادة أو كشف النقاط، يوجَّه إلى مؤسستك التعليمية.',
    fields: [
      F.nom_prenom,
      {
        key: 'specialite',
        label_fr: 'Spécialité / diplôme concerné',
        label_ar: 'التخصص / الشهادة المعنية',
        type: 'text',
        required: true,
      },
      {
        key: 'etablissement',
        label_fr: 'Établissement',
        label_ar: 'المؤسسة',
        type: 'text',
        required: true,
      },
      {
        key: 'annee',
        label_fr: 'Année d\'obtention',
        label_ar: 'سنة الحصول',
        type: 'text',
        required: true,
      },
      {
        key: 'motif',
        label_fr: 'Motif',
        label_ar: 'السبب',
        type: 'select',
        required: true,
        options: [
          { value: 'la perte', label_fr: 'la perte', label_ar: 'الضياع' },
          { value: 'la détérioration', label_fr: 'la détérioration', label_ar: 'التلف' },
        ],
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}

À Monsieur le Directeur
{{etablissement}}

Objet : Demande de duplicata de diplôme / relevé de notes

Monsieur le Directeur,

J'ai l'honneur de solliciter de votre haute bienveillance la délivrance d'un duplicata de mon diplôme / relevé de notes en {{specialite}}, obtenu en {{annee}}, suite à {{motif}} du document original.

Vous trouverez ci-joint les pièces justificatives nécessaires à l'appui de ma demande.

Dans l'attente d'une réponse favorable, je vous prie d'agréer, Monsieur le Directeur, l'expression de mes salutations distinguées.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}

إلى السيد مدير
{{etablissement}}

الموضوع: طلب نسخة ثانية من الشهادة / كشف النقاط

سيدي المدير المحترم،

يشرفني أن ألتمس من سيادتكم الموقرة منحي نسخة ثانية من شهادتي / كشف نقاطي في تخصص {{specialite}}، المتحصَّل عليها سنة {{annee}}، وذلك على إثر {{motif}} للوثيقة الأصلية.

وتجدون رفقته الوثائق الثبوتية اللازمة دعماً لطلبي.

وفي انتظار ردكم الإيجابي، تفضلوا سيدي المدير بقبول فائق عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite duplicata diplôme algerie',
      'modèle demande duplicata relevé de notes',
      'exemple demande copie diplôme perdu algerie',
    ],
  },

  {
    id: 'reinscription-universitaire',
    category: 'etudes-bourse',
    title_fr: 'Demande de réinscription universitaire',
    title_ar: 'طلب إعادة التسجيل الجامعي',
    short_description_fr:
      'Pour demander votre réinscription, notamment après une interruption d\'études.',
    short_description_ar:
      'لطلب إعادة تسجيلك، خاصة بعد انقطاع عن الدراسة.',
    fields: [
      F.nom_prenom,
      {
        key: 'matricule',
        label_fr: 'Numéro matricule (s\'il existe)',
        label_ar: 'رقم التسجيل (إن وُجد)',
        type: 'text',
        required: false,
      },
      {
        key: 'specialite',
        label_fr: 'Spécialité / niveau',
        label_ar: 'التخصص / المستوى',
        type: 'text',
        required: true,
      },
      {
        key: 'universite',
        label_fr: 'Université / faculté',
        label_ar: 'الجامعة / الكلية',
        type: 'text',
        required: true,
      },
      {
        key: 'annee',
        label_fr: 'Année universitaire',
        label_ar: 'السنة الجامعية',
        type: 'text',
        required: true,
      },
      {
        key: 'motif',
        label_fr: 'Motif (si interruption)',
        label_ar: 'السبب (في حالة الانقطاع)',
        type: 'textarea',
        required: false,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
Matricule : {{matricule}}

À Monsieur le Doyen de la Faculté
{{universite}}

Objet : Demande de réinscription universitaire

Monsieur le Doyen,

J'ai l'honneur de solliciter de votre haute bienveillance ma réinscription en {{specialite}} au titre de l'année universitaire {{annee}}.

{{motif}}

Vous trouverez ci-joint l'ensemble des documents requis. Je vous remercie de l'attention que vous porterez à ma demande.

Dans l'attente d'une réponse favorable, je vous prie d'agréer, Monsieur le Doyen, l'expression de mes salutations distinguées.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
رقم التسجيل: {{matricule}}

إلى السيد عميد الكلية
{{universite}}

الموضوع: طلب إعادة التسجيل الجامعي

سيدي العميد المحترم،

يشرفني أن ألتمس من سيادتكم الموقرة إعادة تسجيلي في تخصص {{specialite}} برسم السنة الجامعية {{annee}}.

{{motif}}

وتجدون رفقته جميع الوثائق المطلوبة. وأشكركم على حسن اهتمامكم بطلبي.

وفي انتظار ردكم الإيجابي، تفضلوا سيدي العميد بقبول فائق عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite réinscription universitaire algerie',
      'modèle demande de réinscription université',
      'exemple lettre reprise études algerie',
    ],
  },

  {
    id: 'logement-cite-universitaire',
    category: 'etudes-bourse',
    title_fr: 'Demande de logement en cité universitaire',
    title_ar: 'طلب سكن بالإقامة الجامعية',
    short_description_fr:
      'Pour obtenir une chambre en résidence universitaire auprès des œuvres universitaires.',
    short_description_ar:
      'للحصول على غرفة بالإقامة الجامعية من الخدمات الجامعية.',
    fields: [
      F.nom_prenom,
      {
        key: 'wilaya_origine',
        label_fr: 'Wilaya d\'origine',
        label_ar: 'ولاية الإقامة الأصلية',
        type: 'text',
        required: true,
      },
      {
        key: 'specialite',
        label_fr: 'Spécialité / niveau',
        label_ar: 'التخصص / المستوى',
        type: 'text',
        required: true,
      },
      {
        key: 'universite',
        label_fr: 'Université',
        label_ar: 'الجامعة',
        type: 'text',
        required: true,
      },
      {
        key: 'annee',
        label_fr: 'Année universitaire',
        label_ar: 'السنة الجامعية',
        type: 'text',
        required: true,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
Wilaya d'origine : {{wilaya_origine}}

À Monsieur le Directeur des Œuvres Universitaires

Objet : Demande de logement en cité universitaire

Monsieur le Directeur,

J'ai l'honneur de solliciter de votre haute bienveillance l'octroi d'un logement en cité universitaire au titre de l'année universitaire {{annee}}.

Originaire de la wilaya de {{wilaya_origine}} et inscrit(e) en {{specialite}} à {{universite}}, l'éloignement de mon domicile familial rend cet hébergement nécessaire à la poursuite de mes études.

Vous trouverez ci-joint les pièces justificatives requises. Dans l'attente d'une réponse favorable, je vous prie d'agréer, Monsieur le Directeur, l'expression de mes salutations distinguées.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
ولاية الإقامة الأصلية: {{wilaya_origine}}

إلى السيد مدير الخدمات الجامعية

الموضوع: طلب سكن بالإقامة الجامعية

سيدي المدير المحترم،

يشرفني أن ألتمس من سيادتكم الموقرة منحي سكناً بالإقامة الجامعية برسم السنة الجامعية {{annee}}.

وبصفتي من ولاية {{wilaya_origine}} ومسجَّلاً في تخصص {{specialite}} بـ {{universite}}، فإن بُعد مقر سكني العائلي يجعل هذا الإيواء ضرورياً لمواصلة دراستي.

وتجدون رفقته الوثائق الثبوتية المطلوبة. وفي انتظار ردكم الإيجابي، تفضلوا سيدي المدير بقبول فائق عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite logement cité universitaire algerie',
      'modèle demande chambre résidence universitaire',
      'exemple demande hébergement universitaire algerie',
    ],
  },

  // ===========================================================================
  // ÉTAT CIVIL & ADMINISTRATION
  // ===========================================================================
  {
    id: 'extrait-naissance',
    category: 'etat-civil-administration',
    title_fr: 'Demande d\'extrait de naissance (acte n°12)',
    title_ar: 'طلب شهادة ميلاد (العقد رقم 12)',
    short_description_fr:
      'À adresser au Président de l\'APC pour obtenir un extrait d\'acte de naissance.',
    short_description_ar:
      'يوجَّه إلى رئيس المجلس الشعبي البلدي للحصول على شهادة ميلاد.',
    fields: [
      F.nom_prenom,
      {
        key: 'date_naissance',
        label_fr: 'Date de naissance',
        label_ar: 'تاريخ الميلاد',
        type: 'date',
        required: true,
      },
      {
        key: 'lieu_naissance',
        label_fr: 'Lieu de naissance',
        label_ar: 'مكان الميلاد',
        type: 'text',
        required: true,
      },
      {
        key: 'commune',
        label_fr: 'Commune (APC concernée)',
        label_ar: 'البلدية المعنية',
        type: 'text',
        required: true,
      },
      {
        key: 'nombre',
        label_fr: 'Nombre de copies',
        label_ar: 'عدد النسخ',
        type: 'text',
        required: false,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
Né(e) le {{date_naissance}} à {{lieu_naissance}}

À Monsieur le Président de l'Assemblée Populaire Communale de {{commune}}

Objet : Demande d'extrait d'acte de naissance (n°12)

Monsieur le Président,

J'ai l'honneur de solliciter de votre haute bienveillance la délivrance de {{nombre}} extrait(s) de mon acte de naissance (acte n°12).

Je suis né(e) le {{date_naissance}} à {{lieu_naissance}}. Vous trouverez ci-joint les pièces nécessaires au traitement de ma demande.

Dans l'attente d'une suite favorable, je vous prie d'agréer, Monsieur le Président, l'expression de mes salutations distinguées.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
المولود(ة) بتاريخ {{date_naissance}} بـ {{lieu_naissance}}

إلى السيد رئيس المجلس الشعبي البلدي لبلدية {{commune}}

الموضوع: طلب شهادة ميلاد (العقد رقم 12)

سيدي الرئيس المحترم،

يشرفني أن ألتمس من سيادتكم الموقرة منحي {{nombre}} نسخة من شهادة ميلادي (العقد رقم 12).

وأنا من مواليد {{date_naissance}} بـ {{lieu_naissance}}. وتجدون رفقته الوثائق اللازمة لمعالجة طلبي.

وفي انتظار ردكم الإيجابي، تفضلوا سيدي الرئيس بقبول فائق عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite extrait de naissance algerie',
      'modèle demande acte de naissance n°12',
      'exemple demande extrait naissance APC algerie',
    ],
  },

  {
    id: 'casier-judiciaire',
    category: 'etat-civil-administration',
    title_fr: 'Demande d\'extrait de casier judiciaire',
    title_ar: 'طلب صحيفة السوابق العدلية',
    short_description_fr:
      'Pour obtenir un extrait de casier judiciaire (bulletin n°3) auprès du tribunal.',
    short_description_ar:
      'للحصول على صحيفة السوابق العدلية من المحكمة.',
    fields: [
      F.nom_prenom,
      {
        key: 'date_naissance',
        label_fr: 'Date de naissance',
        label_ar: 'تاريخ الميلاد',
        type: 'date',
        required: true,
      },
      {
        key: 'lieu_naissance',
        label_fr: 'Lieu de naissance',
        label_ar: 'مكان الميلاد',
        type: 'text',
        required: true,
      },
      {
        key: 'tribunal',
        label_fr: 'Tribunal concerné',
        label_ar: 'المحكمة المعنية',
        type: 'text',
        required: true,
      },
      {
        key: 'motif',
        label_fr: 'Motif',
        label_ar: 'السبب',
        type: 'text',
        required: true,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
Né(e) le {{date_naissance}} à {{lieu_naissance}}

À Monsieur le Procureur de la République près le {{tribunal}}

Objet : Demande d'extrait de casier judiciaire (bulletin n°3)

Monsieur le Procureur,

J'ai l'honneur de solliciter de votre haute bienveillance la délivrance d'un extrait de mon casier judiciaire (bulletin n°3), nécessaire pour {{motif}}.

Né(e) le {{date_naissance}} à {{lieu_naissance}}, vous trouverez ci-joint les pièces justificatives requises.

Dans l'attente d'une suite favorable, je vous prie d'agréer, Monsieur le Procureur, l'expression de ma haute considération.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
المولود(ة) بتاريخ {{date_naissance}} بـ {{lieu_naissance}}

إلى السيد وكيل الجمهورية لدى {{tribunal}}

الموضوع: طلب صحيفة السوابق العدلية (القسيمة رقم 3)

سيدي الوكيل المحترم،

يشرفني أن ألتمس من سيادتكم الموقرة منحي صحيفة السوابق العدلية (القسيمة رقم 3)، اللازمة من أجل {{motif}}.

وأنا من مواليد {{date_naissance}} بـ {{lieu_naissance}}، وتجدون رفقته الوثائق الثبوتية المطلوبة.

وفي انتظار ردكم الإيجابي، تفضلوا سيدي الوكيل بقبول فائق عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite casier judiciaire algerie',
      'modèle demande extrait casier judiciaire',
      'exemple demande bulletin n°3 algerie',
    ],
  },

  {
    id: 'certificat-residence',
    category: 'etat-civil-administration',
    title_fr: 'Demande de certificat de résidence',
    title_ar: 'طلب شهادة إقامة',
    short_description_fr:
      'À adresser au Président de l\'APC pour justifier votre lieu de résidence.',
    short_description_ar:
      'يوجَّه إلى رئيس المجلس الشعبي البلدي لإثبات مكان إقامتك.',
    fields: [
      F.nom_prenom,
      F.adresse,
      {
        key: 'commune',
        label_fr: 'Commune (APC concernée)',
        label_ar: 'البلدية المعنية',
        type: 'text',
        required: true,
      },
      {
        key: 'motif',
        label_fr: 'Motif',
        label_ar: 'السبب',
        type: 'text',
        required: true,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
{{adresse}}

À Monsieur le Président de l'Assemblée Populaire Communale de {{commune}}

Objet : Demande de certificat de résidence

Monsieur le Président,

J'ai l'honneur de solliciter de votre haute bienveillance la délivrance d'un certificat de résidence attestant que je réside à l'adresse suivante : {{adresse}}.

Ce document m'est nécessaire pour {{motif}}. Vous trouverez ci-joint les pièces justificatives requises.

Dans l'attente d'une suite favorable, je vous prie d'agréer, Monsieur le Président, l'expression de mes salutations distinguées.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
{{adresse}}

إلى السيد رئيس المجلس الشعبي البلدي لبلدية {{commune}}

الموضوع: طلب شهادة إقامة

سيدي الرئيس المحترم،

يشرفني أن ألتمس من سيادتكم الموقرة منحي شهادة إقامة تثبت أنني أقيم بالعنوان التالي: {{adresse}}.

وأحتاج هذه الوثيقة من أجل {{motif}}. وتجدون رفقته الوثائق الثبوتية المطلوبة.

وفي انتظار ردكم الإيجابي، تفضلوا سيدي الرئيس بقبول فائق عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite certificat de résidence algerie',
      'modèle demande certificat de résidence APC',
      'exemple lettre certificat résidence algerie',
    ],
  },

  {
    id: 'agrement-commercial',
    category: 'etat-civil-administration',
    title_fr: 'Demande d\'agrément (activité commerciale)',
    title_ar: 'طلب اعتماد (نشاط تجاري)',
    short_description_fr:
      'Pour solliciter un agrément en vue d\'exercer une activité commerciale réglementée.',
    short_description_ar:
      'لطلب اعتماد لممارسة نشاط تجاري خاضع للتنظيم.',
    fields: [
      F.nom_prenom,
      F.adresse,
      {
        key: 'activite',
        label_fr: 'Activité concernée',
        label_ar: 'النشاط المعني',
        type: 'text',
        required: true,
      },
      {
        key: 'lieu_activite',
        label_fr: 'Lieu d\'exercice',
        label_ar: 'مكان ممارسة النشاط',
        type: 'text',
        required: true,
      },
      {
        key: 'autorite',
        label_fr: 'Autorité destinataire',
        label_ar: 'الجهة المرسَل إليها',
        type: 'text',
        required: true,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
{{adresse}}

À {{autorite}}

Objet : Demande d'agrément pour l'exercice d'une activité commerciale

Monsieur,

J'ai l'honneur de solliciter de votre haute bienveillance l'octroi d'un agrément m'autorisant à exercer l'activité de {{activite}}, au lieu sis à {{lieu_activite}}.

Je m'engage à respecter l'ensemble des conditions et obligations réglementaires liées à cette activité. Vous trouverez ci-joint le dossier complet comportant les pièces justificatives exigées.

Dans l'attente d'une réponse favorable, je vous prie d'agréer, Monsieur, l'expression de ma haute considération.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
{{adresse}}

إلى {{autorite}}

الموضوع: طلب اعتماد لممارسة نشاط تجاري

سيدي المحترم،

يشرفني أن ألتمس من سيادتكم الموقرة منحي اعتماداً يرخّص لي بممارسة نشاط {{activite}}، بالمحل الكائن بـ {{lieu_activite}}.

وألتزم باحترام جميع الشروط والالتزامات التنظيمية المرتبطة بهذا النشاط. وتجدون رفقته الملف الكامل المتضمن الوثائق الثبوتية المطلوبة.

وفي انتظار ردكم الإيجابي، تفضلوا سيدي بقبول فائق عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite agrément commercial algerie',
      'modèle demande agrément activité algerie',
      'exemple demande agrément wali algerie',
    ],
  },

  {
    id: 'duplicata-carte-grise',
    category: 'etat-civil-administration',
    title_fr: 'Demande de duplicata de carte grise',
    title_ar: 'طلب نسخة ثانية من البطاقة الرمادية',
    short_description_fr:
      'En cas de perte ou de vol de la carte d\'immatriculation de votre véhicule.',
    short_description_ar:
      'في حالة ضياع أو سرقة بطاقة تسجيل مركبتك (البطاقة الرمادية).',
    fields: [
      F.nom_prenom,
      F.adresse,
      {
        key: 'daira',
        label_fr: 'Daïra',
        label_ar: 'الدائرة',
        type: 'text',
        required: true,
      },
      {
        key: 'immatriculation',
        label_fr: 'Numéro d\'immatriculation',
        label_ar: 'رقم تسجيل المركبة',
        type: 'text',
        required: true,
      },
      {
        key: 'motif',
        label_fr: 'Motif',
        label_ar: 'السبب',
        type: 'select',
        required: true,
        options: [
          { value: 'la perte', label_fr: 'la perte', label_ar: 'الضياع' },
          { value: 'le vol', label_fr: 'le vol', label_ar: 'السرقة' },
          { value: 'la détérioration', label_fr: 'la détérioration', label_ar: 'التلف' },
        ],
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
{{adresse}}

À Monsieur le Chef de Daïra de {{daira}}

Objet : Demande de duplicata de carte d'immatriculation (carte grise)

Monsieur le Chef de Daïra,

J'ai l'honneur de solliciter de votre haute bienveillance la délivrance d'un duplicata de la carte d'immatriculation de mon véhicule portant le numéro {{immatriculation}}, suite à {{motif}} du document original.

Vous trouverez ci-joint les pièces justificatives nécessaires à l'appui de ma demande.

Dans l'attente d'une suite favorable, je vous prie d'agréer, Monsieur le Chef de Daïra, l'expression de mes salutations distinguées.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
{{adresse}}

إلى السيد رئيس دائرة {{daira}}

الموضوع: طلب نسخة ثانية من بطاقة تسجيل المركبة (البطاقة الرمادية)

سيدي رئيس الدائرة المحترم،

يشرفني أن ألتمس من سيادتكم الموقرة منحي نسخة ثانية من بطاقة تسجيل مركبتي ذات الرقم {{immatriculation}}، وذلك على إثر {{motif}} للوثيقة الأصلية.

وتجدون رفقته الوثائق الثبوتية اللازمة دعماً لطلبي.

وفي انتظار ردكم الإيجابي، تفضلوا سيدي رئيس الدائرة بقبول فائق عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite duplicata carte grise algerie',
      'modèle demande carte grise perdue algerie',
      'exemple demande duplicata carte immatriculation',
    ],
  },

  // ===========================================================================
  // CONSULAT & DIASPORA
  // ===========================================================================
  {
    id: 'immatriculation-consulaire',
    category: 'consulat-diaspora',
    title_fr: 'Demande de carte d\'immatriculation consulaire',
    title_ar: 'طلب بطاقة التسجيل القنصلي',
    short_description_fr:
      'Pour vous immatriculer auprès du consulat d\'Algérie de votre lieu de résidence.',
    short_description_ar:
      'للتسجيل لدى القنصلية الجزائرية في بلد إقامتك.',
    fields: [
      F.nom_prenom,
      {
        key: 'date_naissance',
        label_fr: 'Date de naissance',
        label_ar: 'تاريخ الميلاد',
        type: 'date',
        required: true,
      },
      {
        key: 'adresse_etranger',
        label_fr: 'Adresse à l\'étranger',
        label_ar: 'العنوان بالخارج',
        type: 'text',
        required: true,
      },
      {
        key: 'consulat',
        label_fr: 'Consulat concerné',
        label_ar: 'القنصلية المعنية',
        type: 'text',
        required: true,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
Né(e) le {{date_naissance}}
{{adresse_etranger}}

À Monsieur le Consul Général
{{consulat}}

Objet : Demande de carte d'immatriculation consulaire

Monsieur le Consul Général,

J'ai l'honneur de solliciter de votre haute bienveillance mon immatriculation auprès de vos services ainsi que la délivrance d'une carte d'immatriculation consulaire.

Résidant à l'adresse suivante : {{adresse_etranger}}, vous trouverez ci-joint l'ensemble des pièces justificatives requises.

Dans l'attente d'une suite favorable, je vous prie d'agréer, Monsieur le Consul Général, l'expression de ma haute considération.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
المولود(ة) بتاريخ {{date_naissance}}
{{adresse_etranger}}

إلى السيد القنصل العام
{{consulat}}

الموضوع: طلب بطاقة التسجيل القنصلي

سيدي القنصل العام المحترم،

يشرفني أن ألتمس من سيادتكم الموقرة تسجيلي لدى مصالحكم ومنحي بطاقة التسجيل القنصلي.

وبصفتي مقيماً بالعنوان التالي: {{adresse_etranger}}، تجدون رفقته جميع الوثائق الثبوتية المطلوبة.

وفي انتظار ردكم الإيجابي، تفضلوا سيدي القنصل العام بقبول فائق عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite immatriculation consulaire algerie',
      'modèle demande carte consulaire algerie',
      'exemple lettre immatriculation consulat algerien',
    ],
  },

  {
    id: 'renouvellement-passeport',
    category: 'consulat-diaspora',
    title_fr: 'Demande de renouvellement de passeport biométrique',
    title_ar: 'طلب تجديد جواز السفر البيومتري',
    short_description_fr:
      'Pour renouveler votre passeport biométrique auprès du consulat ou de la daïra.',
    short_description_ar:
      'لتجديد جواز سفرك البيومتري لدى القنصلية أو الدائرة.',
    fields: [
      F.nom_prenom,
      {
        key: 'date_naissance',
        label_fr: 'Date de naissance',
        label_ar: 'تاريخ الميلاد',
        type: 'date',
        required: true,
      },
      {
        key: 'ancien_passeport',
        label_fr: 'N° de l\'ancien passeport (si connu)',
        label_ar: 'رقم الجواز القديم (إن وُجد)',
        type: 'text',
        required: false,
      },
      {
        key: 'autorite',
        label_fr: 'Autorité destinataire',
        label_ar: 'الجهة المرسَل إليها',
        type: 'text',
        required: true,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
Né(e) le {{date_naissance}}

À Monsieur {{autorite}}

Objet : Demande de renouvellement de passeport biométrique

Monsieur,

J'ai l'honneur de solliciter de votre haute bienveillance le renouvellement de mon passeport biométrique (ancien n° {{ancien_passeport}}), arrivé à expiration.

Vous trouverez ci-joint l'ensemble des pièces justificatives requises pour la constitution de mon dossier.

Dans l'attente d'une suite favorable, je vous prie d'agréer, Monsieur, l'expression de ma haute considération.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
المولود(ة) بتاريخ {{date_naissance}}

إلى السيد {{autorite}}

الموضوع: طلب تجديد جواز السفر البيومتري

سيدي المحترم،

يشرفني أن ألتمس من سيادتكم الموقرة تجديد جواز سفري البيومتري (رقمه القديم {{ancien_passeport}})، الذي انتهت صلاحيته.

وتجدون رفقته جميع الوثائق الثبوتية المطلوبة لتكوين ملفي.

وفي انتظار ردكم الإيجابي، تفضلوا سيدي بقبول فائق عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite renouvellement passeport algerie',
      'modèle demande passeport biométrique algerie',
      'exemple lettre renouvellement passeport consulat',
    ],
  },

  {
    id: 'procuration-consulaire',
    category: 'consulat-diaspora',
    title_fr: 'Demande de procuration consulaire',
    title_ar: 'طلب توكيل قنصلي',
    short_description_fr:
      'Pour donner procuration à une personne en Algérie via le consulat.',
    short_description_ar:
      'لتوكيل شخص في الجزائر عن طريق القنصلية.',
    fields: [
      F.nom_prenom,
      {
        key: 'mandataire',
        label_fr: 'Nom du mandataire (personne désignée)',
        label_ar: 'اسم الوكيل (الشخص المعيَّن)',
        type: 'text',
        required: true,
      },
      {
        key: 'objet_procuration',
        label_fr: 'Objet de la procuration',
        label_ar: 'موضوع التوكيل',
        type: 'textarea',
        required: true,
      },
      {
        key: 'consulat',
        label_fr: 'Consulat concerné',
        label_ar: 'القنصلية المعنية',
        type: 'text',
        required: true,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}

À Monsieur le Consul Général
{{consulat}}

Objet : Demande d'établissement d'une procuration consulaire

Monsieur le Consul Général,

J'ai l'honneur de solliciter de votre haute bienveillance l'établissement d'une procuration consulaire désignant Monsieur/Madame {{mandataire}} comme mon mandataire en Algérie.

Cette procuration a pour objet : {{objet_procuration}}.

Vous trouverez ci-joint les pièces justificatives requises. Dans l'attente d'une suite favorable, je vous prie d'agréer, Monsieur le Consul Général, l'expression de ma haute considération.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}

إلى السيد القنصل العام
{{consulat}}

الموضوع: طلب تحرير توكيل قنصلي

سيدي القنصل العام المحترم،

يشرفني أن ألتمس من سيادتكم الموقرة تحرير توكيل قنصلي يعيّن السيد(ة) {{mandataire}} وكيلاً عني في الجزائر.

ويهدف هذا التوكيل إلى: {{objet_procuration}}.

وتجدون رفقته الوثائق الثبوتية المطلوبة. وفي انتظار ردكم الإيجابي، تفضلوا سيدي القنصل العام بقبول فائق عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite procuration consulaire algerie',
      'modèle procuration consulat algerien',
      'exemple demande procuration consulaire',
    ],
  },

  {
    id: 'acte-mariage-consulat',
    category: 'consulat-diaspora',
    title_fr: 'Demande d\'acte de mariage / divorce auprès du consulat',
    title_ar: 'طلب عقد زواج / طلاق لدى القنصلية',
    short_description_fr:
      'Pour obtenir une copie de votre acte de mariage ou de divorce via le consulat.',
    short_description_ar:
      'للحصول على نسخة من عقد زواجك أو طلاقك عبر القنصلية.',
    fields: [
      F.nom_prenom,
      {
        key: 'type_acte',
        label_fr: 'Type d\'acte',
        label_ar: 'نوع العقد',
        type: 'select',
        required: true,
        options: [
          { value: 'mariage', label_fr: 'mariage', label_ar: 'زواج' },
          { value: 'divorce', label_fr: 'divorce', label_ar: 'طلاق' },
        ],
      },
      {
        key: 'conjoint',
        label_fr: 'Nom du conjoint',
        label_ar: 'اسم الزوج(ة)',
        type: 'text',
        required: true,
      },
      {
        key: 'consulat',
        label_fr: 'Consulat concerné',
        label_ar: 'القنصلية المعنية',
        type: 'text',
        required: true,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}

À Monsieur le Consul Général
{{consulat}}

Objet : Demande de copie d'acte de {{type_acte}}

Monsieur le Consul Général,

J'ai l'honneur de solliciter de votre haute bienveillance la délivrance d'une copie de mon acte de {{type_acte}}, me liant à Monsieur/Madame {{conjoint}}.

Vous trouverez ci-joint l'ensemble des pièces justificatives requises pour le traitement de ma demande.

Dans l'attente d'une suite favorable, je vous prie d'agréer, Monsieur le Consul Général, l'expression de ma haute considération.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}

إلى السيد القنصل العام
{{consulat}}

الموضوع: طلب نسخة من عقد {{type_acte}}

سيدي القنصل العام المحترم،

يشرفني أن ألتمس من سيادتكم الموقرة منحي نسخة من عقد {{type_acte}} الذي يربطني بالسيد(ة) {{conjoint}}.

وتجدون رفقته جميع الوثائق الثبوتية المطلوبة لمعالجة طلبي.

وفي انتظار ردكم الإيجابي، تفضلوا سيدي القنصل العام بقبول فائق عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite acte de mariage consulat algerie',
      'modèle demande acte mariage divorce consulat',
      'exemple demande copie acte mariage algerie',
    ],
  },

  // ===========================================================================
  // BANQUE & FINANCE
  // ===========================================================================
  {
    id: 'ouverture-compte-bancaire',
    category: 'banque-finance',
    title_fr: 'Demande d\'ouverture de compte bancaire',
    title_ar: 'طلب فتح حساب بنكي',
    short_description_fr:
      'Pour solliciter l\'ouverture d\'un compte courant ou d\'épargne auprès d\'une banque.',
    short_description_ar:
      'لطلب فتح حساب جارٍ أو حساب توفير لدى أحد البنوك.',
    fields: [
      F.nom_prenom,
      F.adresse,
      {
        key: 'banque',
        label_fr: 'Banque / agence',
        label_ar: 'البنك / الوكالة',
        type: 'text',
        required: true,
      },
      {
        key: 'type_compte',
        label_fr: 'Type de compte',
        label_ar: 'نوع الحساب',
        type: 'select',
        required: true,
        options: [
          { value: 'compte courant', label_fr: 'compte courant', label_ar: 'حساب جارٍ' },
          { value: 'compte épargne', label_fr: 'compte épargne', label_ar: 'حساب توفير' },
        ],
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
{{adresse}}

À Monsieur le Directeur de l'agence
{{banque}}

Objet : Demande d'ouverture de compte bancaire

Monsieur le Directeur,

J'ai l'honneur de solliciter de votre bienveillance l'ouverture d'un {{type_compte}} auprès de votre agence.

Vous trouverez ci-joint l'ensemble des pièces justificatives nécessaires à la constitution de mon dossier.

Dans l'attente d'une suite favorable, je vous prie d'agréer, Monsieur le Directeur, l'expression de mes salutations distinguées.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
{{adresse}}

إلى السيد مدير وكالة
{{banque}}

الموضوع: طلب فتح حساب بنكي

سيدي المدير المحترم،

يشرفني أن ألتمس من سيادتكم فتح {{type_compte}} لدى وكالتكم.

وتجدون رفقته جميع الوثائق الثبوتية اللازمة لتكوين ملفي.

وفي انتظار ردكم الإيجابي، تفضلوا سيدي المدير بقبول عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite ouverture compte bancaire algerie',
      'modèle demande ouverture compte banque algerie',
      'exemple lettre ouverture compte bancaire',
    ],
  },

  {
    id: 'demande-chequier',
    category: 'banque-finance',
    title_fr: 'Demande de chéquier',
    title_ar: 'طلب دفتر شيكات',
    short_description_fr:
      'Pour demander la délivrance d\'un chéquier rattaché à votre compte.',
    short_description_ar:
      'لطلب دفتر شيكات مرتبط بحسابك البنكي.',
    fields: [
      F.nom_prenom,
      {
        key: 'numero_compte',
        label_fr: 'Numéro de compte',
        label_ar: 'رقم الحساب',
        type: 'text',
        required: true,
      },
      {
        key: 'banque',
        label_fr: 'Banque / agence',
        label_ar: 'البنك / الوكالة',
        type: 'text',
        required: true,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
Compte n° {{numero_compte}}

À Monsieur le Directeur de l'agence
{{banque}}

Objet : Demande de chéquier

Monsieur le Directeur,

J'ai l'honneur de solliciter de votre bienveillance la délivrance d'un chéquier rattaché à mon compte n° {{numero_compte}} ouvert au sein de votre agence.

Je vous remercie de bien vouloir donner une suite favorable à ma demande et vous prie d'agréer, Monsieur le Directeur, l'expression de mes salutations distinguées.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
رقم الحساب: {{numero_compte}}

إلى السيد مدير وكالة
{{banque}}

الموضوع: طلب دفتر شيكات

سيدي المدير المحترم،

يشرفني أن ألتمس من سيادتكم تسليمي دفتر شيكات مرتبطاً بحسابي رقم {{numero_compte}} المفتوح لدى وكالتكم.

أشكركم على تلبية طلبي، وتفضلوا سيدي المدير بقبول عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite chéquier algerie',
      'modèle demande de chéquier banque algerie',
      'exemple lettre demande chéquier',
    ],
  },

  {
    id: 'attestation-revenu',
    category: 'banque-finance',
    title_fr: 'Demande d\'attestation de revenu / de crédit',
    title_ar: 'طلب شهادة دخل / وضعية قرض',
    short_description_fr:
      'Pour obtenir une attestation de revenu ou de situation de crédit auprès de votre banque.',
    short_description_ar:
      'للحصول على شهادة دخل أو وضعية قرض من بنكك.',
    fields: [
      F.nom_prenom,
      {
        key: 'numero_compte',
        label_fr: 'Numéro de compte',
        label_ar: 'رقم الحساب',
        type: 'text',
        required: true,
      },
      {
        key: 'banque',
        label_fr: 'Banque / agence',
        label_ar: 'البنك / الوكالة',
        type: 'text',
        required: true,
      },
      {
        key: 'motif',
        label_fr: 'Motif',
        label_ar: 'السبب',
        type: 'text',
        required: true,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
Compte n° {{numero_compte}}

À Monsieur le Directeur de l'agence
{{banque}}

Objet : Demande d'attestation de revenu / de situation de crédit

Monsieur le Directeur,

J'ai l'honneur de solliciter de votre bienveillance la délivrance d'une attestation relative à ma situation financière (revenu / crédit) auprès de votre agence, rattachée à mon compte n° {{numero_compte}}.

Ce document m'est nécessaire pour {{motif}}. Je vous remercie de l'attention que vous porterez à ma demande.

Veuillez agréer, Monsieur le Directeur, l'expression de mes salutations distinguées.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
رقم الحساب: {{numero_compte}}

إلى السيد مدير وكالة
{{banque}}

الموضوع: طلب شهادة دخل / وضعية قرض

سيدي المدير المحترم،

يشرفني أن ألتمس من سيادتكم منحي شهادة تتعلق بوضعيتي المالية (الدخل / القرض) لدى وكالتكم، والمرتبطة بحسابي رقم {{numero_compte}}.

وأحتاج هذه الوثيقة من أجل {{motif}}. وأشكركم على حسن اهتمامكم بطلبي.

وتفضلوا سيدي المدير بقبول عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite attestation de revenu algerie',
      'modèle demande attestation crédit banque',
      'exemple lettre attestation de revenu algerie',
    ],
  },

  // ===========================================================================
  // LOGEMENT
  // ===========================================================================
  {
    id: 'logement-social',
    category: 'logement',
    title_fr: 'Demande de logement social (AADL / LPA)',
    title_ar: 'طلب سكن اجتماعي (عدل / السكن الترقوي المدعم)',
    short_description_fr:
      'Pour solliciter l\'attribution d\'un logement social auprès des autorités locales.',
    short_description_ar:
      'لطلب الاستفادة من سكن اجتماعي لدى السلطات المحلية.',
    fields: [
      F.nom_prenom,
      F.adresse,
      {
        key: 'situation_familiale',
        label_fr: 'Situation familiale',
        label_ar: 'الحالة العائلية',
        type: 'text',
        required: true,
      },
      {
        key: 'autorite',
        label_fr: 'Autorité destinataire',
        label_ar: 'الجهة المرسَل إليها',
        type: 'text',
        required: true,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
{{adresse}}

À {{autorite}}

Objet : Demande de logement social

Monsieur,

J'ai l'honneur de solliciter de votre haute bienveillance le bénéfice d'un logement social.

Ma situation familiale ({{situation_familiale}}) et mes conditions de logement actuelles rendent cette demande nécessaire. Je ne suis propriétaire d'aucun bien immobilier et n'ai jamais bénéficié d'une aide de l'État au logement.

Vous trouverez ci-joint l'ensemble des pièces justificatives requises. Dans l'attente d'une suite favorable, je vous prie d'agréer, Monsieur, l'expression de ma haute considération.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
{{adresse}}

إلى {{autorite}}

الموضوع: طلب سكن اجتماعي

سيدي المحترم،

يشرفني أن ألتمس من سيادتكم الموقرة الاستفادة من سكن اجتماعي.

إن وضعيتي العائلية ({{situation_familiale}}) وظروف سكني الحالية تجعل هذا الطلب ضرورياً. كما أنني لا أملك أي عقار ولم أستفد من أي مساعدة من الدولة في مجال السكن.

وتجدون رفقته جميع الوثائق الثبوتية المطلوبة. وفي انتظار ردكم الإيجابي، تفضلوا سيدي بقبول فائق عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite logement social algerie',
      'modèle demande logement AADL LPA algerie',
      'exemple lettre demande logement social wali',
    ],
  },

  {
    id: 'mise-en-demeure-bailleur',
    category: 'logement',
    title_fr: 'Mise en demeure (litige locataire / bailleur)',
    title_ar: 'إعذار (نزاع بين المستأجر والمؤجِّر)',
    short_description_fr:
      'Pour mettre en demeure votre bailleur ou locataire de respecter ses obligations.',
    short_description_ar:
      'لإعذار المؤجِّر أو المستأجر بالوفاء بالتزاماته.',
    fields: [
      F.nom_prenom,
      F.adresse,
      {
        key: 'destinataire',
        label_fr: 'Nom du destinataire',
        label_ar: 'اسم المرسَل إليه',
        type: 'text',
        required: true,
      },
      {
        key: 'objet_litige',
        label_fr: 'Objet du litige',
        label_ar: 'موضوع النزاع',
        type: 'textarea',
        required: true,
      },
      {
        key: 'delai',
        label_fr: 'Délai accordé',
        label_ar: 'الأجل الممنوح',
        type: 'text',
        required: true,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
{{adresse}}

À Monsieur/Madame {{destinataire}}

Objet : Mise en demeure

Madame, Monsieur,

Par la présente, je vous mets en demeure de vous conformer à vos obligations concernant : {{objet_litige}}.

Je vous accorde un délai de {{delai}} à compter de la réception de la présente pour y remédier. À défaut, je me réserve le droit d'engager toute action légale utile pour préserver mes droits.

Dans l'attente d'une régularisation, je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
{{adresse}}

إلى السيد(ة) {{destinataire}}

الموضوع: إعذار

سيدتي، سيدي،

بموجب هذه الرسالة، أعذركم بالوفاء بالتزاماتكم المتعلقة بـ: {{objet_litige}}.

وأمنحكم أجلاً قدره {{delai}} ابتداءً من تاريخ استلام هذا الإعذار لتسوية الوضع. وفي حالة التقاعس، أحتفظ بحقي في اتخاذ كل إجراء قانوني لازم للحفاظ على حقوقي.

وفي انتظار التسوية، تفضلوا بقبول عبارات الاحترام.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'mise en demeure manuscrite bailleur algerie',
      'modèle mise en demeure locataire algerie',
      'exemple lettre mise en demeure loyer algerie',
    ],
  },

  // ===========================================================================
  // RÉCLAMATIONS
  // ===========================================================================
  {
    id: 'reclamation-commercant',
    category: 'reclamations',
    title_fr: 'Lettre de réclamation à un commerçant / prestataire',
    title_ar: 'رسالة شكوى إلى تاجر / مقدِّم خدمة',
    short_description_fr:
      'Pour réclamer suite à un produit défectueux ou un service non conforme.',
    short_description_ar:
      'للشكوى بسبب منتج معيب أو خدمة غير مطابقة.',
    fields: [
      F.nom_prenom,
      F.adresse,
      {
        key: 'destinataire',
        label_fr: 'Commerçant / prestataire',
        label_ar: 'التاجر / مقدِّم الخدمة',
        type: 'text',
        required: true,
      },
      {
        key: 'objet_reclamation',
        label_fr: 'Objet de la réclamation',
        label_ar: 'موضوع الشكوى',
        type: 'textarea',
        required: true,
      },
      {
        key: 'demande',
        label_fr: 'Ce que vous demandez',
        label_ar: 'ما تطالب به',
        type: 'text',
        required: true,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
{{adresse}}

À l'attention de {{destinataire}}

Objet : Réclamation

Madame, Monsieur,

Je me permets de vous adresser la présente réclamation concernant : {{objet_reclamation}}.

Cette situation n'étant pas conforme à mes attentes ni aux engagements convenus, je vous demande de bien vouloir procéder à {{demande}} dans les meilleurs délais.

À défaut de réponse satisfaisante de votre part, je me réserve le droit de saisir les services compétents de protection du consommateur.

Dans l'attente d'une suite favorable, je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
{{adresse}}

إلى عناية {{destinataire}}

الموضوع: شكوى

سيدتي، سيدي،

أتوجه إليكم بهذه الشكوى المتعلقة بـ: {{objet_reclamation}}.

وبما أن هذه الوضعية لا تتوافق مع ما كنت أنتظره ولا مع الالتزامات المتفق عليها، أطلب منكم القيام بـ {{demande}} في أقرب الآجال.

وفي حالة عدم تلقي رد مُرضٍ من جانبكم، أحتفظ بحقي في إخطار المصالح المختصة بحماية المستهلك.

وفي انتظار ردكم الإيجابي، تفضلوا بقبول عبارات الاحترام.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'modèle lettre de réclamation algerie',
      'exemple réclamation commerçant prestataire algerie',
      'lettre réclamation produit défectueux algerie',
    ],
  },

  {
    id: 'mise-en-demeure-generale',
    category: 'reclamations',
    title_fr: 'Mise en demeure générale',
    title_ar: 'إعذار عام',
    short_description_fr:
      'Pour sommer formellement une partie d\'exécuter ses obligations avant toute action.',
    short_description_ar:
      'لإنذار طرف رسمياً بتنفيذ التزاماته قبل أي إجراء قانوني.',
    fields: [
      F.nom_prenom,
      F.adresse,
      {
        key: 'destinataire',
        label_fr: 'Nom du destinataire',
        label_ar: 'اسم المرسَل إليه',
        type: 'text',
        required: true,
      },
      {
        key: 'objet',
        label_fr: 'Obligation non exécutée',
        label_ar: 'الالتزام غير المنفَّذ',
        type: 'textarea',
        required: true,
      },
      {
        key: 'delai',
        label_fr: 'Délai accordé',
        label_ar: 'الأجل الممنوح',
        type: 'text',
        required: true,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
{{adresse}}

À Monsieur/Madame {{destinataire}}

Objet : Mise en demeure

Madame, Monsieur,

Par la présente lettre, je vous mets en demeure d'exécuter sans délai l'obligation suivante : {{objet}}.

Je vous accorde un délai de {{delai}} à compter de la réception de cette mise en demeure pour vous exécuter. Passé ce délai, et sans réaction de votre part, je me verrai contraint(e) d'engager toutes les voies de droit nécessaires pour faire valoir mes droits.

Dans l'attente d'une régularisation, je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
{{adresse}}

إلى السيد(ة) {{destinataire}}

الموضوع: إعذار

سيدتي، سيدي،

بموجب هذه الرسالة، أعذركم بتنفيذ الالتزام التالي دون تأخير: {{objet}}.

وأمنحكم أجلاً قدره {{delai}} ابتداءً من تاريخ استلام هذا الإعذار للوفاء بالتزامكم. وبعد انقضاء هذا الأجل دون أي رد من جانبكم، سأجد نفسي مضطراً لاتخاذ كافة الإجراءات القانونية اللازمة للمطالبة بحقوقي.

وفي انتظار التسوية، تفضلوا بقبول عبارات الاحترام.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'modèle mise en demeure algerie',
      'exemple lettre mise en demeure algerie',
      'mise en demeure manuscrite paiement algerie',
    ],
  },

  // ===========================================================================
  // EMPLOI & CONCOURS (suite)
  // ===========================================================================
  {
    id: 'demande-stage',
    category: 'emploi-concours',
    title_fr: 'Demande de stage',
    title_ar: 'طلب تربّص',
    short_description_fr:
      'Pour solliciter un stage pratique ou de fin d\'études au sein d\'une entreprise ou administration.',
    short_description_ar:
      'لطلب تربّص تطبيقي أو تربّص نهاية الدراسة داخل مؤسسة أو إدارة.',
    fields: [
      F.nom_prenom,
      F.adresse,
      F.telephone,
      {
        key: 'organisme',
        label_fr: 'Organisme / entreprise',
        label_ar: 'المؤسسة المعنية',
        type: 'text',
        required: true,
      },
      {
        key: 'specialite',
        label_fr: 'Spécialité / niveau d\'études',
        label_ar: 'التخصص / المستوى الدراسي',
        type: 'text',
        required: true,
      },
      {
        key: 'duree',
        label_fr: 'Durée du stage',
        label_ar: 'مدة التربّص',
        type: 'text',
        required: true,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
{{adresse}}
{{telephone}}

À Monsieur le Directeur
{{organisme}}

Objet : Demande de stage

Monsieur le Directeur,

J'ai l'honneur de solliciter de votre haute bienveillance l'accueil au sein de votre organisme pour un stage d'une durée de {{duree}}.

Étudiant(e) en {{specialite}}, ce stage me permettrait de mettre en pratique mes connaissances et de me familiariser avec le milieu professionnel.

Vous trouverez ci-joint mon curriculum vitae ainsi que les documents requis. Je reste à votre disposition pour tout complément d'information.

Dans l'attente d'une réponse favorable, je vous prie d'agréer, Monsieur le Directeur, l'expression de mes salutations distinguées.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
{{adresse}}
{{telephone}}

إلى السيد المدير
{{organisme}}

الموضوع: طلب تربّص

سيدي المدير المحترم،

يشرفني أن ألتمس من سيادتكم الموقرة استقبالي داخل مؤسستكم لإجراء تربّص لمدة {{duree}}.

وبصفتي طالباً في تخصص {{specialite}}، فإن هذا التربّص سيمكّنني من تطبيق معارفي والتعرّف على الوسط المهني.

تجدون رفقته سيرتي الذاتية والوثائق المطلوبة، وأبقى رهن إشارتكم لأي معلومة إضافية.

وفي انتظار ردكم الإيجابي، تفضلوا سيدي المدير بقبول فائق عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite de stage algerie',
      'modèle demande de stage pratique algerie',
      'exemple lettre demande stage fin d\'études',
    ],
  },

  {
    id: 'titularisation',
    category: 'emploi-concours',
    title_fr: 'Demande de titularisation',
    title_ar: 'طلب الترسيم',
    short_description_fr:
      'À adresser à votre administration au terme de la période d\'essai ou de stage probatoire.',
    short_description_ar:
      'يوجَّه إلى إدارتك بعد انتهاء الفترة التجريبية أو التربّص.',
    fields: [
      F.nom_prenom,
      {
        key: 'grade',
        label_fr: 'Grade / poste',
        label_ar: 'الرتبة / المنصب',
        type: 'text',
        required: true,
      },
      {
        key: 'organisme',
        label_fr: 'Administration / établissement',
        label_ar: 'الإدارة / المؤسسة',
        type: 'text',
        required: true,
      },
      {
        key: 'date_recrutement',
        label_fr: 'Date de recrutement',
        label_ar: 'تاريخ التوظيف',
        type: 'date',
        required: true,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
{{grade}}

À Monsieur le Directeur
{{organisme}}

Objet : Demande de titularisation

Monsieur le Directeur,

J'ai l'honneur de solliciter de votre haute bienveillance ma titularisation au grade de {{grade}}, ayant accompli ma période de stage probatoire depuis mon recrutement en date du {{date_recrutement}}.

Je me suis efforcé(e) durant cette période de m'acquitter de mes fonctions avec sérieux et assiduité. Vous trouverez ci-joint les pièces justificatives nécessaires.

Dans l'attente d'une suite favorable, je vous prie d'agréer, Monsieur le Directeur, l'expression de mes salutations distinguées.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
{{grade}}

إلى السيد المدير
{{organisme}}

الموضوع: طلب الترسيم

سيدي المدير المحترم،

يشرفني أن ألتمس من سيادتكم الموقرة ترسيمي في رتبة {{grade}}، بعد إتمامي للفترة التجريبية منذ توظيفي بتاريخ {{date_recrutement}}.

ولقد حرصت طيلة هذه الفترة على أداء مهامي بجدية ومواظبة. وتجدون رفقته الوثائق الثبوتية اللازمة.

وفي انتظار ردكم الإيجابي، تفضلوا سيدي المدير بقبول فائق عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite titularisation algerie',
      'modèle demande de titularisation fonction publique',
      'exemple lettre titularisation après stage',
    ],
  },

  // ===========================================================================
  // ÉTUDES & BOURSE (suite)
  // ===========================================================================
  {
    id: 'attestation-scolarite',
    category: 'etudes-bourse',
    title_fr: 'Demande d\'attestation de scolarité',
    title_ar: 'طلب شهادة مدرسية',
    short_description_fr:
      'Pour justifier votre inscription en cours d\'études (allocations, transport, démarches diverses).',
    short_description_ar:
      'لإثبات تسجيلك ومتابعتك للدراسة (منح، نقل، إجراءات مختلفة).',
    fields: [
      F.nom_prenom,
      {
        key: 'specialite',
        label_fr: 'Niveau / spécialité',
        label_ar: 'المستوى / التخصص',
        type: 'text',
        required: true,
      },
      {
        key: 'etablissement',
        label_fr: 'Établissement',
        label_ar: 'المؤسسة',
        type: 'text',
        required: true,
      },
      {
        key: 'annee',
        label_fr: 'Année scolaire / universitaire',
        label_ar: 'السنة الدراسية / الجامعية',
        type: 'text',
        required: true,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}

À Monsieur le Directeur
{{etablissement}}

Objet : Demande d'attestation de scolarité

Monsieur le Directeur,

J'ai l'honneur de solliciter de votre bienveillance la délivrance d'une attestation de scolarité justifiant mon inscription en {{specialite}} au titre de l'année {{annee}}.

Je vous remercie de l'attention portée à ma demande et vous prie d'agréer, Monsieur le Directeur, l'expression de mes salutations distinguées.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}

إلى السيد المدير
{{etablissement}}

الموضوع: طلب شهادة مدرسية

سيدي المدير المحترم،

يشرفني أن ألتمس من سيادتكم منحي شهادة مدرسية تثبت تسجيلي في {{specialite}} برسم السنة {{annee}}.

أشكركم على اهتمامكم بطلبي، وتفضلوا سيدي المدير بقبول عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite attestation de scolarité algerie',
      'modèle demande attestation scolarité',
      'exemple lettre attestation de scolarité algerie',
    ],
  },

  {
    id: 'equivalence-diplome',
    category: 'etudes-bourse',
    title_fr: 'Demande d\'équivalence de diplôme',
    title_ar: 'طلب معادلة شهادة',
    short_description_fr:
      'Pour faire reconnaître l\'équivalence d\'un diplôme obtenu à l\'étranger.',
    short_description_ar:
      'للاعتراف بمعادلة شهادة متحصَّل عليها من الخارج.',
    fields: [
      F.nom_prenom,
      F.adresse,
      {
        key: 'diplome',
        label_fr: 'Diplôme concerné',
        label_ar: 'الشهادة المعنية',
        type: 'text',
        required: true,
      },
      {
        key: 'pays',
        label_fr: 'Pays / établissement d\'obtention',
        label_ar: 'بلد / مؤسسة الحصول على الشهادة',
        type: 'text',
        required: true,
      },
      {
        key: 'annee',
        label_fr: 'Année d\'obtention',
        label_ar: 'سنة الحصول',
        type: 'text',
        required: true,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
{{adresse}}

À Monsieur le Directeur concerné

Objet : Demande d'équivalence de diplôme

Monsieur le Directeur,

J'ai l'honneur de solliciter de votre haute bienveillance la reconnaissance de l'équivalence de mon diplôme de {{diplome}}, obtenu en {{annee}} auprès de {{pays}}.

Vous trouverez ci-joint l'ensemble des pièces justificatives requises pour l'étude de mon dossier.

Dans l'attente d'une réponse favorable, je vous prie d'agréer, Monsieur le Directeur, l'expression de ma haute considération.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
{{adresse}}

إلى السيد المدير المعني

الموضوع: طلب معادلة شهادة

سيدي المدير المحترم،

يشرفني أن ألتمس من سيادتكم الموقرة الاعتراف بمعادلة شهادتي في {{diplome}}، المتحصَّل عليها سنة {{annee}} من {{pays}}.

وتجدون رفقته جميع الوثائق الثبوتية المطلوبة لدراسة ملفي.

وفي انتظار ردكم الإيجابي، تفضلوا سيدي المدير بقبول فائق عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite équivalence de diplôme algerie',
      'modèle demande équivalence diplôme étranger',
      'exemple lettre équivalence de diplôme algerie',
    ],
  },

  // ===========================================================================
  // ÉTAT CIVIL & ADMINISTRATION (suite)
  // ===========================================================================
  {
    id: 'fiche-familiale',
    category: 'etat-civil-administration',
    title_fr: 'Demande de fiche familiale d\'état civil',
    title_ar: 'طلب شهادة عائلية',
    short_description_fr:
      'À adresser au Président de l\'APC pour obtenir une fiche familiale d\'état civil.',
    short_description_ar:
      'يوجَّه إلى رئيس المجلس الشعبي البلدي للحصول على شهادة عائلية.',
    fields: [
      F.nom_prenom,
      F.adresse,
      {
        key: 'commune',
        label_fr: 'Commune (APC concernée)',
        label_ar: 'البلدية المعنية',
        type: 'text',
        required: true,
      },
      {
        key: 'motif',
        label_fr: 'Motif',
        label_ar: 'السبب',
        type: 'text',
        required: true,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
{{adresse}}

À Monsieur le Président de l'Assemblée Populaire Communale de {{commune}}

Objet : Demande de fiche familiale d'état civil

Monsieur le Président,

J'ai l'honneur de solliciter de votre haute bienveillance la délivrance d'une fiche familiale d'état civil, document qui m'est nécessaire pour {{motif}}.

Vous trouverez ci-joint les pièces justificatives requises. Dans l'attente d'une suite favorable, je vous prie d'agréer, Monsieur le Président, l'expression de mes salutations distinguées.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
{{adresse}}

إلى السيد رئيس المجلس الشعبي البلدي لبلدية {{commune}}

الموضوع: طلب شهادة عائلية

سيدي الرئيس المحترم،

يشرفني أن ألتمس من سيادتكم الموقرة منحي شهادة عائلية، وهي وثيقة أحتاجها من أجل {{motif}}.

وتجدون رفقته الوثائق الثبوتية المطلوبة. وفي انتظار ردكم الإيجابي، تفضلوا سيدي الرئيس بقبول فائق عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite fiche familiale algerie',
      'modèle demande fiche familiale état civil',
      'exemple demande شهادة عائلية algerie',
    ],
  },

  {
    id: 'certificat-nationalite',
    category: 'etat-civil-administration',
    title_fr: 'Demande de certificat de nationalité algérienne',
    title_ar: 'طلب شهادة الجنسية الجزائرية',
    short_description_fr:
      'À adresser au tribunal pour obtenir un certificat de nationalité algérienne.',
    short_description_ar:
      'يوجَّه إلى المحكمة للحصول على شهادة الجنسية الجزائرية.',
    fields: [
      F.nom_prenom,
      {
        key: 'date_naissance',
        label_fr: 'Date de naissance',
        label_ar: 'تاريخ الميلاد',
        type: 'date',
        required: true,
      },
      {
        key: 'lieu_naissance',
        label_fr: 'Lieu de naissance',
        label_ar: 'مكان الميلاد',
        type: 'text',
        required: true,
      },
      {
        key: 'tribunal',
        label_fr: 'Tribunal concerné',
        label_ar: 'المحكمة المعنية',
        type: 'text',
        required: true,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
Né(e) le {{date_naissance}} à {{lieu_naissance}}

À Monsieur le Président du {{tribunal}}

Objet : Demande de certificat de nationalité algérienne

Monsieur le Président,

J'ai l'honneur de solliciter de votre haute bienveillance la délivrance d'un certificat de nationalité algérienne.

Né(e) le {{date_naissance}} à {{lieu_naissance}}, vous trouverez ci-joint l'ensemble des pièces justificatives requises à l'appui de ma demande.

Dans l'attente d'une suite favorable, je vous prie d'agréer, Monsieur le Président, l'expression de ma haute considération.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
المولود(ة) بتاريخ {{date_naissance}} بـ {{lieu_naissance}}

إلى السيد رئيس {{tribunal}}

الموضوع: طلب شهادة الجنسية الجزائرية

سيدي الرئيس المحترم،

يشرفني أن ألتمس من سيادتكم الموقرة منحي شهادة الجنسية الجزائرية.

وأنا من مواليد {{date_naissance}} بـ {{lieu_naissance}}، وتجدون رفقته جميع الوثائق الثبوتية المطلوبة دعماً لطلبي.

وفي انتظار ردكم الإيجابي، تفضلوا سيدي الرئيس بقبول فائق عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite certificat de nationalité algerie',
      'modèle demande certificat nationalité algérienne',
      'exemple demande شهادة الجنسية algerie',
    ],
  },

  {
    id: 'legalisation-signature',
    category: 'etat-civil-administration',
    title_fr: 'Demande de légalisation de signature',
    title_ar: 'طلب المصادقة على الإمضاء',
    short_description_fr:
      'À adresser à l\'APC pour faire légaliser votre signature sur un document.',
    short_description_ar:
      'يوجَّه إلى البلدية للمصادقة على إمضائك على وثيقة.',
    fields: [
      F.nom_prenom,
      F.adresse,
      {
        key: 'commune',
        label_fr: 'Commune (APC concernée)',
        label_ar: 'البلدية المعنية',
        type: 'text',
        required: true,
      },
      {
        key: 'document',
        label_fr: 'Document concerné',
        label_ar: 'الوثيقة المعنية',
        type: 'text',
        required: true,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
{{adresse}}

À Monsieur le Président de l'Assemblée Populaire Communale de {{commune}}

Objet : Demande de légalisation de signature

Monsieur le Président,

J'ai l'honneur de solliciter de votre bienveillance la légalisation de ma signature apposée sur le document suivant : {{document}}.

Je me présente muni(e) des pièces justificatives nécessaires. Je vous remercie de l'attention portée à ma demande et vous prie d'agréer, Monsieur le Président, l'expression de mes salutations distinguées.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
{{adresse}}

إلى السيد رئيس المجلس الشعبي البلدي لبلدية {{commune}}

الموضوع: طلب المصادقة على الإمضاء

سيدي الرئيس المحترم،

يشرفني أن ألتمس من سيادتكم المصادقة على إمضائي المثبَّت على الوثيقة التالية: {{document}}.

وأحضر مرفقاً بالوثائق الثبوتية اللازمة. أشكركم على اهتمامكم بطلبي، وتفضلوا سيدي الرئيس بقبول عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite légalisation de signature algerie',
      'modèle demande légalisation signature APC',
      'exemple lettre légalisation de signature algerie',
    ],
  },

  // ===========================================================================
  // BANQUE & FINANCE (suite)
  // ===========================================================================
  {
    id: 'carte-edahabia',
    category: 'banque-finance',
    title_fr: 'Demande de carte de paiement (Edahabia / CIB)',
    title_ar: 'طلب بطاقة دفع (الذهبية / CIB)',
    short_description_fr:
      'Pour demander une carte de paiement rattachée à votre compte (Algérie Poste ou banque).',
    short_description_ar:
      'لطلب بطاقة دفع مرتبطة بحسابك (بريد الجزائر أو البنك).',
    fields: [
      F.nom_prenom,
      {
        key: 'numero_compte',
        label_fr: 'Numéro de compte / CCP',
        label_ar: 'رقم الحساب / الحساب البريدي',
        type: 'text',
        required: true,
      },
      {
        key: 'agence',
        label_fr: 'Agence / bureau',
        label_ar: 'الوكالة / المكتب',
        type: 'text',
        required: true,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
Compte n° {{numero_compte}}

À Monsieur le Chef de l'agence
{{agence}}

Objet : Demande de carte de paiement

Monsieur,

J'ai l'honneur de solliciter de votre bienveillance la délivrance d'une carte de paiement rattachée à mon compte n° {{numero_compte}} ouvert auprès de votre agence.

Je vous remercie de bien vouloir donner une suite favorable à ma demande et vous prie d'agréer, Monsieur, l'expression de mes salutations distinguées.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
رقم الحساب: {{numero_compte}}

إلى السيد رئيس وكالة
{{agence}}

الموضوع: طلب بطاقة دفع

سيدي المحترم،

يشرفني أن ألتمس من سيادتكم تسليمي بطاقة دفع مرتبطة بحسابي رقم {{numero_compte}} المفتوح لدى وكالتكم.

أشكركم على تلبية طلبي، وتفضلوا سيدي بقبول عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite carte edahabia algerie',
      'modèle demande carte de paiement CIB algerie',
      'exemple lettre demande carte edahabia',
    ],
  },

  {
    id: 'cloture-compte',
    category: 'banque-finance',
    title_fr: 'Demande de clôture de compte',
    title_ar: 'طلب غلق حساب',
    short_description_fr:
      'Pour demander la fermeture définitive de votre compte bancaire ou postal.',
    short_description_ar:
      'لطلب الغلق النهائي لحسابك البنكي أو البريدي.',
    fields: [
      F.nom_prenom,
      {
        key: 'numero_compte',
        label_fr: 'Numéro de compte',
        label_ar: 'رقم الحساب',
        type: 'text',
        required: true,
      },
      {
        key: 'agence',
        label_fr: 'Banque / agence',
        label_ar: 'البنك / الوكالة',
        type: 'text',
        required: true,
      },
      {
        key: 'motif',
        label_fr: 'Motif',
        label_ar: 'السبب',
        type: 'text',
        required: false,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
Compte n° {{numero_compte}}

À Monsieur le Directeur de l'agence
{{agence}}

Objet : Demande de clôture de compte

Monsieur le Directeur,

J'ai l'honneur de solliciter de votre bienveillance la clôture de mon compte n° {{numero_compte}} ouvert auprès de votre agence, pour le motif suivant : {{motif}}.

Je vous prie de bien vouloir procéder à la régularisation du solde et à la remise des justificatifs de clôture.

Veuillez agréer, Monsieur le Directeur, l'expression de mes salutations distinguées.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
رقم الحساب: {{numero_compte}}

إلى السيد مدير وكالة
{{agence}}

الموضوع: طلب غلق حساب

سيدي المدير المحترم،

يشرفني أن ألتمس من سيادتكم غلق حسابي رقم {{numero_compte}} المفتوح لدى وكالتكم، وذلك للسبب التالي: {{motif}}.

وأرجو منكم تسوية الرصيد وتسليمي ما يثبت غلق الحساب.

وتفضلوا سيدي المدير بقبول عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite clôture de compte algerie',
      'modèle demande fermeture compte bancaire',
      'exemple lettre clôture de compte algerie',
    ],
  },

  // ===========================================================================
  // LOGEMENT (suite)
  // ===========================================================================
  {
    id: 'raccordement-energie',
    category: 'logement',
    title_fr: 'Demande de raccordement (électricité / gaz)',
    title_ar: 'طلب الربط بالشبكة (الكهرباء / الغاز)',
    short_description_fr:
      'Pour demander le raccordement de votre logement au réseau d\'électricité ou de gaz.',
    short_description_ar:
      'لطلب ربط مسكنك بشبكة الكهرباء أو الغاز.',
    fields: [
      F.nom_prenom,
      F.adresse,
      F.telephone,
      {
        key: 'type_raccordement',
        label_fr: 'Type de raccordement',
        label_ar: 'نوع الربط',
        type: 'select',
        required: true,
        options: [
          { value: 'électricité', label_fr: 'électricité', label_ar: 'الكهرباء' },
          { value: 'gaz', label_fr: 'gaz', label_ar: 'الغاز' },
          { value: 'électricité et gaz', label_fr: 'électricité et gaz', label_ar: 'الكهرباء والغاز' },
        ],
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
{{adresse}}
{{telephone}}

À Monsieur le Directeur de l'agence commerciale concernée

Objet : Demande de raccordement au réseau

Monsieur le Directeur,

J'ai l'honneur de solliciter de votre bienveillance le raccordement de mon logement, sis à {{adresse}}, au réseau de {{type_raccordement}}.

Vous trouverez ci-joint les pièces justificatives nécessaires (acte de propriété ou contrat de location, plan d'accès, etc.). Je reste à votre disposition pour toute visite technique.

Dans l'attente d'une suite favorable, je vous prie d'agréer, Monsieur le Directeur, l'expression de mes salutations distinguées.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
{{adresse}}
{{telephone}}

إلى السيد مدير الوكالة التجارية المعنية

الموضوع: طلب الربط بالشبكة

سيدي المدير المحترم،

يشرفني أن ألتمس من سيادتكم ربط مسكني الكائن بـ {{adresse}} بشبكة {{type_raccordement}}.

وتجدون رفقته الوثائق الثبوتية اللازمة (عقد الملكية أو عقد الإيجار، مخطط الوصول، إلخ). وأبقى رهن إشارتكم لأي معاينة تقنية.

وفي انتظار ردكم الإيجابي، تفضلوا سيدي المدير بقبول عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite raccordement électricité gaz algerie',
      'modèle demande raccordement sonelgaz',
      'exemple lettre demande de raccordement réseau algerie',
    ],
  },

  // ===========================================================================
  // RÉCLAMATIONS (suite)
  // ===========================================================================
  {
    id: 'reclamation-facture',
    category: 'reclamations',
    title_fr: 'Réclamation concernant une facture',
    title_ar: 'شكوى بخصوص فاتورة',
    short_description_fr:
      'Pour contester une facture jugée erronée ou excessive (énergie, téléphonie, eau).',
    short_description_ar:
      'للاعتراض على فاتورة تُعتبر خاطئة أو مبالغاً فيها (طاقة، هاتف، ماء).',
    fields: [
      F.nom_prenom,
      F.adresse,
      {
        key: 'reference',
        label_fr: 'Référence client / contrat',
        label_ar: 'مرجع الزبون / العقد',
        type: 'text',
        required: true,
      },
      {
        key: 'prestataire',
        label_fr: 'Prestataire concerné',
        label_ar: 'الجهة المعنية',
        type: 'text',
        required: true,
      },
      {
        key: 'objet_litige',
        label_fr: 'Détail de la réclamation',
        label_ar: 'تفاصيل الشكوى',
        type: 'textarea',
        required: true,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
{{adresse}}
Référence : {{reference}}

À Monsieur le Directeur de l'agence
{{prestataire}}

Objet : Réclamation concernant une facture

Monsieur le Directeur,

J'ai l'honneur d'attirer votre attention sur la facture qui m'a été adressée et qui appelle de ma part la réclamation suivante : {{objet_litige}}.

Je vous prie de bien vouloir procéder à la vérification de mon dossier et à la régularisation de ma situation dans les meilleurs délais.

Dans l'attente d'une réponse favorable, je vous prie d'agréer, Monsieur le Directeur, l'expression de mes salutations distinguées.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
{{adresse}}
المرجع: {{reference}}

إلى السيد مدير وكالة
{{prestataire}}

الموضوع: شكوى بخصوص فاتورة

سيدي المدير المحترم،

يشرفني أن ألفت انتباهكم إلى الفاتورة التي وُجِّهت إليّ والتي أبدي بشأنها الشكوى التالية: {{objet_litige}}.

وأرجو منكم التفضل بالتحقق من ملفي وتسوية وضعيتي في أقرب الآجال.

وفي انتظار ردكم الإيجابي، تفضلوا سيدي المدير بقبول عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'modèle réclamation facture sonelgaz algerie',
      'exemple lettre contestation facture algerie',
      'réclamation facture excessive algérie télécom',
    ],
  },

  // ===========================================================================
  // EMPLOI & CONCOURS (suite 2)
  // ===========================================================================
  {
    id: 'augmentation-salaire',
    category: 'emploi-concours',
    title_fr: 'Demande d\'augmentation de salaire',
    title_ar: 'طلب زيادة في الأجر',
    short_description_fr:
      'À adresser à votre employeur pour solliciter une revalorisation de votre rémunération.',
    short_description_ar:
      'يوجَّه إلى مستخدِمك لطلب إعادة تقييم أجرك.',
    fields: [
      F.nom_prenom,
      {
        key: 'poste',
        label_fr: 'Poste occupé',
        label_ar: 'المنصب',
        type: 'text',
        required: true,
      },
      {
        key: 'entreprise',
        label_fr: 'Entreprise / organisme',
        label_ar: 'المؤسسة',
        type: 'text',
        required: true,
      },
      {
        key: 'anciennete',
        label_fr: 'Ancienneté',
        label_ar: 'الأقدمية',
        type: 'text',
        required: true,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
{{poste}}

À Monsieur le Directeur
{{entreprise}}

Objet : Demande d'augmentation de salaire

Monsieur le Directeur,

J'ai l'honneur de solliciter de votre bienveillance une révision de ma rémunération au poste de {{poste}}, que j'occupe depuis {{anciennete}}.

Au regard de mon implication et de l'évolution de mes responsabilités, je me permets de soumettre cette requête à votre appréciation et reste à votre disposition pour en discuter.

Dans l'attente d'une suite favorable, je vous prie d'agréer, Monsieur le Directeur, l'expression de mes salutations respectueuses.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
{{poste}}

إلى السيد المدير
{{entreprise}}

الموضوع: طلب زيادة في الأجر

سيدي المدير المحترم،

يشرفني أن ألتمس من سيادتكم إعادة النظر في أجري في منصب {{poste}}، الذي أشغله منذ {{anciennete}}.

ونظراً لجدّيتي في العمل وتطوّر مسؤولياتي، أتقدّم بهذا الطلب لتقديركم، وأبقى رهن إشارتكم لمناقشته.

وفي انتظار ردكم الإيجابي، تفضلوا سيدي المدير بقبول عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite augmentation de salaire algerie',
      'modèle demande augmentation salaire',
      'exemple lettre demande augmentation de salaire',
    ],
  },

  {
    id: 'mise-retraite',
    category: 'emploi-concours',
    title_fr: 'Demande de mise à la retraite',
    title_ar: 'طلب الإحالة على التقاعد',
    short_description_fr:
      'Pour solliciter votre admission à la retraite auprès de votre employeur.',
    short_description_ar:
      'لطلب إحالتك على التقاعد لدى مستخدِمك.',
    fields: [
      F.nom_prenom,
      {
        key: 'poste',
        label_fr: 'Poste / grade',
        label_ar: 'المنصب / الرتبة',
        type: 'text',
        required: true,
      },
      {
        key: 'entreprise',
        label_fr: 'Employeur / administration',
        label_ar: 'المستخدِم / الإدارة',
        type: 'text',
        required: true,
      },
      {
        key: 'date_effet',
        label_fr: 'Date d\'effet souhaitée',
        label_ar: 'تاريخ السريان المطلوب',
        type: 'date',
        required: true,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
{{poste}}

À Monsieur le Directeur
{{entreprise}}

Objet : Demande de mise à la retraite

Monsieur le Directeur,

J'ai l'honneur de solliciter de votre haute bienveillance mon admission à la retraite à compter du {{date_effet}}, ayant réuni les conditions requises au titre de mon activité au poste de {{poste}}.

Je vous prie de bien vouloir engager les démarches nécessaires à la constitution de mon dossier de retraite. Vous trouverez ci-joint les pièces justificatives utiles.

Dans l'attente d'une suite favorable, je vous prie d'agréer, Monsieur le Directeur, l'expression de mes salutations distinguées.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
{{poste}}

إلى السيد المدير
{{entreprise}}

الموضوع: طلب الإحالة على التقاعد

سيدي المدير المحترم،

يشرفني أن ألتمس من سيادتكم الموقرة إحالتي على التقاعد ابتداءً من تاريخ {{date_effet}}، بعد استيفائي للشروط المطلوبة في إطار نشاطي بمنصب {{poste}}.

وأرجو منكم التفضل بمباشرة الإجراءات اللازمة لتكوين ملف تقاعدي. وتجدون رفقته الوثائق الثبوتية المفيدة.

وفي انتظار ردكم الإيجابي، تفضلوا سيدي المدير بقبول فائق عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite mise à la retraite algerie',
      'modèle demande de retraite algerie',
      'exemple lettre départ à la retraite',
    ],
  },

  // ===========================================================================
  // ÉTUDES & BOURSE (suite 2)
  // ===========================================================================
  {
    id: 'justification-absence-etudiant',
    category: 'etudes-bourse',
    title_fr: 'Demande de justification d\'absence (étudiant)',
    title_ar: 'طلب تبرير غياب (طالب)',
    short_description_fr:
      'Pour justifier une absence aux cours ou aux examens auprès de votre établissement.',
    short_description_ar:
      'لتبرير غياب عن الدروس أو الامتحانات لدى مؤسستك التعليمية.',
    fields: [
      F.nom_prenom,
      {
        key: 'specialite',
        label_fr: 'Spécialité / groupe',
        label_ar: 'التخصص / الفوج',
        type: 'text',
        required: true,
      },
      {
        key: 'etablissement',
        label_fr: 'Établissement',
        label_ar: 'المؤسسة',
        type: 'text',
        required: true,
      },
      {
        key: 'periode',
        label_fr: 'Période d\'absence',
        label_ar: 'فترة الغياب',
        type: 'text',
        required: true,
      },
      {
        key: 'motif',
        label_fr: 'Motif',
        label_ar: 'السبب',
        type: 'textarea',
        required: true,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
{{specialite}}

À Monsieur le Directeur
{{etablissement}}

Objet : Justification d'absence

Monsieur le Directeur,

J'ai l'honneur de porter à votre connaissance mon absence durant la période {{periode}}, pour le motif suivant : {{motif}}.

Vous trouverez ci-joint les justificatifs correspondants. Je vous prie de bien vouloir prendre en considération ma situation et de régulariser mon assiduité.

Veuillez agréer, Monsieur le Directeur, l'expression de mes salutations distinguées.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
{{specialite}}

إلى السيد المدير
{{etablissement}}

الموضوع: تبرير غياب

سيدي المدير المحترم،

يشرفني أن أحيطكم علماً بغيابي خلال الفترة {{periode}}، وذلك للسبب التالي: {{motif}}.

وتجدون رفقته الوثائق المبرِّرة لذلك. وأرجو منكم أخذ وضعيتي بعين الاعتبار وتسوية مواظبتي.

وتفضلوا سيدي المدير بقبول عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite justification d\'absence étudiant algerie',
      'modèle lettre justification absence université',
      'exemple justification d\'absence examen algerie',
    ],
  },

  {
    id: 'transfert-dossier-scolaire',
    category: 'etudes-bourse',
    title_fr: 'Demande de transfert de dossier scolaire / universitaire',
    title_ar: 'طلب تحويل الملف الدراسي / الجامعي',
    short_description_fr:
      'Pour transférer votre dossier vers un autre établissement ou une autre wilaya.',
    short_description_ar:
      'لتحويل ملفك إلى مؤسسة أخرى أو ولاية أخرى.',
    fields: [
      F.nom_prenom,
      {
        key: 'specialite',
        label_fr: 'Spécialité / niveau',
        label_ar: 'التخصص / المستوى',
        type: 'text',
        required: true,
      },
      {
        key: 'etablissement_actuel',
        label_fr: 'Établissement actuel',
        label_ar: 'المؤسسة الحالية',
        type: 'text',
        required: true,
      },
      {
        key: 'etablissement_souhaite',
        label_fr: 'Établissement souhaité',
        label_ar: 'المؤسسة المطلوبة',
        type: 'text',
        required: true,
      },
      {
        key: 'motif',
        label_fr: 'Motif',
        label_ar: 'السبب',
        type: 'textarea',
        required: true,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
{{specialite}}

À Monsieur le Directeur
{{etablissement_actuel}}

Objet : Demande de transfert de dossier

Monsieur le Directeur,

J'ai l'honneur de solliciter de votre haute bienveillance le transfert de mon dossier de {{etablissement_actuel}} vers {{etablissement_souhaite}}.

Cette demande est motivée par {{motif}}. Vous trouverez ci-joint les pièces justificatives requises.

Dans l'attente d'une suite favorable, je vous prie d'agréer, Monsieur le Directeur, l'expression de mes salutations distinguées.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
{{specialite}}

إلى السيد المدير
{{etablissement_actuel}}

الموضوع: طلب تحويل الملف

سيدي المدير المحترم،

يشرفني أن ألتمس من سيادتكم الموقرة تحويل ملفي من {{etablissement_actuel}} إلى {{etablissement_souhaite}}.

ويعود سبب هذا الطلب إلى {{motif}}. وتجدون رفقته الوثائق الثبوتية المطلوبة.

وفي انتظار ردكم الإيجابي، تفضلوا سيدي المدير بقبول فائق عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite transfert de dossier universitaire algerie',
      'modèle demande transfert dossier scolaire',
      'exemple lettre transfert universitaire algerie',
    ],
  },

  // ===========================================================================
  // ÉTAT CIVIL & ADMINISTRATION (suite 2)
  // ===========================================================================
  {
    id: 'duplicata-permis-conduire',
    category: 'etat-civil-administration',
    title_fr: 'Demande de duplicata de permis de conduire',
    title_ar: 'طلب نسخة ثانية من رخصة السياقة',
    short_description_fr:
      'En cas de perte, vol ou détérioration de votre permis de conduire.',
    short_description_ar:
      'في حالة ضياع أو سرقة أو تلف رخصة السياقة.',
    fields: [
      F.nom_prenom,
      F.adresse,
      {
        key: 'daira',
        label_fr: 'Daïra',
        label_ar: 'الدائرة',
        type: 'text',
        required: true,
      },
      {
        key: 'motif',
        label_fr: 'Motif',
        label_ar: 'السبب',
        type: 'select',
        required: true,
        options: [
          { value: 'la perte', label_fr: 'la perte', label_ar: 'الضياع' },
          { value: 'le vol', label_fr: 'le vol', label_ar: 'السرقة' },
          { value: 'la détérioration', label_fr: 'la détérioration', label_ar: 'التلف' },
        ],
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
{{adresse}}

À Monsieur le Chef de Daïra de {{daira}}

Objet : Demande de duplicata de permis de conduire

Monsieur le Chef de Daïra,

J'ai l'honneur de solliciter de votre haute bienveillance la délivrance d'un duplicata de mon permis de conduire, suite à {{motif}} du document original.

Vous trouverez ci-joint les pièces justificatives nécessaires à l'appui de ma demande.

Dans l'attente d'une suite favorable, je vous prie d'agréer, Monsieur le Chef de Daïra, l'expression de mes salutations distinguées.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
{{adresse}}

إلى السيد رئيس دائرة {{daira}}

الموضوع: طلب نسخة ثانية من رخصة السياقة

سيدي رئيس الدائرة المحترم،

يشرفني أن ألتمس من سيادتكم الموقرة منحي نسخة ثانية من رخصة السياقة، وذلك على إثر {{motif}} للوثيقة الأصلية.

وتجدون رفقته الوثائق الثبوتية اللازمة دعماً لطلبي.

وفي انتظار ردكم الإيجابي، تفضلوا سيدي رئيس الدائرة بقبول فائق عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite duplicata permis de conduire algerie',
      'modèle demande permis de conduire perdu',
      'exemple demande duplicata permis algerie',
    ],
  },

  {
    id: 'acte-deces',
    category: 'etat-civil-administration',
    title_fr: 'Demande d\'extrait d\'acte de décès',
    title_ar: 'طلب مستخرج عقد وفاة',
    short_description_fr:
      'À adresser au Président de l\'APC pour obtenir un extrait d\'acte de décès.',
    short_description_ar:
      'يوجَّه إلى رئيس المجلس الشعبي البلدي للحصول على مستخرج عقد وفاة.',
    fields: [
      F.nom_prenom,
      {
        key: 'defunt',
        label_fr: 'Nom du défunt',
        label_ar: 'اسم المتوفّى',
        type: 'text',
        required: true,
      },
      {
        key: 'date_deces',
        label_fr: 'Date du décès',
        label_ar: 'تاريخ الوفاة',
        type: 'date',
        required: true,
      },
      {
        key: 'commune',
        label_fr: 'Commune (APC concernée)',
        label_ar: 'البلدية المعنية',
        type: 'text',
        required: true,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}

À Monsieur le Président de l'Assemblée Populaire Communale de {{commune}}

Objet : Demande d'extrait d'acte de décès

Monsieur le Président,

J'ai l'honneur de solliciter de votre haute bienveillance la délivrance d'un extrait de l'acte de décès de feu(e) {{defunt}}, survenu le {{date_deces}}.

Vous trouverez ci-joint les pièces justificatives requises. Dans l'attente d'une suite favorable, je vous prie d'agréer, Monsieur le Président, l'expression de mes salutations distinguées.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}

إلى السيد رئيس المجلس الشعبي البلدي لبلدية {{commune}}

الموضوع: طلب مستخرج عقد وفاة

سيدي الرئيس المحترم،

يشرفني أن ألتمس من سيادتكم الموقرة منحي مستخرجاً من عقد وفاة المرحوم(ة) {{defunt}}، المتوفّى بتاريخ {{date_deces}}.

وتجدون رفقته الوثائق الثبوتية المطلوبة. وفي انتظار ردكم الإيجابي، تفضلوا سيدي الرئيس بقبول فائق عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite acte de décès algerie',
      'modèle demande extrait acte de décès',
      'exemple demande عقد وفاة algerie',
    ],
  },

  {
    id: 'passeport-national',
    category: 'etat-civil-administration',
    title_fr: 'Demande de passeport biométrique',
    title_ar: 'طلب جواز سفر بيومتري',
    short_description_fr:
      'À adresser au Chef de Daïra pour l\'établissement d\'un passeport biométrique en Algérie.',
    short_description_ar:
      'يوجَّه إلى رئيس الدائرة لاستخراج جواز سفر بيومتري في الجزائر.',
    fields: [
      F.nom_prenom,
      {
        key: 'date_naissance',
        label_fr: 'Date de naissance',
        label_ar: 'تاريخ الميلاد',
        type: 'date',
        required: true,
      },
      F.adresse,
      {
        key: 'daira',
        label_fr: 'Daïra',
        label_ar: 'الدائرة',
        type: 'text',
        required: true,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
Né(e) le {{date_naissance}}
{{adresse}}

À Monsieur le Chef de Daïra de {{daira}}

Objet : Demande de passeport biométrique

Monsieur le Chef de Daïra,

J'ai l'honneur de solliciter de votre haute bienveillance l'établissement d'un passeport biométrique à mon nom.

Vous trouverez ci-joint l'ensemble des pièces justificatives requises pour la constitution de mon dossier.

Dans l'attente d'une suite favorable, je vous prie d'agréer, Monsieur le Chef de Daïra, l'expression de mes salutations distinguées.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
المولود(ة) بتاريخ {{date_naissance}}
{{adresse}}

إلى السيد رئيس دائرة {{daira}}

الموضوع: طلب جواز سفر بيومتري

سيدي رئيس الدائرة المحترم،

يشرفني أن ألتمس من سيادتكم الموقرة استخراج جواز سفر بيومتري باسمي.

وتجدون رفقته جميع الوثائق الثبوتية المطلوبة لتكوين ملفي.

وفي انتظار ردكم الإيجابي، تفضلوا سيدي رئيس الدائرة بقبول فائق عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite passeport biométrique algerie',
      'modèle demande passeport daira algerie',
      'exemple demande de passeport algerie',
    ],
  },

  {
    id: 'rendez-vous-administratif',
    category: 'etat-civil-administration',
    title_fr: 'Demande de rendez-vous',
    title_ar: 'طلب موعد',
    short_description_fr:
      'Pour solliciter un rendez-vous auprès d\'une administration ou d\'un responsable.',
    short_description_ar:
      'لطلب موعد لدى إدارة أو مسؤول.',
    fields: [
      F.nom_prenom,
      F.telephone,
      {
        key: 'destinataire',
        label_fr: 'Service / responsable',
        label_ar: 'المصلحة / المسؤول',
        type: 'text',
        required: true,
      },
      {
        key: 'objet',
        label_fr: 'Objet du rendez-vous',
        label_ar: 'موضوع الموعد',
        type: 'textarea',
        required: true,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
{{telephone}}

À l'attention de {{destinataire}}

Objet : Demande de rendez-vous

Madame, Monsieur,

J'ai l'honneur de solliciter de votre bienveillance l'octroi d'un rendez-vous afin d'évoquer la question suivante : {{objet}}.

Je me tiens à votre disposition aux date et heure qui vous conviendront et vous remercie par avance de votre obligeance.

Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
{{telephone}}

إلى عناية {{destinataire}}

الموضوع: طلب موعد

سيدتي، سيدي،

يشرفني أن ألتمس من سيادتكم منحي موعداً لمناقشة المسألة التالية: {{objet}}.

وأبقى رهن إشارتكم في التاريخ والساعة اللذين يناسبانكم، وأشكركم مسبقاً على تفهّمكم.

وتفضلوا سيدتي، سيدي، بقبول عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite de rendez-vous algerie',
      'modèle lettre demande de rendez-vous administration',
      'exemple demande rendez-vous algerie',
    ],
  },

  // ===========================================================================
  // CONSULAT & DIASPORA (suite)
  // ===========================================================================
  {
    id: 'laissez-passer-consulaire',
    category: 'consulat-diaspora',
    title_fr: 'Demande de laissez-passer consulaire',
    title_ar: 'طلب جواز مرور قنصلي',
    short_description_fr:
      'Pour obtenir un titre de voyage provisoire auprès du consulat (perte de passeport, retour…).',
    short_description_ar:
      'للحصول على وثيقة سفر مؤقتة من القنصلية (ضياع جواز، عودة…).',
    fields: [
      F.nom_prenom,
      {
        key: 'date_naissance',
        label_fr: 'Date de naissance',
        label_ar: 'تاريخ الميلاد',
        type: 'date',
        required: true,
      },
      {
        key: 'consulat',
        label_fr: 'Consulat concerné',
        label_ar: 'القنصلية المعنية',
        type: 'text',
        required: true,
      },
      {
        key: 'motif',
        label_fr: 'Motif',
        label_ar: 'السبب',
        type: 'textarea',
        required: true,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
Né(e) le {{date_naissance}}

À Monsieur le Consul Général
{{consulat}}

Objet : Demande de laissez-passer consulaire

Monsieur le Consul Général,

J'ai l'honneur de solliciter de votre haute bienveillance la délivrance d'un laissez-passer consulaire me permettant de regagner l'Algérie, pour le motif suivant : {{motif}}.

Vous trouverez ci-joint l'ensemble des pièces justificatives requises. Dans l'attente d'une suite favorable, je vous prie d'agréer, Monsieur le Consul Général, l'expression de ma haute considération.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
المولود(ة) بتاريخ {{date_naissance}}

إلى السيد القنصل العام
{{consulat}}

الموضوع: طلب جواز مرور قنصلي

سيدي القنصل العام المحترم،

يشرفني أن ألتمس من سيادتكم الموقرة منحي جواز مرور قنصلي يمكّنني من العودة إلى الجزائر، وذلك للسبب التالي: {{motif}}.

وتجدون رفقته جميع الوثائق الثبوتية المطلوبة. وفي انتظار ردكم الإيجابي، تفضلوا سيدي القنصل العام بقبول فائق عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite laissez-passer consulaire algerie',
      'modèle demande laissez-passer consulat algerien',
      'exemple demande titre de voyage consulat algerie',
    ],
  },

  // ===========================================================================
  // BANQUE & FINANCE (suite 2)
  // ===========================================================================
  {
    id: 'releve-rib',
    category: 'banque-finance',
    title_fr: 'Demande de relevé d\'identité bancaire (RIB)',
    title_ar: 'طلب كشف الهوية البنكية (RIB)',
    short_description_fr:
      'Pour obtenir un RIB rattaché à votre compte auprès de votre banque ou d\'Algérie Poste.',
    short_description_ar:
      'للحصول على كشف الهوية البنكية المرتبط بحسابك من البنك أو بريد الجزائر.',
    fields: [
      F.nom_prenom,
      {
        key: 'numero_compte',
        label_fr: 'Numéro de compte / CCP',
        label_ar: 'رقم الحساب / الحساب البريدي',
        type: 'text',
        required: true,
      },
      {
        key: 'agence',
        label_fr: 'Agence / bureau',
        label_ar: 'الوكالة / المكتب',
        type: 'text',
        required: true,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
Compte n° {{numero_compte}}

À Monsieur le Chef de l'agence
{{agence}}

Objet : Demande de relevé d'identité bancaire (RIB)

Monsieur,

J'ai l'honneur de solliciter de votre bienveillance la délivrance d'un relevé d'identité bancaire (RIB) rattaché à mon compte n° {{numero_compte}} ouvert auprès de votre agence.

Je vous remercie de l'attention portée à ma demande et vous prie d'agréer, Monsieur, l'expression de mes salutations distinguées.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
رقم الحساب: {{numero_compte}}

إلى السيد رئيس وكالة
{{agence}}

الموضوع: طلب كشف الهوية البنكية (RIB)

سيدي المحترم،

يشرفني أن ألتمس من سيادتكم منحي كشف الهوية البنكية المرتبط بحسابي رقم {{numero_compte}} المفتوح لدى وكالتكم.

أشكركم على اهتمامكم بطلبي، وتفضلوا سيدي بقبول عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite RIB algerie',
      'modèle demande relevé identité bancaire',
      'exemple demande RIB banque algerie',
    ],
  },

  {
    id: 'attestation-affiliation-cnas',
    category: 'banque-finance',
    title_fr: 'Demande d\'attestation d\'affiliation (sécurité sociale)',
    title_ar: 'طلب شهادة الانتساب (الضمان الاجتماعي)',
    short_description_fr:
      'Pour justifier votre affiliation à la sécurité sociale (CNAS / CASNOS).',
    short_description_ar:
      'لإثبات انتسابك إلى الضمان الاجتماعي (الصندوق الوطني للضمان).',
    fields: [
      F.nom_prenom,
      {
        key: 'numero_assure',
        label_fr: 'Numéro d\'assuré social',
        label_ar: 'رقم التأمين الاجتماعي',
        type: 'text',
        required: true,
      },
      {
        key: 'agence',
        label_fr: 'Agence concernée',
        label_ar: 'الوكالة المعنية',
        type: 'text',
        required: true,
      },
      {
        key: 'motif',
        label_fr: 'Motif',
        label_ar: 'السبب',
        type: 'text',
        required: true,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
N° d'assuré : {{numero_assure}}

À Monsieur le Directeur de l'agence
{{agence}}

Objet : Demande d'attestation d'affiliation

Monsieur le Directeur,

J'ai l'honneur de solliciter de votre bienveillance la délivrance d'une attestation justifiant mon affiliation à la sécurité sociale sous le numéro {{numero_assure}}, document qui m'est nécessaire pour {{motif}}.

Je vous remercie de l'attention portée à ma demande et vous prie d'agréer, Monsieur le Directeur, l'expression de mes salutations distinguées.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
رقم التأمين: {{numero_assure}}

إلى السيد مدير وكالة
{{agence}}

الموضوع: طلب شهادة الانتساب

سيدي المدير المحترم،

يشرفني أن ألتمس من سيادتكم منحي شهادة تثبت انتسابي إلى الضمان الاجتماعي تحت رقم {{numero_assure}}، وهي وثيقة أحتاجها من أجل {{motif}}.

أشكركم على اهتمامكم بطلبي، وتفضلوا سيدي المدير بقبول عبارات الاحترام والتقدير.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'demande manuscrite attestation affiliation cnas algerie',
      'modèle demande attestation sécurité sociale',
      'exemple attestation affiliation casnos algerie',
    ],
  },

  // ===========================================================================
  // RÉCLAMATIONS (suite)
  // ===========================================================================
  {
    id: 'demande-remboursement',
    category: 'reclamations',
    title_fr: 'Demande de remboursement',
    title_ar: 'طلب استرجاع مبلغ',
    short_description_fr:
      'Pour réclamer le remboursement d\'une somme indûment versée ou d\'un service non rendu.',
    short_description_ar:
      'للمطالبة باسترجاع مبلغ دُفع دون وجه حق أو خدمة لم تُقدَّم.',
    fields: [
      F.nom_prenom,
      F.adresse,
      {
        key: 'destinataire',
        label_fr: 'Organisme / commerçant',
        label_ar: 'الجهة / التاجر',
        type: 'text',
        required: true,
      },
      {
        key: 'montant',
        label_fr: 'Montant concerné',
        label_ar: 'المبلغ المعني',
        type: 'text',
        required: true,
      },
      {
        key: 'objet',
        label_fr: 'Motif du remboursement',
        label_ar: 'سبب الاسترجاع',
        type: 'textarea',
        required: true,
      },
      F.ville,
      F.date,
    ],
    body_fr: `{{nom_prenom}}
{{adresse}}

À l'attention de {{destinataire}}

Objet : Demande de remboursement

Madame, Monsieur,

J'ai l'honneur de solliciter le remboursement de la somme de {{montant}}, pour le motif suivant : {{objet}}.

Je vous prie de bien vouloir procéder à ce remboursement dans les meilleurs délais. À défaut, je me réserve le droit de saisir les services compétents.

Dans l'attente d'une suite favorable, je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations.

Fait à {{ville}}, le {{date}}
{{nom_prenom}}
(Signature)`,
    body_ar: `{{nom_prenom}}
{{adresse}}

إلى عناية {{destinataire}}

الموضوع: طلب استرجاع مبلغ

سيدتي، سيدي،

يشرفني أن ألتمس استرجاع مبلغ قدره {{montant}}، وذلك للسبب التالي: {{objet}}.

وأرجو منكم التفضل بإجراء هذا الاسترجاع في أقرب الآجال. وفي حالة التقاعس، أحتفظ بحقي في إخطار المصالح المختصة.

وفي انتظار ردكم الإيجابي، تفضلوا بقبول عبارات الاحترام.

حُرّر بـ {{ville}} في {{date}}
{{nom_prenom}}
(الإمضاء)`,
    seo_keywords_fr: [
      'modèle demande de remboursement algerie',
      'exemple lettre demande remboursement',
      'demande manuscrite remboursement somme algerie',
    ],
  },
];

export const getTemplate = (id: string): LetterTemplate | undefined =>
  TEMPLATES.find((t) => t.id === id);

export const getTemplatesByCategory = (categoryId: string): LetterTemplate[] =>
  TEMPLATES.filter((t) => t.category === categoryId);
