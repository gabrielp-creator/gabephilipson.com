import { NextResponse } from 'next/server';
import { verifyToken } from '@/lib/subscription-token';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get('token');

  if (!token) {
    return new NextResponse(resultPage('Invalid confirmation link.', false), {
      headers: { 'Content-Type': 'text/html' },
      status: 400,
    });
  }

  const { valid, email } = verifyToken(token);

  if (!valid || !email) {
    return new NextResponse(resultPage('This link has expired or is invalid. Please subscribe again.', false), {
      headers: { 'Content-Type': 'text/html' },
      status: 400,
    });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return new NextResponse(resultPage('Service not configured.', false), {
      headers: { 'Content-Type': 'text/html' },
      status: 500,
    });
  }

  try {
    const res = await fetch('https://api.resend.com/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ email, unsubscribed: false }),
    });

    if (!res.ok) {
      const errorData = await res.text();
      console.error('Resend error:', errorData);
      return new NextResponse(resultPage('Something went wrong. Please try again.', false), {
        headers: { 'Content-Type': 'text/html' },
        status: 500,
      });
    }

    return new NextResponse(resultPage('You&#39;re subscribed! You&#39;ll receive an email when new blog posts are published.', true), {
      headers: { 'Content-Type': 'text/html' },
    });
  } catch (error) {
    console.error('Confirm subscription error:', error);
    return new NextResponse(resultPage('Something went wrong. Please try again.', false), {
      headers: { 'Content-Type': 'text/html' },
      status: 500,
    });
  }
}

function resultPage(message: string, success: boolean) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${success ? 'Subscribed' : 'Error'} — Gabriel Philipson</title>
  <style>
    body { font-family: 'Abel', Arial, sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; background: #f5f8fb; color: #1a1a1a; }
    .card { text-align: center; padding: 2rem; max-width: 400px; }
    .icon { font-size: 2rem; margin-bottom: 1rem; }
    .msg { font-size: 16px; line-height: 1.5; color: ${success ? '#1a6b35' : '#c62828'}; }
    a { color: #005C8F; text-decoration: none; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <div class="card">
    <div class="icon">${success ? '&#10003;' : '&#10007;'}</div>
    <p class="msg">${message}</p>
    <p><a href="https://gabephilipson.com/blog">Back to the blog</a></p>
  </div>
</body>
</html>`;
}
