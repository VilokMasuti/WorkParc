const Pcard = ({card}) => {


  return (
    <section className="relative w-[20rem] h-[20rem] bg-slate-100 shadow-2xl rounded-2xl overflow-hidden">
      {/* Top banner */}
      <div className="h-[7rem] bg-gradient-to-r from-indigo-400 to-purple-400"></div>

      {/* Profile image in the middle */}
      <div className="absolute top-[4rem] left-1/2 -translate-x-1/2">
        <img
          src={card.img}
          alt={card.name}
          className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
        />
      </div>

      {/* Content below */}
      <div className="mt-20 flex flex-col items-center px-4 text-center">
        <h2 className="text-lg font-semibold">{card.name}</h2>
        <p className="text-sm text-gray-600">{card.desc}</p>
        <button className="mt-3 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">
          {card.customBtn}
        </button>
      </div>
    </section>

  )
}
export default Pcard
