import React from "react";
import styled, { css } from "styled-components";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { owlSettings } from "../../utils/common";
import { DeviceContext } from "../../utils/deviceContext";
import HeroTile from "./heroTile";
const OwlCarousel = React.lazy(() => import("react-owl-carousel"));

const CarouselParent = styled.div`
  ${(props) =>
    props.device === "desktop" &&
    css`
      transform: scale(1.5);
      transform-origin: 50% 0%;
    `}
  margin-bottom: 9%;
  & button {
    border: none;
    outline: none;
  }
  & .trailerIcon {
    width: 25px !important;
  }
  & div.acitve div:nth-child(3) {
    opacity: 0.1;
  }
  & .owl-prev {
    position: absolute;
    top: 20%;
    left: 17%;
    color: white !important;
    font-size: 3rem !important;
    &:hover {
      background: none !important;
    }
  }
  & .owl-next {
    position: absolute;
    top: 20%;
    right: 17%;
    color: white !important;
    font-size: 3rem !important;
    &:hover {
      background: none !important;
    }
  }
`;
const HeroCarouselInner = (props) => {
  const { device } = React.useContext(DeviceContext);
  return (
    <CarouselParent device={device}>
      <OwlCarousel {...owlSettings(device)}>
        {props?.heroTitles[0]?.layoutTitles.titles.map((item, index) => (
          <HeroTile
            device={device}
            item={item}
            key={`hero-${Math.random}-${index}`}
          />
        ))}
      </OwlCarousel>
    </CarouselParent>
  );
};

const MemoizedCarouselInner = React.memo(HeroCarouselInner);
export default MemoizedCarouselInner;
