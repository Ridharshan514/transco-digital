export interface CaseStudyMetric {
  stat: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  market: string;
  timeline: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  resultsSummary: string;
  metrics: CaseStudyMetric[];
  deliveredArtifacts: string[];
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
    industry: 'Sports Performance & Creator Economy',
    market: 'United Kingdom & Global',
    timeline: '12-Month YouTube Automation',
    title: 'Scaling Global YouTube Audience to 1.7M+ Views & $180K+ Inbound Revenue',
    summary:
      'Transco Digital built a dedicated end-to-end video editing, 3D thumbnail packaging, and algorithmic YouTube distribution pipeline that transformed a boutique cycling coach into an internationally recognized authority.',
    challenge:
      'Kinetic Cycle Coaching possessed elite coaching methodologies but struggled with inconsistent publishing, sub-optimal thumbnail CTR (under 3.2%), and algorithmic stagnation across long-form YouTube algorithms.',
    solution:
      'We deployed our complete YouTubeR Automation engine: researching high-intent cycling search queries, engineering high-CTR 3D thumbnail graphics, implementing retention-curve pacing edits, and structuring automated lead-magnets.',
    resultsSummary:
      'Transformed the channel into the primary global organic lead generator, delivering steady high-ticket coaching inquiries across the UK, USA, and Europe.',
    metrics: [
      { stat: '1.7M+', label: 'Total Channel Views' },
      { stat: '20,000+', label: 'Subscribers Earned' },
      { stat: '750+', label: 'Videos Published & Managed' },
      { stat: '3.8×', label: 'Inbound Coaching Sales' },
    ],
    deliveredArtifacts: [
      'High-CTR 3D & Vector Thumbnail Testing Suite',
      'Retention Curve Pacing & Sound Design Pipeline',
      'Search-Intent SEO & Chapter Metadata Framework',
      'Automated Lead Magnet & Email Nurture Funnel',
    ],
    testimonial: {
      quote:
        'Transco Digital completely transformed our YouTube presence. Their technical editing execution and packaging gave us global reach we didn’t think was possible.',
      author: 'Coach Dan',
      role: 'Founder, Kinetic Cycle Coaching (UK)',
    },
    tags: ['YouTube Automation', 'Content Strategy', 'Video Production', 'SEO'],
    coverImage: '/hero-photo.jpg',
  },
  {
    slug: 'bankhill-educare',
    client: 'Bankhill Educare',
    industry: 'International Education & Logistics',
    market: 'Australia, UK & South Asia',
    timeline: '6-Month Paid Scale Sprint',
    title: '3.4× Student Enrollment Volume with 45% Lower Acquisition Cost',
    summary:
      'Developing a high-trust digital consultation roadmap, conversion-optimized landing pages, and multi-channel performance media architecture across Meta and Google for an international education pathway leader.',
    challenge:
      'Communicating complex international degree pathways and visa regulations to prospective students and parents across multiple overseas markets while overcoming high lead acquisition costs.',
    solution:
      'We designed targeted student persona funnels, built high-converting interactive course selector pages, and deployed video testimonial ad creatives with automated CRM lead routing.',
    resultsSummary:
      'Generated over 3,800 qualified student consultations within 6 months while slashing blended Cost Per Lead by 45%.',
    metrics: [
      { stat: '3.4×', label: 'Lead Volume Increase' },
      { stat: '45%', label: 'Reduction in Cost Per Lead' },
      { stat: '4.2×', label: 'Blended Paid ROAS' },
      { stat: '98%', label: 'Consultation Satisfaction' },
    ],
    deliveredArtifacts: [
      'Multi-Channel Meta & Google Ads Architecture',
      'High-Converting Course Landing Pages',
      'Video Testimonial Social Proof Ads',
      'Automated CRM Lead Qualification Flow',
    ],
    testimonial: {
      quote:
        'The level of strategic clarity and execution speed Transco Digital brought to our enrollment campaigns was extraordinary. They operate as a true extension of our team.',
      author: 'Kushan De Silva',
      role: 'Managing Director, Bankhill Educare',
    },
    tags: ['Paid Campaigns', 'Digital Consultation', 'Lead Gen', 'Brand Strategy'],
    coverImage: '/brand-psc.jpg',
  },
  {
    slug: 'carys-ecclesall',
    client: 'Carys Ecclesall',
    industry: 'Executive Performance & Personal Brand',
    market: 'United Kingdom & Middle East',
    timeline: '90-Day Rebrand & Content Sprint',
    title: 'Executive Visual Identity Overhaul Driving 5× Corporate Inbound Inquiries',
    summary:
      'A complete visual identity redesign and Premium Social Content (PSC) engine for executive leadership coach Carys Ecclesall, positioning her authority for Fortune 500 corporate keynotes.',
    challenge:
      'Fragmented personal brand messaging across platforms and lack of high-production video assets to match executive client expectations in the UK and UAE corporate sectors.',
    solution:
      'Crafted an editorial visual bible, refined luxury typography standards, and produced weekly broadcast-grade thought leadership carousels and micro-video cuts.',
    resultsSummary:
      'Established an authoritative digital footprint that directly resulted in 5x inbound corporate keynote invitations within 90 days.',
    metrics: [
      { stat: '400K+', label: 'Organic Impressions' },
      { stat: '5×', label: 'Inbound Keynote Inquiries' },
      { stat: '100%', label: 'Unified Brand Asset Bible' },
      { stat: '28%', label: 'Average Engagement Surge' },
    ],
    deliveredArtifacts: [
      'Executive Visual Identity & Typography System',
      'Weekly Thought Leadership Carousels',
      'Micro-Video Master Cuts for LinkedIn & IG',
      'Keynote Speaker Pitch Presentation Deck',
    ],
    testimonial: {
      quote:
        'Working with Transco Digital elevated my personal brand to a corporate enterprise tier. The visual polish and strategic messaging are second to none.',
      author: 'Carys Ecclesall',
      role: 'Executive Performance Coach & Keynote Speaker',
    },
    tags: ['Branding', 'Premium Social Content', 'Personal Branding', 'Social Strategy'],
    coverImage: '/brand-youtuber.jpg',
  },
  {
    slug: 'urban-pulse-growth',
    client: 'UrbanPulse E-Commerce',
    industry: 'Direct-to-Consumer & Lifestyle Retail',
    market: 'North America & Australia',
    timeline: '90-Day Viral TikTok Sprint',
    title: '4.8M+ TikTok Views & 5.2× Blended ROAS Through High-Velocity Short-Form',
    summary:
      'Transco Digital deployed our TikTok Makers Studio to produce 45 batch viral short-form assets monthly, paired with targeted Spark Ads media buying for an aggressive holiday scaling sprint.',
    challenge:
      'High creative fatigue on Meta ads and declining ROAS due to reliance on static imagery and traditional studio photography that failed on modern vertical feeds.',
    solution:
      'Engineered trend-jacked short-form video hooks, deployed native UGC creator formats with relatable problem-solution arcs, and scaled winning organic clips via TikTok Spark Ads.',
    resultsSummary:
      'Achieved a 38% 3-second hook retention rate and scaled monthly DTC revenues by 240% during the Q4 peak shopping quarter.',
    metrics: [
      { stat: '4.8M+', label: 'TikTok Video Impressions' },
      { stat: '5.2×', label: 'Blended Paid ROAS' },
      { stat: '38%', label: 'Avg 3-Second Hook Retention' },
      { stat: '+240%', label: 'Quarterly Revenue Lift' },
    ],
    deliveredArtifacts: [
      '45 Batch Monthly Vertical Video Assets',
      'Algorithmic Hook & Audio Testing Matrix',
      'TikTok Spark Ads Media Buying Strategy',
      'Real-Time Drop-Off Attribution Analytics',
    ],
    testimonial: {
      quote:
        'The TikTok Makers team at Transco cracked our creative bottleneck. Their speed in concepting, filming, and iterating hooks is unlike any agency we’ve partnered with.',
      author: 'Liam Bennett',
      role: 'Head of Growth, UrbanPulse',
    },
    tags: ['TikTok Makers', 'Paid Campaigns', 'E-Commerce', 'Short-Form Video'],
    coverImage: '/brand-tiktok.jpg',
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
