import { useEffect, useState } from "react"

const Input = () => {
  const [res,setRes] = useState([])
  const [textInput,setTextInput] = useState()
  const [sortorder,setSortorder] = useState("ase")

  useEffect(() => {
    const stored = localStorage.getItem("name")
    if(stored){
      setRes(JSON.parse(stored))
    }
  },[])

 useEffect(() => {
    localStorage.setItem("name", JSON.stringify(res))
  }, [res])

  const handleClick = (e) => {
    e.preventDefault()
  if (textInput.trim() === "") return
    setRes([...res, textInput])
    setTextInput("")
  }


  const handleSort = () =>{
  const sort = [...res].sort((a,b) => {
    if(sortorder === 'ase') return a.localeCompare(b)
      else return b.localeCompare(a)

  })
setRes(sort)
setSortorder(sortorder === 'ase' ? "dse" : "ase")
  }
  return (
    <section className="h-screen w-full bg-slate-50 shadow flex items-center mx-auto flex-col gap-4 p-5">
<input type="text"
placeholder="enter"
value={textInput}
onChange={(e) => setTextInput(e.target.value)}
className=" border-amber-50 text-black"
/>

      <div className="flex gap-2">
        <button
onClick={ handleClick}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
        <button
onClick={handleSort}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
    Sort- {sortorder}
        </button>
      </div>

      <div className="mt-4">
{res.map((item, index) => (
          <p key={index} className="border-b py-1">
            {item}
          </p>
        ))}
      </div>
    </section>
  )
}
export default Input
