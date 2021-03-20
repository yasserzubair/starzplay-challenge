import React from "react";
import { getCategroy } from "../../utils/firebase";
import CategoryCarouselInner from "./categoryCarouselInner";
import { Fallback } from "../../utils/common";
import { WithErrorBoundary } from "../../hoc/withErrorBoundary";
const CategroyCarousel = ({ moduleId }) => {
  const [categroyTitles, setCategroyTitles] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    getCategroy(moduleId).then((r) => {
      setCategroyTitles(r);
      setLoading(false);
    });
  }, [moduleId]);
  return (
    <>
      {!loading && categroyTitles.length && (
        <>
          <h2 className="text-white text-lg text-left mt-4 font-bold mb-2 pl-2">
            {categroyTitles[0].title}
          </h2>
          <CategoryCarouselInner categoryTitles={categroyTitles} />
        </>
      )}
      {loading && <div className='h-211 pt-10'><Fallback /></div>}
    </>
  );
};

export default WithErrorBoundary(CategroyCarousel);
