import React from "react";

import pixar from "../assets/Images/pixar.png";
import marvel from "../assets/Images/marvel.png";
import nationalG from "../assets/Images/nationalG.png";
import starwar from "../assets/Images/starwar.png";
import disney from "../assets/Images/disney.png";
import disneyV from "../assets/Videos/disney.mp4";
import pixarV from "../assets/Videos/pixar.mp4";
import marvelV from "../assets/Videos/marvel.mp4";
import nationalV from "../assets/Videos/national-geographic.mp4";
import starwarV from "../assets/Videos/star-wars.mp4";
function ProductionHouse() {
  const productionList = [
    {
      id: 1,
      image: disney,
      video: disneyV,
    },
    {
      id: 2,
      image: marvel,
      video: marvelV,
    },
    {
      id: 3,
      image: pixar,
      video: pixarV,
    },
    {
      id: 4,
      image: nationalG,
      video: nationalV,
    },
    {
      id: 5,
      image: starwar,
      video: starwarV,
    },
  ];
  return (
    // <div>Prod</div>
    <div className="flex  gap-2 md:gap-5 p-2 px-5 md:px-16">
      {productionList.map((item, index) => (
        <div
          key={index}
          className="border-[2px] border-gray-600
        rounded-lg hover:scale-110 transition-all duration-300
        ease-in-out cursor-pointer relative shadow-xl 
        shadow-black
        "
        >
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            muted
            className="absolute z-0  top-0 rounded-md 
            opacity-0 hover:opacity-50"
          />
          <img src={item.image} className="w-full opacity-100 z-10" />
        </div>
      ))}
    </div>
  );
}

export default ProductionHouse;
