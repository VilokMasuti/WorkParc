import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const limit =100;     // total items to fetch
  const pageSize = 10;   // items per page

  // fetch products
  useEffect(() => {
    const fetchApi = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://dummyjson.com/products?limit=${limit}`);
        const data = await res.json();
        setProducts(Array.isArray(data.products) ? data.products : []);
      } catch (err) {
        setError(err.message || "Fetch failed");
      } finally {
        setLoading(false);
      }
    };
    fetchApi();
  }, []);

  // pagination calculations
  const totalPages = Math.ceil(products.length/pageSize)
  const startIndex = currentPage * pageSize;
  const endIndex = startIndex + pageSize;
  const currentProducts = products.slice(startIndex, endIndex);

  // handlers
  const goToPage = (page) => {
    if (page >= 0 && page < totalPages) {
      setCurrentPage(page);
    }
  };

  if (loading) return <p className="text-center mt-10">Loading…</p>;
  if (error) return <p className="text-center mt-10 text-red-500">Error: {error}</p>;

  return (
    <section className="mt-10">
      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {currentProducts.map((item) => (
          <ProductCard key={item.id} DATA={item} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 gap-2">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 0}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, idx) => (
          <button
            key={idx}
            onClick={() => goToPage(idx)}
            className={`px-3 py-1 border rounded ${
              idx === currentPage ? "bg-blue-500 text-white" : ""
            }`}
          >
            {idx + 1}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages - 1}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Products;
