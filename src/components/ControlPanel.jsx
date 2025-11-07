import React, { useMemo, useState } from 'react';
import { SlidersHorizontal, Palette, Infinity } from 'lucide-react';

export default function ControlPanel({ onChange }) {
  const [hue, setHue] = useState(280);
  const [intensity, setIntensity] = useState(60);
  const [density, setDensity] = useState(10);

  const data = useMemo(() => ({ hue, intensity, density }), [hue, intensity, density]);

  return (
    <section className="relative z-10 mx-auto -mt-8 w-full max-w-5xl px-6">
      <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur">
        <div className="mb-4 flex items-center gap-2 text-sm text-white/80">
          <SlidersHorizontal className="h-4 w-4 text-cyan-300" />
          Live Controls
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <LabeledSlider
            icon={<Palette className="h-4 w-4" />}
            label={`Hue: ${hue}`}
            min={0}
            max={360}
            value={hue}
            onChange={(v) => { setHue(v); onChange?.({ ...data, hue: v }); }}
          />
          <LabeledSlider
            icon={<Infinity className="h-4 w-4" />}
            label={`Intensity: ${intensity}%`}
            min={20}
            max={100}
            value={intensity}
            onChange={(v) => { setIntensity(v); onChange?.({ ...data, intensity: v }); }}
          />
          <LabeledSlider
            icon={<Infinity className="h-4 w-4 rotate-90" />}
            label={`Density: ${density}`}
            min={6}
            max={16}
            value={density}
            onChange={(v) => { setDensity(v); onChange?.({ ...data, density: v }); }}
          />
        </div>
      </div>
    </section>
  );
}

function LabeledSlider({ label, icon, min, max, value, onChange }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm text-white/80">
        <span className="inline-flex items-center gap-2">{icon} {label}</span>
        <span className="rounded bg-white/10 px-2 py-0.5 text-xs">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
        className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-white/10 accent-fuchsia-400"
      />
    </div>
  );
}
