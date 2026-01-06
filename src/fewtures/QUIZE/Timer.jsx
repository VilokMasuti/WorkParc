import { useEffect, useState } from "react"

const Timer = ({ onEnd }) => {
  const [leftCount, setLeftCount] = useState(10)

  useEffect(() => {
    const interval = setInterval(() => {
      setLeftCount((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          onEnd() // Notify parent
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [onEnd])

  return <div className="text-xl font-semibold">TIMER - {leftCount}</div>
}

export default Timer
