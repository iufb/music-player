import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { Error, Loader } from "../src/components";
import PlayPause from "../src/components/PlayPause/PlayPause";
import { Song } from "../src/components/Song/Song";
import { useAppSelector } from "../src/helpers/hooks/redux";
import { withLayout } from "../src/layout/Layout";
import { useGetSongsBySearchQuery } from "../src/redux/services/shazamCore";
const Search = () => {
  const { query } = useRouter();
  const searchValue = query["search-field"];
  const { isPlaying, activeSong } = useAppSelector((state) => state.player);
  const { data, isLoading, error } = useGetSongsBySearchQuery(searchValue);
  const name = data?.artists.hits[0].artist.name;
  if (isLoading) return <Loader size="lg" />;
  if (error) return <Error />;
  return (
    <>
      <Head>
        <title>{`Search: ${searchValue}`}</title>
      </Head>
      <div className="grid 3xl:grid-cols-search grid-cols-1  w-full h-full items-start gap-10 mt-10 px-4">
        <div>
          <h2 className="text-2xl mb-4">Best Result </h2>
          <div className="relative w-full lg:w-[500px] h-[270px] backdrop-blur-sm rounded-md group bg-gray-600">
            <div className="rounded-md w-full h-full p-5 group-hover:bg-black hover:transition ease-in-out delay-75">
              {data && (
                <Image
                  src={data?.artists.hits[0].artist.avatar}
                  alt="alt"
                  width={100}
                  height={100}
                  className="rounded-full group-hover:opacity-100"
                />
              )}
              <p className="text-4xl uppercase font-bold mt-5">{name}</p>
              <p className="px-5 py-1 bg-gray-400 text-black max-w-fit text-xl  rounded-2xl mt-5">
                Performer
              </p>
              {data && (
                <PlayPause
                  song={data?.tracks.hits[0].track}
                  isPlaying={isPlaying}
                  activeSong={activeSong}
                  i={0}
                  data={data.tracks.hits}
                  className="absolute right-5 bottom-5 hidden group-hover:block group-hover:animate-slide-up"
                  color="green"
                />
              )}
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl mb-4">Tracks</h2>
          <div className="space-y-4">
            {data &&
              data.tracks.hits
                .slice(0, 5)
                .map((song, i) => (
                  <Song
                    song={song.track}
                    i={i}
                    key={song.track.key}
                    data={data.tracks.hits}
                    className="w-full"
                  />
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default withLayout(Search);
