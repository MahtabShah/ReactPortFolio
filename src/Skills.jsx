import "./skill.css";
import { Cube } from "./background";

export default function Skills() {
  return (
    <>
      <div className="skills">
        <div className="infoSkilss">
          <div className="h2div">SKILL PROFICIANCY</div>
          <div className="skillDiscription">
            Proficient in designing, developing, and deploying scalable web
            applications, with expertise in both front-end and back-end
            technologies. Experienced in working with modern frameworks,
            databases, and cloud services to create efficient, user-friendly,
            and secure solutions.
          </div>
        </div>
        <div className="skilicon">
          <div className="upskill">Skill Set</div>
          <WheelSkill></WheelSkill>
        </div>

        <Cube
          dim={{
            width: "40px",
            height: "40px",
            left: "26%",
            top: "70%",
          }}
        />

        {/* <div className="midCircle"></div> */}

        <div className="shapC">
          <Shape
            style={{
              left: "-125px",
              bottom: "-285px",
              filter: "blur(3px)",
              width: "500px",
              height: "500px",
            }}
          ></Shape>

          <Shape
            style={{
              left: "calc(100% - 190px)",
              bottom: "calc(100% - 190px)",
              filter: "blur(1px)",
              width: "400px",
              height: "400px",
            }}
          ></Shape>
        </div>
      </div>

      <div className="SVGlogo"></div>
    </>
  );
}

export function SkillCmponent({ ht, wd, nm, svg }) {
  return (
    <>
      <div className="skill" style={{ height: ht, width: wd }}>
        <div className="divSvg">
          <iframe src={`./src/asset/${svg}.svg`} frameborder="0"></iframe>
        </div>
        <span>{nm}</span>
      </div>
    </>
  );
}

function Logoiframe() {
  document.querySelectorAll(".divSvg iframe").forEach((e) => {
    const ifr = e.contentDocument || e.contentWindow.document;
    ifr.querySelector("svg").style.width = "50px";
    ifr.querySelector("svg").style.height = "60px";
  });
}

Logoiframe();

export function WheelSkill() {
  const nms = [
    "HTML",
    "CSS",
    "Tailwind",
    "Bootstrap",
    "JavaScript",
    "Python",
    "React.js",
    "C",
    "C++",
    "Node.js",
  ];

  const SVGs = [
    "html-1",
    "css-3",
    "tailwind-css-2",
    "bootstrap-5-1",
    "javascript-1",
    "python-5",
    "react-2",
    "c-1",
    "c",
    "nodejs-3",
  ];

  return (
    <div className="wheelCr">
      {nms.map((item, index) => (
        <SkillCmponent key={index} wd="" ht="" nm={item} svg={SVGs[index]} />
      ))}

      <div className="verticleLine"></div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        height="2500"
        width="2183"
        viewBox="0 0 124 141.53199999999998"
      >
        <path
          d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z"
          fill="#e34f26"
        />
        <path
          d="M62.468 129.277V12.085l51.064.17-9.106 104.851z"
          fill="#ef652a"
        />
        <path
          d="M99.49 41.362l1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z"
          fill="#fff"
        />
      </svg>
    </div>
  );
}

export function Shape({ style }) {
  return (
    <>
      <div className="shape" style={style}></div>
    </>
  );
}
