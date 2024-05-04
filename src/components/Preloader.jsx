import Image from "next/image";
export default function Preloader() {
    return (
        <div className="min-vh-100 bg-black position-fixed d-flex flex-column justify-content-center align-items-center start-0 end-0">
            <Image src="/assets/images/webp/logo2.webp" width={200} height={100} alt="logo"/>
        <div>
          <p className="text_animate d-inline-flex text-uppercase text-center fs-80 fw-semibold ff-jost scale text-orange-gradient">
            k
          </p>
          <p className="text_animate d-inline-flex text-uppercase text-center fs-80 fw-semibold ff-jost scale text-white">
            0
          </p>
          <p className="text_animate d-inline-flex text-uppercase text-center fs-80 fw-semibold ff-jost scale text-orange-gradient">
            d
          </p>
          <p className="text_animate d-inline-flex text-uppercase text-center fs-80 fw-semibold ff-jost scale text-white">
            e
          </p>
          <p className="text_animate d-inline-flex text-uppercase text-center fs-80 fw-semibold ff-jost scale text-orange-gradient">
            d
          </p>
          <p className="text_animate d-inline-flex text-uppercase text-center fs-80 fw-semibold ff-jost scale text-white">
            e
          </p>
          <p className="text_animate d-inline-flex text-uppercase text-center fs-80 fw-semibold ff-jost scale text-orange-gradient">
            n
          </p>
        </div>
      </div>
    )
}

