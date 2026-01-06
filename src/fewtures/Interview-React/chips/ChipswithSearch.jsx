import { useState } from "react";
import Chips from "./Chips";

// ✅ Mock data for testing
const DataName = [
  { id: 1, Name: "React" },
  { id: 2, Name: "Node.js" },
  { id: 3, Name: "MongoDB" },
  { id: 4, Name: "Express" },
  { id: 5, Name: "TailwindCSS" },
  { id: 6, Name: "TypeScript" },
];

const ChipswithSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showItems, setShowItems] = useState(false);
  const [chips, setChips] = useState([]);

  // ✅ Add chip (prevent duplicates)
  const addChips = (chip) => {
    if (!chip) return;
    if (!chips.includes(chip)) {
      setChips((prev) => [...prev, chip]);
    }
    setSearchTerm("");
    setShowItems(false);
  };

  // ✅ Remove chip
  const removeChip = (chip) => {
    setChips((prev) => prev.filter((c) => c !== chip));
  };

  // ✅ Filter data
  const filteredData = DataName.filter((data) => {
    const nameLower = data.Name.toLowerCase();
    const termLower = searchTerm.toLowerCase();
    const alreadySelected = chips.includes(data.Name);
    return !alreadySelected && nameLower.includes(termLower);
  });

  return (
    <section className="mt-5 flex items-center justify-center flex-col gap-10">
      <div className="w-[60rem] h-[40rem] bg-sky-100 shadow-2xl rounded-md flex flex-col gap-5 relative p-10">
        {/* 🔍 Search input */}
        <input
          type="text"
          onBlur={() => setTimeout(() => setShowItems(false), 150)}
          onFocus={() => setShowItems(true)}
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          className="pl-3 w-[30rem] h-[3rem] border border-gray-400 rounded-xl outline-none focus:ring-2 focus:ring-sky-500"
        />

        {/* 🧩 Chips display */}
        <div className="pl-3 w-[30rem] min-h-[3rem] border border-gray-400 rounded-xl outline-none p-2">
          <div className="flex gap-2 flex-wrap">
            {chips.map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="flex items-center gap-2 rounded-full bg-black text-white px-3 py-1"
              >
                {item}
                <button
                  onClick={() => removeChip(item)}
                  className="ml-1 text-xl leading-none"
                  aria-label={`Remove ${item}`}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* 📋 Dropdown list */}
        <div className="flex flex-col items-center justify-start gap-2 text-black mt-5 overflow-y-auto max-h-[25rem] w-full">
          {showItems && filteredData.length > 0 ? (
            <ul className="bg-white w-[30rem] rounded-lg shadow-md p-3 border border-gray-200">
              {filteredData.map((data) => (
                <li
                  key={data.id}
                  onClick={() => addChips(data.Name)}
                  className="text-lg px-3 py-2 hover:bg-sky-100 cursor-pointer rounded-md"
                >
                  {data.Name}
                </li>
              ))}
            </ul>
          ) : showItems && filteredData.length === 0 ? (
            <p className="text-gray-500">No items found</p>
          ) : (
            <p className="text-gray-500">No items to show</p>
          )}
        </div>
      </div>


      <Chips/>
    </section>
  );
};

export default ChipswithSearch;
