import React from "react";
import "./Footer.css";
import "./Achive.css";
import img1 from "./WhatsApp Image 2025-02-24 at 10.17.48_6013a730.jpg";
import img2 from "./AWhatsApp Image 2025-02-24 at 10.22.17_04ea43b1.jpg";

export default function FooTer() {
  const img = [img1, img2];
  return (
    <>
      <div className="BgParent">
        <div className="Achived-Section">
          <Cirtificate images={img[0]} />
          <Cirtificate images={img[1]} />
        </div>
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
