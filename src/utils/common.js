import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export const owlSettings = (device) => {
  return {
    autoplaySpeed: 1000,
    items: device === "mobile" ? 1 : 3,
    dots: false,
    animateIn: true,
    animateOut: true,
    autoplayHoverPause: true,
    autoplay: true,
    className: "owl-theme",
    loop: true,
    margin: 10,
    nav: device === "mobile" ? false : true,
  };
};

export const owlCategorySettings = (device, itemsToShow) => {
  return {
    autoplaySpeed: 1000,
    items: itemsToShow,
    dots: false,
    animateIn: true,
    animateOut: true,
    autoplayHoverPause: true,
    className: "owl-theme",
    loop: true,
    margin: 10,
    nav: device === "mobile" ? false : true,
  };
};

export const Fallback = () => (
  <div className="mt-20">
    <FontAwesomeIcon pulse size={"2x"} color="white" icon={faSpinner} />
  </div>
);

export const SuspenseWithFallback = ({ children }) => (
  <React.Suspense fallback={<Fallback></Fallback>}>{children}</React.Suspense>
);
