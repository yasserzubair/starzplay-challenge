import React from "react";
import { SuspenseWithFallback } from "../../utils/common";
// const HeroCarousel = React.lazy(() => import("../../components/HeroCarousel"));
import HeroCarousel from "../../components/HeroCarousel";

const Home = () => {
  return (
      <SuspenseWithFallback>
        <HeroCarousel></HeroCarousel>
      </SuspenseWithFallback>
  );
};

export default Home;
