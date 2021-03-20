import React from "react";
import playIcon from "../../assets/img/svg/play-icon.svg";

const CategoryTile = ({ item }) => (
  <div style={{ position: "relative" }}>
    <div className="w-full flex transition-all justify-end items-end content-end px-2 py-4 delay-1 ease-in-out duration-500 opacity-0 hover:opacity-100 h-full absolute bg-gradient-to-t from-header-gradient-start-scroll">
      <button className="flex flex-col items-center text-center px-2">
        <img height={25} src={playIcon} alt="play" />
      </button>
    </div>
    <img src={item.thumbnails["thumb-614x1536"].url} alt="" />
  </div>
);

const MemoizedCategoryTile = React.memo(CategoryTile);
export default MemoizedCategoryTile;
