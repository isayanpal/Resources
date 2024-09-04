import React from "react";
import { Link } from "react-router-dom";

const Web = () => {
  return (
    <div className="m-2 p-2 justify-center flex flex-col items-center gap-3">
      <div className="self-start p-3 font-semibold">
        <Link to="/" className="cursor-pointer">
          Back
        </Link>
      </div>
      <div className="text-3xl font-semibold cursor-default text-center">
        Guide to Web Development
      </div>

      <div className="w-full">
        <iframe
          className="w-[100%] sm:h-[50rem] h-[30rem]"
          src="https://whimsical.com/embed/X67XBGJLprQ58mtaiKb81p"
        ></iframe>
      </div>
    </div>
  );
};

export default Web;
