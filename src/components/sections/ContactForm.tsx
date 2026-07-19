'use client';

import { FormEvent, useState } from 'react';
import { prestationOptions } from '@/data/socials';
import { whatsappNumber } from '@/data/nav';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get('name')?.toString().trim() ?? '';
    const phone = form.get('phone')?.toString().trim() ?? '';
    const prestation = form.get('prestation')?.toString() ?? '';
    const message = form.get('message')?.toString().trim() ?? '';

    // Construit le message WhatsApp à partir du formulaire. Pas de backend
    // ici : wa.me ouvre une conversation avec le texte déjà rempli, il ne
    // reste que le bouton "Envoyer" à cliquer côté WhatsApp. Si un jour tu
    // veux aussi garder une trace des demandes (CRM, email de notif...), ça
    // peut se brancher en plus, en parallèle de cette redirection.
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
    setSent(true);
  };

  if (sent) {
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
        <h3 className="text-[1.5rem]">C&apos;est prêt !</h3>
        <p className="text-white/[.65] mt-[.6rem] leading-[1.5]">
          Un onglet WhatsApp vient de s&apos;ouvrir avec votre message
          pré-rempli — il ne reste plus qu&apos;à l&apos;envoyer.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
      <button type="submit" className="btn-holo justify-center">
        Demander mon devis gratuit
      </button>
    </form>
  );
}
