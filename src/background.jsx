import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "./App.css";
import SocialIcons from "./SocialIcon";
import Page from "./Page";
import Skills from "./Skills";
import Project from "./Project";
import BGSection from "./component/BG";
import BG2 from "./component/BG2";

export default function Background() {
  return (
    <>
      {/* <BGSection></BGSection> */}
      {/* <BG2></BG2> */}
      <Page></Page>
      <Project />
      <Skills></Skills>
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
        <div className="msgSocialMedia ">
          <Massage></Massage>
          <SocialMedia></SocialMedia>
        </div>
        <p className="py-5 bg-dark text-light mb-0">
          Designed & Developed by Mahtāb Shah.
        </p>
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
        <form className="">
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

import { EnvelopeFill, TelephoneFill, GeoAltFill } from "react-bootstrap-icons";
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
        className="socil-side gap-4 rounded-4 py-4"
        data-aos="flip-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="600"
        style={{
          borderTop: "3px solid #ffffffff",
          boxShadow: "0 -2px 12px #f0f0f0ff",
        }}
      >
        <div className="px-3 pt-3" style={{ textAlign: "center" }}>
          This is my Social account, you can connect.
        </div>
        {/* <h3 className="sharp">Connect with Me</h3> */}
        <div className="d-flex flex-wrap align-items-center justify-content-center">
          <SocialIcons></SocialIcons>
          {/* <div className="d-flex flex-column">
            <div className="d-flex p-3 gap-3 align-items-center">
              <i className="fas fa-envelope text-primary fa-1x"></i>
              <i className="text-muted">example@gmail.com</i>
            </div>
            <div className="d-flex gap-3 align-items-center p-3">
              <i className="fas fa-phone text-success fa-1x mb-2"></i>
              <i className="text-muted ">+91 9876543210</i>
            </div>
            <div className="d-flex p-3 gap-3 align-items-center">
              <i className="fas fa-map-marker-alt text-danger fa-1x"></i>
              <i className="text-muted">Pratpgarh, U.P. India</i>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
