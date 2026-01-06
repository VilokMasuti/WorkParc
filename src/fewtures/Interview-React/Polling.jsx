import { useState } from "react";
import { PollingOptions } from "../../Data";

const Polling = () => {
  const Poll =  PollingOptions[0]
  const [selectedOption, setSelectedOption] = useState(Poll.options);
  const [userChoice,setUserChoice] = useState(null);

  const handleChnageVote = (id) => {
    if(userChoice !== null) return

    setSelectedOption((pre) => pre.map((opt) =>( opt.id === id ? {...opt,votes:opt.votes +1} : opt)))
    setUserChoice(id)

  }

  const TotalVotes = selectedOption.reduce((acc,op) => acc + op.votes,0)

  console.log(TotalVotes);



  return (
   <main className="">

    <div className="flex-col flex  justify-center gap-1.5">
<h1 className=" text-2xl font-semibold antialiased"> {Poll.question}</h1>

{selectedOption.map((op) => (
  <div key={op.id} onClick={() => handleChnageVote(op.id)} className="gap-2 border rounded-md p-3  border-black shadow w-full">
{op.label}
 <span className={`  ${TotalVotes === 1 ? 'opacity-100' : 'opacity-10'} float-right`}> Votes- {op.votes}</span>
    </div>
))}


    </div>
<div>
  {userChoice && <p className=" text-2xl text-black  font-semibold">Total votes- {TotalVotes}-{selectedOption.find((op) => op.id === userChoice).label}</p>}
</div>

   </main>
  )
}
export default Polling



