import React from "react";
import "./SocialIcons.css";
import { v4 as uuidv4 } from "uuid";

const SocialIcons = () => {
  const icons = [
    { name: "facebook", link: "#" },
    { name: "twitter", link: "#" },
    { name: "google-plus", link: "#" },
    { name: "linkedin", link: "#" },
    { name: "instagram", link: "#" },
  ];

  return (
    <ul className="social-icons">
      {icons.map((icon, i) => (
        <li key={icon.name}>
          <a
            href={icon.link}
            key={uuidv4()}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration={100 + i * 400}
            data-aos-offset="10"
          >
            <i
              key={uuidv4()}
              className={`fa fa-${icon.name}`}
              aria-hidden="true"
            ></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcons;
