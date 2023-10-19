import { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
const IMG_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;
function Slider() {
  const [moviesList, setMoviesList] = useState([]);
  const elementRef = useRef();
  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((res) => {
      // console.log(res.data.results);
      setMoviesList(res.data.results);
    });
  };
  const slideLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };
  const slideRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };
  return (
    <>
      <HiChevronLeft
        onClick={() => slideLeft(elementRef.current)}
        className=" hidden md:block cursor-pointer absolute  text-white text-[30px] mx-8 mt-[150px]"
      />
      <HiChevronRight
        onClick={() => slideRight(elementRef.current)}
        className="hidden md:block cursor-pointer absolute right-0 text-white text-[30px] mx-8 mt-[150px]"
      />
      <div
        className="flex overflow-x-auto scrollbar-none px-16 py-4 scroll-smooth"
        ref={elementRef}
      >
        {moviesList.map((item, index) => {
          return (
            <img
              key={index}
              src={IMG_BASE_URL + item.backdrop_path}
              className="duration-100 ease-in-out hover:border-gray-400 hover:border-4 transition-all min-w-full  h-[310px] object-cover object-left-top mr-6 rounded-md"
            />
          );
        })}
      </div>
    </>
  );
}

export default Slider;
