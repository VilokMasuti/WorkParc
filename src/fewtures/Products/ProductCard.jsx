
const ProductCard = ({DATA}) => {

 const getStockStatus = (stock) => {
  if (stock === 0) return { label: "Out of Stock", bg: "bg-red-600" };
  if (stock <= 10) return { label: "Low Stock", bg: "bg-yellow-400" };
  return { label: "In Stock", bg: "bg-green-500" };
};
  const { label, bg } = getStockStatus(DATA.stock);


  return (


     <div className="w-[20rem] bg-slate-50 shadow-md flex flex-col gap-2.5 p-3 text-black rounded-md">
      <img
        src={DATA.thumbnail}
        alt={DATA.title}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold">{DATA.title}</h2>
      <p className="text-sm text-gray-600">₹{DATA.price}</p>

      <div className="flex gap-2 items-center">
        <span className="text-xs px-2 py-1 bg-slate-400 rounded-full shadow">
          {DATA.category}
        </span>
        <span className={`text-xs px-2 py-1 rounded-full shadow ${bg}`}>
          {label}
        </span>
      </div>
    </div>

  );
}

export default ProductCard
