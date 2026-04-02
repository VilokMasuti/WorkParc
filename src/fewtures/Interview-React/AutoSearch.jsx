import { useEffect, useState } from "react";

export const AutoSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showRes, setShowRes] = useState(false);
  const [error, setError] = useState(null);
  const [cache, setCache] = useState({});

  // debounce like your original code
  useEffect(() => {
    const timer = setTimeout(() => {
      const normalizedQuery = query.trim().toLowerCase();

      if (!normalizedQuery) {
        setResults([]);
        return;
      }

      if (cache[normalizedQuery]) {
        setResults(cache[normalizedQuery]);
        return;
      }

      (async () => {
        try {
          setError(null);
          const res = await fetch(
            `https://dummyjson.com/recipes/search?q=${encodeURIComponent(normalizedQuery)}`
          );
          const data = await res.json();
          const recipes = Array.isArray(data.recipes) ? data.recipes : [];
          setResults(recipes);
          setCache((prev) => ({ ...prev, [normalizedQuery]: recipes }));
        } catch (err) {
          setError(err?.message || "Fetch error");
        }
      })();
    }, 200);

    return () => clearTimeout(timer);
  }, [query, cache]);

  if (error) {
    return (
      <div className="flex items-center justify-center mx-auto">
        <h1 className="text-2xl">Error: {error}</h1>
      </div>
    );
  }

  return (
    <main className="mt-9">
      <div className="flex flex-col items-center justify-center">
        <input
          type="text"
          placeholder="Search.."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-[26rem] border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onFocus={() => setShowRes(true)}   // show dropdown when input focuses
          onBlur={() => setShowRes(false)}   // hide on blur
        />

        {/* render dropdown only when you have results AND showRes is true */}
        {results.length > 0 && showRes && (
          <div className="w-[26rem] mt-1 bg-slate-50 shadow-md flex flex-col gap-2 p-3 rounded-md overflow-y-auto h-[15rem]">
            {results.map((r) => (
              <span
                key={r.id}
                className="text-black p-3 hover:bg-slate-200 duration-500 cursor-pointer"
                // onMouseDown fires BEFORE onBlur, so it runs even if input blurs immediately
                onMouseDown={() => {
                  setQuery(r.name || ""); // put item text into input
                  setShowRes(false);      // hide dropdown after pick
                }}
              >
                {r.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};
