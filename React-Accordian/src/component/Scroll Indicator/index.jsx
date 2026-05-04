import axios from "axios";
import { useEffect, useState } from "react";
import "./scroll.css"
const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errormessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const fetchData = async (geturl) => {
      try {
        setLoading(true);
        const res = await axios.get(geturl);

        const productData = res.data.products;
        if (res && productData.length) {
          setData(productData);
          setLoading(false);
        }
      } catch (e) {
        console.log(e);
        setErrorMessage(e.message);
      }
    };
    fetchData(url);
  }, [url]);

  const handleScrollPercentage = () => {
    // console.log(
    //   document.body.scrollTop,
    //   document.documentElement.scrollTop,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight,
    // );
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPercentage((howMuchScrolled / height) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return window.removeEventListener("scroll", () => {});
  });
  if (loading){
    return <div>Loading....</div>
  }
  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="data-container">
        {data && data.length
          ? data.map((dataitem, id) => <p key={id}>{dataitem.title}</p>)
          : null}
      </div>
    </div>
  );
};

export default ScrollIndicator;
