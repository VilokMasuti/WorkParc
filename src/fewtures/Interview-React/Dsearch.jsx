
import { useEffect, useState } from "react"

const Dsearch = () => {
  const [searchtext,setSearchText]= useState('')

  const [res,setRes] = useState([])

const [filteredRes, setFilteredRes] = useState([]) // filtered data






useEffect(() => {
  const searchfetch = async () => {
    try {
      const result = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await result.json()
      setRes(data)
      setFilteredRes(data) // initialize filtered with all data
    } catch (error) {
      console.log(error)
    }
  }
  searchfetch()
}, [])

useEffect(() => {
  const timer = setTimeout(() => {
    const filtered = res.filter((item) =>
      item.name.toLowerCase().includes(searchtext.toLowerCase())
    )
    setFilteredRes(filtered)
  }, 300)

  return () => clearTimeout(timer)
}, [searchtext, res])




  return (
<section className=" mt-3.5 h-screen  w-full mx-auto items-center flex
 flex-col">
<div className=" flex
 gap-5">


  <input type="text"
  placeholder="Search"
  required
  className=" w-[20rem] h-[3rem] border-black   text-black rounded-md text-start p-2"
  value={searchtext}
  onChange={(e) => setSearchText(e.target.value)}
  />


<div>
  {filteredRes.map((n) => (
    <p key={n.id}>{n.name}</p>
  ))}
</div>

</div>


 </section>
  )
}
export default Dsearch
