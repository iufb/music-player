import Head from "next/head";
import React from "react";
import { Error, Loader, Page } from "../src/components";
import { useAppSelector } from "../src/helpers/hooks/redux";
import { withLayout } from "../src/layout/Layout";
import { useGetTopChartsQuery } from "../src/redux/services/shazamCore";

const TopCharts = () => {
  const { data, isLoading, error } = useGetTopChartsQuery("");
  const { isPlaying, activeSong } = useAppSelector((state) => state.player);
  if (isLoading) return <Loader size="lg" />;
  if (error) return <Error />;
  return (
    <>
      <Head>
        <title>Top Charts</title>
      </Head>
      <p className="text-3xl font-bold ">Top Charts</p>
      {data && (
        <Page data={data} isPlaying={isPlaying} activeSong={activeSong} />
      )}
    </>
  );
};

export default withLayout(TopCharts);
