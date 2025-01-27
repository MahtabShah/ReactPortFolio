import "./Code.env.modules.css";
import "./App.css";

export default function CodePage() {
  return (
    <>
      <div class="development-environment">
        <div class="code-editor">
          <div class="editor-header">Code Editor</div>
          <div class="code-content">
            <pre>
              <code>
                {`function Intro() {
  console.log(Hello...!
  My Name is Mahtab Shah \n  a web developer);
}
  
Intro();`}
              </code>
            </pre>
          </div>
        </div>

        <div class="terminal">
          <div class="terminal-header">Terminal</div>
          <div class="terminal-content">
            <p>$ npm start</p>
            <p>Starting the development server...</p>
            <p>Compiled successfully!</p>
          </div>
        </div>
      </div>

      <IntroCode></IntroCode>
    </>
  );
}

import React, { useEffect, useState } from "react";

export function IntroCode() {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    // Function to generate numbers array based on the width
    const updateArrayLength = () => {
      const newLength = window.innerWidth > 760 ? 25 : 24;
      const updatedNumbers = Array.from(
        { length: newLength },
        (_, i) => i + 27
      );
      setNumbers(updatedNumbers);
    };

    // Initial call to set numbers on component mount
    updateArrayLength();

    // Add resize event listener
    window.addEventListener("resize", updateArrayLength);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", updateArrayLength);
    };
  }, []);

  const skills = {
    Languages: ["C", "C++", "JavaScript"],
    WebTech: ["HTML", "CSS", "Bootstrap", "JavaScript", "React.Js"],
    Projects: [
      "LVSC",
      "Web Color Pallet",
      "Regex Tester",
      "Sorting Visualizer",
    ],
    Courses: ["Data Structure and Algorithms", "Object Oriented Programming"],
  };

  const info = {
    Name: "Mahtab Shah",
    College: "Indian Institute of Technology, Dhanbad, INDIA.",
    Education: "Bachelor of Technology in Electrical Engineering.",
  };

  const renderList = (items) =>
    items.map((item, index) => (
      <span key={index} className="i-skils">
        "{item}"{index < items.length - 1 && ", "}
      </span>
    ));

  return (
    <div className="code-about">
      <div className="three-dot">
        <span className="dot1"></span>
        <span className="dot2"></span>
        <span className="dot3"></span>
      </div>

      <div className="info-c">
        <div className="numbering">
          {numbers.map((num) => (
            <div className="li" key={num}>
              {num}
            </div>
          ))}
        </div>

        {/* Information Section */}
        <div className="codeInfo">
          <div>
            <span className="clr-class">class</span>{" "}
            <span className="clr-class-nm">AboutMe</span>{" "}
            <span className="brace">{"{"}</span>
            <br />
          </div>
          <div
            className="info-container"
            style={{ paddingLeft: "clamp(10px, 10%, 20px)" }}
          >
            {Object.entries(info).map(([key, value]) => (
              <div key={key}>
                <span className="clr-inner-cls">{key}:</span>{" "}
                <span className="i-skils">"{value}"</span>
              </div>
            ))}
          </div>
          <br />

          {/* Technical Skills */}
          <div style={{ paddingLeft: "clamp(10px, 10%, 20px)" }}>
            <span>Technical_skills:</span>
            <span className="brace">{" {"}</span>
            <div style={{ paddingLeft: "clamp(10px, 10%, 20px)" }}>
              <span className="keywords">const</span>{" "}
              <span className="clr-class-nm">Strong_ProblemSolving</span> ={" "}
              <span className="keywords">true</span>; <br />
              <span className="keywords">const</span>{" "}
              <span className="clr-class-nm">Strong_DebuggingSkill</span> ={" "}
              <span className="keywords">true</span>;
              <br />
              <br />
              {Object.entries(skills).map(([key, items]) => (
                <div key={key}>
                  <span className="clr-inner-cls">{key}:</span>{" "}
                  <span className="brace">[</span>
                  {renderList(items)}
                  <span className="brace">]</span>;
                  <br />
                  <br />
                </div>
              ))}
            </div>
            <span className="brace">{"}"}</span>
          </div>
          <span className="brace">{"}"}</span>
        </div>
      </div>
    </div>
  );
}
