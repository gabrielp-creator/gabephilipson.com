import { NextResponse } from 'next/server';

interface SanityWebhookBody {
  title?: string;
  slug?: string;
  publishDate?: string;
  excerpt?: string;
}

interface ResendContact {
  id: string;
  email: string;
  unsubscribed: boolean;
}

export async function POST(request: Request) {
  try {
    const webhookSecret = process.env.SANITY_WEBHOOK_SECRET;
    if (webhookSecret) {
      const headerSecret = request.headers.get('sanity-webhook-secret');
      if (headerSecret !== webhookSecret) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }
    }

    const body: SanityWebhookBody = await request.json();
    const { title, slug, excerpt } = body;

    if (!title || !slug) {
      return NextResponse.json(
        { error: 'Missing title or slug' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const contactsRes = await fetch(
      'https://api.resend.com/contacts',
      {
        headers: { Authorization: `Bearer ${apiKey}` },
      }
    );

    if (!contactsRes.ok) {
      console.error('Failed to fetch contacts:', await contactsRes.text());
      return NextResponse.json(
        { error: 'Failed to fetch subscribers' },
        { status: 500 }
      );
    }

    const { data: contacts } = await contactsRes.json();
    const subscribers = (contacts as ResendContact[]).filter(
      (c) => !c.unsubscribed
    );

    if (subscribers.length === 0) {
      return NextResponse.json({ success: true, sent: 0 });
    }

    const postUrl = `https://gabephilipson.com/blog/${slug}`;
    const emails = subscribers.map((contact) => ({
      from: 'IES Blog <noreply@contact.gabephilipson.com>',
      to: [contact.email],
      subject: `New Post: ${title}`,
      html: emailTemplate(title, excerpt || '', postUrl, contact.id),
    }));

    const batchSize = 100;
    for (let i = 0; i < emails.length; i += batchSize) {
      const batch = emails.slice(i, i + batchSize);
      const sendRes = await fetch('https://api.resend.com/emails/batch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(batch),
      });

      if (!sendRes.ok) {
        console.error('Batch send error:', await sendRes.text());
      }
    }

    return NextResponse.json({ success: true, sent: subscribers.length });
  } catch (error) {
    console.error('Notify subscribers error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function emailTemplate(
  title: string,
  excerpt: string,
  postUrl: string,
  contactId: string
) {
  const unsubscribeUrl = `https://gabephilipson.com/api/unsubscribe?id=${contactId}`;

  return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #1a1a1a;">
  <div style="border-bottom: 2px solid #005C8F; padding-bottom: 16px; margin-bottom: 24px;">
    <strong style="color: #005C8F; font-size: 14px; letter-spacing: 0.04em;">GABRIEL PHILIPSON</strong>
  </div>

  <h1 style="font-size: 22px; color: #1a1a1a; margin-bottom: 12px;">${title}</h1>

  ${excerpt ? `<p style="font-size: 16px; line-height: 1.6; color: #555;">${excerpt}</p>` : ''}

  <a href="${postUrl}" style="display: inline-block; margin-top: 16px; padding: 10px 24px; background: #005C8F; color: #fff; text-decoration: none; border-radius: 3px; font-size: 14px;">Read the full post</a>

  <div style="margin-top: 48px; padding-top: 16px; border-top: 1px solid #e0e0e0; font-size: 12px; color: #888;">
    <p>You're receiving this because you subscribed to blog updates at gabephilipson.com.</p>
    <a href="${unsubscribeUrl}" style="color: #888;">Unsubscribe</a>
  </div>
</body>
</html>`;
}
