import React from "react";
import "./Footer.css";
import "./Achive.css";
import img1 from "./WhatsApp Image 2025-02-24 at 10.17.48_6013a730.jpg";
import img2 from "./AWhatsApp Image 2025-02-24 at 10.22.17_04ea43b1.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { Shape } from "./Skills";

export default function FooTer() {
  const img = [img1, img2];
  return (
    <>
      <div className="bg-2 d-flex flex-column">
        <div className="div-crt m-3 p-2 d-flex flex-column flex-grow-1">
          <span className="h2div hdng">CIRTIFICATION</span>
          <p className="p-2 text-center">
            The course which i compleated.
            <br /> 1. C++ DSA cirtification from APNA COLLAGE.
            <br />
            2. Web Development Workshop from AADI Foundation.
          </p>
        </div>
        <div className="m-3 p-3 d-flex gap-3 cf-2 justify-content-around align-items-center flex-row">
          <Cirtificate images={img[0]} />
          <Cirtificate images={img[1]} />
        </div>
      </div>
    </>
  );
}

function Cirtificate({ images }) {
  return (
    <div className="Cirtificate d-flex border flex-grow-1 w-100">
      <img src={images} alt="" className="img w-100 rounded-1" />
    </div>
  );
}
