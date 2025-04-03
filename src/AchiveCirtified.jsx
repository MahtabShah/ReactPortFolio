import "./Achive.css";
import img1 from "./WhatsApp Image 2025-02-24 at 10.17.48_6013a730.jpg";
import img2 from "./AWhatsApp Image 2025-02-24 at 10.22.17_04ea43b1.jpg";
import img3 from "./7a850459-740a-40de-9b8f-d27e2d2f5e0c.jpg";

export default function Achive() {
  const img = [img1, img2 , img3];
  return (
    <>
      <div className="Achived-Section">
        <Cirtificate images={img[0]} style={{ alignSelf: "end" }} />
        <Cirtificate images={img[1]} />
        <Cirtificate images={img[2]} />
      </div>

      <div className="achiveBg"></div>
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
