import type { Metadata } from 'next';
import { audiowide, abel } from '@/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Gabriel Philipson — ERP Consultant & AI Builder',
    template: '%s — IES Consulting Group',
  },
  description: 'Senior technology executive, ERP consultant, and AI builder. 25 years leading digital transformation. Founder of IES Consulting Group. Based in Brooklyn, NY.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${audiowide.variable} ${abel.variable}`}>
      <body>{children}</body>
    </html>
  );
}
