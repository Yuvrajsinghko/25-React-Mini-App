import { useEffect, useState } from "react";

const ImageSlider = ({ url, limit, page }) => {
  const [image, setImage] = useState([]);
  const [currentSlide, setcurrentSlide] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    if (url !== "") {
      async function fetchImages(getUrl) {
        try {
          setloading(true);
          const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
          const data = await response.json();
          console.log(data);
          

          if (data) {
            setImage(data);
            setloading(false);
          }
        } catch (e) {
          setError(e.message);
          setloading(false);
        }
      }
      fetchImages(url)

    }
  }, [url,limit,page]);
  if (loading) {
    return <>Loading....</>;
  }

  if (error !== null) {
    return <>Error Occured!</>;
  }
  return <div className="container"></div>;
};

export default ImageSlider;
