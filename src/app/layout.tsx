import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { audiowide, abel } from '@/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Gabriel Philipson — Technology Executive & ERP Consultant',
    template: '%s — IES Consulting Group',
  },
  description: 'Senior technology executive, ERP consultant, and AI builder. 20 years leading digital transformation. Founder of IES Consulting Group. Based in Brooklyn, NY.',
  openGraph: {
    title: 'Gabriel Philipson — Technology Executive & ERP Consultant',
    description: '20 years leading enterprise technology at the executive level. ERP strategy, platform modernization, digital transformation across financial services, retail, jewelry, aviation, and ecommerce.',
    url: 'https://gabephilipson.com',
    siteName: 'Gabriel Philipson',
    images: [
      {
        url: 'https://gabephilipson.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Gabriel Philipson — Technology Executive & ERP Consultant',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gabriel Philipson — Technology Executive & ERP Consultant',
    description: '20 years leading enterprise technology. ERP strategy, platform modernization, digital transformation.',
    images: ['https://gabephilipson.com/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${audiowide.variable} ${abel.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
