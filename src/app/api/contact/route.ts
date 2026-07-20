import { NextResponse } from 'next/server';
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';

// Adresses qui reçoivent les demandes de devis envoyées par le formulaire.
const DEFAULT_TO_EMAILS = ['contact@mlightning-custom.fr', 'mlightning180@gmail.com'];

// Contrairement à Resend, MailerSend n'a pas d'adresse "bac à sable"
// universelle (onboarding@resend.dev). Il faut soit vérifier
// mlightning-custom.fr dans MailerSend, soit utiliser le domaine d'essai
// fourni à la création du compte (Domaines > domaine de test, du type
// "xxxxx.mlsender.net"). Voir .env.local.example.
const DEFAULT_FROM_EMAIL = 'Mlightning Custom <MS_XXXXXX@xxxxx.mlsender.net>';

type ContactPayload = {
  name?: string;
  phone?: string;
  vehicle?: string;
  prestation?: string;
  message?: string;
};

// "Nom <email>" -> { name, email } — MailerSend attend les deux séparément
// (contrairement à Resend qui acceptait la chaîne complète).
function parseAddress(value: string): { name?: string; email: string } {
  const match = value.match(/^(.*)<(.+)>$/);
  if (match) {
    return { name: match[1].trim() || undefined, email: match[2].trim() };
  }
  return { email: value.trim() };
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Requête invalide.' }, { status: 400 });
  }

  const name = body.name?.toString().trim() ?? '';
  const phone = body.phone?.toString().trim() ?? '';
  const vehicle = body.vehicle?.toString().trim() ?? '';
  const prestation = body.prestation?.toString().trim() ?? '';
  const message = body.message?.toString().trim() ?? '';

  if (!name || !phone) {
    return NextResponse.json({ error: 'Nom et téléphone requis.' }, { status: 400 });
  }

  const apiKey = process.env.MAILERSEND_API_KEY;
  if (!apiKey) {
    // Pas de clé configurée : on log côté serveur pour le débogage, le
    // front-end proposera d'utiliser WhatsApp à la place.
    console.error(
      "MAILERSEND_API_KEY manquante — impossible d'envoyer l'email du formulaire de contact."
    );
    return NextResponse.json({ error: 'Service email non configuré.' }, { status: 500 });
  }

  const mailerSend = new MailerSend({ apiKey });

  // CONTACT_TO_EMAIL peut lister plusieurs adresses séparées par une virgule.
  const toEmails = process.env.CONTACT_TO_EMAIL
    ? process.env.CONTACT_TO_EMAIL.split(',').map((email) => email.trim())
    : DEFAULT_TO_EMAILS;
  const from = parseAddress(process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM_EMAIL);

  const sender = new Sender(from.email, from.name);
  const recipients = toEmails.map((email) => new Recipient(email));

  const lines = [
    `Prestation : ${prestation || 'Non précisée'}`,
    `Nom : ${name}`,
    `Téléphone : ${phone}`,
    vehicle && `Véhicule : ${vehicle}`,
    message && `Projet : ${message}`,
  ].filter(Boolean);

  const emailParams = new EmailParams()
    .setFrom(sender)
    .setTo(recipients)
    .setSubject(`Nouvelle demande de devis — ${prestation || 'via le site'}`)
    .setText(lines.join('\n'));

  try {
    await mailerSend.email.send(emailParams);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Échec de l'envoi email du formulaire de contact :", err);
    return NextResponse.json({ error: "L'envoi a échoué." }, { status: 500 });
  }
}
