import React, { useState, useEffect, useMemo, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import FocusTrap from 'focus-trap-react';
import { X } from 'lucide-react';

function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debounced;
}

export default function CommandPalette({ resources, isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 150);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const listRef = useRef(null);
  const containerRef = useRef(null);

  const filtered = useMemo(() => {
    if (!debouncedQuery) return resources.slice(0, 20);
    const q = debouncedQuery.toLowerCase();
    return resources
      .filter((r) =>
        r.title.toLowerCase().includes(q) ||
        r.type.toLowerCase().includes(q) ||
        r.topics.some((t) => t.toLowerCase().includes(q))
      )
      .slice(0, 20);
  }, [debouncedQuery, resources]);

  useEffect(() => {
    if (!listRef.current) return;
    const selectedItem = listRef.current.querySelector('[data-selected="true"]');
    if (selectedItem) selectedItem.scrollIntoView({ block: 'nearest' });
  }, [selectedIndex]);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((i) => (i + 1) % filtered.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((i) => (i - 1 + filtered.length) % filtered.length);
    } else if (e.key === 'Enter') {
      if (filtered[selectedIndex]) {
        window.open(filtered[selectedIndex].url, '_blank');
        onClose();
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Detect clicks outside the command palette
  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <FocusTrap
        active={isOpen}
        focusTrapOptions={{ initialFocus: '#command-palette-input' }}
      >
        <motion.div
          ref={containerRef}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="relative bg-[#1a2928] rounded-xl w-full max-w-xl p-[18px]"
        >
          <div className="relative">
            <input
              id="command-palette-input"
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Search resources..."
              className="w-full pr-12 p-3 rounded-md bg-[#0E1D1C] text-white placeholder-gray-500 outline-none border border-gray-800 text-base"
            />
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-white transition"
              aria-label="Close command palette"
            >
              <X size={20} />
            </button>
          </div>

          <ul className="max-h-64 overflow-y-auto mt-2 text-base">
            {filtered.map((res, i) => (
              <li
                key={res.id}
                data-selected={i === selectedIndex}
                className={`p-2 cursor-pointer rounded-md select-none ${
                  i === selectedIndex
                    ? 'bg-lime-300 text-[#0E1D1C]'
                    : 'text-white'
                }`}
                onMouseEnter={() => setSelectedIndex(i)}
                onClick={() => {
                  window.open(res.url, '_blank');
                  onClose();
                }}
              >
                {res.title}
              </li>
            ))}
            {filtered.length === 0 && (
              <li className="p-2 text-gray-500">No results found.</li>
            )}
          </ul>
        </motion.div>
      </FocusTrap>
    </div>
  );
}
