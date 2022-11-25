import Head from "next/head";
import React from "react";
import { Error, Loader } from "../src/components";
import Artistcard from "../src/components/ArtistCard/ArtistCard";
import { withLayout } from "../src/layout/Layout";
import { useGetTopChartsQuery } from "../src/redux/services/shazamCore";

const TopArtists = () => {
  const { data, isLoading, isError } = useGetTopChartsQuery("");
  if (isLoading) return <Loader size="lg" />;
  if (isError) return <Error />;

  return (
    <>
      <Head>
        <title>Top Artists</title>
      </Head>
      <h2 className="text-3xl font-bold mb-4">Top Artists</h2>
      <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2  2xl:grid-cols-3 3xl:grid-cols-4 gap-5">
        {data &&
          data.map((song) => (
            <Artistcard
              key={song.key}
              image={song?.images?.background}
              name={song?.subtitle}
              artistId={song?.artists[0]?.adamid}
            />
          ))}
      </div>
    </>
  );
};

export default withLayout(TopArtists);
