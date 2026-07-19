// Récupération des avis Google via l'API Places (New), côté serveur uniquement
// (la clé API ne doit jamais être exposée au client).
//
// Variables d'environnement requises (voir .env.local.example) :
//   GOOGLE_PLACES_API_KEY — clé API avec l'API "Places API (New)" activée
//   GOOGLE_PLACE_ID        — Place ID de la fiche établissement Google
//
// Si ces variables ne sont pas définies (ou si l'appel échoue), la fonction
// retourne `null` et l'appelant doit utiliser les avis statiques de secours
// (src/data/testimonials.ts) — le site continue de fonctionner sans coupure.

export type GoogleReview = {
  authorName: string;
  rating: number;
  text: string;
  relativeTime: string;
};

export type GooglePlaceReviews = {
  rating: number;
  userRatingCount: number;
  reviews: GoogleReview[];
  mapsUri?: string;
};

type RawGoogleReview = {
  authorAttribution?: { displayName?: string };
  rating?: number;
  text?: { text?: string };
  originalText?: { text?: string };
  relativePublishTimeDescription?: string;
};

type RawPlaceDetails = {
  rating?: number;
  userRatingCount?: number;
  reviews?: RawGoogleReview[];
  googleMapsUri?: string;
};

export async function getGoogleReviews(): Promise<GooglePlaceReviews | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return null;
  }

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'rating,userRatingCount,reviews,googleMapsUri',
      },
      // Les avis ne changent pas d'une minute à l'autre : on cache 24h pour
      // limiter le nombre d'appels facturés à l'API.
      next: { revalidate: 60 * 60 * 24 },
    });

    if (!res.ok) {
      console.error('Google Places API error:', res.status, await res.text());
      return null;
    }

    const data = (await res.json()) as RawPlaceDetails;

    const reviews: GoogleReview[] = (data.reviews ?? []).map((r) => ({
      authorName: r.authorAttribution?.displayName ?? 'Client Google',
      rating: r.rating ?? 5,
      text: r.text?.text ?? r.originalText?.text ?? '',
      relativeTime: r.relativePublishTimeDescription ?? '',
    }));

    return {
      rating: data.rating ?? 0,
      userRatingCount: data.userRatingCount ?? 0,
      reviews,
      mapsUri: data.googleMapsUri,
    };
  } catch (err) {
    console.error('Failed to fetch Google reviews:', err);
    return null;
  }
}
