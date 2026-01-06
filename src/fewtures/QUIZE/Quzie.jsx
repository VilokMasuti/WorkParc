import { useState } from "react"
import questions from "./Question"
import Timer from "./Timer"

const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [over, setOver] = useState(false)

  const handleSelect = (selected) => {
    if (selected === questions[currentIndex].answer) {
      setScore((prev) => prev + 1)
    }

    if (currentIndex === questions.length - 1) {
      setOver(true)
    } else {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  const handleTimerEnd = () => {
    setOver(true)
  }

  const handleRestart = () => {
    setCurrentIndex(0)
    setScore(0)
    setOver(false)
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl font-bold mb-4">Quiz Component</h1>

      {!over && <Timer onEnd={handleTimerEnd} />}

      {over ? (
        <div className="bg-white p-6 rounded-xl shadow-xl text-center text-black">
          <h2 className="text-3xl font-bold mb-4">Quiz Completed!</h2>
          <p className="text-xl mb-6">Your final score: {score} / {questions.length}</p>
          <button
            onClick={handleRestart}
            className="bg-blue-600   text-black px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <section className="w-[40rem] h-[20rem] mt-7 bg-slate-500 shadow-2xl rounded-2xl overflow-hidden flex flex-col gap-2">
          <h1 className="text-2xl text-white text-center">
            {questions[currentIndex].question}
          </h1>
          <div className="flex flex-col gap-2 px-4">
            {questions[currentIndex].options.map((opt, id) => (
              <button
                onClick={() => handleSelect(opt)}
                key={id}
                className="bg-zinc-800 text-white px-3 py-2 rounded-md cursor-pointer"
              >
                {opt}
              </button>
            ))}
          </div>
        </section>
      )}
    </section>
  )
}

export default Quiz
