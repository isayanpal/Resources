import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-row sm:justify-around p-2 gap-3">
      <Link to={"/"}>
        <div className="cursor-pointer font-bold text-2xl text-[#1D24CA]">
          Resourcify
        </div>
      </Link>
      <div className="flex sm:flex-row flex-col gap-5 cursor-pointer font-semibold text-xl">
        <Link to={"/web-dev"}>
          <div className=" hover:text-[#1D24CA] hover:shadow-xl text-center">
            Web Development
          </div>
        </Link>
        <Link to={"/design"}>
          <div className="hover:text-[#1D24CA] hover:shadow-xl">
            UI & UX Design
          </div>
        </Link>
      </div>
      <Link to={"https://github.com/isayanpal/Resources"} target="blank">
        <div className="cursor-pointer hover:shadow-xl font-light">Github </div>
      </Link>
    </div>
  );
};

export default Header;
