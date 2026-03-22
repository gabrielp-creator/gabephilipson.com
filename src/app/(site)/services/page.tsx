import type { Metadata } from 'next';
import Hero from '@/components/Hero/Hero';
import SectionLabel from '@/components/SectionLabel/SectionLabel';
import Button from '@/components/Button/Button';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'ERP Consulting Services',
  description: 'ERP strategy, custom integrations, platform modernization, and AI implementation for mid-market companies. Led by Gabriel Philipson. Based in Brooklyn, NY.',
  openGraph: {
    title: 'ERP Consulting Services — IES Consulting',
    description: 'Specialized ERP strategy, digital transformation, and platform modernization for mid-market companies. Every engagement led by Gabriel Philipson directly.',
    url: 'https://gabephilipson.com/services',
  },
};

const services = [
  {
    icon: '\u2699',
    color: '#005C8F',
    title: 'ERP Strategy and Implementation',
    tagline: 'The right system, implemented correctly.',
    desc: 'Most ERP projects fail not because of the software but because of poor strategy, underestimated scope, or implementation teams that don\u2019t understand the business. IES brings 20+ years of Microsoft Dynamics NAV and Business Central experience to every engagement, from initial assessment and platform selection through full implementation, data migration, and go-live support.',
    audience: 'Mid-market companies evaluating, replacing, or upgrading their ERP. Companies on aging NAV installations considering a move to Business Central. Organizations that have had a failed or stalled ERP project.',
  },
  {
    icon: '\uD83D\uDD17',
    color: '#1C75BC',
    title: 'Custom Integrations',
    tagline: 'Connect the systems that run your business.',
    desc: 'Most businesses run on more than one platform: ERP, CRM, banking systems, ecommerce, and more. When those systems don\u2019t talk to each other, the result is manual work, data conflicts, and decisions made on incomplete information. IES designs and builds custom integrations that automate the flow of data between systems, eliminate reconciliation overhead, and give finance and operations a single source of truth.',
    audience: 'Companies running disconnected systems that require manual data entry or reconciliation between platforms. Common use cases: ERP to Salesforce, bank integrations, payment automation, ecommerce to ERP sync.',
  },
  {
    icon: '\uD83D\uDE80',
    color: '#0B4F6C',
    title: 'Platform Modernization',
    tagline: 'Modernize without starting over.',
    desc: 'Legacy systems don\u2019t get replaced overnight, and they shouldn\u2019t be. IES helps mid-market companies modernize their technology platforms in stages, preserving what works while eliminating the technical debt that slows the business down. For companies on Microsoft Dynamics NAV, that often means a structured migration path to Business Central with minimal disruption to operations.',
    audience: 'Companies running on outdated ERP or platform versions that are limiting growth or creating compliance risk. Organizations that want a modernization roadmap before committing to a full replacement.',
  },
  {
    icon: '\uD83D\uDCC8',
    color: '#37A3D8',
    title: 'Digital Transformation',
    tagline: 'Technology that changes how the business operates.',
    desc: 'Digital transformation is one of the most overused phrases in business. At IES, it means one thing: using technology to fundamentally improve how a business operates, not just digitizing existing processes. That might mean automating a workflow that currently takes 40 hours a month, building a system that connects lease contracts to maintenance forecasts, or redesigning how a company manages its supply chain.',
    audience: 'Mid-market companies looking to reduce operational overhead, improve data visibility, or build systems that scale. Particularly relevant for finance, operations, and supply chain functions.',
  },
  {
    icon: '\uD83C\uDF10',
    color: '#5FA6DB',
    title: 'Offshore Delivery',
    tagline: 'Execution capacity without the overhead.',
    desc: 'IES operates with an offshore delivery team of 10, giving clients access to experienced development and implementation resources at a cost structure that makes complex projects viable. All offshore work is managed directly by Gabriel. Clients get senior-level oversight on every engagement without paying for layers of project management in between.',
    audience: 'Companies that need custom development, ERP configuration, or integration work but don\u2019t have the internal capacity or headcount budget to staff it themselves.',
  },
  {
    icon: '\uD83E\uDDE0',
    color: '#CCEAFC',
    title: 'AI Strategy and Implementation',
    tagline: 'From AI awareness to AI in production.',
    desc: 'Most organizations are paying attention to AI. Fewer have figured out how to actually deploy it in a way that changes how work gets done. IES helps mid-market companies move from evaluation to execution, identifying where AI creates real operational leverage, building proof-of-concept systems, and implementing tools that work in the context of existing platforms and workflows.',
    audience: 'Executives and operations teams that understand AI is important but aren\u2019t sure where to start or how to evaluate what\u2019s real versus hype. Companies looking to integrate AI into ERP, finance, or operations workflows.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="Services"
        headline="Narrow on Purpose. Deep by Design."
        intro="IES focuses on a defined set of engagements where deep experience in Microsoft Dynamics, custom integrations, and platform modernization produces outcomes a generalist firm can't match. Every engagement is led by Gabriel directly."
      />

      <section className={styles.list}>
        <SectionLabel>What we do</SectionLabel>

        {services.map((svc) => (
          <div className={styles.card} key={svc.title}>
            <div className={styles.cardHeader}>
              <div className={styles.icon} style={{ background: svc.color }}>
                <span role="img">{svc.icon}</span>
              </div>
              <div>
                <div className={styles.cardTitle}>{svc.title}</div>
                <div className={styles.cardTagline}>{svc.tagline}</div>
              </div>
            </div>
            <p className={styles.cardDesc}>{svc.desc}</p>
            <div className={styles.audience}>
              <strong className={styles.audienceLabel}>Who this is for</strong>
              {svc.audience}
            </div>
          </div>
        ))}
      </section>

      <div className={styles.bottomCta}>
        <h2 className={styles.bottomTitle}>Not sure which service fits?</h2>
        <p className={styles.bottomBody}>Most engagements span more than one area. A 20-minute call is the fastest way to figure out what you actually need and whether IES is the right fit.</p>
        <Button href="/contact">Schedule a 20-Minute Call</Button>
      </div>
    </>
  );
}
