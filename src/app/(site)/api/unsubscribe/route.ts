import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const contactId = searchParams.get('id');

  if (!contactId) {
    return new NextResponse(unsubscribePage('Missing contact ID.', false), {
      headers: { 'Content-Type': 'text/html' },
      status: 400,
    });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return new NextResponse(unsubscribePage('Service not configured.', false), {
      headers: { 'Content-Type': 'text/html' },
      status: 500,
    });
  }

  try {
    const res = await fetch(
      `https://api.resend.com/contacts/${contactId}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ unsubscribed: true }),
      }
    );

    if (!res.ok) {
      console.error('Resend unsubscribe error:', await res.text());
      return new NextResponse(unsubscribePage('Something went wrong. Please try again.', false), {
        headers: { 'Content-Type': 'text/html' },
        status: 500,
      });
    }

    return new NextResponse(unsubscribePage('You have been unsubscribed. You will no longer receive blog notifications.', true), {
      headers: { 'Content-Type': 'text/html' },
    });
  } catch (error) {
    console.error('Unsubscribe error:', error);
    return new NextResponse(unsubscribePage('Something went wrong. Please try again.', false), {
      headers: { 'Content-Type': 'text/html' },
      status: 500,
    });
  }
}

function unsubscribePage(message: string, success: boolean) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Unsubscribe — Gabriel Philipson</title>
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
    <p><a href="https://gabephilipson.com">Back to gabephilipson.com</a></p>
  </div>
</body>
</html>`;
}
