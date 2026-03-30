import { createHmac } from 'crypto';

const SECRET = process.env.SANITY_WEBHOOK_SECRET || 'fallback-secret';
const EXPIRY_HOURS = 48;

export function createToken(email: string): string {
  const expires = Date.now() + EXPIRY_HOURS * 60 * 60 * 1000;
  const payload = `${email}:${expires}`;
  const signature = createHmac('sha256', SECRET).update(payload).digest('hex');
  return Buffer.from(`${payload}:${signature}`).toString('base64url');
}

export function verifyToken(token: string): { valid: boolean; email?: string } {
  try {
    const decoded = Buffer.from(token, 'base64url').toString();
    const parts = decoded.split(':');
    if (parts.length < 3) return { valid: false };

    const signature = parts.pop()!;
    const expires = parseInt(parts.pop()!, 10);
    const email = parts.join(':');

    if (Date.now() > expires) return { valid: false };

    const expectedSignature = createHmac('sha256', SECRET)
      .update(`${email}:${expires}`)
      .digest('hex');

    if (signature !== expectedSignature) return { valid: false };

    return { valid: true, email };
  } catch {
    return { valid: false };
  }
}
