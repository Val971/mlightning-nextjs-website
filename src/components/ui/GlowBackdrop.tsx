/** Glow d'ambiance fixe en fond : 2 cercles radiaux (bleu haut-gauche, rose bas-droite). */
export default function GlowBackdrop() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div
        className="absolute -top-[15%] -left-[10%] w-[55vw] h-[55vw] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(120,160,255,.16), transparent 62%)',
          filter: 'blur(20px)',
        }}
      />
      <div
        className="absolute -bottom-[20%] -right-[12%] w-[55vw] h-[55vw] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(255,150,220,.14), transparent 62%)',
          filter: 'blur(20px)',
        }}
      />
    </div>
  );
}
