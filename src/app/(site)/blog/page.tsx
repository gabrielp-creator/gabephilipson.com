import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero/Hero';
import SectionLabel from '@/components/SectionLabel/SectionLabel';
import { getBlogPosts } from '@/sanity/queries';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Writing on AI, enterprise technology, and what it means to build at the intersection of strategy and execution. By Gabriel Philipson.',
  openGraph: {
    title: 'Blog — IES Consulting Group',
    description: 'Writing on AI, enterprise technology, and what it means to build at the intersection of strategy and execution.',
    url: 'https://gabephilipson.com/blog',
  },
};

function formatDate(dateStr: string | undefined) {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <Hero
        eyebrow="Blog"
        headline="Thinking Out Loud."
        intro="Writing on AI, enterprise technology, and what it means to build at the intersection of strategy and execution."
      />

      <section className={styles.list}>
        <SectionLabel>Recent posts</SectionLabel>

        {posts.map((post: { slug: string; title: string; publishDate?: string; readTime?: string; body?: { children?: { text?: string }[] }[] }) => {
          const excerpt = post.body
            ?.find((b: { children?: { text?: string }[] }) => b.children?.[0]?.text)
            ?.children?.[0]?.text?.slice(0, 180) + '...';

          return (
            <Link href={`/blog/${post.slug}`} className={styles.card} key={post.slug}>
              <div className={styles.cardTitle}>{post.title}</div>
              <div className={styles.cardMeta}>
                <span>Gabriel Philipson</span>
                <span>{formatDate(post.publishDate)}</span>
                {post.readTime && <span>{post.readTime}</span>}
              </div>
              {excerpt && <p className={styles.cardExcerpt}>{excerpt}</p>}
              <span className={styles.readMore}>Read more &rarr;</span>
            </Link>
          );
        })}
      </section>
    </>
  );
}
