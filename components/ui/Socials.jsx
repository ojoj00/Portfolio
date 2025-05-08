import React from "react";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/ojoj00" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/oskar-janicki-85b62a332/",
  },
  { icon: <FaYoutube />, path: "https://www.youtube.com/" },
  { icon: <FaTwitter />, path: "https://x.com/home" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <a key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
