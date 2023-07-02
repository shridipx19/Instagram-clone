import React from "react";
import { BsPlusSquare } from "react-icons/bs";
import {
  AiOutlineHeart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import textLogoPng from "../utils/instagram.svg";

const Header = () => {
  return (
    <>
      {/* top Header for mobile */}
      <div className="h-11 w-full bg-black p-4 flex justify-between items-center tablet:hidden top-0 sticky">
        <div className="h-[29px] w-[103px]">
          <Link>
            <img className="" src={textLogoPng} />
          </Link>
        </div>

        <div className="flex gap-1.5">
          <Link>
            <BsPlusSquare className="text-white h-6 w-6 p-1" />
          </Link>

          <Link>
            <AiOutlineHeart className="text-white h-6 w-6 p-0.5" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
