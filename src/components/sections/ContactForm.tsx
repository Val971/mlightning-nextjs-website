'use client';

import { FormEvent, useRef, useState } from 'react';
import { prestationOptions } from '@/data/socials';
import { whatsappNumber } from '@/data/nav';

type Status = 'idle' | 'sending' | 'sent-email' | 'sent-whatsapp' | 'error';

function readFields(form: FormData) {
  return {
    name: form.get('name')?.toString().trim() ?? '',
    phone: form.get('phone')?.toString().trim() ?? '',
    prestation: form.get('prestation')?.toString() ?? '',
    message: form.get('message')?.toString().trim() ?? '',
  };
}

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');

  // Envoi par email — passe par /api/contact (Resend) côté serveur.
  const handleEmailSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, phone, prestation, message } = readFields(new FormData(e.currentTarget));

    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, prestation, message }),
      });

      if (!res.ok) throw new Error('send failed');
      setStatus('sent-email');
    } catch {
      setStatus('error');
    }
  };

  // Envoi via WhatsApp — pas de backend, ouvre wa.me avec le message pré-rempli.
  const handleWhatsapp = () => {
    if (!formRef.current) return;
    const { name, phone, prestation, message } = readFields(new FormData(formRef.current));

    const lines = [
      `Bonjour, je souhaite un devis pour : ${prestation}`,
      `Nom : ${name}`,
      `Téléphone : ${phone}`,
      message && `Véhicule / projet : ${message}`,
    ].filter(Boolean);

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      lines.join('\n')
    )}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setStatus('sent-whatsapp');
  };

  if (status === 'sent-email' || status === 'sent-whatsapp') {
    const isEmail = status === 'sent-email';
    return (
      <div className="text-center py-6">
        <div
          className="w-[60px] h-[60px] rounded-full mx-auto mb-[1.1rem] flex items-center justify-center text-[1.6rem] text-bg"
          style={{
            backgroundImage:
              'linear-gradient(115deg,#a0f0ff,#b7a6ff,#ff9ecb,#ffd39e)',
          }}
        >
          ✓
        </div>
        <h3 className="text-[1.5rem]">C&apos;est envoyé !</h3>
        <p className="text-white/[.65] mt-[.6rem] leading-[1.5]">
          {isEmail
            ? 'Votre demande a bien été envoyée par email — on vous répond rapidement.'
            : "Un onglet WhatsApp vient de s'ouvrir avec votre message pré-rempli — il ne reste plus qu'à l'envoyer."}
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleEmailSubmit} className="flex flex-col gap-4">
      <input required name="name" placeholder="Votre nom" className="glass-input" />
      <input required name="phone" placeholder="Téléphone" className="glass-input" />
      <select name="prestation" defaultValue={prestationOptions[0]} className="glass-input">
        {prestationOptions.map((option) => (
          <option key={option} value={option} className="text-black">
            {option}
          </option>
        ))}
      </select>
      <textarea
        name="message"
        rows={3}
        placeholder="Votre véhicule & votre projet…"
        className="glass-input resize-y"
      />

      {status === 'error' && (
        <p className="text-[.85rem] text-[#ffb4b4]">
          L&apos;envoi par email a échoué. Réessayez, ou envoyez votre demande via WhatsApp
          ci-dessous.
        </p>
      )}

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="btn-holo justify-center flex-1 disabled:opacity-60 disabled:cursor-wait"
        >
          {status === 'sending' ? 'Envoi en cours…' : '✉️ Demander un devis par email'}
        </button>
        <button
          type="button"
          onClick={handleWhatsapp}
          className="btn-outline justify-center flex-1"
        >
          💬 Envoyer sur WhatsApp
        </button>
      </div>
    </form>
  );
}
