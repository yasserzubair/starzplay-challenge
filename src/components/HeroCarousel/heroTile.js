import playIcon from "../../assets/img/svg/play-icon.svg";
import trailerIcon from "../../assets/img/svg/trailer-icon.svg";
import React from "react";
import LazyLoad from "react-lazyload";

const HeroTile = ({ item }) => (
  <div style={{ position: "relative" }}>
    <div className="w-full flex transition-all justify-end items-end content-end px-2 py-4 delay-1 ease-in-out duration-500 opacity-0 hover:opacity-100 h-full absolute bg-gradient-to-t from-header-gradient-start-scroll">
      <button className="flex flex-col items-center text-center px-2">
        <img height={25} src={playIcon} alt="play" />
        <p className="text-white text-xs mt-1">PLAY</p>
      </button>
      <button className="flex flex-col items-center text-center">
        <img
          width={25}
          className="trailerIcon"
          src={trailerIcon}
          alt="trailer"
        />
        <p className="text-white text-xs mt-1">TRAILER</p>
      </button>
    </div>
      <img src={item.thumbnails["thumb-614x1536"].url} alt="" />
  </div>
);

const MemoizedHeroTile = React.memo(HeroTile);
export default MemoizedHeroTile;
