import React from "react";
import "./Footer.css";
import "./Achive.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import BoxSlider from "./Slider";
import { Shape } from "./Skills";

export default function FooTer() {
  return (
    <>
      <div className="bg-2 pb-4 d-flex flex-column">
        <div className="div-crt m-3 p-2 d-flex flex-column flex-grow-1">
          <span className="h2div hdng text">CIRTIFICATION</span>
          <p className="p-2 pb-5 text-center paragraph text">
            The course which i compleated.
            <br /> 1. C++ DSA cirtification from <b> APNA COLLAGE.</b>
            <br />
            2. Web Development Workshop from <b>AADI Foundation.</b>
          </p>
        </div>
        <div className="p-2 pb-5 d-flex gap-3 cf-2 justify-content-around align-items-center flex-row">
          <BoxSlider />
        </div>
      </div>
    </>
  );
}

export function Cirtificate({ images }) {
  return (
    <div className="Cirtificate d-flex border flex-grow-1 w-100">
      <img src={images} alt="" className="img w-100 rounded-1" />
    </div>
  );
}
