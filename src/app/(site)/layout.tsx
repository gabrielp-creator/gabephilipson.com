import Nav from '@/components/Nav/Nav';
import Footer from '@/components/Footer/Footer';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
