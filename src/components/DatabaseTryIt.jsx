import React, { useEffect, useState } from 'react';

// Simple viewer to fetch backend /test and /schema to validate DB connection
export default function DatabaseTryIt() {
  const [status, setStatus] = useState(null);
  const [schemas, setSchemas] = useState(null);
  const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

  useEffect(() => {
    fetch(`${base}/test`).then(r => r.json()).then(setStatus).catch(() => setStatus({ error: 'Unable to reach backend' }));
    fetch(`${base}/schema`).then(r => r.json()).then(setSchemas).catch(() => setSchemas({ error: 'No schema endpoint' }));
  }, [base]);

  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-20 text-white">
      <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <div className="mb-4 text-sm text-white/80">Fast generate database • Try it</div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Block title="Backend Status" data={status} />
          <Block title="Schemas" data={schemas} />
        </div>
      </div>
    </section>
  );
}

function Block({ title, data }) {
  return (
    <div>
      <h4 className="mb-2 font-semibold text-cyan-300">{title}</h4>
      <pre className="max-h-64 overflow-auto rounded-lg bg-black/50 p-3 text-xs leading-relaxed text-white/80">
        {JSON.stringify(data, null, 2) || 'Loading...'}
      </pre>
    </div>
  );
}
