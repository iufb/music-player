import React from "react";
import { Topchart, TopArtist } from "../../components";
import { TopSideProps } from "./TopSide.props";

const TopSide = ({ className }: TopSideProps): JSX.Element => {
  return (
    <div className={`${className} space-y-10 z-0`}>
      <Topchart />
      <TopArtist />
    </div>
  );
};

export default TopSide;
