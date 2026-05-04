import Accordian2 from "./component/accordian2/acc";
import ModalTest from "./component/Modal-popup/modal-test";
import QCode from "./component/QR-Code_generator";
import RandomColorGenerator from "./component/RandomColor_Generator";
import ScrollIndicator from "./component/Scroll Indicator";
import SearchBox from "./component/SearchBox";
import StarRating from "./component/StarRating";
import LightDarkMode from "./component/Theme-CHange";

const App = () => {

  return (
    <div>
      {/* <Accordian /> */}

      {/* <Accordian2 /> */}
      {/* <RandomColorGenerator /> */}
      {/* <StarRating noOfStars={10}/> */}
      {/* <QCode /> */}
      {/* <LightDarkMode /> */}
      {/* <ModalTest /> */}
      {/* <SearchBox /> */}
      <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} />
   
    </div>
  );
};

export default App;
