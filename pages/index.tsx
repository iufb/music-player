import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { Error, Loader, Page } from "../src/components";
import { genres } from "../src/helpers/helpers";
import { useAppDispatch, useAppSelector } from "../src/helpers/hooks/redux";
import { withLayout } from "../src/layout/Layout";
import { selectGenreListId } from "../src/redux/features/PlayerSlice";
import {
  getRunningOperationPromises,
  getSongsByGenre,
  useGetSongsByGenreQuery,
} from "../src/redux/services/shazamCore";
import { wrapper } from "../src/redux/store";

const Home: NextPage = () => {
  const { isPlaying, activeSong } = useAppSelector((state) => state.player);
  const { genreListId } = useAppSelector((state) => state.player);
  const dispatch = useAppDispatch();
  const { data, isLoading, isError } = useGetSongsByGenreQuery(
    genreListId || "POP"
  );
  if (isLoading) return <Loader size="lg" />;
  if (isError) return <Error />;
  const genreTitle = genres.find(({ value }) => value === genreListId)?.title;
  return (
    <>
      <Head>
        <title>Discover</title>
      </Head>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold ">
          Discover{" "}
          <span className="text-screamingGreen underline ml-3 mr-2">
            {genreTitle}
          </span>
        </h2>
        <select
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          value={genreListId || "Pop"}
          className="bg-[#000] text-gray-400 p-3 text-md rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => (
            <option key={genre.title} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      {data && (
        <Page data={data} isPlaying={isPlaying} activeSong={activeSong} />
      )}
    </>
  );
};

export default withLayout(Home);

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    const genre = ctx.params?.genre;
    if (typeof genre === "string") {
      store.dispatch(getSongsByGenre.initiate(genre));
    }
    await Promise.all(getRunningOperationPromises());
    return {
      props: {},
    };
  });
