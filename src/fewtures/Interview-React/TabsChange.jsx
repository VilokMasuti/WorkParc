import { useState } from "react";
import { TabsChanges } from "../../Data";
const TabsChange = () => {
  const tabss = TabsChanges
  const [tab,setTab] = useState(tabss)
 const [activeTabId, setActiveTabId] = useState(tabss[0].id);
 const handleChange = (e) => {
    const value = e.target.value;
    // do NOT mutate — produce new array with updated object
    setTab((prev) => prev.map((t) => (t.id === activeTabId ? { ...t, message: value } : t)));
  };

const activetab = tab.find((t) => t.id === activeTabId) ?? null

  return (
   <section className=" h-screen  mx-auto items-center flex
    flex-col justify-center">
      <div className=" flex gap-5">
{tab.map((t) => (
  <button
    key={t.id}
    onClick={() => setActiveTabId(t.id)}   // ✅ use t.id
    className={`px-4 py-2 rounded-md font-medium shadow-sm focus:outline-none
      ${t.id === activeTabId ? "bg-blue-600 text-white" : "bg-white text-gray-700 border"}
    `}
  >
    {t.name}
  </button>
))}


      </div>

           <div className="bg-yellow-100 rounded-md p-4 mb-4 text-center">
          <h4 className="text-lg font-semibold">
            {activetab ? `You have clicked ${activetab.name}` : "No active tab"}
          </h4>
        </div>


         <div>
          <input
            type="text"
            value={activetab ? activetab.message : ""}
            onChange={handleChange}
            placeholder={activetab ? `Type message for ${activetab.name}` : "No tab selected"}
            disabled={!activetab}
            className="w-full p-3 rounded-md text-sm placeholder-gray-400 focus:ring-2 focus:ring-blue-300 border"
          />
        </div>
    </section>
  )
}
export default TabsChange
