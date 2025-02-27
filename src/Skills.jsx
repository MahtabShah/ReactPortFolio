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
            left: "24%",
            top: "64%",
          }}
        />

        {/* <div className="midCircle"></div> */}

        <div className="shapC">
          <Shape
            style={{
              left: "-125px",
              bottom: "-225px",
              filter: "blur(5px)",
              width: "500px",
              height: "500px",
            }}
          ></Shape>

          <Shape
            style={{
              left: "calc(100% - 190px)",
              bottom: "calc(100% - 190px)",
              filter: "blur(2px)",
              width: "400px",
              height: "400px",
            }}
          ></Shape>
        </div>
      </div>
    </>
  );
}

export function SkillCmponent({ ht, wd, nm }) {
  return (
    <div className="skill" style={{ height: ht, width: wd }}>
      {nm}
    </div>
  );
}

export function WheelSkill() {
  const nms = [
    "HTML",
    "CSS",
    "Bootstrap",
    "JavaScript",
    "React.js",
    "C/C++",
    "Python",
    "Node.js",
  ];

  return (
    <div className="wheelCr">
      {nms.map((item, index) => (
        <SkillCmponent key={index} wd="100px" ht="100px" nm={item} />
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
