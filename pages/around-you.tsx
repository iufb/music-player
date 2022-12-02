import axios from "axios";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Error, Loader, Page } from "../src/components";
import { useAppSelector } from "../src/helpers/hooks/redux";
import { withLayout } from "../src/layout/Layout";
import { useGetSongsByCountryQuery } from "../src/redux/services/shazamCore";

const AroundYou = () => {
  const [country, setCountry] = useState<string>("");
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const { data, isLoading, isError } = useGetSongsByCountryQuery(
    country || "KZ"
  );
  const { isPlaying, activeSong } = useAppSelector((state) => state.player);
  useEffect(() => {
    axios
      .get(
        `https://geo.ipify.org/api/v2/country?apiKey=${process.env.NEXT_PUBLIC_COUNTRY_API_KEY}`
      )
      .then((res) => setCountry(res.data.location.country))
      .catch((error) => console.log(error, "Error occured while fetch data"))
      .finally(() => setIsFetching(false));
  }, [country]);
  if (isLoading && isFetching) return <Loader size="lg" />;
  if (isError) return <Error />;

  return (
    <>
      <Head>
        <title>AroundYou</title>
      </Head>
      <h2 className="text-2xl font-bold ">
        Around You{" "}
        <span className="text-screamingGreen underline ml-3">{country}</span>
      </h2>
      {data && (
        <Page data={data} isPlaying={isPlaying} activeSong={activeSong} />
      )}
    </>
  );
};

export default withLayout(AroundYou);
