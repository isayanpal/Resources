import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { GrResources } from "react-icons/gr";

const Header = () => {
  return (
    <div className="flex flex-row justify-between sm:justify-around py-4 px-2 gap-3">
      <Link to={"/"}>
        <div className="cursor-pointer font-bold text-2xl text-[#1D24CA] flex flex-row items-center gap-1">
          <GrResources /> Resourcify
        </div>
      </Link>
      <Link to={"https://github.com/isayanpal/Resources"} target="blank">
        <div className="cursor-pointer hover:shadow-xl font-light flex flex-row items-center gap-1">
          Github <FaGithub />
        </div>
      </Link>
    </div>
  );
};

export default Header;
