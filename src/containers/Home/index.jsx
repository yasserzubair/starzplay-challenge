import React from "react";
import { SuspenseWithFallback } from "../../utils/common";
import Lazyload from "react-lazyload";
const HeroCarousel = React.lazy(() => import("../../components/HeroCarousel"));
const CategoryCarousel = React.lazy(() =>
  import("../../components/CategoryCarousel")
);

const Home = () => {
  return (
    <>
      <SuspenseWithFallback>
        <HeroCarousel></HeroCarousel>
      </SuspenseWithFallback>
      {Array(20)
        .fill()
        .map((item, index) => (
          <React.Fragment key={`cat-${Math.random()}-${index}`}>
            <Lazyload height={211}>
              <CategoryCarousel moduleId={index + 1} />
            </Lazyload>
          </React.Fragment>
        ))}
    </>
  );
};

export default Home;
