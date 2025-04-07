import "bootstrap/dist/css/bootstrap.min.css";
// import Form from "./Form";
// import CodePage from "./Code.env";
import { v4 as uuidv4 } from "uuid";
import "aos/dist/aos.css";
import "./App.css";
import img1 from "./asset/Screenshot 2025-01-27 194133.png";
import img2 from "./asset/Screenshot 2025-01-27 130757.png";
import img3 from "./asset/Screenshot 2025-03-29 134648.png";
import img4 from "./asset/Screenshot 2025-01-27 195704.png";
import img5 from "./asset/Screenshot 2025-03-30 211852.png";
import SocialIcons from "./SocialIcon";
import pdf from "./public/MAHTAB SHAH LRU+.pdf";
import "./Project.css";

// import Achive from "./AchiveCirtified";
import Footar from "./Footer";
import Skills from "./Skills";
import { Shape } from "./Skills";

export default function Background() {
  return (
    <>
      <Page></Page>
      <div className="bgproject project d-flex flex-column grand-project">
        <div className="fsqr"></div>
        <div className="trsqr"></div>
        <Projects projects={ProjectsData}></Projects>
      </div>

      <div className="ftr">
        <Skills></Skills>
      </div>

      <Footar></Footar>
      <Footer></Footer>
    </>
  );
}

function GoTheSection(id) {
  document.querySelector(`.${id}`)?.scrollIntoView({ behavior: "smooth" });
}

export function Page() {
  let header = {
    items: ["Mahtab Shah", "Home", "Contact", "Project"],
    ids: ["nm", "home", "contact", "project"],
  };

  return (
    <>
      <div className="p home">
        <div className="hr">
          {header.items.map((item, index) => (
            <span
              className="header-item"
              id={header.ids[index]}
              key={header.ids[index]}
              onClick={() => GoTheSection(header.ids[index])} // Pass function reference
            >
              {item}
            </span>
          ))}
          <a
            href={pdf}
            key={uuidv4()}
            download="Mahtab_Shah_Resume.pdf"
            className="btn text-white btn-outline-info header-item"
            style={{ fontSize: "var(--vr-f)", padding: "5px 4px" }}
            data-aos="zoom-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-easing="ease-out"
          >
            Get Resume
          </a>
        </div>

        <div className="m">
          <div className="introduction">
            <span key={uuidv4()} data-aos="zoom-up">
              {" "}
              Hi, I'm
            </span>
            <br />
            <span className="name" key={uuidv4()} data-aos="zoom-in">
              Mahtab Shah
            </span>
            <hr />
            <span className="h2-type" key={uuidv4()} data-aos="fade-up">
              Web Developer, Programer, Web disigner
            </span>
            <p key={uuidv4()} data-aos="fade-up" data-aos-duration="800">
              I am pursuing a Bachelor of Technology in Electrical Engineering
              from IIT (ISM) Dhanbad.
            </p>
            <p key={uuidv4()} data-aos="fade-up" data-aos-duration="1000">
              As a software developer i play to find deep concept behind
              software technologies or related fields.
            </p>
            <p key={uuidv4()} data-aos="fade-up" data-aos-duration="1200">
              My mission is to design and develop a website that you and your
              audience love.
            </p>

            <div>
              <a
                href={pdf}
                download="Mahtab_Shah_Resume.pdf"
                className="btn btn-outline-danger btn-shadow"
                key={uuidv4()}
                data-aos-duration="2000"
                data-aos="zoom-in"
              >
                Get Resume
              </a>
            </div>
          </div>
          <div className="ph" key={uuidv4()}>
            <div className="photo" data-aos="zoom-in"></div>
          </div>
        </div>

        <div className="dsr pfbg">
          <Cube
            dim={{ width: "40px", height: "40px", left: "10%", top: "10%" }}
          />

          <Cube
            dim={{
              width: "15vw",
              height: "15vw",
              right: "100px",
              bottom: "180px",
            }}
          />

          <div className="cricle"></div>
          <div className="aboveCircle"></div>
          <div className="bottomCircle"></div>
          <div className="midCircle"></div>
          <div className="rtcr"></div>
          <div className="ssCr"></div>
          <div className="sCr"></div>
        </div>
      </div>
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
      <div className="all-right">
        <div className="msgSocialMedia">
          <Massage></Massage>
          <SocialMedia></SocialMedia>
        </div>
        <p>Developed by Mahtāb Shah.</p>
      </div>
    </>
  );
}

