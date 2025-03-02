import React from "react";
import "./Footer.css";
import "./Achive.css";
import img1 from "./WhatsApp Image 2025-02-24 at 10.17.48_6013a730.jpg";
import img2 from "./AWhatsApp Image 2025-02-24 at 10.22.17_04ea43b1.jpg";

import { Shape } from "./Skills";

export default function FooTer() {
  const img = [img1, img2];
  return (
    <>
      {/* <div className="BgParent">
        <div className="Achived-Section">
          <Cirtificate images={img[0]} />
          <Cirtificate images={img[1]} />
        </div>
      </div> */}
      <div className="achiveBg">
        <Shape
          style={{
            left: "-125px",
            bottom: "25px",
            filter: "blur(3px)",
            width: "200px",
            height: "200px",
          }}
        ></Shape>

        <Shape
          style={{
            right: "calc(40vw - 20px)",
            bottom: "calc(50vh - 3vw)",
            filter: "blur(3px)",
            width: "calc(min(10vw, 60px))",
            height: "calc(min(10vw, 60px))",
            background: `repeating-linear-gradient(
              120deg,
              rgb(142, 3, 241),
rgba(254, 157, 11, 0.95)
            )`,
          }}
        ></Shape>

        <Shape
          style={{
            right: "calc(max(-40vw, -420px))",
            bottom: "calc(45vh - 20vw)",
            filter: "blur(3px)",
            width: "calc(min(50vw, 600px))",
            height: "calc(min(50vw, 600px))",
            background: `repeating-linear-gradient(
              170deg,
              rgb(142, 3, 241),
rgba(254, 157, 11, 0.95)
            )`,
          }}
        ></Shape>

        <div className="abtCate">
          <span className="h2div hdng">CIRTIFICATION</span>
          <p className="abtp">
            The course which i compleated.
            <br /> 1. C++ DSA cirtification from APNA COLLAGE.
            <br />
            2. Web Development Workshop from AADI Foundation.
          </p>
        </div>
        <div className="Achmph">
          <div className="f1c">
            <Cirtificate images={img[0]} />
          </div>
          <div className="f2c">
            <Cirtificate images={img[1]} />
          </div>
        </div>
        <div className="Rcft"></div>
      </div>
    </>
  );
}

function Cirtificate({ images }) {
  return (
    <div className="Cirtificate">
      <img src={images} alt="" className="img" />
    </div>
  );
}
