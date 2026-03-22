import type { Metadata } from 'next';
import { PortableText } from '@portabletext/react';
import Hero from '@/components/Hero/Hero';
import Button from '@/components/Button/Button';
import { getBlogPost } from '@/sanity/queries';
import styles from './page.module.css';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.title,
    description: `${post.title} — by Gabriel Philipson`,
    openGraph: {
      title: post.title,
      url: `https://gabephilipson.com/blog/${slug}`,
    },
  };
}

/* Custom components for Sanity portable text blocks */
const portableTextComponents = {
  types: {
    pullQuote: ({ value }: { value: { text: string } }) => (
      <div className={styles.pull}>{value.text}</div>
    ),
  },
};

function formatDate(dateStr: string | undefined) {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <>
      <Hero eyebrow={post.eyebrow || 'Blog'} headline={post.title}>
        <div className={styles.meta}>
          <span>{post.authorName || 'Gabriel Philipson'}</span>
          <span>{formatDate(post.publishDate)}</span>
          {post.readTime && <span>{post.readTime}</span>}
        </div>
      </Hero>

      <div className={styles.body}>
        <PortableText value={post.body} components={portableTextComponents} />
      </div>

      <hr className={styles.divider} />

      <div className={styles.author}>
        <div className={styles.authorAvatar}>GP</div>
        <div>
          <div className={styles.authorName}>{post.authorName || 'Gabriel Philipson'}</div>
          {post.authorBio && <div className={styles.authorBio}>{post.authorBio}</div>}
        </div>
      </div>

      {post.ctaTitle && (
        <div className={styles.cta}>
          {post.ctaLabel && <p className={styles.ctaLabel}>{post.ctaLabel}</p>}
          <h2 className={styles.ctaTitle}>{post.ctaTitle}</h2>
          {post.ctaBody && <p className={styles.ctaBody}>{post.ctaBody}</p>}
          <Button href="/ai-poc-lab">View AI Projects</Button>
        </div>
      )}
    </>
  );
}
