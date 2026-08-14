import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

type Payload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  company_website?: string; // honeypot
};

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(req: Request) {
  let data: Payload;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: 'Geçersiz istek.' }, { status: 400 });
  }

  // Honeypot doluysa: bot. Sessizce başarı dön.
  if (data.company_website) {
    return NextResponse.json({ ok: true });
  }

  const name = (data.name || '').trim();
  const email = (data.email || '').trim();
  const subject = (data.subject || '').trim();
  const message = (data.message || '').trim();

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: 'Lütfen tüm alanları doldurun.' },
      { status: 400 },
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: 'Geçerli bir e-posta adresi girin.' },
      { status: 400 },
    );
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, CONTACT_TO } =
    process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error('[contact] SMTP yapılandırması eksik (.env).');
    return NextResponse.json(
      { error: 'E-posta servisi şu an yapılandırılmamış. Lütfen telefon ile ulaşın.' },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 465,
    secure: SMTP_SECURE ? SMTP_SECURE === 'true' : true,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const to = CONTACT_TO || SMTP_USER;
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
      <div style="background:#1e4983;color:#fff;padding:24px;border-radius:12px 12px 0 0">
        <h2 style="margin:0">Yeni İletişim Formu Mesajı</h2>
      </div>
      <div style="border:1px solid #e2e8f0;border-top:none;padding:24px;border-radius:0 0 12px 12px">
        <p><strong>Ad Soyad:</strong> ${escapeHtml(name)}</p>
        <p><strong>E-posta:</strong> ${escapeHtml(email)}</p>
        <p><strong>Konu:</strong> ${escapeHtml(subject)}</p>
        <p><strong>İleti:</strong></p>
        <p style="white-space:pre-wrap;background:#f8fafc;padding:16px;border-radius:8px">${escapeHtml(message)}</p>
      </div>
    </div>`;

  try {
    await transporter.sendMail({
      from: `"Fabrika Doktoru Web" <${SMTP_USER}>`,
      to,
      replyTo: `"${name}" <${email}>`,
      subject: `[İletişim Formu] ${subject}`,
      text: `Ad Soyad: ${name}\nE-posta: ${email}\nKonu: ${subject}\n\n${message}`,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] sendMail hatası:', err);
    return NextResponse.json(
      { error: 'Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin.' },
      { status: 502 },
    );
  }
}
