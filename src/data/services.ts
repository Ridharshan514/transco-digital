export interface ServiceStep {
  step: string;
  title: string;
  desc: string;
}

export interface ServiceResult {
  stat: string;
  label: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: string;
  accentColor: string;
  forWho: string[];
  steps: ServiceStep[];
  results: ServiceResult[];
  deliverables: string[];
}

export const services: Service[] = [
  {
    slug: 'digital-consultation',
    title: 'Digital Consultation',
    shortTitle: 'Consultation',
    tagline: 'Strategy that moves the needle.',
    description:
      'We map your digital landscape and build a roadmap tailored to your market, audience, and growth stage.',
    longDescription:
      'Every great campaign begins with clarity. Our consultation process digs deep into your brand positioning, competitive landscape, audience psychology, and channel opportunities — then translates it into a concrete, prioritised action plan your team can actually execute.',
    icon: 'Compass',
    accentColor: '#4F46E5',
    forWho: [
      'Brands entering new markets',
      'Businesses without a defined digital strategy',
      'Companies looking to audit and reset their online presence',
      'Founders preparing for a growth phase',
    ],
    steps: [
      { step: '01', title: 'Discovery', desc: 'Deep-dive into your brand, competitors, and audience. We audit your current digital footprint and identify the biggest leverage points.' },
      { step: '02', title: 'Strategy Design', desc: 'We build a channel-by-channel roadmap — organic, paid, content, community — tailored to your 90-day and 12-month goals.' },
      { step: '03', title: 'Handoff & Activation', desc: 'You receive a documented strategy deck, priority matrix, and a live briefing session. Optionally, we activate it with you.' },
    ],
    results: [
      { stat: '200+', label: 'Brands consulted' },
      { stat: '94%', label: 'Client retention rate' },
      { stat: '3.2×', label: 'Average ROI uplift post-strategy' },
    ],
    deliverables: [
      'Digital audit report',
      'Competitor landscape map',
      'Audience persona documentation',
      'Channel strategy & priority matrix',
      '90-day action roadmap',
      'KPI framework & measurement plan',
    ],
  },
  {
    slug: 'branding',
    title: 'Branding',
    shortTitle: 'Branding',
    tagline: 'Identity that earns attention.',
    description:
      'We craft visual and verbal identities that are distinctive, memorable, and built to scale across every touchpoint.',
    longDescription:
      'Branding is not a logo. It\'s the total impression your brand leaves on every person who encounters it. We build brand systems — from naming and positioning to visual identity, tone of voice, and brand guidelines — that ensure every interaction reinforces the same powerful idea.',
    icon: 'Palette',
    accentColor: '#EC4899',
    forWho: [
      'Startups building their identity from scratch',
      'Established brands that have outgrown their visual identity',
      'Companies launching sub-brands or product lines',
      'Businesses entering a new audience segment',
    ],
    steps: [
      { step: '01', title: 'Brand Discovery', desc: 'We run collaborative workshops to uncover your brand\'s core purpose, personality, values, and the emotional territory you want to own.' },
      { step: '02', title: 'Identity Creation', desc: 'Logo system, typography, color palette, iconography, photography direction — crafted to be distinctive and infinitely scalable.' },
      { step: '03', title: 'Brand Guidelines', desc: 'A comprehensive brand bible your entire team can use, covering every use case from social media to print to pitch decks.' },
    ],
    results: [
      { stat: '50+', label: 'Brands designed' },
      { stat: '4.8★', label: 'Average client satisfaction' },
      { stat: '2×', label: 'Average engagement lift post-rebrand' },
    ],
    deliverables: [
      'Brand strategy & positioning statement',
      'Logo system (primary, secondary, mark)',
      'Color palette & typography system',
      'Brand guidelines document',
      'Social media templates',
      'Stationery & collateral design',
    ],
  },
  {
    slug: 'content-marketing',
    title: 'Content Marketing',
    shortTitle: 'Content',
    tagline: 'Content that compounds.',
    description:
      'We build and operate content engines — from YouTube channels to social media — that grow your audience and drive leads.',
    longDescription:
      'Content is the highest-leverage digital asset you can build. Unlike paid ads, great content compounds — it keeps working for you months and years after it\'s published. We operate full-service content programs: strategy, production, publishing, and optimisation, at the scale and consistency that actually moves audiences.',
    icon: 'FileText',
    accentColor: '#10B981',
    forWho: [
      'Brands wanting to build owned media audiences',
      'YouTube channels seeking growth and monetisation',
      'Companies that publish inconsistently and want a system',
      'Businesses in competitive spaces where education builds trust',
    ],
    steps: [
      { step: '01', title: 'Content Strategy', desc: 'Topic research, content pillars, publishing cadence, SEO mapping, and format selection — built around what your audience actually searches for.' },
      { step: '02', title: 'Production', desc: 'We handle scripting, filming direction, editing, thumbnail design, and copy. Our in-house and networked teams produce at scale without sacrificing quality.' },
      { step: '03', title: 'Optimise & Amplify', desc: 'Every piece is optimised for discovery (SEO, YouTube algorithm, social distribution) and repurposed across platforms to maximise reach.' },
    ],
    results: [
      { stat: '3M+', label: 'Views generated for clients' },
      { stat: '20K+', label: 'Subscribers built collectively' },
      { stat: '750+', label: 'Videos produced' },
    ],
    deliverables: [
      'Content strategy & editorial calendar',
      'Monthly video production (quantity per tier)',
      'Thumbnail design system',
      'SEO-optimised titles, descriptions & tags',
      'Analytics & performance reporting',
      'Content repurposing (Shorts, Reels, clips)',
    ],
  },
  {
    slug: 'paid-campaigns',
    title: 'Paid Campaigns',
    shortTitle: 'Paid Media',
    tagline: 'Every rupee, every dollar, maximised.',
    description:
      'Performance-driven paid advertising across Meta, Google, TikTok, and YouTube — engineered for measurable returns.',
    longDescription:
      'Paid media done right is a growth multiplier. Done wrong, it\'s an expensive lesson. We combine deep platform expertise, creative excellence, and ruthless data analysis to build campaigns that acquire customers profitably — then scale them systematically as performance improves.',
    icon: 'TrendingUp',
    accentColor: '#F59E0B',
    forWho: [
      'E-commerce brands wanting to scale profitably',
      'Lead generation businesses (education, real estate, SaaS)',
      'Companies launching new products or entering new markets',
      'Brands with an existing paid program they want to improve',
    ],
    steps: [
      { step: '01', title: 'Audit & Architecture', desc: 'We audit your existing accounts (or build from scratch), structure campaigns by funnel stage, and set up precise tracking and attribution.' },
      { step: '02', title: 'Creative & Launch', desc: 'Platform-native creative (static, video, carousel), audience architecture, and launch — with a testing framework built in from day one.' },
      { step: '03', title: 'Optimise & Scale', desc: 'Weekly optimisation cycles: kill what doesn\'t work, scale what does. We move budget aggressively to your best performers.' },
    ],
    results: [
      { stat: '4.1×', label: 'Average ROAS across accounts' },
      { stat: '60%', label: 'Average CPL reduction in 90 days' },
      { stat: '$2M+', label: 'Ad spend managed' },
    ],
    deliverables: [
      'Account audit & restructure',
      'Campaign architecture by funnel stage',
      'Creative production & testing',
      'Weekly performance reports',
      'Monthly strategy review',
      'Conversion tracking & attribution setup',
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
