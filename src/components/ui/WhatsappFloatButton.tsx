import { whatsappNumber } from '@/data/nav';

const defaultMessage =
  "Bonjour, je souhaite avoir plus d'informations sur vos prestations.";

/**
 * Bulle flottante WhatsApp, fixée en bas à droite. En `position: fixed`
 * directement sous <body> (voir layout.tsx) : reste visible en permanence,
 * y compris pendant le scroll, sur toutes les pages.
 */
export default function WhatsappFloatButton() {
  const href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Nous contacter sur WhatsApp"
      className="whatsapp-pulse fixed bottom-[1.3rem] right-[1.3rem] z-[80] w-14 h-14 rounded-full flex items-center justify-center bg-[#25D366] shadow-[0_8px_24px_rgba(0,0,0,.35)] transition-transform duration-200 hover:scale-110"
    >
      <svg viewBox="0 0 32 32" className="w-8 h-8 fill-white" aria-hidden="true">
        <path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.34.687 4.523 1.874 6.36L4 29l7.84-1.84A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.63 28 15S22.63 3 16.004 3Zm0 21.818c-1.94 0-3.75-.53-5.31-1.45l-.38-.22-4.32 1.01 1.03-4.2-.25-.4A9.78 9.78 0 0 1 5.2 15c0-5.96 4.85-10.8 10.8-10.8S26.8 9.04 26.8 15s-4.85 9.818-10.796 9.818Zm5.42-7.33c-.297-.15-1.756-.866-2.028-.966-.272-.1-.47-.15-.668.15-.198.298-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.254-.462-2.39-1.475-.883-.788-1.48-1.76-1.653-2.058-.173-.297-.019-.458.13-.607.15-.15.347-.397.52-.595.174-.198.232-.34.347-.57.116-.23.058-.42-.04-.57-.099-.148-.644-1.553-.883-2.14-.234-.567-.472-.49-.65-.5-.166-.008-.357-.01-.55-.01-.192 0-.502.073-.77.348-.267.276-1.017 1-1.017 2.44 0 1.44 1.045 2.826 1.19 3.024.147.198 2.02 3.08 4.9 4.196 2.878 1.117 2.878.744 3.395.694.518-.05 1.756-.717 2.003-1.41.248-.694.248-1.288.174-1.412-.075-.124-.272-.198-.57-.347Z" />
      </svg>
    </a>
  );
}
