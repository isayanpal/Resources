import React from "react";
import home from "../assets/home.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="sm:mx-2 px-2 justify-center flex flex-col items-center gap-2 min-h-screen">
      <h1 className="text-3xl font-semibold cursor-default text-center">
        Welcome to Your Ultimate Free Resource Hub!
      </h1>
      <p className="font-medium">Get all needed resources at one place.</p>

      <div className="flex flex-col justify-center items-center mt-3 ">
        <div className="flex flex-col sm:flex-row justify-center gap-10">
          <Link to="/web-dev">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className="w-[350px] h-[250px] text-center flex flex-col justify-center items-center  rounded-3xl shadow-xl p-2 bg-gradient-to-r from-blue-200 to-cyan-200"
            >
              <h2 className="text-xl font-semibold">Web Development</h2>
              <p>Start your Web Development journey from here.</p>
            </motion.div>
          </Link>
          <Link to="/design">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className="w-[350px] h-[250px] text-center flex flex-col justify-center items-center shadow-xl rounded-3xl p-2 bg-gradient-to-r from-blue-200 to-cyan-200"
            >
              <h2 className="text-xl font-semibold">UI & UX Design</h2>
              <p>Learn the UI UX principles and much more!</p>
            </motion.div>
          </Link>
        </div>
      </div>

      <div className="flex justify-center sm:h-[450px] sm:w-[650px] h-[300px] w-[400px]">
        <img src={home} alt="" />
      </div>
    </div>
  );
};

export default Home;
