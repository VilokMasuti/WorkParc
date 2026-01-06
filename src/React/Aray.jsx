import { useState } from "react";

const TabsCard = () => {
  const TABS = [
    { id: "overview", label: "Overview", content: "This is the overview tab." },
    { id: "features", label: "Features", content: "Here are the features." },
    {
      id: "pricing",
      label: "Pricing details go here.",
      content: "This is the pricing tab.",
    },
  ];

  const [active, setActive] = useState(TABS[0].id);

  return (
    <div className="w-[400px] rounded-lg bg-yellow-50 shadow-2xl p-4">
      {/* Tabs Header */}
      <div className="flex gap-4 border-b border-gray-300">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`pb-2 text-sm font-medium ${
              active === tab.id
                ? "border-b-2 border-black text-black duration-700 cursor-pointer ease-in-out"
                : "text-gray-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4 text-sm text-gray-700">
        {TABS.map((tab) => tab.id === active && <p> {tab.content} </p>)}
      </div>
    </div>
  );
};

export default TabsCard;
