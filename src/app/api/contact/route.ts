import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize the Resend client with your API key
// Process.env will automatically read this from Vercel's environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, phone, topic, message } = body;

    // Basic validation
    if (!firstName || !phone) {
      return NextResponse.json(
        { error: 'שם מלא וטלפון הם שדות חובה' },
        { status: 400 }
      );
    }

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Tali Agency <onboarding@resend.dev>', // Change this to your verified domain later (e.g. no-reply@talfly.co.il)
      to: ['info@talfly.co.il'], // the destination email
      subject: `פנייה חדשה מאתר Tali Agency: ${topic || 'ללא נושא'}`,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif;">
          <h2>פנייה חדשה התקבלה דרך האתר</h2>
          <p><strong>שם מלא:</strong> ${firstName}</p>
          <p><strong>טלפון:</strong> <span dir="ltr">${phone}</span></p>
          <p><strong>נושא:</strong> ${topic || 'לא נבחר'}</p>
          <p><strong>הודעה:</strong><br/>${message ? message.replace(/\n/g, '<br/>') : 'לא הוזנה הודעה'}</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error('Server implementation error:', err);
    return NextResponse.json(
      { error: 'אירעה שגיאה בשליחת הטופס' },
      { status: 500 }
    );
  }
}
