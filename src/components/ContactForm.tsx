'use client';

import { useState } from 'react';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

type Status = 'idle' | 'loading' | 'success' | 'error';

const fieldClass =
  'w-full rounded-md border border-line bg-white px-4 py-3.5 text-sm text-brand-900 placeholder:text-slate-400 transition-colors duration-200 focus:border-brand-400 focus:outline-none focus:ring-4 focus:ring-brand-500/10';

const labelClass =
  'font-mono mb-2 block text-[0.625rem] font-medium uppercase tracking-[0.2em] text-slate-500';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setError('');

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || 'Gönderim başarısız oldu.');
      }
      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Bir hata oluştu.');
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-line bg-white p-10 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-50">
          <CheckCircle2 className="h-8 w-8 text-accent-500" strokeWidth={1.5} />
        </span>
        <h3 className="font-display mt-6 text-xl font-bold text-brand-900">
          Mesajınız iletildi
        </h3>
        <p className="mt-3 leading-relaxed text-slate-600">
          En kısa sürede size dönüş yapacağız. İlginiz için teşekkür ederiz.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="font-mono mt-7 text-[0.6875rem] uppercase tracking-[0.2em] text-brand-600 transition-colors hover:text-accent-500"
        >
          Yeni mesaj gönder
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Adınız Soyadınız
          </label>
          <input
            id="name"
            name="name"
            required
            placeholder="Adınız Soyadınız"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            E-posta Adresiniz
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="ornek@firma.com"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className={labelClass}>
          Konu
        </label>
        <input
          id="subject"
          name="subject"
          required
          placeholder="Konu"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          İletiniz
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="İletiniz"
          className={fieldClass}
        />
      </div>

      {/* Bot tuzağı (honeypot) — kullanıcılar görmez */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {status === 'error' && (
        <div className="flex items-start gap-3 rounded-md border border-red-100 bg-red-50 px-4 py-3.5 text-sm text-red-700">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          {error}
        </div>
      )}

      <Button
        type="submit"
        variant="accent"
        size="lg"
        className="w-full"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" /> Gönderiliyor...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" /> Gönder
          </>
        )}
      </Button>
    </form>
  );
}
