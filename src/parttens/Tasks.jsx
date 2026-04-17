import { useState } from "react"

export const Tasks = () => {
  const [text,setText] = useState('')
  const [task,setTask] =  useState([])


  const addTask = () => {
  const title =  text.trim()
  if (!title) return
    const NewTask = {
      id:Date.now(),
     title,
     status:"tasks"

    }
    setTask((pre) => [...pre ,NewTask])
    setText('')
    
  }

  const getNextStatus = (status) => {


  if(status === 'todo') return 'progress'
  if(status === 'progress') return 'done'
  if(status === 'done ') return 'done'

}

const moveTask = (id) => {
  setTasks((prev) =>
    prev.map((task) => {
 if (task.id !== id) return  task
 const next = getNextStatus(task.status)
 return {...task,status:next}

    })
  )
}

  // const MoveTask = (id) => {
  //   const MoveTask  = task.map((t) => {
  //     if(t.id !== id) return t
  //     if(t.status === 'tasks') return {...t,status:'ongoing'}
  //     if(t.status === 'ongoing') return {...t,status:'done'} 
  //     return t
  //   })

  //   setTask(MoveTask)
  // }
  



  const tasks = task.filter((t) => t.status === 'tasks')
    const ongoing = task.filter((t) => t.status === 'ongoing')
      const done = task.filter((t) => t.status === 'done')
  return (
    <section className="h-screen flex flex-col items-center">
      
    <h1 className="  font-bold text-4xl  mt-5 font-serif text-neutral-900">TASK - MANGER</h1>

        <div className=" mt-22 flex
        gap-4">
<input type="text"
placeholder="TASK...!"
value={text}
onChange={(e) => setText(e.target.value)}
className=" w-[20rem] text-neutral-900 rounded-md h-10 px-4 outline-2 outline-neutral-600 ring-neutral-400 border-2 "


/>
<button onClick={addTask} className=" px-3.5   text-sm bg-black rounded-md text-white cursor-pointer">SUBMIT</button>
        </div>
      <div className="w-full mt-5 p-5">
  <div className="flex flex-wrap gap-5">
    
    <div className="flex-1 min-w-[250px] rounded-lg  shadow-sm border border-neutral-200">
      <div className="bg-neutral-900 text-neutral-100 px-4 py-3 rounded-t-lg">
        <h1 className="text-sm font-semibold tracking-wide">TASKS</h1>
      </div>
      <div className="p-4 min-h-[250px] space-y-3">
        <div className="rounded-md bg-neutral-100 p-3 shadow-sm">
         <div>
  {tasks.length > 0 ? (
    tasks.map((t) => (
      <div onClick={() => MoveTask(t.id)} key={t.id} className=" cursor-pointer  flex flex-col  pt-3.5 gap-2.5">
        <span className="bg-amber-600  rounded-md  w-[10rem] px-3">{t.title}</span>
      </div>
    ))
  ) : (
    <p>No tasks yet</p>
  )}
</div>

        </div>
        
       
      </div>
    </div>

    <div className="flex-1 min-w-[250px] rounded-lg bg-white shadow-sm border border-neutral-200">
      <div className="bg-neutral-900 text-neutral-100 px-4 py-3 rounded-t-lg">
        <h1 className="text-sm font-semibold tracking-wide">ONGOING</h1>
      </div>
      <div className="p-4 min-h-[250px] space-y-3">
 <div>
  {ongoing.length > 0 ? (
    ongoing.map((t) => (
      <div onClick={() => MoveTask(t.id)} key={t.id} className=" flex flex-col  pt-3.5 gap-2.5">
        <span className="bg-amber-600  rounded-md  w-[10rem] px-3">{t.title}</span>
      </div>
    ))
  ) : (
    <p>No tasks yet</p>
  )}
</div>
      </div>
    </div>

    <div className="flex-1 min-w-[250px] rounded-lg bg-white shadow-sm border border-neutral-200">
      <div className="bg-neutral-900 text-neutral-100 px-4 py-3 rounded-t-lg">
        <h1 className="text-sm font-semibold tracking-wide">DONE</h1>
      </div>
      <div className="p-4 min-h-[250px] space-y-3">
       <div>
  {done.length > 0 ? (
    done.map((t) => (
      <div onClick={() => MoveTask(t.id)} key={t.id} className=" flex flex-col  pt-3.5 gap-2.5">
        <span className="bg-amber-600  rounded-md  w-[10rem] px-3">{t.title}</span>
      </div>
    ))
  ) : (
    <p>No tasks yet</p>
  )}
</div>
      </div>
    </div>

  </div>
</div>

      </section>
  )
}
