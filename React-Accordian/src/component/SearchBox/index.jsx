import { useEffect, useState } from "react";
import useDebounce from "../Debounce";

const SearchBox = () => {
  const [query, setquery] = useState("");
  const debouncedQuery = useDebounce(query, 600);
  
  useEffect(() => {
    if (!debouncedQuery) return;
    console.log("API call made with" + debouncedQuery);
  }, [debouncedQuery]);
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-5">
      <h2 className="text-6xl text-amber-600">SearchBox</h2>
      <input
        className="p-5 outline-none border-2 border-b-blue-600"
        value={query}
        onChange={(e) => setquery(e.target.value)}
        type="text"
      />
    </div>
  );
};

export default SearchBox;
