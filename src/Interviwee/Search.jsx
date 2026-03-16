import { useState } from "react"

const jobs = [
  { id: 1, title: "React Developer", location: "Bangalore" },
  { id: 2, title: "Node Developer", location: "Mumbai" },
  { id: 3, title: "UI Designer", location: "Bangalore" },
  { id: 4, title: "Full Stack Dev", location: "Delhi" },
  { id: 5, title: "Frontend Engineer", location: "Bangalore" },
]
const Search = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const filteredJobs = jobs.filter((job) => job.title.toLowerCase().includes(searchQuery.toLowerCase()))
  return (
    <section className=" min-h-screen  w-full mx-auto bg-zinc-50 items-center justify-center flex shadow-2xl">

      <div className=" flex flex-col gap-3 ">
        <input type="text"
        placeholder="Search"
className="w-[20rem] px-3 py-2 rounded-md border
 border-zinc-800 outline-0"
 value={searchQuery}
 onChange={(e) => setSearchQuery(e.target.value)}
/>

<div className=" flex flex-col gap-5 ">
{filteredJobs.length === 0 && (
  <p className="text-zinc-400 text-sm">No results found</p>
)}
  {filteredJobs.map((jobs) => (
    <div key={jobs.id} className="flex   items-center gap-3">
      <h2 className="text-xl font-bold text-zinc-800">{jobs.title} - </h2>
      <p className="text-xl text-zinc-500">{jobs.location}</p>
    </div>
  ))}
</div>
      </div>

    </section>
  )
}

export default Search