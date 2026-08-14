'use client';

import { useState } from 'react';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

type Status = 'idle' | 'loading' | 'success' | 'error';

const fieldClass =
  'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20';

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
      <div className="flex flex-col items-center justify-center rounded-3xl border border-green-100 bg-green-50 p-10 text-center">
        <CheckCircle2 className="h-14 w-14 text-green-500" />
        <h3 className="font-display mt-5 text-xl font-bold text-brand-900">
          Mesajınız iletildi!
        </h3>
        <p className="mt-2 text-slate-600">
          En kısa sürede size dönüş yapacağız. İlginiz için teşekkür ederiz.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-semibold text-brand-600 hover:text-accent-500"
        >
          Yeni mesaj gönder
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
            Adınız Soyadınız
          </label>
          <input id="name" name="name" required placeholder="Adınız Soyadınız" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
            E-posta Adresiniz
          </label>
          <input id="email" name="email" type="email" required placeholder="ornek@firma.com" className={fieldClass} />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-slate-700">
          Konu
        </label>
        <input id="subject" name="subject" required placeholder="Konu" className={fieldClass} />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
          İletiniz
        </label>
        <textarea id="message" name="message" required rows={5} placeholder="İletiniz" className={fieldClass} />
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
        <div className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
          <AlertCircle className="h-4 w-4 shrink-0" />
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
