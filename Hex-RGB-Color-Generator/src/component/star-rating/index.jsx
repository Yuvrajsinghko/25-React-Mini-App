import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './style.css'
const StarRating = ({ noOfStars = 6 }) => {
  const [rating, setRating] = useState(0);

  const [hover, setHover] = useState(0);

  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex)
    
  };
  const handleMouseEnter = (getCurrentIndex) => {
    setHover(getCurrentIndex)
    
  };
  const handleMouseLeave = ()=>{
    // console.log(`left Star number:${getCurrentIndex}`);
    setHover(rating)

  }


  return (
    <div className="h-screen w-screen flex justify-center gap-15 bg-black  text-9xl">
      {[...Array(noOfStars)].map((_, idx) => {
        idx+=1
        return (
          <FaStar
            key={idx}
            className={idx <=(hover || rating)? 'Active':'Inactive'}
            onClick={()=>handleClick(idx)}
            onMouseEnter={()=>handleMouseEnter(idx)}
            onMouseLeave={()=>handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
