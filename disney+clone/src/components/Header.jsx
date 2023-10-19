import { useState } from "react";
import logo from "../assets/Images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItems from "./HeaderItems";
function Header() {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    { name: "SERIES", icon: HiTv },
  ];
  return (
    <div className="flex p-5  text-center  justify-between">
      <div className="flex gap-8">
        <img
          src={logo}
          alt="disney_logo"
          className="w-[80px] md:w-[115px]  object-cover"
        />
        <div className=" gap-8 hidden md:flex">
          {menu.map((item, index) => (
            <HeaderItems key={index} name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex gap-5 md:hidden items-center">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItems key={index} Icon={item.icon} />
          )}
          <div
            className="md:hidden"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <HeaderItems Icon={HiDotsVertical} />
            {toggle && (
              <div className="absolute mt-3 bg-[#121212] border-[1px] p-3 px-5 py-4 border-gray-700">
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItems
                        key={index}
                        name={item.name}
                        Icon={item.icon}
                      />
                    )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        className="w-[40px] rounded-full"
      />
    </div>
  );
}

export default Header;
