import React from "react";

export default function FooterSocials() {
  const socials = [
    {
      name: "Instagram",
      icon: "fa-instagram",
      url: "https://www.instagram.com/animeholyground",
    },
    // { name: "YouTube", icon: "fa-youtube", url: "#" },
    // { name: "Pinterest", icon: "fa-pinterest", url: "#" },
    // { name: "LinkedIn", icon: "fa-linkedin", url: "#" },
  ];

  return (
    <>
      {socials.map((social, index) => (
        <li key={index}>
          <a href={social.url} rel="noopener nofollow" target="_blank">
            <i className={social.icon} /> {social.name}
          </a>
        </li>
      ))}
    </>
  );
}