const ProjectsData = {
  titles: [
    "WEB COLOR PALLET APPLICATION",
    "LIVE VISUAL STUDIO CODE (LVSC)",
    "DIGITAL ONLINE OFFLINE MARKET",
    "SORTING VISUALIZER WEB APP",
    "PORTFOLIO WEBSITE",
  ],

  discriptions: [
    <>
      A fully responsive web application built using HTML, CSS, and JavaScript.
      {<br />}Designed an interactive tool that offers a variety of color
      schemes for websites, including monochromatic, complementary, triadic,
      tetradic, and analogous palettes.{<br />}Implemented a user-friendly
      interface for exploring color wheels and combinations tailored for web
      design.
    </>,
    <>
      A web application built using HTML, CSS, and JavaScript. {<br />}
      Developed a live Visual Studio Code editor, enabling users to write HTML,
      CSS, and JavaScript with instant results rendering for real-time
      visualization.{<br />} Integrated features such as proper formatting,
      syntax highlighting, and auto-completion of predefined code snippets.
      {<br />} Enhanced real-time coding and debugging experiences through an
      interactive interface.
    </>,
    <>
      A full-stack website designed to connect local businesses with nearby
      customers built using HTML, Bootstrap CSS, JavaScript, Node.js,
      Express.js, and MongoDB. {<br />}
      Developed a platform where merchants can create profiles, list products,
      and manage orders efficiently.{<br />}
      Implemented a hyperlocal search system, allowing users to discover and
      purchase products from nearby stores with pickup or local delivery
      options.{<br />}
      Integrated UPI-based payment methods for secure and seamless transactions,
      enhancing the user experience and checkout efficiency.
    </>,

    <>
      Allow users to select the sorting algorithm e.g., Bubble Sort, Merge Sort,
      Quick Sort, etc. Provide controls for custom array size and speed
      adjustment to make the visualization more engaging.
      {<br />}
      Add a progress bar or step counter to show the sorting progress
      dynamically.
      {<br />}
      Make it educational for users who want to learn how sorting algorithms
      work.
    </>,
    <>
      A portfolio website built using HTML, Bootstrap CSS, JavaScript.{<br />}
      Fully Responsive and simple UI has been used in this portfolio website.{" "}
      {<br />}
    </>,
  ],

  srcs: [img1, img2, img3, img4, img5],
};

export function Projects({ projects }) {
  return (
    <>
      <span className="nmProject p-2 rounded" key={uuidv4()} data-aos="zoom-in">
        PROJECTS
      </span>
      <div className="proj-c project-container">
        {projects.titles.map((t, index) => (
          <>
            <div
              key={index}
              className="m-card project-card"
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-bottom"
              data-aos-easing="ease-out"
            >
              <h2 key={index} className="m-card-title">
                {t}
              </h2>

              <div
                style={{ display: "flex", aspectRatio: "11/5.7" }}
                className="project-img-container"
              >
                <img
                  src={projects.srcs[index]}
                  alt=""
                  style={{ width: "100%" }}
                />
              </div>
              <div className="m-card-content">
                <p className="m-card-description">
                  {projects.discriptions[index]}
                </p>
              </div>
            </div>
          </>
        ))}

        <div className="projectbrCr">
          <Shape
            style={{
              left: "calc(100% - 190px)",
              top: "calc(100% - 190px)",
              filter: "blur(1px)",
              width: "400px",
              height: "400px",
            }}
          ></Shape>
        </div>
      </div>
    </>
  );
}

import "./msg.css";
export function Massage() {
  return (
    <>
      <div className="msgbox contact">
        <form>
          <div className="ms-bar ms-bar3"></div>
          <div className="ms-what-sl">
            <b>Massage</b>
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
            <div id="emailHelp" className="form-text" style={{ color: "#ded" }}>
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
      <div className="socil-side">
        <div className="belowIcons">
          <h2>Contact / Follow me</h2>
        </div>
        {/* <div className="social-media"> */}
        {/* {social.name.map((nm, i) => (
            <div>
              {" "}
              <a
                href={social.links[i]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={nm}
                key={i}
              >
                <i className={`fab fa-${nm}`}></i>
              </a>
              <p>{nm}</p>
            </div>
          ))} */}
        <SocialIcons></SocialIcons>
        {/* </div> */}
      </div>
    </>
  );
}
