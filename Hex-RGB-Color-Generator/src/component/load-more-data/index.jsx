import { useEffect, useState } from "react";
import "./style.css";

const InfiniteDataScroll = ({ url }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${url}&skip=${count === 0 ? 0 : count * 20}`,
      );
      const data = await response.json();

      if (data?.products?.length) {
        setProducts((prev) => [...prev, ...data.products]);
        setLoading(false);
      }
      console.log(data);
    } catch (e) {
      console.error(e);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("effect run");

    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 60) setDisable(true);
  }, [products]);

  if (loading) {
    return (
      <div className="text-2xl font-bold text-amber-300">
        {" "}
        Loading Data..... Please Wait
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <div className="product-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full max-w-6xl">
        {products && products.length
          ? products.map((item) => (
              <div
                className="border border-amber-100 h-72 w-72 rounded-3xl"
                key={item.id}
              >
                <img
                  className="object-cover"
                  src={item.thumbnail}
                  alt={item.title}
                />
              </div>
            ))
          : null}
      </div>
      <div className="bg-amber-500 p-3 text-3xl font-bold mt-5 rounded-2xl hover:bg-amber-200">
        <button disabled={disable} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
      </div>
      {disable ? <p className="text-4xl text-cyan-500">You have reached {products.length} products</p> : ""}
    </div>
  );
};

export default InfiniteDataScroll;
