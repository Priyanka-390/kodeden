import Image from "next/image";
import { Insta, Linkdin, Sideicon, Telegram, Twittericon } from "./Icon";
export default function Herosec() {
  return (
    <div id="#home" className="pt-5 overflow-x-clip position-relative z-1">
      <div className="smalliconbox z-1"><Sideicon />
      <div className="sideiconbox">
        <a href="https://twitter.com/i/flow/login" target="blank"><Twittericon /></a>
        <div className="pt-11"><a href="https://www.instagram.com/accounts/login/?hl=en" target="blank"><Insta /></a></div>
        <div className="pt-11"><a href="https://telegr.am/user_mgt/login" target="blank"><Telegram /></a></div>
        <div className="pt-11"><a href="https://www.linkedin.com/login" target="blank"><Linkdin/></a></div>
      </div>
      </div>
      <Image src="/assets/images/svg/herovector.svg" width={160} height={60} alt="vector" className=" herovector d-lg-block d-none position-absolute"/>
      <div className="container">
        <h1 data-aos="zoom-in" className=" text-uppercase pt-md-4 pt-1 text-center pb-1 fw-semibold text-white ff-jost fs-36">
          Start the Mini-Course:{" "}
          <span className="text-orange-gradient">
            Rapidly Learning <span className="d-lg-block"></span> New Technical
            Skills
          </span>{" "}
        </h1>
        <h2 data-aos="zoom-in" className="text-white fw-semibold mb-0 pb-4 mb-1 lh-31 pt-sm-2 text-uppercase fs-24 text-center">
          Learn All The Skills You Need To Become a{" "}
          <span className="d-lg-block"></span> Software Engineer!
        </h2>
        <div className="d-flex justify-content-center">
          <div data-aos="zoom-in" className="position-relative">
              <Image
                src="/assets/images/webp/heroimg.webp"
                width={996}
                height={476}
                alt="hero"
                className="w-100 rounded-4 max-md-h-380 object-fit-cover"
                      />
                       <div className="">
            <Image
              src="/assets/images/webp/heroimglayer.webp"
              width={996}
              height={64}
              alt="hero"
              className="w-100 layer  object-fit-contain"
            />
          </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}
