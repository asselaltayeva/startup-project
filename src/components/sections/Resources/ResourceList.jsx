import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';

function Spinner() {
  return (
    <svg
      className="animate-spin h-6 w-6 text-white mx-auto"
      xmlns="http://www.w3.org/2000/svg"
      fill="none" viewBox="0 0 24 24"
      aria-label="Loading"
      role="img"
    >
      <circle
        className="opacity-25"
        cx="12" cy="12" r="10"
        stroke="currentColor" strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      ></path>
    </svg>
  );
}

export default function ResourceList({ topic, resources }) {
  const [visibleCount, setVisibleCount] = useState(10);
  const [loadingMore, setLoadingMore] = useState(false);
  const scrollRef = useRef(null);
  const throttledScroll = useRef(null);

  const filteredResources = useMemo(
    () => resources.filter((r) => r.topics.includes(topic)),
    [topic, resources]
  );

  const visibleResources = filteredResources.slice(0, visibleCount);

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const bottom = el.scrollHeight - el.scrollTop <= el.clientHeight + 5;

    if (bottom && visibleCount < filteredResources.length && !loadingMore) {
      setLoadingMore(true);
      setTimeout(() => {
        setVisibleCount((v) => Math.min(v + 10, filteredResources.length));
        setLoadingMore(false);
      }, 400);
    }
  }, [visibleCount, filteredResources.length, loadingMore]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const throttled = () => {
      if (throttledScroll.current) return;

      throttledScroll.current = setTimeout(() => {
        handleScroll();
        throttledScroll.current = null;
      }, 200);
    };

    el.addEventListener('scroll', throttled);
    return () => el.removeEventListener('scroll', throttled);
  }, [handleScroll]);

  useEffect(() => {
    setVisibleCount(10);
  }, [topic]);

  return (
    <section
      ref={scrollRef}
      className="flex-1 overflow-y-auto pr-4 text-base"
      aria-label={`Resources for topic ${topic}`}
    >
      {/* Heading */}
      <h3 className="mb-5 text-xl font-semibold text-white border-b border-white pb-2">
        Resources on <span className="text-lime-300">{topic}</span>
      </h3>

      {/* List */}
      <ul className="space-y-2">
        {visibleResources.map((res) => (
          <li
            key={res.id}
            className="bg-[#1c2e2b] p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <a
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-lg font-medium text-white hover:text-white/70"
            >
              {res.title}
            </a>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-gray-400">
              <span className="bg-amber-50/10 text-white px-3 py-1 rounded-full text-xs">
                {res.type}
              </span>
              {res.topics.map((tag) => (
                <span
                  key={tag}
                  className="bg-amber-50/10 text-white px-3 py-1 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </li>
        ))}

        {loadingMore && (
          <li className="py-4 flex justify-center" aria-live="polite" aria-busy="true">
            <Spinner />
          </li>
        )}

        {!loadingMore && filteredResources.length === 0 && (
          <li className="text-center text-gray-500 italic">No resources found.</li>
        )}
      </ul>
    </section>
  );
}
