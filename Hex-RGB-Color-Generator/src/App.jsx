import React from "react";
import RandomColorGenerator from "./component/random-color";
import StarRating from "./component/star-rating";
import ImageSlider from "./component/imageSlider";
import Timer from "./component/practice";
import Prac from "./component/practice";
import Counter from "./component/practice";
import InfiniteDataScroll from "./component/load-more-data";
import TreeView from "./component/Nested-sidebar";
import menus from "./component/Nested-sidebar/data";

const App = () => {
  return (
    <div className="text-amber-200">
      {/* <RandomColorGenerator /> */}
      {/* <StarRating /> */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={'5'} page={'3'} /> */}
      {/* <Timer /> */}
      {/* <Counter /> */}
      {/* <InfiniteDataScroll url={'https://dummyjson.com/products?limit=20'} /> */}
      <TreeView menus={menus} />
    </div>
  );
};

export default App;
