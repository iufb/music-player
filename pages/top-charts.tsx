import type { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";
import { Error, Loader, Page } from "../src/components";
import { useAppSelector } from "../src/helpers/hooks/redux";
import { withLayout } from "../src/layout/Layout";
import {
  getRunningOperationPromises,
  getTopCharts,
  useGetTopChartsQuery,
} from "../src/redux/services/shazamCore";
import { wrapper } from "../src/redux/store";

const TopCharts = () => {
  const { data, isLoading, isError } = useGetTopChartsQuery("");
  const { isPlaying, activeSong } = useAppSelector((state) => state.player);
  if (isLoading) return <Loader size="lg" />;
  if (isError) return <Error />;
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
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    store.dispatch(getTopCharts.initiate(""));
    await Promise.all(getRunningOperationPromises());
    return {
      props: {},
    };
  });
