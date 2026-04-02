import { motion } from "framer-motion"

export default function Toast({ message, type = "success" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0,   scale: 1    }}
      exit={{    opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="
        flex items-center gap-3
        px-4 py-3 rounded-xl
        bg-zinc-900 border border-zinc-800
        shadow-xl shadow-black/40
        min-w-[300px] max-w-sm
      "
    >
      {/* Left accent line */}
      <div className={`
        w-1 h-8 rounded-full flex-shrink-0
        ${type === "success" ? "bg-emerald-400" :
          type === "error"   ? "bg-red-400"     :
          type === "warning" ? "bg-yellow-400"  :
          "bg-emerald-400"}
      `}/>

      {/* Icon */}
      <span className="text-lg">
        {type === "success" ? "✅" :
         type === "error"   ? "❌" :
         type === "warning" ? "⚠️" : "✅"}
      </span>

      {/* Message */}
      <p className="text-zinc-100 text-sm font-medium flex-1">
        {message}
      </p>

      {/* Close button */}
      <button className="
        text-zinc-500 hover:text-zinc-200 
        transition-colors text-lg leading-none
      ">
        ×
      </button>
    </motion.div>
  )
}