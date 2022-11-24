import React, { memo } from "react";
import { useRouter } from "next/router";
import { useGetTopChartsQuery } from "../../redux/services/shazamCore";
import { Loader } from "../Loader/Loader";
import { SeeMore } from "../SeeMore/SeeMore";
import { Song } from "../Song/Song";
import { TopchartProps } from "./Topchart.props";

export const Topchart = ({ ...props }: TopchartProps) => {
  const { data: songs, isLoading } = useGetTopChartsQuery("");
  const { push } = useRouter();
  if (isLoading) return <Loader size="md" />;
  const data = songs?.slice(0, 5);
  return (
    <div {...props} className="flex  flex-col gap-5">
      <div className="flex justify-between px-4">
        <p className="text-2xl font-bold">Top Charts</p>

        <SeeMore onClick={() => push("/top-charts")} />
      </div>
      {data &&
        data.map((song, i) => (
          <Song song={song} data={data} key={song.title} i={i} />
        ))}
    </div>
  );
};
