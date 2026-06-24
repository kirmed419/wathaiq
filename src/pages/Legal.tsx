import Header from '../components/Header';
import { useLang } from '../i18n';
import { useSeo } from '../lib/seo';

interface Section {
  h: string;
  p: string[];
}

const CONTENT: Record<'fr' | 'ar', { title: string; intro: string; sections: Section[]; official: string }> = {
  fr: {
    title: 'Mentions légales & avertissement',
    intro:
      'Veuillez lire attentivement les informations ci-dessous avant d\'utiliser Wathaiq DZ.',
    sections: [
      {
        h: 'Nature du service',
        p: [
          'Wathaiq DZ est un service d\'information indépendant et gratuit qui recense les documents et démarches administratives en Algérie, ainsi que des modèles de lettres. Il a un but purement informatif et pédagogique.',
          'Wathaiq DZ n\'est ni un service gouvernemental, ni un site officiel, et n\'est affilié à aucune administration, ministère ou institution publique algérienne. Il ne traite, ne reçoit et ne transmet aucune demande administrative.',
        ],
      },
      {
        h: 'Exactitude des informations',
        p: [
          'Les listes de pièces, coûts, délais et procédures sont fournis à titre indicatif et reflètent les sources officielles à la date de révision indiquée sur chaque fiche. Les exigences réelles peuvent varier selon la wilaya, la commune, le guichet ou votre situation personnelle, et peuvent évoluer sans préavis.',
          'Avant tout déplacement ou dépôt de dossier, vérifiez systématiquement les pièces exactes auprès de l\'organisme officiel compétent.',
        ],
      },
      {
        h: 'Limitation de responsabilité',
        p: [
          'L\'utilisation des informations et modèles est faite sous votre seule responsabilité. Les éditeurs de Wathaiq DZ ne sauraient être tenus responsables d\'un dossier refusé, d\'un retard, d\'une perte de temps ou d\'argent, ou de tout préjudice résultant d\'informations incomplètes, inexactes ou devenues obsolètes.',
          'Les modèles de lettres sont une aide à la rédaction et non des documents officiels. Certaines démarches imposent une lettre manuscrite.',
        ],
      },
      {
        h: 'Données personnelles & vie privée',
        p: [
          'Wathaiq DZ ne crée aucun compte et ne collecte aucune donnée personnelle sur un serveur. Les informations que vous saisissez (brouillons de lettres, progression des listes de documents) restent stockées localement, dans votre navigateur, sur votre appareil uniquement. Elles ne sont jamais envoyées à un tiers.',
          'L\'application fonctionne hors connexion et peut être installée sur votre téléphone.',
        ],
      },
      {
        h: 'Liens externes',
        p: [
          'Les liens vers les portails et sites officiels sont fournis pour votre commodité. Wathaiq DZ n\'est pas responsable du contenu, de la disponibilité ou des pratiques de ces sites tiers.',
        ],
      },
    ],
    official: 'Principaux portails officiels',
  },
  ar: {
    title: 'إشعار قانوني وتنبيه',
    intro: 'يرجى قراءة المعلومات التالية بعناية قبل استعمال «وثائق».',
    sections: [
      {
        h: 'طبيعة الخدمة',
        p: [
          '«وثائق» خدمة معلوماتية مستقلّة ومجانية تُحصي الوثائق والإجراءات الإدارية في الجزائر، إضافة إلى نماذج الرسائل. غرضها إعلامي وتثقيفي بحت.',
          '«وثائق» ليست خدمة حكومية ولا موقعاً رسمياً، ولا علاقة لها بأي إدارة أو وزارة أو مؤسسة عمومية جزائرية. وهي لا تعالج ولا تستقبل ولا تُرسل أي طلب إداري.',
        ],
      },
      {
        h: 'دقّة المعلومات',
        p: [
          'قوائم الوثائق والتكاليف والمدد والإجراءات مقدَّمة على سبيل الاستدلال وتعكس المصادر الرسمية إلى تاريخ المراجعة المذكور في كل بطاقة. وقد تختلف المتطلبات الفعلية حسب الولاية أو البلدية أو الشباك أو وضعيتك الشخصية، وقد تتغيّر دون إشعار مسبق.',
          'قبل أي تنقّل أو إيداع للملف، تحقّق دائماً من الوثائق الدقيقة لدى الجهة الرسمية المختصّة.',
        ],
      },
      {
        h: 'حدود المسؤولية',
        p: [
          'استعمال المعلومات والنماذج يتمّ على مسؤوليتك وحدك. لا يتحمّل ناشرو «وثائق» أي مسؤولية عن رفض ملف أو تأخّر أو ضياع وقت أو مال أو أي ضرر ناتج عن معلومات ناقصة أو غير دقيقة أو أصبحت متجاوَزة.',
          'نماذج الرسائل وسيلة مساعدة على التحرير وليست وثائق رسمية. وبعض الإجراءات تشترط رسالة بخط اليد.',
        ],
      },
      {
        h: 'المعطيات الشخصية والخصوصية',
        p: [
          'لا يُنشئ «وثائق» أي حساب ولا يجمع أي معطيات شخصية على خادم. المعلومات التي تُدخلها (مسوّدات الرسائل، تقدّم قوائم الوثائق) تبقى مخزَّنة محلياً في متصفّحك وعلى جهازك فقط، ولا تُرسَل أبداً إلى أي طرف ثالث.',
          'يعمل التطبيق دون اتصال بالإنترنت ويمكن تثبيته على هاتفك.',
        ],
      },
      {
        h: 'الروابط الخارجية',
        p: [
          'الروابط إلى البوابات والمواقع الرسمية مقدَّمة لتسهيل استعمالك. لا يتحمّل «وثائق» مسؤولية محتوى تلك المواقع الخارجية أو توفّرها أو ممارساتها.',
        ],
      },
    ],
    official: 'أهم البوابات الرسمية',
  },
};

