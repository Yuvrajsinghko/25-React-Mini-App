import React from "react";
import RandomColorGenerator from "./component/random-color";
import StarRating from "./component/star-rating";
import ImageSlider from "./component/imageSlider";
import Timer from "./component/practice";
import Prac from "./component/practice";
import Counter from "./component/practice";

const App = () => {
  return (
    <div>
      {/* <RandomColorGenerator /> */}
      {/* <StarRating /> */}
      <ImageSlider url={'https://picsum.photos/v2/list'} limit={'5'} page={'3'} />
      {/* <Timer /> */}
      {/* <Counter /> */}
    </div>
  );
};

export default App;
