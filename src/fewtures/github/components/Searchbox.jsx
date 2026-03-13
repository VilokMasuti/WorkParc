

const Searchbox = ({ username, setUsername, onSearch }) => {

  return (
    <div className="mt-10 gap-5   ">
      <input type="text"
      placeholder="Search for the Profile"
    value={username}
        onChange={(e) => setUsername(e.target.value)}
      onKeyDown={(e) => e.key === 'Enter' && onSearch()}
      className=" w-[21rem]  px-2  py-1  rounded-md    text-zinc-950  focus:outline-none border-zinc-900 border-4"
      />

      <button
        onClick={onSearch}
      className=" sm:px-3 sm:py-1.5 w-[10rem] px-2 py-1 ml-3 rounded-md bg-zinc-900 text-white cursor-pointer">GET DATA</button>
    </div>
  )
}

export default Searchbox