const OFFICIAL_LINKS = [
  { label: 'Ministère de l\'Intérieur · interieur.gov.dz', url: 'https://interieur.gov.dz/' },
  { label: 'Passeport & CNIBE · passeport.interieur.gov.dz', url: 'https://passeport.interieur.gov.dz/' },
  { label: 'Acte de naissance 12S · demande12s.interieur.gov.dz', url: 'https://demande12s.interieur.gov.dz/' },
  { label: 'Ministère de la Justice · mjustice.gov.dz', url: 'https://www.mjustice.gov.dz/' },
  { label: 'Registre de commerce · cnrc.dz', url: 'https://sidjilcom.cnrc.dz/' },
  { label: 'Affaires étrangères / consulats · mfa.gov.dz', url: 'https://www.mfa.gov.dz/' },
  { label: 'Portail des services publics · bawabatic.dz', url: 'https://bawabatic.dz/' },
];

export default function Legal() {
  const { lang, t } = useLang();
  const rtl = lang === 'ar';
  const c = CONTENT[lang];

  useSeo({
    title: c.title,
    description:
      lang === 'ar'
        ? 'إشعار قانوني وتنبيه حول استعمال «وثائق»: طبيعة الخدمة، دقّة المعلومات، حدود المسؤولية، والخصوصية.'
        : 'Mentions légales et avertissement de Wathaiq DZ : nature du service, exactitude des informations, responsabilité et vie privée.',
    path: '/mentions-legales',
  });

  return (
    <div className="flex flex-1 flex-col">
      <Header showBack />
      <main className={`mx-auto w-full max-w-3xl flex-1 px-4 pb-16 pt-6 ${rtl ? 'font-arabic' : ''}`}>
        <h1 className="text-2xl font-extrabold text-slate-800">{c.title}</h1>
        <p className="mt-2 text-slate-600">{c.intro}</p>

        {c.sections.map((s, i) => (
          <section key={i} className="mt-6">
            <h2 className="mb-2 text-lg font-bold text-slate-800">{s.h}</h2>
            {s.p.map((para, j) => (
              <p key={j} className="mb-2 leading-relaxed text-slate-600">{para}</p>
            ))}
          </section>
        ))}

        <section className="mt-8">
          <h2 className="mb-3 text-lg font-bold text-slate-800">{c.official}</h2>
          <ul className="space-y-1.5">
            {OFFICIAL_LINKS.map((l, i) => (
              <li key={i}>
                <a
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-1.5 text-sm text-brand-700 hover:underline"
                >
                  <span aria-hidden className="mt-0.5">🔗</span>
                  <span>{l.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-8 text-center text-xs text-slate-400">{t('footer_note')}</p>
      </main>
    </div>
  );
}
