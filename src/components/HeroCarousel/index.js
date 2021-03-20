import React from "react";
import { getHero } from "../../utils/firebase";
import { Fallback } from "../../utils/common";
import { WithErrorBoundary } from "../../hoc/withErrorBoundary";
import { SuspenseWithFallback } from "../../utils/common";
const HeroCarouselInner = React.lazy(() => import("./heroCarouselInner"));

const HeroCarousel = (props) => {
  const [heroTitles, setHeroTitles] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    getHero().then((r) => {
      setHeroTitles(r);
      setLoading(false);
    });
  }, []);
  return (
    <>
      {!loading && heroTitles.length && (
        <SuspenseWithFallback>
          <HeroCarouselInner heroTitles={heroTitles} />
        </SuspenseWithFallback>
      )}
      {loading && <Fallback />}
    </>
  );
};

export default WithErrorBoundary(HeroCarousel);
