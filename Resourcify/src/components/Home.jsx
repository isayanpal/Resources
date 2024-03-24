import React from "react";
import home from "../assets/home.jpg";

const Home = () => {
  return (
    <div className="m-2 p-2 justify-center flex flex-col items-center gap-2">
      <div className="text-3xl font-semibold cursor-default mt-10">
        Welcome to my free Resources Page !!
      </div>
      <div className="font-medium">Get all needed resources at one place.</div>
      <div className="flex justify-center sm:h-[700px] sm:w-[900px] h-[300px] w-[400px]">
        <img src={home} alt="" />
      </div>
    </div>
  );
};

export default Home;
