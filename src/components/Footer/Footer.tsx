import Link from 'next/link';
import styles from './Footer.module.css';

const footerLinks = [
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/ai-poc-lab', label: 'AI / POC Lab' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/blog#subscribe', label: 'Subscribe' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        {footerLinks.map(({ href, label }) => (
          <Link key={href} href={href} className={styles.navLink}>{label}</Link>
        ))}
        <a
          href="https://linkedin.com/in/gabrielphilipson"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.navLink}
        >
          LinkedIn
        </a>
      </nav>
      <div className={styles.bottom}>
        <span>IES Consulting Group Corp. — Brooklyn, NY</span>
        <span>gabephilipson.com</span>
      </div>
    </footer>
  );
}
