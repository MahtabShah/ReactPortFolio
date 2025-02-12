import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./Form";
import CodePage from "./Code.env";
import "./App.css";
import img1 from "./asset/Screenshot 2025-01-27 194133.png";
import img2 from "./asset/Screenshot 2025-01-27 130757.png";
import img3 from "./asset/Screenshot 2025-01-27 195704.png";

let meshs = () => {
  // const Width = parseInt(window.outerWidth);
  // const Height = parseInt(window.outerHeight);

  // let numberOfMesh = Width + (Width * Height) / 1600;
  let numberOfMesh = 3;
  let elements = [];
  for (let i = 0; i < numberOfMesh; i++) {
    elements.push(<div></div>);
  }

  return elements;
};

export default function Background() {
  return (
    <>
      {/* <div className="parent">
      </div> */}

      {/* <ShortInfo className="farzi"></ShortInfo> */}
      <Page></Page>
      <Projects projects={ProjectsData}></Projects>
      <Footer></Footer>
    </>
  );
}

export function Page() {
  let header = {
    items: ["Mahtab Shah", "Home", "About", "Contact", "Get resume"],
    ids: ["nm", "home", "about", "contact", "get"],
  };

  return (
    <>
      <div className="p">
        <div className="hr">
          {header.items.map((item, index) => (
            <span
              className="header-item"
              id={header.ids[index]}
              key={header.ids[index]}
            >
              {item}
            </span>
          ))}
        </div>

        <div className="m">
          <div className="introduction">
            <span> Hi, I'm</span>
            <br />
            <span className="name">Mahtab Shah</span>
            <hr />
            <span className="h2-type">
              Web Developer, Freelancer, Web disigner
            </span>
            <p>
              As a software developer i play to finding deep concept behind
              software technologies or related fields.
            </p>
            <p>
              My mission is to design and develop a website that you and your
              audience love.
            </p>
          </div>
          <div className="ph">
            <div className="photo"></div>
            <div className="cr"></div>
          </div>
        </div>

        <div className="dsr">
          <CodePage></CodePage>
        </div>
      </div>
    </>
  );
}

export function Footer() {
  return (
    <>
      <footer className="ftr">
        <Form></Form>

        <div className="background">
          <div className="opc-cr">{meshs()}</div>
        </div>
      </footer>

      <div className="all-right">
        <p>© 2024 Mahtāb Shah. All rights reserved.</p>

        <div class="social-media">
          <a
            href="https://www.linkedin.com/in/mahtab-shah916"
            target="_blank"
            aria-label="LinkedIn"
          >
            <i class="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.twitter.com/yourprofile"
            target="_blank"
            aria-label="Twitter"
          >
            <i class="fab fa-twitter"></i>
          </a>

          {/* href="https://www.instagram.com/cre8.hystory" */}
          <a target="_blank" aria-label="Instagram">
            <i class="fab fa-instagram"></i>
          </a>

          <a
            href="https://youtube.com/@engineeringoncoding?si=WYyDjPbvg5FPszYB"
            target="_blank"
            aria-label="YouTube"
          >
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </>
  );
}

const ProjectsData = {
  titles: [
    "WEB COLOR PALLET APPLICATION",
    "LIVE VISUAL STUDIO CODE (LVSC)",

    "SORTING VISUALIZER WEB APP",
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
  ],

  srcs: [img1, img2, img3],
};

export function Projects({ projects }) {
  return (
    <div className="proj-c">
      <span
        style={{
          color: "var(--t-clr1)",
          position: "absolute",
        }}
      >
        PROJECTS
      </span>
      {projects.titles.map((t, index) => (
        <>
          <div key={index} className="m-card">
            <h2 key={index} className="m-card-title">
              {t}
            </h2>
            {/* <div
              className="i"
              style={{
                background: `url(${projects.srcs[index]})`,
              }}
            ></div> */}
            <div style={{ display: "flex", aspectRatio: "11/6" }}>
              {/* <img src={projects.srcs[index]} alt="" style={{ width: "50%" }} /> */}
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
    </div>
  );
}

