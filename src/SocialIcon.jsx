import React from "react";
import "./SocialIcons.css";
import { v4 as uuidv4 } from "uuid";

const SocialIcons = () => {
  const icons = [
    { name: "facebook", link: "#" },
    { name: "twitter", link: "#" },
    { name: "github", link: "https://github.com/MahtabShah/" },
    { name: "linkedin", link: "linkedin.com/mahtab-shah-916" },
    { name: "instagram", link: "" },
    { name: "google-plus", link: "#" },
  ];

  return (
    <ul
      className="gap-5"
      style={{ display: "grid", gridTemplateColumns: "120px  120px" }}
    >
      {icons.map((icon, i) => (
        <li
          key={icon.name}
          className="d-flex flex-column gap-2 align-items-center"
        >
          <a
            href={icon.link}
            key={uuidv4()}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration={100 + i * 400}
            data-aos-offset="10"
            className=""
          >
            <i
              key={uuidv4()}
              className={`fa fa-${icon.name}`}
              aria-hidden="true"
            ></i>
          </a>
          <span>{icon.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcons;
