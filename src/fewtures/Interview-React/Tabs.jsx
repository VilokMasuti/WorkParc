import { useState } from "react";
import { Tabs } from "../../Data";
const Tabss = () => {
const tabs = Tabs
const [activeTab, setActiveTab] = useState(tabs[0].id);

const handleTabClick = (tabId) => {
  setActiveTab(tabId);
};

  return (
<main className="mt-3 pt-2">
<div className="flex gap-3 ">
{tabs.map((tab) => (
  <div className=" flex
   flex-col"
  ><button
    key={tab.id}
    className={`px-4 py-2 rounded-md ${activeTab === tab.id ? "bg-blue-500 text-white" : "bg-gray-200"}`}
    onClick={() => handleTabClick(tab.id)}
  >
    {tab.title}
  </button>
  <div className="mt-2 ">
    {activeTab === tab.id && <p>{tab.content}</p>}


    </div>
    </div>
))}

</div>
</main>
  )
}
export default Tabss
