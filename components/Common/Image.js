import React from "react";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";
import placeholder from "../../assets/site/placeholder.png";
export default function Image({ alt, src }) {
  return (
    <img
      src={src}
      alt={alt}
      placeholder={placeholder}
      loading="lazy"
    />
  );
}
