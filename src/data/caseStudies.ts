export interface CaseStudyMetric {
  stat: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  resultsSummary: string;
  metrics: CaseStudyMetric[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  tags: string[];
  coverImage: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'kinetic-cycle-coaching',
    client: 'Kinetic Cycle Coaching',
    industry: 'Sports Performance & Fitness',
    title: 'Scaling YouTube Viewership & Global Subscriber Growth',
    summary:
      'Transco Digital built a dedicated video production and YouTube optimization pipeline that scaled Kinetic Cycle Coaching to over 1.7 million views and 20,000 global subscribers.',
    challenge:
      'Kinetic Cycle Coaching possessed world-class training methodology but struggled to achieve consistent video output, high-converting thumbnail packaging, and algorithmic reach on YouTube.',
    solution:
      'We implemented our YouTubeR Automation framework: structuring content pillars around high-intent cycling search queries, redesigning thumbnail graphics for high CTR, and producing 750+ optimized video assets.',
    resultsSummary:
      'Transformed the channel into a primary global organic lead generator for premium coaching packages.',
    metrics: [
      { stat: '1.7M+', label: 'Total Channel Views' },
      { stat: '20,000+', label: 'Subscribers Earned' },
      { stat: '750+', label: 'Videos Published & Managed' },
    ],
    testimonial: {
      quote:
        'Transco Digital transformed our content strategy. Their technical execution and YouTube framework gave us global reach we didn’t think was possible from Sri Lanka.',
      author: 'Coach Dan',
      role: 'Founder, Kinetic Cycle Coaching',
    },
    tags: ['YouTube Automation', 'Content Strategy', 'Video Production', 'SEO'],
    coverImage: '/hero-photo.jpg',
  },
  {
    slug: 'bankhill-educare',
    client: 'Bankhill Educare',
    industry: 'International Education & Logistics',
    title: 'Multi-Channel Brand Positioning & Lead Generation',
    summary:
      'Developing a modern brand strategy and lead generation funnel for Bankhill Educare, expanding student enrollment and regional reputation.',
    challenge:
      'Communicating complex international education pathways and institutional partnerships to students and parents across multiple regions in a clear, high-trust digital format.',
    solution:
      'Created targeted digital consultation roadmaps, high-converting campaign landing pages, and structured Meta/Google performance campaigns backed by social proof content.',
    resultsSummary:
      'Generated a steady stream of qualified student leads while elevating brand perception among institutional partners.',
    metrics: [
      { stat: '3.4×', label: 'Lead Volume Increase' },
      { stat: '45%', label: 'Reduction in Cost Per Lead' },
      { stat: '98%', label: 'Consultation Satisfaction' },
    ],
    testimonial: {
      quote:
        'The level of strategic clarity Transco Digital brought to our campaigns was unmatched. Their team feels like a true extension of our leadership.',
      author: 'Kushan De Silva',
      role: 'Director, Bankhill Educare',
    },
    tags: ['Digital Consultation', 'Paid Campaigns', 'Brand Strategy', 'Lead Gen'],
    coverImage: '/brand-psc.jpg',
  },
  {
    slug: 'carys-ecclesall',
    client: 'Carys Ecclesall',
    industry: 'Personal Brand & Executive Performance',
    title: 'Elevating Visual Identity & Social Presence for Global Reach',
    summary:
      'A complete visual identity redesign and Premium Social Content engine for executive coach and speaker Carys Ecclesall.',
    challenge:
      'Unifying personal brand messaging across platforms and delivering broadcast-quality video content to match executive client expectations.',
    solution:
      'Built a custom brand identity system, refined editorial typography, and deployed our Premium Social Content (PSC) workflow for multi-platform distribution.',
    resultsSummary:
      'Established an authoritative digital footprint that drove high-ticket corporate speaking invitations.',
    metrics: [
      { stat: '400K+', label: 'Organic Impressions' },
      { stat: '5×', label: 'Inbound Inquiries Growth' },
      { stat: '100%', label: 'Consistent Brand Asset System' },
    ],
    testimonial: {
      quote:
        'Working with Transco Digital elevated my brand to a corporate enterprise tier. The visual polish is extraordinary.',
      author: 'Carys Ecclesall',
      role: 'Executive Performance Coach',
    },
    tags: ['Branding', 'Premium Social Content', 'Personal Branding', 'Social Strategy'],
    coverImage: '/brand-youtuber.jpg',
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
