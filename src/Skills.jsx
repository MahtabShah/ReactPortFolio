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
              bottom: "-225px",
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
          <embed type="image/svg+xml" src={`./src/asset/${svg}.svg`} />
        </div>
        <span>{nm}</span>
      </div>
    </>
  );
}

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
