import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css"
const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const handleClick = (getCurrentIndex) => {
    console.log(getCurrentIndex);
    setRating(getCurrentIndex)
  };
  const handleMouseEnter = (getCurrentIndex) => {
    console.log(getCurrentIndex);
    setHover(getCurrentIndex)

  };
  const handleMouseLeave = () => {
    setHover(rating)
  };

  return (
    <>
      <div className="star-rating flex gap-5 justify-center mt-5">
        {[...Array(noOfStars)].map((_, index) => {
          return (
            <FaStar
              key={index}
              className={index+1 <=(hover || rating)?"active":"inactive"}
              onClick={() => handleClick(index+1)}
              onMouseMove={() => handleMouseEnter(index+1)}
              onMouseLeave={() => handleMouseLeave()}
              size={40}
            />
          );
        })}
      </div>
    </>
  );
};

export default StarRating;
