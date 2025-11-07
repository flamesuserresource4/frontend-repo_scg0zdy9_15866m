import React from 'react';
import Hero3D from './components/Hero3D';
import ControlPanel from './components/ControlPanel';
import DynamicSections from './components/DynamicSections';
import DatabaseTryIt from './components/DatabaseTryIt';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-900">
      <Hero3D />
      <ControlPanel onChange={() => {}} />
      <DynamicSections />
      <DatabaseTryIt />
      <footer className="mx-auto w-full max-w-6xl px-6 pb-10 text-center text-sm text-white/50">
        Built with motion, light, and a hint of chrome.
      </footer>
    </div>
  );
}

export default App;
