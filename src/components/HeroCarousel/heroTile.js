import React from "react";
import playIcon from "../../assets/img/svg/play-icon.svg";
import trailerIcon from "../../assets/img/svg/trailer-icon.svg";
import noImage from "../../assets/img/png/no-image.png";
import Image from "../../utils/Image";

const HeroTile = ({ item, device }) => {
  const str = Object.keys(item.thumbnails).map(
    (name) => `${item.thumbnails[name].url} ${item.thumbnails[name].width}w`
  );
  const srcSetString = str.join(",");

  return (
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
      <Image
        fallbackSrc={noImage}
        height={device === "mobile" ? 144 : 280}
        width={device === "mobile" ? window.innerWidth : window.innerWidth / 2}
        srcSet={srcSetString}
        alt={item.title}
      />
    </div>
  );
};

const MemoizedHeroTile = React.memo(HeroTile);
export default MemoizedHeroTile;
