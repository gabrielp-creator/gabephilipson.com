import { NextResponse } from 'next/server';
import { createToken } from '@/lib/subscription-token';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Subscription service not configured' },
        { status: 500 }
      );
    }

    const token = createToken(email);
    const confirmUrl = `https://gabephilipson.com/api/confirm-subscription?token=${token}`;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'IES Blog <noreply@contact.gabephilipson.com>',
        to: [email],
        subject: 'Confirm your subscription — Gabriel Philipson',
        html: confirmationEmail(confirmUrl),
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error('Resend error:', errorData);
      return NextResponse.json(
        { error: 'Failed to send confirmation email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function confirmationEmail(confirmUrl: string) {
  return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #1a1a1a;">
  <div style="border-bottom: 2px solid #005C8F; padding-bottom: 16px; margin-bottom: 24px;">
    <strong style="color: #005C8F; font-size: 14px; letter-spacing: 0.04em;">GABRIEL PHILIPSON</strong>
  </div>

  <h1 style="font-size: 22px; color: #1a1a1a; margin-bottom: 12px;">Confirm your subscription</h1>

  <p style="font-size: 16px; line-height: 1.6; color: #555;">
    You requested to receive blog post notifications from gabephilipson.com. Click the button below to confirm your subscription.
  </p>

  <a href="${confirmUrl}" style="display: inline-block; margin-top: 16px; padding: 12px 28px; background: #005C8F; color: #fff; text-decoration: none; border-radius: 3px; font-size: 14px;">Confirm Subscription</a>

  <p style="margin-top: 24px; font-size: 13px; color: #888; line-height: 1.5;">
    If you didn't request this, you can safely ignore this email. This link expires in 48 hours.
  </p>
</body>
</html>`;
}
