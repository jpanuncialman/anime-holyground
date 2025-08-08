"use client";

import { jarallax } from "jarallax";
import { useEffect } from "react";

export default function ParallaxContainer(props) {
  useEffect(() => {
    jarallax(document.querySelectorAll(".parallax-5"), {
      speed: 0.5,
      imgSize: "cover",
      imgPosition: "0 25%",
    });
  }, []);
  return (
    <div
      //   ref={parallax.ref}
      {...props}
    >
      {props.children}
    </div>
  );
}
