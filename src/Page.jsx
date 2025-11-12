import { v4 as uuidv4 } from "uuid";
import pdf from "./public/MAHTAB SHAH LRU+.pdf";
import "./Page.css";
import { useState, useEffect } from "react";
import photo from "./public/WhatsApp Image 2025-11-09 at 19.39.50_b1da59c5.jpg";

export default function Page() {
  let header = {
    items: ["Home", "Contact", "Project"],
    ids: ["home", "contact", "project"],
  };

  const [Condition, setCondition] = useState(window.innerWidth > 1200);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setCondition(window.innerWidth > 1200);
    });
  }, []);

  return (
    <>
      <div className="d-flex ps-5 position-relative  overflow-hidden p home p-4">
        <div className="d-flex align-items-center flex-grow-1 hr bg-dark">
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

        <div className="d-flex m text-dark">
          <div className="introduction p-3 mt-lg-5 pt-lg-5 flex-grow-1">
            <span key={uuidv4()} data-aos="zoom-up" className="fs-3">
              {" "}
              Hi, I'm
            </span>
            <br />
            <span className="name" key={uuidv4()} data-aos="zoom-in">
              Mahtab Shah
            </span>
            {Condition ? " " : <hr />}
            <span
              className="h2-type mb-4"
              key={uuidv4()}
              data-aos="fade-up"
              data-aos-offset="10"
              style={{ display: "block" }}
            >
              Web Developer, Programer, Web designer
            </span>
            <p
              key={uuidv4()}
              className=""
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-offset="20"
            >
              I am pursuing a Bachelor of Technology in Electrical Engineering
              from IIT (ISM) Dhanbad.
            </p>
            <p
              key={uuidv4()}
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-offset="40"
              className=""
            >
              As a software developer i play to find deep concept behind
              software technologies or related fields.
            </p>
            <p
              key={uuidv4()}
              data-aos="fade-up"
              data-aos-duration="800"
              className=""
            >
              My mission is to design and develop a website that you and your
              audience love.
            </p>

            {/* <div className="pt-4 mt-4">
              <a
                href={pdf}
                download="Mahtab_Shah_Resume.pdf"
                className="btn btn-outline-danger btn-shadow"
                key={uuidv4()}
                data-aos-duration="900"
                data-aos="zoom-in"
                data-aos-offset="10"
              >
                Get Resume
              </a>
            </div> */}
          </div>
          <div className="parent-photo d-flex align-items-center justify-content-center">
            <div
              className="position-relative d-flex align-items-center justify-content-center ph"
              key={uuidv4()}
            >
              <div
                className="p-2 overflow-hidden"
                style={{
                  width: "calc(140px + 10vw)",
                  aspectRatio: "1/1",
                  borderRadius: "50%",
                }}
                data-aos="zoom-in"
              >
                <img
                  src={photo}
                  className="w-100 h-100"
                  style={{ objectFit: "cover", scale: 1.1 }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="dsr pfbg d-flex align-items-center justify-content-center">
          <div className="ssCr"></div>
          <div className="sCr"></div>
        </div>
      </div>
    </>
  );
}

function GoTheSection(id) {
  document.querySelector(`.${id}`)?.scrollIntoView({ behavior: "smooth" });
}
