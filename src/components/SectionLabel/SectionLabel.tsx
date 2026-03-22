interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p style={{
      fontSize: '11px',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--color-primary-light)',
      marginBottom: '1.25rem',
      fontFamily: "var(--font-abel), 'Abel', sans-serif",
    }}>
      {children}
    </p>
  );
}
