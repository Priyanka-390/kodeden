import Image from "next/image";
export default function Goodsec() {
  return (
    <div className="overflow-x-clip" id="good">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div data-aos="fade-right" className="col-lg-5 col-md-6">
            <Image
              src="/assets/images/webp/goodimg.webp"
              width={448}
              height={551}
                          alt="goodimg"
                          className="w-lg-100 max-md-h-380"
            />
          </div>
          <div className="col-md-6 pt-md-0 pt-3">
            <h2 data-aos="fade-leftt" className="fs-50 text-md-start text-center fw-medium lh-68 text-grey2 ff-jost">
              Are You A Good Fit For Our Program?
            </h2>
            <p data-aos="fade-left" className="fs-16 fw-normal text-md-start mb-0 pb-lg-3 text-center lh-23 text-grey2 ff-jost">
              About Who The Program is For
            </p>
            <p data-aos="fade-left" className="text-orange-gradient text-md-start text-center pt-1 pb-lg-2 mb-0 ff-jost fs-16 fw-semibold lh-23">
              Our 6-Month Software Engeering Course is for individuals that...
            </p>
            <p data-aos="fade-left" className="fs-16 fw-normal text-md-start text-center mb-0 pb-lg-3 text-grey pt-1 lh-23 ff-jost">
              Want to take action now but don't have years to waste in
              university Are extremely motivated and want to succeed Have
              dreamed of becoming a software engineer but don't have hundreds of
              thousands of dollars lying around
                      </p>
                      <p data-aos="fade-left" className="text-orange-gradient text-md-start text-center pt-1 pb-lg-2 mb-0 ff-jost fs-16 fw-semibold lh-23">
              It isn't for...
                      </p>
                      <p data-aos="fade-left" className="fs-16 fw-normal text-md-start text-center text-grey pt-1 lh-23 ff-jost">
              People that aren't self-starters People that don't have a sense of urgency to become a software engineeer People that aren't serious about fulfilling <span className="d-lg-block"></span> their dream
                      </p>
          </div>
        </div>
      </div>
    </div>
  );
}
