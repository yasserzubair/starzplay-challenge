import React from "react";
import { getHero } from "../../utils/firebase";
import HeroCarouselInner from "./heroCarouselInner";
import { Fallback } from "../../utils/common";
import { WithErrorBoundary } from "../../hoc/withErrorBoundary";
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
        <HeroCarouselInner heroTitles={heroTitles} />
      )}
      {loading && <Fallback />}
    </>
  );
};

export default WithErrorBoundary(HeroCarousel);
