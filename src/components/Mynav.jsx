"use client";

import { useEffect, useState } from "react";
import { Navdata } from "./Mapdata";

export default function Mynav() {
  const [show, setshow] = useState(true);
  useEffect(() => {
    if (show === false) {
      document.body.classList.add("overflow_hidden");
    } else {
      document.body.classList.remove("overflow_hidden");
    }
  });
  return (
    <div className="d-flex justify-content-center pt-3 align-items-center">
      <div className="container">
        <div className="d-flex justify-content-end">
          <ul className={`${show ? "left_100" : "left_0"}  nav_bar ps-0 mb-0`}>
            {Navdata.map((data, i) => {
              return (
                <li onClick={() => setshow(!show)} key={i}>
                  <a
                    href={data.path}
                    className="ff-jost navlink fw-medium text-decoration-none fs-16 text-grey lh-23 "
                  >
                    {data.link}
                  </a>
                </li>
              );
            })}
            <li>
              <a href="">
                <button className="fs-14 navbtn px-4 text-lightwhite fw-900">
                  Get Started
                </button>
              </a>
            </li>
          </ul>
          <div
            onClick={() => setshow(!show)}
            className={`${show ? "" : "cross"} navline`}
          >
            <span className="crl-1"></span>
            <span className="crl-2"></span>
            <span className="crl-3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
