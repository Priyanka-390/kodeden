"use client";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Leftarrow, Linkdinicon, Rightarrow } from "./Icon";
import { Sliderdata } from "./Mapdata";
import { useRef } from "react";
import Buttons from "./Buttons";
export default function Students() {
  const slider = useRef(null);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow:2
        }
      },
       {
        breakpoint: 768,
        settings: {
          slidesToShow:1
        }
      }
    ]
  };
  return (
    <div className="py-lg-5 overflow-x-clip my-md-5 position-relative">
      <div className="container py-sm-5 my-5">
        <h2 data-aos="flip-down" className=" ff-jost text-grey2 fw-medium text-center pt-3 mb-0 pb-md-5 pb-3 fs-50 lh-72">
          What our <span className="text-orange-gradient">students</span> are
          saying
        </h2>
        <Slider {...settings} ref={slider}>
          {Sliderdata.map((data, i) => {
            return (
              <div data-aos="flip-down" key={i} className="slidercard pe-1">
                <h2 className="ff-jost fw-normal mb-0 pb-1 text-white fs-24 lh-36">
                  {data.heading}
                </h2>
                <p className="ff-jost max-w-335 text-lightgrey pb-1 mb-0 fw-normal fs-16 lh-25">
                  {data.para}
                </p>
                <a
                  href=""
                  className="ff-jost fw-semibold fs-16 lh-25 text-lightwhite text-decoration-none"
                >
                  Read More...
                </a>
                <div className="d-flex pt-4 align-items-center pe-4 justify-content-between">
                  <div className="d-flex ">
                    <Image
                      src={data.img}
                      width={52.62}
                      height={52.62}
                      alt="img-1"
                    />
                    <div className="ps-2">
                      <p className="ff-jost mb-0 ps-1 lh-28 text-white fw-normal fs-20">
                        {data.name1}
                      </p>
                      <p className="fs-14 ps-2 mb-0 pe-2 text-lightgrey fw-normal ff-jost lh-20">
                        {data.name2}
                      </p>
                    </div>
                  </div>
                  <Linkdinicon />
                </div>
              </div>
            );
          })}
        </Slider>
             <div className=" d-flex gap-4 justify-content-center pt-3 pt-sm-0">
               <button
                       className="sliderbtn-1"
                       onClick={() => slider?.current?.slickPrev()}
                     >
                       <Leftarrow />
                     </button>
                     <button
                       className="sliderbtn-2"
                       onClick={() => slider?.current?.slickNext()}
                     >
                       <Rightarrow />
                     </button>
             </div>
        <div className="d-flex pt-lg-5 pt-3 my-2 justify-content-center">
          <Buttons text="Book a Call NOW" />
        </div>
      </div>
 
    </div>
  );
}
