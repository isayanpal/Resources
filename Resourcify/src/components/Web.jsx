import React from "react";

const Web = () => {
  return (
    <div className="m-2 p-2 justify-center flex flex-col items-center gap-3">
      <div className="text-3xl font-semibold cursor-default mt-10">
        Guide to Web Development
      </div>

      <div>
        <iframe
          width="1000"
          height="750"
          src="https://whimsical.com/embed/X67XBGJLprQ58mtaiKb81p"
        ></iframe>
      </div>
    </div>
  );
};

export default Web;
