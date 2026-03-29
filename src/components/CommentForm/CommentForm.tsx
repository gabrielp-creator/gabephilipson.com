'use client';

import { useState } from 'react';
import styles from './CommentForm.module.css';

interface CommentFormProps {
  postTitle: string;
  postSlug: string;
}

export default function CommentForm({ postTitle, postSlug }: CommentFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/comment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, comment, postTitle, postSlug }),
      });

      if (res.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setComment('');
      } else {
        const data = await res.json();
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch {
      setErrorMessage('Something went wrong. Please try again.');
      setStatus('error');
    }
  }

  return (
    <div className={styles.comments}>
      <h2 className={styles.title}>Leave a Comment</h2>

      {status === 'success' ? (
        <p className={styles.success}>
          Thanks for your comment. It will be reviewed before publishing.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <span className={styles.label}>Your details</span>
          <input
            className={styles.input}
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className={styles.input}
            type="email"
            placeholder="Your email (not published)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            className={styles.textarea}
            placeholder="Share your thoughts..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
          <button
            className={styles.button}
            type="submit"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Sending...' : 'Post Comment'}
          </button>
          {status === 'error' && (
            <p className={styles.error}>{errorMessage}</p>
          )}
          <p className={styles.note}>
            Comments are reviewed before publishing. Your email address will not be displayed.
          </p>
        </form>
      )}
    </div>
  );
}
