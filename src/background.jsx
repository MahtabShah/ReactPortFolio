import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from "uuid";
import "aos/dist/aos.css";
import "./App.css";
import SocialIcons from "./SocialIcon";
import Page from "./Page";
import Footar from "./Footer";
import Skills from "./Skills";
import Project from "./Project";

export default function Background() {
  return (
    <>
      <Page></Page>
      <Project />
      <Skills></Skills>
      <Footar></Footar>
      <Footer></Footer>
    </>
  );
}

export function Cube({ dim }) {
  return (
    <div
      className="cube"
      style={{
        width: dim.width,
        height: dim.height,
        left: dim.left,
        right: dim.right,
        top: dim.top,
        bottom: dim.bottom,
      }}
    >
      {["front", "back", "left", "right", "top", "bottom"].map((side) => (
        <div
          key={side}
          className={`face ${side}`}
          style={{
            width: dim.width,
            height: dim.height,
            transform:
              side === "front"
                ? `translateZ(calc(${dim.width} / 2))`
                : side === "back"
                ? `rotateY(180deg) translateZ(calc(${dim.width} / 2))`
                : side === "left"
                ? `rotateY(-90deg) translateZ(calc(${dim.width} / 2))`
                : side === "right"
                ? `rotateY(90deg) translateZ(calc(${dim.width} / 2))`
                : side === "top"
                ? `rotateX(90deg) translateZ(calc(${dim.width} / 2))`
                : `rotateX(-90deg) translateZ(calc(${dim.width} / 2))`, // bottom face
          }}
        ></div>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <>
      <div className="all-right contact">
        <div className="msgSocialMedia">
          <Massage></Massage>
          <SocialMedia></SocialMedia>
        </div>
        <p className="text">Developed by Mahtāb Shah.</p>
      </div>
    </>
  );
}

import "./msg.css";
export function Massage() {
  return (
    <>
      <div
        className="msgbox"
        data-aos="flip-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="600"
      >
        <form>
          <div className="ms-bar ms-bar3"></div>
          <div className="ms-what-sl">
            <b className="">Massage</b>
          </div>

          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Send me a massage!
            </label>
            <textarea
              type="password"
              className="form-control textarea"
              id="exampleInputPassword1"
              spellCheck="false"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export function SocialMedia() {
  const social = {
    name: ["linkedin", "twitter", "github", "youtube"],
    links: [
      "https://www.linkedin.com/in/mahtab-shah916",
      "https://www.twitter.com/yourprofile",
      "https://www.github.com/MahtabShah",
      "https://youtube.com/@engineeringoncoding?si=WYyDjPbvg5FPszYB",
    ],
  };
  return (
    <>
      <div
        className="socil-side align-items-center"
        data-aos="flip-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="600"
      >
        <div className="belowIcons">
          <h2 className="text">Contact / Follow me</h2>
        </div>
        <SocialIcons></SocialIcons>
      </div>
    </>
  );
}
