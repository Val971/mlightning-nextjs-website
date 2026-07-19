import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Adresse qui reçoit les demandes de devis envoyées par le formulaire.
const DEFAULT_TO_EMAIL = 'contact@mlightning-custom.fr';

// "onboarding@resend.dev" fonctionne sans configuration (domaine bac à
// sable fourni par Resend), pratique tant qu'aucun domaine n'est vérifié.
// Voir .env.local.example pour passer à une adresse sur le vrai domaine.
const DEFAULT_FROM_EMAIL = 'By Mlightning Custom <onboarding@resend.dev>';

type ContactPayload = {
  name?: string;
  phone?: string;
  prestation?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Requête invalide.' }, { status: 400 });
  }

  const name = body.name?.toString().trim() ?? '';
  const phone = body.phone?.toString().trim() ?? '';
  const prestation = body.prestation?.toString().trim() ?? '';
  const message = body.message?.toString().trim() ?? '';

  if (!name || !phone) {
    return NextResponse.json({ error: 'Nom et téléphone requis.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Pas de clé configurée : on log côté serveur pour le débogage, le
    // front-end proposera d'utiliser WhatsApp à la place.
    console.error(
      "RESEND_API_KEY manquante — impossible d'envoyer l'email du formulaire de contact."
    );
    return NextResponse.json({ error: 'Service email non configuré.' }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const to = process.env.CONTACT_TO_EMAIL || DEFAULT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM_EMAIL;

  const lines = [
    `Prestation : ${prestation || 'Non précisée'}`,
    `Nom : ${name}`,
    `Téléphone : ${phone}`,
    message && `Véhicule / projet : ${message}`,
  ].filter(Boolean);

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      subject: `Nouvelle demande de devis — ${prestation || 'via le site'}`,
      text: lines.join('\n'),
    });

    if (error) {
      console.error('Resend a refusé l\'envoi :', error);
      return NextResponse.json({ error: "L'envoi a échoué." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Échec de l\'envoi email du formulaire de contact :', err);
    return NextResponse.json({ error: "L'envoi a échoué." }, { status: 500 });
  }
}
