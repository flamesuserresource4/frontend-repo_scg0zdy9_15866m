import React from 'react';
import { motion } from 'framer-motion';
import { Image, Layers, Zap } from 'lucide-react';

export default function DynamicSections() {
  const items = [
    {
      icon: <Image className="h-5 w-5" />, title: 'Generative Palettes',
      text: 'Blend neon and metallic hues for a cohesive, matching mood across the canvas.'
    },
    {
      icon: <Layers className="h-5 w-5" />, title: 'Layered Depth',
      text: 'Stacked planes, soft shadows, and parallax craft an immersive 3D feel.'
    },
    {
      icon: <Zap className="h-5 w-5" />, title: 'Dynamic Rhythm',
      text: 'Rhythmic motion and micro-interactions bring the chain design to life.'
    },
  ];

  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 py-16 text-white">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map((it, i) => (
          <motion.div
            key={i}
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10"
          >
            <div className="mb-3 inline-flex items-center gap-2 text-cyan-300">
              <span className="rounded bg-cyan-400/10 p-2 text-cyan-200">{it.icon}</span>
              <h3 className="font-semibold">{it.title}</h3>
            </div>
            <p className="text-white/70">{it.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
