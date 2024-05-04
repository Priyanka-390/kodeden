import Image from "next/image";
import Buttons from "./Buttons";
export default function Whoaresec() {
  return (
    <div className="z-0 overflow-x-clip position-relative pt-sm-0 pt-3">
      <div className="py-lg-5 py-2 position-relative z-1">
        <Image
          width={110.87}
          height={36.29}
          alt="imag"
          src="/assets/images/svg/whosecvector.svg"
          className="whoarevector d-md-block d-none"
        />
        <div className="container mb-sm-4 mt-sm-2 py-sm-5 py-4">
          <h2 data-aos="fade-down" className="ff-jost text-center fw-medium py-md-5 py-2 mt-sm-5 text-white fs-50">
            Who Are <span className=" text-orange-gradient">We</span>?
          </h2>
          <div className="row align-items-center justify-content-between">
            <div data-aos="fade-right" className="col-xl-5 col-md-6 ">
              <Image
                src="/assets/images/webp/whosecimg.webp"
                width={474.82}
                height={588.15}
                alt="whoimg"
                className="w-100 max-md-h-588 max-h-400 "
              />
            </div>
            <div className="col-md-6  mt-md-0 mt-3 d-flex justify-content-end">
              <div className="max-w-494">
                <p data-aos="fade-left" className="fs-14 text-md-start text-center text-grey2 fw-normal pb-sm-1 ff-jost mb-0 lh-22">
                  MEET YOUR INSTRUCTORS
                </p>
                <h3 data-aos="fade-left" className="ff-jost text-md-start text-center text-grey2 fw-medium py-1 fs-30 lh-41">
                  Hi, We’re Kody Doherty <span className="d-lg-block"></span>{" "}
                  and Kolton Starr 👋
                </h3>
                <p data-aos="fade-left" className="ff-jost text-md-start text-center fw-normal mb-0 fs-16 text-lightgrey lh-25">
                  And we know firsthand that building a career as a software
                  engineer <span className="d-lg-block"></span> without a
                  computer science degree is possible.{" "}
                </p>
                <p data-aos="fade-left" className="ff-jost text-md-start text-center mb-0 fw-normal fs-16 text-lightgrey lh-25">
                  We started where you are *right now*—without engineering
                  degrees, a professional portfolio, or years of experience.{" "}
                </p>
                <p data-aos="fade-left" className="ff-jost text-md-start text-center mb-0 fw-normal fs-16 text-lightgrey lh-25">
                  Then we climbed the ranks to hold senior positions at tech
                  titans like Amazon, Apple, and the US government.
                </p>
                <p data-aos="fade-left" className="ff-jost text-md-start text-center mb-0 fw-normal fs-16 text-lightgrey lh-25">
                  Throughout our careers, we’ve managed entire teams of
                  engineers, directed $30 million program budgets, and built 2
                  successful tech startups (one that we sold).
                </p>
                <p data-aos="fade-left" className="ff-jost text-md-start text-center fw-normal mb-0 pb-lg-3 fs-16 text-lightgrey lh-25">
                  Learning to code did more than add a few impressive lines to
                  our resumes. It literally changed our lives…
                </p>
                <p data-aos="fade-left" className=" fs-16 text-md-start text-center text-lightwhite pb-lg-5 pb-2 mb-0 fw-semibold ff-jost lh-23 text-orange-gradient pt-1">
                  I want to live my dream now!
                </p>
                <div className="d-flex justify-content-md-start justify-content-center">
                  <Buttons text="Book a Call NOW" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerline"></div>
      <div className="container py-3">
          <div className="d-flex py-md-5 flex-sm-row flex-column align-items-center py-1 gap-sm-2  justify-content-md-end justify-content-center">
            <a
              href=""
              className=" ff-jost fw-normal text-grey3 footlink fs-20 text-decoration-none lh-229"
            >
              {" "}
              Privacy Policy
            </a>
            <a
              href=""
              className=" ff-jost fw-normal footlink text-grey3 fs-20 text-decoration-none lh-229"
            >
              {" "}
              |  Terms of Service  |
            </a>
            <a
              href=""
              className=" ff-jost fw-normal text-grey3 fs-20 footlink text-decoration-none lh-229"
            >
              {" "}
              Cookie Policy
            </a>
          </div>
      </div>
    </div>
  );
}
