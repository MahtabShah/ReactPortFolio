import "./Achive.css";
import img1 from "./WhatsApp Image 2025-02-24 at 10.17.48_6013a730.jpg";
import img2 from "./AWhatsApp Image 2025-02-24 at 10.22.17_04ea43b1.jpg";
import img3 from "./7a850459-740a-40de-9b8f-d27e2d2f5e0c.jpg";

export default function Achive() {
  const img = [img1, img2, img3];
  return (
    <>
      <div className="Achived-Section">
        <div class="main">
          <div class="parent">
            <div class="slanted-box leftdoor">&lt;</div>
            <div class="controls">
              <button id="backBtn" class="btn">
                <i class="fa-solid fa-arrow-left"></i>
              </button>
              <button id="nextBtn" class="btn">
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div class="slanted-box rightdoor">&gt;</div>

            <div class="box-content">
              <div class="first">
                <div class="box box1" style="background: rgb(72, 255, 0)"></div>
                <div class="box box2" style="background: green"></div>
                <div class="box box3" style="background: blue"></div>
                <div class="box box4" style="background: yellow"></div>
                <div class="box box5" style="background: orange"></div>
              </div>

              <div class="count_dot">
                <span>o</span>
                <span>o</span>
                <span>o</span>
              </div>
            </div>
          </div>
        </div>
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
