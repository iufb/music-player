import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";
import { Error, Loader } from "../src/components";
import Artistcard from "../src/components/ArtistCard/ArtistCard";
import { withLayout } from "../src/layout/Layout";
import {
  getRunningOperationPromises,
  getTopCharts,
  useGetTopChartsQuery,
} from "../src/redux/services/shazamCore";
import { wrapper } from "../src/redux/store";

const TopArtists = () => {
  const { data, isLoading, isError, isSuccess } = useGetTopChartsQuery("");
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
              isSuccess={isSuccess}
              key={song.key}
              image={song?.images?.background}
              name={song?.subtitle}
              artistId={song.artists ? song?.artists[0]?.adamid : ""}
            />
          ))}
      </div>
    </>
  );
};

export default withLayout(TopArtists);

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    store.dispatch(getTopCharts.initiate(""));
    await Promise.all(getRunningOperationPromises());
    return {
      props: {},
    };
  });
