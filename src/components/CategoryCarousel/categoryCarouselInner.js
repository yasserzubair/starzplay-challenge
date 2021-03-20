import React from "react";
import styled from "styled-components";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { owlCategorySettings } from "../../utils/common";
import { DeviceContext } from "../../utils/deviceContext";
import CategoryTile from "./categoryTile";
const OwlCarousel = React.lazy(() => import("react-owl-carousel"));


const CarouselParent = styled.div`
  & button {
    border: none;
    outline: none;
    & img {
      height: 25px !important;
    }
  }
  & .trailerIcon {
    width: 25px !important;
  }
  & div.acitve div:nth-child(3) {
    opacity: 0.1;
  }
  & .owl-item {
    & img {
      height: 211px;
      object-fit: cover;
    }
  }
  & .owl-prev {
    position: absolute;
    top: 20%;
    left: 0%;
    color: white !important;
    font-size: 3rem !important;
    &:hover {
      background: none !important;
    }
  }
  & .owl-next {
    position: absolute;
    top: 20%;
    right: 0%;
    color: white !important;
    font-size: 3rem !important;
    &:hover {
      background: none !important;
    }
  }
`;
const CategoryCarouselInner = (props) => {
  const { device } = React.useContext(DeviceContext);
  const [itemsToShow, setItemsToShow] = React.useState(8);
  React.useEffect(() => {
    const handleScroll = (e) => {
      let innerWidth = window.innerWidth;
      if (innerWidth > 1000 && itemsToShow !== 8) {
        setItemsToShow(8);
      }
      if (innerWidth > 800 && innerWidth <= 1000 && itemsToShow !== 6) {
        setItemsToShow(6);
      }
      if (innerWidth > 600 && innerWidth <= 800 && itemsToShow !== 5) {
        setItemsToShow(5);
      }
      if (innerWidth > 400 && innerWidth <= 600 && itemsToShow !== 4) {
        setItemsToShow(4);
      }
      if (innerWidth < 400) {
        setItemsToShow(3);
      }
    };
    handleScroll();

    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("resize", handleScroll);
    };
  }, [itemsToShow]);
  return (
    <CarouselParent device={device}>
      <OwlCarousel {...owlCategorySettings(device, itemsToShow)}>
        {props?.categoryTitles[0]?.layoutTitles.titles.map((item, index) => (
          <CategoryTile item={item} key={`Category-${Math.random}-${index}`} />
        ))}
      </OwlCarousel>
    </CarouselParent>
  );
};

const MemoizedCarouselInner = React.memo(CategoryCarouselInner);
export default MemoizedCarouselInner;
