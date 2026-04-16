import { useState } from "react"

const Toast = () => {
  const [toasts, setToasts] = useState([])
const Max_Toasts = 3
  const toastStyles = {
  success: {
    border: "border-emerald-500",
    bg: "bg-emerald-950",
    title: "text-emerald-300"
  },
  error: {
    border: "border-red-500",
    bg: "bg-red-950",
    title: "text-red-300"
  },
  warning: {
    border: "border-yellow-500",
    bg: "bg-yellow-950",
    title: "text-yellow-300"
  },
  info: {
    border: "border-sky-500",
    bg: "bg-sky-950",
    title: "text-sky-300"
  }
}


const Removetoast = (id) => {
  setToasts((pre) => pre.filter((p) => p.id !== id))
}


const AddToast = ({  type='info', title='Notice',   message=''} ={}) => {
const id = Date.now()
  const NewToast = {
    id,type,title,   message
  }

 setToasts(pre =>  [...pre, NewToast].slice(-Max_Toasts) )

  setTimeout(() => {
Removetoast(id)
  },3000)

}



  
  return (
   
<div className=" bg-neutral-900  shadow-md flex flex-col gap-10  p-6 min-h-screen items-center justify-center">
<div className=" flex gap-[4rem]">
  <button
  onClick={() => {
    AddToast({
     type: "success",
              title: "Saved",
               message: "Your changes were saved successfully"
            
    })
  }}
  className=" bg-green-500  mask-auto shadow-green-800 outline-green-950 px-2 py-1 rounded-md cursor-pointer  "
  >
 Success
  </button>
<button
          onClick={() =>
            AddToast({
              type: "error",
              title: "Failed",
              message: "Something went wrong"
            })
          }
       className=" bg-yellow-200  mask-auto shadow-yellow-800  px-6 py-1 rounded-md cursor-pointer  border-2 "
  >
        
          Error
        </button>

        <button
          onClick={() =>
            AddToast({
              type: "warning",
              title: "Warning",
              message: "Please check your input again"
            })
          }
        className=" bg-red-400  mask-auto shadow-red-800 outline-red-950 px-2 py-1 rounded-md cursor-pointer  "
  >
      
          Warning
        </button>
</div>

<div className=" flex gap-5 flex-col">
   {toasts.map((toast) => {
      const style = toastStyles[toast.type] || toastStyles.info
      return(
         <div
              key={toast.id}
              className={`w-80 rounded-lg border p-4 shadow-lg ${style.border} ${style.bg}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className={`font-semibold ${style.title}`}>
                    {toast.title}
                  </h3>

                  <p className="mt-1 text-sm text-zinc-300">
                    {toast.message}
                  </p>
                </div>

                <button
                  onClick={() => Removetoast(toast.id)}
                  className="text-zinc-400 hover:text-white"
                >
                  x
                </button>
              </div>
            </div>
      )
   })}
</div>

    </div>
  )
}

export default Toast