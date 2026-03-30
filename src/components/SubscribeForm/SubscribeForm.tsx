'use client';

import { useState, FormEvent } from 'react';
import styles from './SubscribeForm.module.css';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error('Failed to subscribe');
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <section id="subscribe" className={styles.wrapper}>
        <div className={styles.success}>
          You&apos;re subscribed! You&apos;ll get an email when new posts are published.
        </div>
      </section>
    );
  }

  return (
    <section id="subscribe" className={styles.wrapper}>
      <span className={styles.label}>Stay updated</span>
      <p className={styles.intro}>Get notified when new posts are published.</p>
      {status === 'error' && (
        <div className={styles.error}>
          Something went wrong. Please try again.
        </div>
      )}
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className={styles.button} disabled={status === 'loading'}>
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      <p className={styles.note}>No spam. Unsubscribe anytime.</p>
    </section>
  );
}
