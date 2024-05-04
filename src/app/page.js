"use client"

import "bootstrap/dist/css/bootstrap.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Mynav from "@/components/Mynav";
import Herosec from "@/components/Herosec";
import Whoaresec from "@/components/Whoaresec";
import Gurantee from "@/components/Gurantee";
import Students from "@/components/Students";
import Goodsec from "@/components/Goodsec";
import Softwaresec from "@/components/Softwaresec";
import Months from "@/components/Months";
import Backtop from "@/components/Backtop";
import Preloader from "@/components/Preloader";
import { useEffect, useState } from "react";

export default function Home() {
    useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
   const [loder, setloder] = useState(false);
  useEffect(() => {
    setloder(true);
    setTimeout(() => {
      setloder(false);
    }, 3000);
  }, []);
  return (
     <div>
      {loder ? (
        <div>
          <Preloader />
        </div>
      ) : (
      <div className="bg-black">
        <div className="herobg">
        <Mynav />
        <Herosec/>
      </div>
      <Months/>
      <Softwaresec/>
      <Goodsec/>
      <Students/>
      <Gurantee/>
      <Whoaresec />
      <Backtop/>
      </div>
  )}
    </div>
  );
}
