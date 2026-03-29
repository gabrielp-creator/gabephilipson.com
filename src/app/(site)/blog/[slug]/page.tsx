import type { Metadata } from 'next';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import Hero from '@/components/Hero/Hero';
import Button from '@/components/Button/Button';
import { getBlogPost, getBlogPosts } from '@/sanity/queries';
import CommentForm from '@/components/CommentForm/CommentForm';
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
    statRow: ({ value }: { value: { stats: { number: string; label: string; _key: string }[] } }) => (
      <div className={styles.statRow}>
        {value.stats?.map((stat) => (
          <div key={stat._key} className={styles.stat}>
            <div className={styles.statNum}>{stat.number}</div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>
    ),
  },
};

function formatDate(dateStr: string | undefined) {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return <div>Post not found.</div>;
  }

  const allPosts = await getBlogPosts();
  const otherPosts = allPosts.filter((p: { slug: string }) => p.slug !== slug);

  return (
    <>
      <div className={styles.backLink}>
        <Link href="/blog">&larr; Back to Blog</Link>
      </div>
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

      <CommentForm postTitle={post.title} postSlug={slug} />

      {otherPosts.length > 0 && (
        <div className={styles.morePosts}>
          <h3 className={styles.morePostsTitle}>More Posts</h3>
          {otherPosts.map((p: { slug: string; title: string; publishDate?: string; readTime?: string }) => (
            <Link href={`/blog/${p.slug}`} className={styles.morePostCard} key={p.slug}>
              <span className={styles.morePostCardTitle}>{p.title}</span>
              <span className={styles.morePostCardMeta}>{formatDate(p.publishDate)}{p.readTime ? ` · ${p.readTime}` : ''}</span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
