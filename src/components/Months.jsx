import Buttons from "./Buttons";
import Image from "next/image";
export default function Months() {
  return (
    <div className="position-relative overflow-x-clip z-0">
      <Image src="/assets/images/svg/monthvector.svg" width={160} height={60} alt="month" className="monthvector d-md-block d-none position-absolute" />
      <div className="container">
        <h2 data-aos="zoom-in" className="ff-jost text-uppercase text-white pt-3 mb-0  mt-1 text-center fw-semibold fs-24 lh-31">
          Become a <span className="text-orange-gradient">Software</span> Engineer Now!
        </h2>
        <p data-aos="zoom-in" className="fs-16 ff-jost text-lightgrey pb-1 mb-0 fw-normal text-center pt-2">No Math or Science Background Needed</p>
          <div className="d-flex pt-md-4 mt-2 mb-md-5 justify-content-center">
                  <Buttons text="Book a Call NOW" />
                </div>
        <div id="about"  className="row flex-column-reverse align-items-center flex-lg-row pt-sm-5 pt-3 mt-5">
          <div className="col-lg-7 pt-lg-2 pt-3">
            <h2 data-aos="fade-right" className="ff-jost mb-0 pb-1 text-lg-start text-center fw-medium fs-50 lh-685 text-grey2">
              What is KodeDen's{" "}
              <span className=" text-orange-gradient">6-Month</span> <span className="d-lg-block xl-nowrap">
                Software
                Engineering Course?
              </span>
            </h2>
            <ul data-aos="fade-right" className="ps-4 mb-0 pb-sm-2 pb-1">
              <li className="list-styled-disc lh-32   text-grey ff-jost fs-16 fw-normal">
                <span className="lh-32 text-grey ff-jost fs-16 fw-normal">
                  With 6-figure salaries, unlimited PTO, and the flexibility to
                  work anywhere in the world—(or
                </span>
              </li>
              <li className="list-styled-disc lh-32 text-grey ff-jost fs-16 fw-normal">
                <span className="lh-32 text-grey ff-jost fs-16 fw-normal">
                  simply pick your kids up from school), you want in.
                </span>
              </li>
              <li className="list-styled-disc lh-32 text-grey ff-jost fs-16 fw-normal">
                <span className="lh-32 text-grey ff-jost fs-16 fw-normal">
                  But who has $25k+ to drop on a bootcamp?
                </span>
              </li>
              <li className="list-styled-disc lh-32 text-grey ff-jost fs-16 fw-normal">
                <span className="lh-32 text-grey ff-jost fs-16 fw-normal">
                  Or semesters of free time to dedicate to going back to school?
                </span>
              </li>
              <li className="list-styled-disc lh-32 text-grey ff-jost fs-16 fw-normal">
                <span className="lh-32 text-grey ff-jost fs-16 fw-normal">
                  Or YEARS to go through the trial and error involved in
                  teaching yourself?
                </span>
              </li>
              <li className="list-styled-disc lh-32 text-grey ff-jost fs-16 fw-normal">
                <span className="lh-32 text-grey ff-jost fs-16 fw-normal">
                  Heck, most people don’t even know where to start.
                </span>
              </li>
              <li className="list-styled-disc lh-32 text-grey ff-jost fs-16 fw-normal">
                <span className="lh-32 text-grey ff-jost fs-16 fw-normal">
                  If that's you, you’ve been dreaming of a high-paying tech
                  career but paralyzed when it comes time to take action.
                </span>
              </li>
            </ul>
            <p className="text-orange-gradient text-lg-start text-center mb-0 pt-md-1 fw-semibold ff-jost fs-16 lh-23">
              I want to Start My Software Engineering Journey!
            </p>
             <div className="d-flex justify-content-lg-start justify-content-center pt-md-5 pt-1 my-2">
                  <Buttons text="Book a Call NOW" />
                </div>
          </div>
          <div data-aos="fade-left" className="col-lg-5">
            <Image src="/assets/images/webp/monthsecimg.webp" width={461} height={562} alt="month" className="w-100 max-md-h-380"/>
          </div>
        </div>
      </div>
    </div>
  );
}
