import { useEffect, useState } from "react"

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => setIsOpen(true)

  const closeModal = () => setIsOpen(false)





  // to add esapc key

  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }


    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }

  }, [isOpen])




  // to aviod scool efeect
  useEffect(() => {
    if (!isOpen) return

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevOverflow
    }

  }, [isOpen])
  return (
    <div className="h-screen  w-full flex  items-center justify-center ">
      <div className="p-6">
        <button onClick={openModal} className="border bg-black text-white rounded-md shadow-md   cursor-pointer px-4 py-1">
          Open
        </button>

        {isOpen ? (
          <div onClick={closeModal} className="  fixed 
           inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white w-[20rem] p-6 rounded-sm shadow-black   shadow-md " onClick={(e) => e.stopPropagation()}>
              <p>Modal content</p>
              <button onClick={closeModal} className="border bg-black text-white rounded-md shadow-md   cursor-pointer px-4 py-1 mt-2">
                Close
              </button>
            </div>

          </div>
        ) : null}
      </div>

    </div>
  )
}

export default Modal