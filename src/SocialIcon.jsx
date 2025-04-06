import React from "react";
import "./SocialIcons.css";

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
      {icons.map((icon) => (
        <li key={icon.name}>
          <a href={icon.link}>
            <i className={`fa fa-${icon.name}`} aria-hidden="true"></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcons;
