import React from 'react';
import { Sparkles } from 'lucide-react';

// SVG-based chain illusion with gradients and subtle perspective
export default function Hero3D() {
  return (
    <section className="relative w-full min-h-[85vh] overflow-hidden bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 pt-24 text-center md:pt-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur">
          <Sparkles className="h-4 w-4 text-fuchsia-300" />
          <span className="text-white/80">Generative • Kinetic • Artistic</span>
        </div>
        <h1 className="font-display text-4xl leading-tight md:text-6xl">
          3D Chain Aesthetics
          <span className="block bg-gradient-to-r from-fuchsia-300 via-cyan-200 to-teal-300 bg-clip-text text-transparent">Matching Motion & Mood</span>
        </h1>
        <p className="max-w-2xl text-white/70">
          A living composition inspired by interlocking metal links. Play with presets, colors, and rhythm.
        </p>
      </div>

      <div className="relative mx-auto mt-10 h-[360px] w-full max-w-6xl px-6 md:h-[500px]">
        <div className="relative h-full w-full overflow-visible rounded-xl border border-white/10 bg-gradient-to-br from-gray-900/60 to-black/80 p-2 shadow-2xl backdrop-blur-xl">
          <div className="relative h-full w-full rounded-lg bg-[radial-gradient(circle_at_40%_30%,rgba(255,255,255,0.06),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(99,102,241,0.08),transparent_60%)]">
            <div className="absolute inset-0" style={{ perspective: 1000 }}>
              <div className="absolute left-1/2 top-1/2 h-[120%] w-[140%] -translate-x-1/2 -translate-y-1/2 rotate-6 md:rotate-3" style={{ transformStyle: 'preserve-3d' }}>
                <ChainRow y={-140} tilt={-16} hue={280} />
                <ChainRow y={-40} tilt={-8} hue={320} />
                <ChainRow y={60} tilt={-2} hue={200} />
                <ChainRow y={160} tilt={4} hue={170} />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ChainRow({ y, tilt, hue }) {
  const links = new Array(10).fill(0);
  return (
    <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-6 transition-transform duration-700 ease-out hover:scale-[1.01]" style={{ transform: `translate(-50%, ${y}px) rotateX(${tilt}deg)` }}>
      {links.map((_, i) => (
        <ChainLink key={i} flipped={i % 2 === 0} hue={hue} />
      ))}
    </div>
  );
}

function ChainLink({ flipped = false, hue = 280 }) {
  const rotation = flipped ? 'rotate-90' : '-rotate-90';
  const gradFrom = `hsl(${hue} 90% 70% / 0.9)`;
  const gradTo = `hsl(${(hue + 60) % 360} 90% 55% / 0.9)`;

  return (
    <div className={`relative h-28 w-16 md:h-36 md:w-20 ${rotation}`}>
      <svg viewBox="0 0 100 200" className="h-full w-full drop-shadow-[0_8px_16px_rgba(0,0,0,0.45)]">
        <defs>
          <linearGradient id={`grad-${hue}-${rotation}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={gradFrom} />
            <stop offset="100%" stopColor={gradTo} />
          </linearGradient>
          <filter id={`inner-${hue}-${rotation}`} x="-50%" y="-50%" width="200%" height="200%">
            <feOffset dx="0" dy="2" />
            <feGaussianBlur stdDeviation="2" result="offset-blur" />
            <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
            <feFlood floodColor="rgba(255,255,255,0.35)" floodOpacity="1" result="color" />
            <feComposite operator="in" in="color" in2="inverse" result="shadow" />
            <feComposite operator="over" in="shadow" in2="SourceGraphic" />
          </filter>
        </defs>
        <path d="M50 10c18 0 32 14 32 32v116c0 18-14 32-32 32s-32-14-32-32V42c0-18 14-32 32-32z M50 40c-2 0-10 6-10 12v96c0 6 8 12 10 12s10-6 10-12V52c0-6-8-12-10-12z" fill={`url(#grad-${hue}-${rotation})`} filter={`url(#inner-${hue}-${rotation})`} />
        <path d="M50 10c18 0 32 14 32 32v116c0 18-14 32-32 32s-32-14-32-32V42c0-18 14-32 32-32z" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="2" />
      </svg>
    </div>
  );
}
