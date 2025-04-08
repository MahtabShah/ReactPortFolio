import "./skill.css";
import { Cube } from "./background";
import { v4 as uuidv4 } from "uuid";
import "aos/dist/aos.css";
import CD from "./CD3di";

export default function Skills() {
  return (
    <div className="ftr">
      <div className="skills">
        <div className="infoSkilss">
          <div className="h2div sklvl heading">SKILL PROFICIANCY</div>
          <div className="skillDiscription text" data-aos="flip-down">
            Proficient in designing, developing, and deploying scalable web
            applications, with expertise in both front-end and back-end
            technologies. Experienced in working with modern frameworks,
            databases, and cloud services to create efficient, user-friendly,
            and secure solutions.
          </div>
          <div className="dev-img" data-aos="zoom-out-up">
            <CD></CD>
          </div>
        </div>
        <div className="skilicon">
          <div className="h2div heading">SKILL SET</div>
          <WheelSkill></WheelSkill>
        </div>

        <div className="shapC">
          <Shape
            style={{
              left: "-125px",
              bottom: "-285px",
              filter: "blur(1px)",
              width: "500px",
              height: "500px",
            }}
          ></Shape>
        </div>
      </div>

      <div className="SVGlogo"></div>
    </div>
  );
}

export function SkillCmponent({ ht, wd, nm, svg }) {
  return (
    <>
      <div
        class="button-div"
        key={uuidv4()}
        data-aos="flip-up"
        data-aos-duration="400"
        data-aos-easing="ease-out"
      >
        <div className="upload-btn" style={{ height: ht, width: wd }}>
          {svg}
        </div>
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
    "JavaScript",
    "Tailwind",
    "Bootstrap",
    "Python",
    "React.js",
    "C",
    "C++",
    "Node.js",
    "MongoDB",
    "MySQL",
    "Express.js",
    "Git",
    "EJS",
    "VS Code",
  ];

  const SVGs = [
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
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      height="2500"
      width="2183"
      viewBox="0 0 124 141.53"
    >
      <path
        d="M10.383 126.892L0 0l124 .255-10.979 126.637-50.553 14.638z"
        fill="#1b73ba"
      />
      <path d="M62.468 129.275V12.085l51.064.17-9.106 104.85z" fill="#1c88c7" />
      <path
        d="M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z"
        fill="#fff"
      />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      height="2500"
      width="2183"
      viewBox="0 0 124 141.53199999999998"
    >
      <path
        d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z"
        fill="#e9ca32"
      />
      <path
        d="M62.468 129.277V12.085l51.064.17-9.106 104.851z"
        fill="#ffde25"
      />
      <g fill="#fff">
        <path d="M57 26H43.5v78L33 102V91.5l-12.5-2V113l36.5 9.5zM67.127 26H104.5L102 40.95H81.394v24.533H102L99.5 115l-32.373 7.5V107L89 99.5 90.263 79l-23.136 3.35z" />
      </g>
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1499"
      viewBox=".15 .13 799.7 479.69"
      width="2500"
    >
      <path
        d="m400 .13c-106.63 0-173.27 53.3-199.93 159.89 39.99-53.3 86.64-73.28 139.95-59.96 30.42 7.6 52.16 29.67 76.23 54.09 39.2 39.78 84.57 85.82 183.68 85.82 106.62 0 173.27-53.3 199.92-159.9-39.98 53.3-86.63 73.29-139.95 59.97-30.41-7.6-52.15-29.67-76.22-54.09-39.2-39.78-84.58-85.82-183.68-85.82zm-199.93 239.84c-106.62 0-173.27 53.3-199.92 159.9 39.98-53.3 86.63-73.29 139.95-59.96 30.41 7.61 52.15 29.67 76.22 54.08 39.2 39.78 84.58 85.83 183.68 85.83 106.63 0 173.27-53.3 199.93-159.9-39.99 53.3-86.64 73.29-139.95 59.96-30.42-7.59-52.16-29.67-76.23-54.08-39.2-39.78-84.57-85.83-183.68-85.83z"
        fill="#06b6d4"
      />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1992"
      viewBox="0 0 512 407.864"
      width="2500"
    >
      <path
        d="m106.344 0c-29.214 0-50.831 25.57-49.863 53.3.929 26.641-.278 61.145-8.964 89.283-8.717 28.217-23.449 46.098-47.517 48.393v25.912c24.068 2.3 38.8 20.172 47.516 48.393 8.687 28.138 9.893 62.642 8.964 89.283-.968 27.726 20.649 53.3 49.868 53.3h299.347c29.214 0 50.827-25.57 49.859-53.3-.929-26.641.278-61.145 8.964-89.283 8.717-28.221 23.413-46.1 47.482-48.393v-25.912c-24.068-2.3-38.764-20.172-47.482-48.393-8.687-28.134-9.893-62.642-8.964-89.283.968-27.726-20.645-53.3-49.859-53.3h-299.355zm240.775 251.067c0 38.183-28.481 61.34-75.746 61.34h-80.458a8.678 8.678 0 0 1 -8.678-8.678v-199.593a8.678 8.678 0 0 1 8.678-8.678h80c39.411 0 65.276 21.348 65.276 54.124 0 23.005-17.4 43.6-39.567 47.208v1.2c30.176 3.31 50.495 24.21 50.495 53.077zm-84.519-128.1h-45.876v64.8h38.639c29.87 0 46.34-12.028 46.34-33.527-.003-20.148-14.163-31.273-39.103-31.273zm-45.876 90.511v71.411h47.564c31.1 0 47.573-12.479 47.573-35.931s-16.935-35.484-49.573-35.484h-45.564z"
        fill="#7952b3"
        fill-rule="evenodd"
      />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2500"
      height="2490"
      viewBox="0 0 256 255"
      preserveAspectRatio="xMinYMin meet"
    >
      <defs>
        <linearGradient
          x1="12.959%"
          y1="12.039%"
          x2="79.639%"
          y2="78.201%"
          id="a"
        >
          <stop stop-color="#387EB8" offset="0%" />
          <stop stop-color="#366994" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="19.128%"
          y1="20.579%"
          x2="90.742%"
          y2="88.429%"
          id="b"
        >
          <stop stop-color="#FFE052" offset="0%" />
          <stop stop-color="#FFC331" offset="100%" />
        </linearGradient>
      </defs>
      <path
        d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z"
        fill="url(#a)"
      />
      <path
        d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z"
        fill="url(#b)"
      />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="2500"
      viewBox="175.7 78 490.6 436.9"
      width="2194"
    >
      <g fill="#61dafb">
        <path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z" />
        <circle cx="420.9" cy="296.5" r="45.7" />
      </g>
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="32.18585611720149 20.47 223.6851360941233 247.05999999999997"
      width="2113"
      height="2500"
    >
      <path
        d="M252.71 93.61a21.67 21.67 0 0 0-2.65-10.87 20.74 20.74 0 0 0-7.87-7.67Q198.77 50 155.32 25c-7.8-4.51-15.36-4.35-23.11.23C120.69 32 63 65.09 45.81 75.06c-7.08 4.1-10.52 10.38-10.52 18.54v100.8a21.77 21.77 0 0 0 2.55 10.66 20.63 20.63 0 0 0 8 7.88c17.19 10 74.89 43.05 86.41 49.85 7.75 4.58 15.31 4.74 23.12.23q43.41-25.08 86.87-50.09a20.63 20.63 0 0 0 8-7.88 21.77 21.77 0 0 0 2.55-10.66V93.61z"
        fill="#004482"
      />
      <path
        d="M252.73 194.4a21.72 21.72 0 0 1-2.55 10.66 18.58 18.58 0 0 1-1.45 2.24L144 144l98.19-68.93a20.72 20.72 0 0 1 7.86 7.67 21.57 21.57 0 0 1 2.66 10.87c.02 33.6.02 100.79.02 100.79z"
        fill="#00599c"
      />
      <path
        d="M250.05 82.74L37.81 205.06a21.75 21.75 0 0 1-2.53-10.65V93.6c0-8.16 3.45-14.44 10.52-18.54C63 65.09 120.69 32 132.22 25.21c7.73-4.58 15.3-4.74 23.1-.23q43.41 25.08 86.87 50.09a20.72 20.72 0 0 1 7.86 7.67z"
        fill="#659ad2"
      />
      <path
        d="M148.2 184.72a39.91 39.91 0 0 1-35-20.63q-.53-.94-1-1.92A39.94 39.94 0 0 1 179 119.4c.53.64 1 1.31 1.53 2 .24.33.48.66.7 1l35.07-20.2q-1.28-2.06-2.68-4c-.49-.69-1-1.35-1.48-2A79.9 79.9 0 0 0 78 181.92c.34.64.69 1.27 1 1.9a79.91 79.91 0 0 0 136.86 3.62l-34.29-20.73a39.88 39.88 0 0 1-33.37 18.01z"
        fill="#fff"
      />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2222"
      height="2500"
      viewBox="0 0 256 288"
      preserveAspectRatio="xMinYMin meet"
    >
      <path
        d="M255.569 84.72c-.002-4.83-1.035-9.098-3.124-12.761-2.052-3.602-5.125-6.621-9.247-9.008-34.025-19.619-68.083-39.178-102.097-58.817-9.17-5.294-18.061-5.101-27.163.269C100.395 12.39 32.59 51.237 12.385 62.94 4.064 67.757.015 75.129.013 84.711 0 124.166.013 163.62 0 203.076c.002 4.724.991 8.909 2.988 12.517 2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.269 34.015-19.64 68.075-39.198 102.105-58.817 4.217-2.44 7.333-5.544 9.386-9.252 1.994-3.608 2.985-7.793 2.987-12.518 0 0 0-78.889-.013-118.345"
        fill="#5C8DBC"
      />
      <path
        d="M128.182 143.509L2.988 215.593c2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.269 34.015-19.64 68.075-39.198 102.105-58.817 4.217-2.44 7.333-5.544 9.386-9.252l-124.413-72.074"
        fill="#1A4674"
      />
      <path
        d="M91.101 164.861c7.285 12.718 20.98 21.296 36.69 21.296 15.807 0 29.58-8.687 36.828-21.541l-36.437-21.107-37.081 21.352"
        fill="#1A4674"
      />
      <path
        d="M255.569 84.72c-.002-4.83-1.035-9.098-3.124-12.761l-124.263 71.55 124.413 72.074c1.994-3.608 2.985-7.793 2.987-12.518 0 0 0-78.889-.013-118.345"
        fill="#1B598E"
      />
      <path
        d="M248.728 148.661h-9.722v9.724h-9.724v-9.724h-9.721v-9.721h9.721v-9.722h9.724v9.722h9.722v9.721M213.253 148.661h-9.721v9.724h-9.722v-9.724h-9.722v-9.721h9.722v-9.722h9.722v9.722h9.721v9.721"
        fill="#FFF"
      />
      <path
        d="M164.619 164.616c-7.248 12.854-21.021 21.541-36.828 21.541-15.71 0-29.405-8.578-36.69-21.296a42.062 42.062 0 0 1-5.574-20.968c0-23.341 18.923-42.263 42.264-42.263 15.609 0 29.232 8.471 36.553 21.059l36.941-21.272c-14.683-25.346-42.096-42.398-73.494-42.398-46.876 0-84.875 38-84.875 84.874 0 15.378 4.091 29.799 11.241 42.238 14.646 25.48 42.137 42.637 73.634 42.637 31.555 0 59.089-17.226 73.714-42.781l-36.886-21.371"
        fill="#FFF"
      />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="2500"
      viewBox="3.58301931 1.90851839 24.83198069 28.09192829"
      width="2029"
    >
      <g fill="#00d486">
        <path d="m16 30a2.151 2.151 0 0 1 -1.076-.288l-3.424-2.027c-.511-.286-.262-.387-.093-.446a6.828 6.828 0 0 0 1.549-.7.263.263 0 0 1 .255.019l2.631 1.563a.34.34 0 0 0 .318 0l10.26-5.922a.323.323 0 0 0 .157-.278v-11.846a.331.331 0 0 0 -.159-.283l-10.26-5.917a.323.323 0 0 0 -.317 0l-10.254 5.919a.33.33 0 0 0 -.162.281v11.841a.315.315 0 0 0 .161.274l2.814 1.624c1.525.762 2.459-.136 2.459-1.038v-11.691a.3.3 0 0 1 .3-.3h1.3a.3.3 0 0 1 .3.3v11.692c0 2.035-1.108 3.2-3.038 3.2a4.389 4.389 0 0 1 -2.363-.642l-2.697-1.547a2.166 2.166 0 0 1 -1.076-1.872v-11.841a2.162 2.162 0 0 1 1.076-1.875l10.261-5.924a2.246 2.246 0 0 1 2.156 0l10.26 5.924a2.165 2.165 0 0 1 1.077 1.87v11.846a2.171 2.171 0 0 1 -1.077 1.872l-10.26 5.924a2.152 2.152 0 0 1 -1.078.288z" />
        <path d="m14.054 17.953a.3.3 0 0 1 .3-.3h1.327a.3.3 0 0 1 .295.251c.2 1.351.8 2.032 3.513 2.032 2.161 0 3.082-.489 3.082-1.636 0-.661-.261-1.152-3.62-1.481-2.808-.278-4.544-.9-4.544-3.144 0-2.07 1.745-3.305 4.67-3.305 3.287 0 4.914 1.141 5.12 3.589a.3.3 0 0 1 -.295.323h-1.336a.3.3 0 0 1 -.288-.232c-.319-1.421-1.1-1.875-3.2-1.875-2.36 0-2.634.822-2.634 1.438 0 .746.324.964 3.51 1.385 3.153.417 4.651 1.007 4.651 3.223 0 2.236-1.864 3.516-5.115 3.516-4.495.006-5.436-2.055-5.436-3.784z" />
      </g>
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="2500"
      viewBox="8.738 -.036 14.517 32.038"
      width="2500"
    >
      <path
        d="m15.9.087.854 1.604c.192.296.4.558.645.802a22.406 22.406 0 0 1 2.004 2.266c1.447 1.9 2.423 4.01 3.12 6.292.418 1.394.645 2.824.662 4.27.07 4.323-1.412 8.035-4.4 11.12a12.7 12.7 0 0 1 -1.57 1.342c-.296 0-.436-.227-.558-.436a3.589 3.589 0 0 1 -.436-1.255c-.105-.523-.174-1.046-.14-1.586v-.244c-.024-.052-.285-24.052-.181-24.175z"
        fill="#599636"
      />
      <path
        d="m15.9.034c-.035-.07-.07-.017-.105.017.017.35-.105.662-.296.96-.21.296-.488.523-.767.767-1.55 1.342-2.77 2.963-3.747 4.776-1.3 2.44-1.97 5.055-2.16 7.808-.087.993.314 4.497.627 5.508.854 2.684 2.388 4.933 4.375 6.885.488.47 1.01.906 1.55 1.325.157 0 .174-.14.21-.244a4.78 4.78 0 0 0 .157-.68l.35-2.614z"
        fill="#6cac48"
      />
      <path
        d="m16.754 28.845c.035-.4.227-.732.436-1.063-.21-.087-.366-.26-.488-.453a3.235 3.235 0 0 1 -.26-.575c-.244-.732-.296-1.5-.366-2.248v-.453c-.087.07-.105.662-.105.75a17.37 17.37 0 0 1 -.314 2.353c-.052.314-.087.627-.28.906 0 .035 0 .07.017.122.314.924.4 1.865.453 2.824v.35c0 .418-.017.33.33.47.14.052.296.07.436.174.105 0 .122-.087.122-.157l-.052-.575v-1.604c-.017-.28.035-.558.07-.82z"
        fill="#c2bfbf"
      />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="2500"
      preserveAspectRatio="xMidYMid"
      viewBox="-3.576 -8.996 259.406 260.1"
      width="2443"
    >
      <g fill="#00546b">
        <path d="m235.648 194.212c-13.918-.347-24.705 1.045-33.752 4.872-2.61 1.043-6.786 1.044-7.134 4.35 1.392 1.392 1.566 3.654 2.784 5.567 2.09 3.479 5.741 8.177 9.047 10.614 3.653 2.783 7.308 5.566 11.134 8.002 6.786 4.176 14.442 6.611 21.053 10.787 3.829 2.434 7.654 5.568 11.482 8.177 1.914 1.39 3.131 3.654 5.568 4.523v-.521c-1.219-1.567-1.567-3.828-2.784-5.568-1.738-1.74-3.48-3.306-5.22-5.046-5.045-6.784-11.308-12.7-18.093-17.571-5.567-3.828-17.747-9.047-20.008-15.485 0 0-.175-.173-.348-.347 3.827-.348 8.35-1.74 12.005-2.784 5.915-1.567 11.308-1.218 17.398-2.784 2.783-.696 5.567-1.566 8.35-2.436v-1.565c-3.13-3.132-5.392-7.307-8.698-10.265-8.873-7.657-18.617-15.137-28.707-21.4-5.394-3.48-12.354-5.742-18.095-8.699-2.086-1.045-5.567-1.566-6.784-3.306-3.133-3.827-4.873-8.872-7.134-13.396-5.044-9.57-9.917-20.182-14.267-30.272-3.13-6.786-5.044-13.572-8.872-19.834-17.92-29.577-37.406-47.497-67.33-65.07-6.438-3.653-14.093-5.219-22.27-7.132-4.348-.175-8.699-.522-13.048-.697-2.784-1.218-5.568-4.523-8.004-6.089-9.915-6.264-35.492-19.833-42.799-1.913-4.698 11.308 6.96 22.442 10.96 28.185 2.96 4.001 6.786 8.524 8.874 13.048 1.218 2.956 1.565 6.09 2.783 9.221 2.785 7.653 5.393 16.18 9.048 23.314 1.914 3.653 4.001 7.48 6.437 10.786 1.392 1.913 3.827 2.784 4.35 5.915-2.435 3.48-2.61 8.7-4.003 13.049-6.263 19.66-3.826 44.017 5.046 58.457 2.783 4.348 9.395 13.92 18.268 10.265 7.83-3.131 6.09-13.048 8.35-21.747.524-2.09.176-3.48 1.219-4.872v.349c2.436 4.87 4.871 9.569 7.133 14.44 5.394 8.524 14.788 17.398 22.617 23.314 4.177 3.13 7.482 8.524 12.702 10.438v-.523h-.349c-1.044-1.566-2.61-2.261-4.001-3.48-3.131-3.13-6.612-6.958-9.047-10.438-7.306-9.744-13.745-20.53-19.486-31.665-2.783-5.392-5.22-11.308-7.481-16.701-1.045-2.09-1.045-5.22-2.784-6.263-2.61 3.827-6.437 7.133-8.351 11.83-3.304 7.481-3.653 16.702-4.871 26.27-.696.176-.349 0-.697.35-5.566-1.394-7.48-7.134-9.569-12.006-5.22-12.352-6.09-32.186-1.565-46.452 1.218-3.654 6.438-15.136 4.35-18.616-1.044-3.306-4.525-5.22-6.438-7.829-2.261-3.306-4.698-7.48-6.263-11.135-4.176-9.743-6.264-20.53-10.787-30.273-2.088-4.524-5.74-9.22-8.699-13.396-3.305-4.697-6.959-8.004-9.569-13.571-.869-1.913-2.088-5.045-.696-7.133.348-1.392 1.043-1.913 2.436-2.261 2.262-1.915 8.7.521 10.96 1.565 6.438 2.608 11.831 5.046 17.225 8.699 2.435 1.74 5.045 5.046 8.176 5.916h3.654c5.568 1.217 11.83.348 17.05 1.913 9.222 2.957 17.572 7.307 25.054 12.005 22.792 14.44 41.58 34.97 54.282 59.501 2.088 4 2.957 7.656 4.871 11.83 3.655 8.526 8.178 17.225 11.83 25.576 3.654 8.176 7.133 16.528 12.353 23.314 2.61 3.652 13.048 5.567 17.746 7.481 3.48 1.565 8.874 2.958 12.005 4.871 5.915 3.652 11.83 7.83 17.398 11.83 2.784 2.088 11.482 6.438 12.005 9.917z" />
        <path d="m58.186 43.022c-2.957 0-5.044.35-7.132.871v.348h.348c1.393 2.784 3.827 4.698 5.566 7.133 1.393 2.783 2.61 5.568 4.003 8.352.173-.175.347-.348.347-.348 2.437-1.741 3.654-4.524 3.654-8.7-1.044-1.217-1.218-2.435-2.088-3.653-1.043-1.741-3.306-2.61-4.698-4.003z" />
      </g>
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2500"
      height="728"
      viewBox="0 0 512 149"
    >
      <path
        d="M3.332 115.629V58.648h71.144v-3.333H3.332V3.332h75.642V0H0v118.961h79.64v-3.332H3.333zm140.455-82.307l-29.49 38.821-28.825-38.82H81.14l31.157 41.32L78.14 118.96h3.999l32.156-41.82 32.323 41.82h4.165l-34.322-44.319 31.323-41.32h-3.998zm16.994 114.963V94.97h.333c2 7.775 5.943 14.023 11.83 18.744 5.887 4.72 13.384 7.081 22.492 7.081 5.887 0 11.108-1.194 15.662-3.582s8.358-5.637 11.413-9.747c3.054-4.11 5.387-8.886 6.998-14.329 1.61-5.442 2.416-11.163 2.416-17.16 0-6.443-.834-12.386-2.5-17.828-1.666-5.443-4.082-10.164-7.247-14.162-3.166-3.999-6.998-7.11-11.497-9.33-4.498-2.222-9.58-3.333-15.245-3.333-4.332 0-8.358.639-12.079 1.916-3.721 1.278-7.025 3.082-9.913 5.415a36.674 36.674 0 0 0-7.498 8.247c-2.11 3.166-3.721 6.637-4.832 10.414h-.333V33.322h-3.332v114.963h3.332zm34.655-30.657c-10.44 0-18.827-3.582-25.158-10.746-6.331-7.164-9.497-17.467-9.497-30.907 0-5.554.778-10.83 2.333-15.828 1.555-4.998 3.804-9.386 6.747-13.162 2.944-3.777 6.582-6.776 10.913-8.997 4.332-2.222 9.22-3.333 14.662-3.333 5.554 0 10.414 1.111 14.579 3.333 4.165 2.221 7.609 5.248 10.33 9.08s4.776 8.22 6.165 13.162c1.388 4.943 2.082 10.191 2.082 15.745 0 4.999-.638 9.97-1.916 14.912-1.277 4.943-3.249 9.386-5.915 13.33-2.665 3.942-6.08 7.163-10.246 9.663-4.166 2.499-9.192 3.748-15.079 3.748zm54.816 1.333V70.477c0-4.665.666-9.22 2-13.662 1.332-4.443 3.387-8.359 6.164-11.746 2.777-3.388 6.303-6.054 10.58-7.998 4.276-1.944 9.358-2.749 15.245-2.416v-3.332c-5.11-.11-9.58.444-13.412 1.666-3.833 1.222-7.137 2.888-9.914 4.999-2.777 2.11-4.998 4.581-6.664 7.414a33.15 33.15 0 0 0-3.666 9.08h-.333v-21.16h-3.332v85.64h3.332zm38.154-42.153h71.643c.223-5.887-.36-11.551-1.749-16.994-1.388-5.443-3.61-10.275-6.664-14.495-3.055-4.221-6.998-7.609-11.83-10.164-4.832-2.555-10.58-3.832-17.244-3.832-4.777 0-9.442 1-13.996 3-4.554 1.999-8.553 4.914-11.996 8.746-3.443 3.832-6.22 8.525-8.33 14.08-2.11 5.553-3.166 11.884-3.166 18.993 0 6.331.722 12.246 2.166 17.744 1.444 5.498 3.665 10.275 6.664 14.329 3 4.054 6.86 7.192 11.58 9.413 4.72 2.222 10.413 3.277 17.078 3.166 9.774 0 17.994-2.75 24.658-8.247 6.665-5.499 10.608-13.246 11.83-23.243h-3.332c-1.444 9.442-5.138 16.523-11.08 21.243-5.943 4.721-13.412 7.081-22.41 7.081-6.109 0-11.274-1.055-15.495-3.165-4.22-2.11-7.664-4.999-10.33-8.664-2.665-3.666-4.637-7.97-5.914-12.913-1.278-4.942-1.972-10.302-2.083-16.078zm68.311-3.332h-68.31c.332-5.998 1.443-11.385 3.331-16.161 1.889-4.777 4.36-8.859 7.415-12.246 3.054-3.388 6.609-5.97 10.663-7.748 4.054-1.777 8.414-2.666 13.079-2.666 5.554 0 10.44 1.028 14.662 3.083 4.22 2.055 7.747 4.86 10.58 8.414 2.832 3.554 4.97 7.692 6.414 12.412 1.444 4.721 2.166 9.692 2.166 14.912zm72.477-14.828h3.332c0-9.553-2.777-16.495-8.33-20.827-5.555-4.332-13.108-6.498-22.66-6.498-5.332 0-9.83.667-13.496 2-3.665 1.332-6.664 3.054-8.997 5.164-2.332 2.11-3.998 4.443-4.998 6.998-1 2.555-1.5 4.999-1.5 7.331 0 4.665.833 8.386 2.5 11.163 1.666 2.777 4.276 4.943 7.83 6.498 2.444 1.11 5.22 2.11 8.331 3 3.11.888 6.72 1.832 10.83 2.831 3.665.89 7.275 1.778 10.83 2.666 3.554.889 6.692 2.083 9.413 3.582 2.722 1.5 4.943 3.416 6.665 5.749 1.721 2.332 2.582 5.387 2.582 9.163 0 3.666-.86 6.776-2.582 9.33a20.815 20.815 0 0 1-6.581 6.249c-2.666 1.61-5.638 2.776-8.914 3.498-3.277.722-6.47 1.083-9.58 1.083-10.108 0-17.856-2.249-23.243-6.747-5.387-4.499-8.08-11.58-8.08-21.244h-3.333c0 10.775 2.916 18.661 8.747 23.66 5.832 4.998 14.468 7.497 25.909 7.497 3.665 0 7.358-.417 11.08-1.25 3.72-.833 7.053-2.193 9.996-4.082a22.592 22.592 0 0 0 7.164-7.33c1.833-3 2.75-6.665 2.75-10.997 0-4.11-.806-7.442-2.416-9.997-1.611-2.554-3.721-4.665-6.332-6.331-2.61-1.666-5.553-2.971-8.83-3.915a516.08 516.08 0 0 0-9.914-2.75 1726.675 1726.675 0 0 0-12.246-3.165c-3.498-.889-6.747-1.944-9.746-3.166-2.888-1.222-5.193-2.971-6.915-5.248-1.722-2.277-2.582-5.526-2.582-9.747 0-.777.222-2.166.666-4.165.444-2 1.5-4.027 3.166-6.082 1.666-2.054 4.22-3.887 7.664-5.498 3.443-1.61 8.164-2.416 14.162-2.416 4.11 0 7.858.445 11.246 1.333 3.388.889 6.304 2.305 8.747 4.249 2.444 1.944 4.332 4.415 5.665 7.414 1.333 3 2 6.665 2 10.997zm77.141 0h3.332c0-9.553-2.776-16.495-8.33-20.827-5.554-4.332-13.107-6.498-22.66-6.498-5.331 0-9.83.667-13.495 2-3.666 1.332-6.665 3.054-8.997 5.164-2.333 2.11-3.999 4.443-4.999 6.998-1 2.555-1.499 4.999-1.499 7.331 0 4.665.833 8.386 2.5 11.163 1.665 2.777 4.276 4.943 7.83 6.498 2.444 1.11 5.22 2.11 8.33 3 3.11.888 6.72 1.832 10.83 2.831 3.666.89 7.276 1.778 10.83 2.666 3.555.889 6.692 2.083 9.414 3.582 2.721 1.5 4.943 3.416 6.664 5.749 1.722 2.332 2.583 5.387 2.583 9.163 0 3.666-.861 6.776-2.583 9.33a20.815 20.815 0 0 1-6.58 6.249c-2.667 1.61-5.638 2.776-8.915 3.498-3.276.722-6.47 1.083-9.58 1.083-10.108 0-17.855-2.249-23.242-6.747-5.388-4.499-8.081-11.58-8.081-21.244h-3.332c0 10.775 2.915 18.661 8.747 23.66 5.831 4.998 14.467 7.497 25.908 7.497 3.666 0 7.359-.417 11.08-1.25 3.72-.833 7.053-2.193 9.997-4.082a22.592 22.592 0 0 0 7.164-7.33c1.833-3 2.749-6.665 2.749-10.997 0-4.11-.805-7.442-2.416-9.997-1.61-2.554-3.72-4.665-6.331-6.331-2.61-1.666-5.554-2.971-8.83-3.915a516.071 516.071 0 0 0-9.914-2.75 1726.65 1726.65 0 0 0-12.246-3.165c-3.499-.889-6.748-1.944-9.747-3.166-2.888-1.222-5.193-2.971-6.914-5.248-1.722-2.277-2.583-5.526-2.583-9.747 0-.777.222-2.166.667-4.165.444-2 1.5-4.027 3.165-6.082 1.666-2.054 4.221-3.887 7.664-5.498 3.444-1.61 8.164-2.416 14.163-2.416 4.11 0 7.858.445 11.246 1.333 3.388.889 6.303 2.305 8.747 4.249 2.444 1.944 4.332 4.415 5.665 7.414 1.333 3 2 6.665 2 10.997z"
        fill="#222"
      />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2500"
      height="2500"
      viewBox="0 0 256 256"
      preserveAspectRatio="xMinYMin meet"
    >
      <path
        d="M251.172 116.594L139.4 4.828c-6.433-6.437-16.873-6.437-23.314 0l-23.21 23.21 29.443 29.443c6.842-2.312 14.688-.761 20.142 4.693 5.48 5.489 7.02 13.402 4.652 20.266l28.375 28.376c6.865-2.365 14.786-.835 20.269 4.657 7.663 7.66 7.663 20.075 0 27.74-7.665 7.666-20.08 7.666-27.749 0-5.764-5.77-7.188-14.235-4.27-21.336l-26.462-26.462-.003 69.637a19.82 19.82 0 0 1 5.188 3.71c7.663 7.66 7.663 20.076 0 27.747-7.665 7.662-20.086 7.662-27.74 0-7.663-7.671-7.663-20.086 0-27.746a19.654 19.654 0 0 1 6.421-4.281V94.196a19.378 19.378 0 0 1-6.421-4.281c-5.806-5.798-7.202-14.317-4.227-21.446L81.47 39.442l-76.64 76.635c-6.44 6.443-6.44 16.884 0 23.322l111.774 111.768c6.435 6.438 16.873 6.438 23.316 0l111.251-111.249c6.438-6.44 6.438-16.887 0-23.324"
        fill="#DE4C36"
      />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="48px"
      height="48px"
    >
      <path
        fill="#c0ca33"
        d="M34.868,28.641c0.73,0.675,1.409,1.362,2.151,1.974c1.007,0.832,2.125,1.469,3.471,1.568 c0.84,0.062,1.631-0.066,2.246-0.709c1.155-1.207,0.779-3.317-0.778-4.072c-0.955-0.463-1.975-0.795-2.975-1.163 c-1.596-0.587-3.121-1.287-4.309-2.555c-0.531-0.567-0.893-1.236-1.108-1.976c-0.615-2.118-0.692-4.257-0.017-6.366 c0.766-2.396,2.46-3.849,4.892-4.412c2.043-0.472,3.998-0.09,5.874,0.778c1.137,0.526,2.132,1.252,3.015,2.14 c0.186,0.187,0.224,0.333,0.093,0.574c-0.661,1.212-1.305,2.434-1.955,3.652c-0.033,0.061-0.076,0.117-0.134,0.206 c-0.245-0.215-0.473-0.423-0.711-0.621c-1.338-1.114-2.816-1.888-4.613-1.876c-1.188,0.008-1.994,0.623-2.271,1.731 c-0.298,1.195,0.14,2.253,1.15,2.814c1.119,0.621,2.343,0.969,3.539,1.393c1.719,0.609,3.246,1.507,4.317,3.032 c0.714,1.017,1.004,2.188,1.126,3.405c0.146,1.458,0.089,2.899-0.369,4.309c-0.916,2.82-3.292,4.638-6.264,4.79 c-2.574,0.132-4.824-0.699-6.782-2.324c-0.731-0.607-1.372-1.322-2.042-2c-0.066-0.067-0.101-0.255-0.056-0.329 c0.81-1.313,1.635-2.618,2.458-3.923C34.832,28.66,34.862,28.646,34.868,28.641z"
      />
      <polygon
        fill="#c0ca33"
        points="14.274,16.462 14.274,11.34 0.009,11.34 0.009,36.896 14.274,36.896 14.274,31.774 5.16,31.774 5.16,26.821 13.226,26.821 13.226,21.698 5.16,21.698 5.16,16.462"
      />
      <path
        fill="#c0ca33"
        d="M29.613,11.34H19.34v5.038h5.208v13.005c0.085,2.08-1.047,2.533-1.047,2.533 c-2.377,0.792-4.346-2.343-4.346-2.343l-2.39,4.211c3.566,3.934,7.443,3.311,7.443,3.311c5.377-0.113,5.377-7.712,5.377-7.712 L29.613,11.34z"
      />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="96px"
      height="96px"
    >
      <path
        fill="#29b6f6"
        d="M44,11.11v25.78c0,1.27-0.79,2.4-1.98,2.82l-8.82,4.14L34,33V15L33.2,4.15l8.82,4.14 C43.21,8.71,44,9.84,44,11.11z"
      />
      <path
        fill="#0277bd"
        d="M9,33.896L34,15V5.353c0-1.198-1.482-1.758-2.275-0.86L4.658,29.239 c-0.9,0.83-0.849,2.267,0.107,3.032c0,0,1.324,1.232,1.803,1.574C7.304,34.37,8.271,34.43,9,33.896z"
      />
      <path
        fill="#0288d1"
        d="M9,14.104L34,33v9.647c0,1.198-1.482,1.758-2.275,0.86L4.658,18.761 c-0.9-0.83-0.849-2.267,0.107-3.032c0,0,1.324-1.232,1.803-1.574C7.304,13.63,8.271,13.57,9,14.104z"
      />
    </svg>,
  ];

  return (
    <div className="div-pr">
      {nms.map((item, index) => (
        <div className="skill-rd">
          <SkillCmponent key={index} wd="" ht="" nm={item} svg={SVGs[index]} />
          <span>{nms[index]}</span>
        </div>
      ))}

      {/* <div className="verticleLine"></div> */}
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
