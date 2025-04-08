import { v4 as uuidv4 } from "uuid";

import "./Project.css";
import img1 from "./asset/Screenshot 2025-01-27 194133.png";
import img2 from "./asset/Screenshot 2025-01-27 130757.png";
import img3 from "./asset/Screenshot 2025-03-29 134648.png";
import img4 from "./asset/Screenshot 2025-01-27 195704.png";
import img5 from "./asset/Screenshot 2025-03-30 211852.png";
import img6 from "./asset/Screenshot 2025-04-07 210700.png";

import { Shape } from "./Skills";

const ProjectsData = {
  titles: [
    "WEB COLOR PALLET APPLICATION",
    "LIVE VISUAL STUDIO CODE (LVSC)",
    "DIGITAL ONLINE OFFLINE MARKET",
    "SORTING VISUALIZER WEB APP",
    "PORTFOLIO WEBSITE",
    "REGEX TASTER AND GENERATOR",
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
    <>
      This tool helps you quickly generate random strings and test your regular
      expressions. {<br />} Enter starting and ending characters to generate a
      random string, then use regex to extract matching patterns in real-time.
    </>,
  ],

  srcs: [img1, img2, img3, img4, img5, img6],
};

export function Projects({ projects }) {
  return (
    <>
      <span
        className="nmProject p-2 pe-3 ps-3 rounded text"
        key={uuidv4()}
        data-aos="zoom-in"
      >
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

export default (Project) => {
  return (
    <div className="bgproject project d-flex flex-column grand-project">
      <Projects projects={ProjectsData}></Projects>
    </div>
  );
};
