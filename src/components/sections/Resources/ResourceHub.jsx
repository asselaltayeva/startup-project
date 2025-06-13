import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react'; 
import CommandPalette from './CommandPalette';
import ResourceList from './ResourceList';

const resources = [
  { id: 1, title: 'Understanding Pre-Money Valuation', url: 'https://example.com/pre-money', topics: ['Valuation Basics', 'Startup Funding'], type: 'Article' },
  { id: 2, title: 'Cap Table Explained', url: 'https://example.com/cap-table', topics: ['Equity', 'Startup Funding'], type: 'Video' },
  { id: 3, title: 'How to Use the Berkus Method', url: 'https://example.com/berkus-method', topics: ['Valuation Methods'], type: 'Article' },
];

const topics = [
  { name: 'Valuation Basics' },
  { name: 'Valuation Methods' },
  { name: 'Equity' },
  { name: 'Startup Funding' },
];

export default function ResourceHub() {
  const [selectedTopic, setSelectedTopic] = useState(topics[0].name);
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen((open) => !open);
      } else if (e.key === 'Escape') {
        setPaletteOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <section className="pt-26 py-16 px-6 md:px-12 bg-[#0E1D1C] text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Resource Hub</h2>
        <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto">
          Find helpful content on everything from valuation methods to cap tables.
        </p>
      </div>

      <div className="mx-auto max-w-6xl rounded-2xl overflow-hidden border border-gray-800 shadow-xl flex flex-col md:flex-row h-[75vh]">
        <aside className="md:w-1/3 overflow-y-auto border-r border-gray-900 bg-[#122322] p-6 space-y-4">
          <button
            onClick={() => setPaletteOpen(true)}
            className="w-full mb-4 p-2 flex items-center gap-2 text-left text-base bg-[#1a2928] text-gray-100 border border-gray-800 rounded-md hover:bg-[#223534] transition"
          >
            <Search className="w-4 h-4 text-gray-400" />
            Search resources...
          </button>

          {topics.map(({ name }) => (
            <button
              key={name}
              onClick={() => setSelectedTopic(name)}
              className={`w-full text-left text-base mb-2 py-1 px-2 rounded transition ${
                selectedTopic === name ? 'text-lime-300' : 'text-gray-100'
              }`}
            >
              {name}
            </button>
          ))}
        </aside>

        <main className="md:w-2/3 flex flex-col bg-[#1a2928] p-6">
          <ResourceList topic={selectedTopic} resources={resources} />
        </main>

        <CommandPalette
          isOpen={paletteOpen}
          onClose={() => setPaletteOpen(false)}
          resources={resources}
        />
      </div>
    </section>
  );
}
