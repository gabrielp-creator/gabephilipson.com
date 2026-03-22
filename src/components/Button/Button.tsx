import Link from 'next/link';
import styles from './Button.module.css';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
  type?: 'button' | 'submit';
}

export default function Button({
  variant = 'primary',
  href,
  onClick,
  children,
  style,
  type = 'button',
}: ButtonProps) {
  const className = variant === 'primary' ? styles.primary : styles.secondary;

  if (href) {
    return (
      <Link href={href} className={className} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick} style={style} type={type}>
      {children}
    </button>
  );
}
