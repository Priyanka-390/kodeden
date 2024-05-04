"use client";
import React, { useState, useEffect } from "react";
import { Uparrow } from "./Icon";
const Backtop = () => {


  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  return (
    <div className="">
      <button
        className={`group animate-bounce border-2 d-flex backtop justify-content-center z-3   hover:shadow-[1px_1px_1px_1px_purple-600] ${
          backToTop ? "" : "d-none"
        }`}
        onClick={() => top()}
      >
        <Uparrow />
      </button>
    </div>
  );
};

export default Backtop;
