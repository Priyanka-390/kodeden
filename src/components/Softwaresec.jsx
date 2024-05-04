import Image from "next/image";
import { Cardarrow } from "./Icon";
import { Softwaredata } from "./Mapdata";
export default function Softwaresec() {
  return (
    <div id="how" className="py-5 position-relative z-0">
      <Image src="/assets/images/svg/softwarevector.svg" width={160} height={60} alt="software" className="position-absolute d-md-block d-none softwarevector"/>
      <div className="container py-md-5 pb-3 my-sm-5">
        <h2 data-aos="fade-right" className="text-center text-grey2 pt-md-5 mt-sm-5 fs-50 mb-0 fw-medium ff-jost lh-685">
          “From Confused to Coder”: Kodeden's{" "}
          <span className="d-lg-block"></span> Exclusive 6-Month{" "}
          <span className="text-orange-gradient">Software Engineering</span>{" "}
          Course{" "}
        </h2>
        <p data-aos="fade-left" className="ff-jost fw-normal fs-16 mb-0 text-grey2 lh-12 pt-sm-2 pt-1 text-center">
          Through twice-weekly live lectures and at-home exercises, you’ll:
        </p>
        <p data-aos="fade-right" className="ff-jost fw-normal fs-16 mb-0 pt-md-3 pb-md-5 mb-sm-4 text-grey lh-12 pt-sm-2 pt-1 text-center">
          Learn everything you need to know to break into tech from senior
          engineers with experience at <span className="d-lg-block"></span>{" "}
          Apple, Amazon, and the DOD.
        </p>
              <div className="row pt-lg-3 pb-lg-5 mb-lg-4 justify-content-center max-w-941 mx-auto">
                  {Softwaredata.map((data2, i) => {
                      return(
                       <div key={i} className="col-lg-4 pt-lg-0 pt-3 col-sm-6">
            <div className="d-flex justify-content-center ">
                <div data-aos="zoom-in" className="softwarecard">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-end">
                        <h2 className="text-grey ff-jost fs-30 fw-semibold lh-47">
                          {data2.counting}
                        </h2>
                    </div>
                    <Image
                      src={data2.img}
                      width={132.89}
                      height={166.11}
                      alt="man"
                    />
                  </div>
                                   <p className="fw-bold mb-0 text-grey2 ff-jost fs-18 lh-26">{data2.para1} <span className="d-block"></span> {data2.para2 }<span className=" ms-2"><Cardarrow/></span></p>
                </div>
            </div>
          </div>
                )  })}
         
        </div>
      </div>
    </div>
  );
}
