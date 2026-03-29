import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, comment, postTitle, postSlug } = await request.json();

    if (!name || !email || !comment) {
      return NextResponse.json(
        { error: 'All fields are required' },
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
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'IES Blog <noreply@contact.gabephilipson.com>',
        to: ['gabe@iesgroupco.com'],
        subject: `Blog Comment: ${postTitle}`,
        reply_to: email,
        text: `New comment on "${postTitle}"\nhttps://gabephilipson.com/blog/${postSlug}\n\nFrom: ${name} <${email}>\n\n${comment}`,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error('Resend error:', errorData);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Comment form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
