import Image from "next/image";
import Buttons from "./Buttons";

export default function Gurantee() {
  return (
    <div id="faq" className=" pt-sm-0 pt-3 position-relative z-0">
      <Image src="/assets/images/svg/guranteevector.svg" width={160} height={60} alt="gurantee" className="guranteevector d-sm-block d-none position-absolute"/>
      <div className="container">
        <div className="row flex-column-reverse flex-md-row justify-content-between">
          <div className="col-lg-7 pt-md-0 pt-sm-3 pt-2 col-md-6">
            <h2 data-aos="fade-right" className="ff-jost text-md-start text-center text-grey2 lh-72 fs-50 fw-medium">
              our Guarantee
            </h2>
            <p data-aos="fade-right" className="lh-417 text-md-start mb-0 pb-lg-3 pb-1 text-center text-lightgrey ff-jost fw-normal fs-24">
              If you decide coding isn’t right for you within 15 days of
              starting the program, we’ll give you your money back.{" "}
            </p>
            <p data-aos="fade-right" className="text-orange-gradient text-md-start text-center pt-sm-1 mb-0 pb-lg-5 pb-3 ff-jost fw-semibold fs-16 lh-23">
              I want to become a software engineer in 6 months!
                      </p>
                       <div className="d-flex justify-content-md-start justify-content-center">
                  <Buttons text="Book a Call NOW" />
                </div>
                  </div>
                  <div data-aos="fade-left" className="col-lg-5 col-md-6 d-flex justify-content-md-start mb-20 justify-content-center">
                      <Image width={386} height={313} alt="gurantee" src="/assets/images/webp/guranteelogo.webp" className="max-lg-w-360 object-fit-contain w-lg-100" />
                  </div>
        </div>
      </div>
    </div>
  );
}
