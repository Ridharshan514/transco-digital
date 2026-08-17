export interface BrandPillar {
  title: string;
  desc: string;
}

export interface BrandMetric {
  stat: string;
  label: string;
}

export interface Brand {
  slug: string;
  name: string;
  tagline: string;
  subtitle: string;
  description: string;
  longDescription: string;
  accentColor: string;
  heroImage: string;
  stats: BrandMetric[];
  pillars: BrandPillar[];
  highlights: string[];
}

export const brands: Brand[] = [
  {
    slug: 'premium-social-content',
    name: 'Premium Social Content',
    tagline: 'High-production short-form & social media creative.',
    subtitle: 'PSC by Transco Digital',
    description:
      'Engineered for maximum retention, virality, and brand authority across TikTok, Instagram, and Shorts.',
    longDescription:
      'Premium Social Content (PSC) is our specialized creative studio dedicated to producing high-impact, broadcast-quality short-form video and content systems. We combine platform algorithm insights with cinematic production standards to turn passive scrollers into hyper-engaged brand advocates.',
    accentColor: '#FF6A00',
    heroImage: '/brand-psc.jpg',
    stats: [
      { stat: '10M+', label: 'Total Organic Views' },
      { stat: '3.5×', label: 'Engagement Rate vs Industry Avg' },
      { stat: '150+', label: 'Campaigns Launched' },
    ],
    pillars: [
      { title: 'Retention Engineering', desc: 'Every second is scripted, cut, and paced based on audience drop-off analytics to maximize video completion rate.' },
      { title: 'Cinematic Aesthetics', desc: 'Studio lighting, crisp color grading, and broadcast-grade audio elevate your brand above standard mobile clips.' },
      { title: 'Rapid Iteration', desc: 'We launch variations, analyze early performance metrics within 24 hours, and scale winning creative angles.' },
    ],
    highlights: [
      'End-to-end video scriptwriting & concepting',
      'Studio & location multi-cam video shooting',
      'Dynamic typography, motion graphics & sound design',
      'Multi-platform re-formatting (9:16, 4:5, 1:1)',
      'Creator & talent sourcing & management',
    ],
  },
  {
    slug: 'youtuber-automation',
    name: 'YouTubeR Automation',
    tagline: 'Turnkey channel growth & video asset management.',
    subtitle: 'YouTube Production Engine',
    description:
      'From channel architecture to weekly video production and monetization optimization.',
    longDescription:
      'YouTubeR Automation is Transco Digital’s end-to-end channel development service. We handle niche research, content calendar design, scriptwriting, voice/host direction, high-CTR thumbnail creation, video editing, SEO optimization, and channel management.',
    accentColor: '#FF0000',
    heroImage: '/brand-youtuber.jpg',
    stats: [
      { stat: '1.7M+', label: 'Views on Lead Channel' },
      { stat: '20K+', label: 'Subscribers Grown' },
      { stat: '750+', label: 'Videos Published' },
    ],
    pillars: [
      { title: 'Algorithmic Optimization', desc: 'Titles, thumbnails, and hook packaging designed specifically to trigger YouTube browse features and suggested videos.' },
      { title: 'Turnkey Production Pipeline', desc: 'Consistent weekly uploads handled entirely by our production team without taxing your bandwidth.' },
      { title: 'Monetization Strategy', desc: 'Unlocking ad revenue, sponsorships, affiliate systems, and lead-gen funnels directly from YouTube viewership.' },
    ],
    highlights: [
      'Niche market & keyword opportunity research',
      'High-click-through thumbnail design & A/B testing',
      'Long-form video editing & motion graphics',
      'YouTube SEO: metadata, chapters, end-screens',
      'Monthly channel audit & analytics strategy deck',
    ],
  },
  {
    slug: 'tiktok-makers',
    name: 'TikTok Makers',
    tagline: 'Native viral formats & creator network campaigns.',
    subtitle: 'Short-Form Creator Studio',
    description:
      'Unlocking Gen Z and Millennial audiences with platform-native storytelling and trend-jacked execution.',
    longDescription:
      'TikTok Makers is our agile creative collective specializing in TikTok-first content strategy, creator collaborations, and trend integration. We produce content that feels authentic to the FYP while driving measurable brand recall and direct response conversions.',
    accentColor: '#00F2FE',
    heroImage: '/brand-tiktok.jpg',
    stats: [
      { stat: '5M+', label: 'TikTok Impressions' },
      { stat: '12%', label: 'Avg Engagement Rate' },
      { stat: '40+', label: 'Creator Collaborations' },
    ],
    pillars: [
      { title: 'Trend Velocity', desc: 'We monitor emerging sounds, formats, and cultural memes daily to launch relevant content before trends peak.' },
      { title: 'Native Storytelling', desc: 'No polished infomercials — just raw, relatable, high-converting content that blends seamlessly into users’ feeds.' },
      { title: 'Spark Ads & Paid TikTok', desc: 'Amplifying high-performing organic clips into targeted Spark Ads for cost-effective customer acquisition.' },
    ],
    highlights: [
      'Daily sound & trend monitoring',
      'UGC & creator collaboration coordination',
      'TikTok Shop & e-commerce integration',
      'Spark Ads campaign management',
      'Comment section engagement strategy',
    ],
  },
];

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}
