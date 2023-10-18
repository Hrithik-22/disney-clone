import { useEffect } from "react";
import GlobalApi from "../services/GlobalApi";

function Slider() {
  useEffect(() => {
    getTrendingMovies();
  }, []);
  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((res) => {
      console.log(res);
    });
  };
  return <div>Slider</div>;
}

export default Slider;
