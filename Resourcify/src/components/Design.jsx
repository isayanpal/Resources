import React from "react";
import { Link } from "react-router-dom";

const Design = () => {
  return (
    <div className="m-2 p-2 justify-center flex flex-col items-center gap-3">
      <div className="self-start p-3 font-semibold">
        <Link to="/" className="cursor-pointer">
          Back
        </Link>
      </div>
      <div className="text-3xl font-semibold cursor-default text-center">
        Guide to UI UX Design
      </div>
      <div className="w-full">
        <iframe
          className="w-[100%] sm:h-[50rem] h-[30rem] rounded-md"
          src="https://whimsical.com/embed/9ZuCtEdv93eBo7NBwJZEvi"
        ></iframe>
      </div>
    </div>
  );
};

export default Design;
