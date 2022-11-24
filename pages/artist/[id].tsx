import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { title } from "process";
import { Error, Loader } from "../../src/components";
import { Song } from "../../src/components/Song/Song";
import { SongTitle } from "../../src/components/SongTitle/SongTitle";
import { withLayout } from "../../src/layout/Layout";
import {
  useGetArtistDetailsQuery,
  useGetSongsBySearchQuery,
} from "../../src/redux/services/shazamCore";

const ArtistPage = () => {
  const { query, isReady } = useRouter();
  const id = query.id as string;
  const {
    data: artistDetails,
    isLoading,
    error,
  } = useGetArtistDetailsQuery(id);
  const name = artistDetails?.artists[id].attributes.name;
  const { data: search } = useGetSongsBySearchQuery(name);

  if (isLoading && !isReady) return <Loader size="lg" />;
  if (error) return <Error />;
  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <div className="flex flex-col gap-y-5">
        <div className=" w-full h-80 flex items-center justify-start gap-10 pl-10  bg-gradient-to-b from-purpleHeart to-screamingGreen">
          {artistDetails && (
            <Image
              src={artistDetails?.artists[id].attributes.artwork.url}
              alt="image"
              width={250}
              height={250}
              className="rounded-full border-white border-1px "
            />
          )}
          <h2 className="text-6xl">{name}</h2>
        </div>
        <h2 className="text-3xl font-bold">Popular releases: </h2>
        <div className="space-y-4">
          {search &&
            search.tracks.hits
              .slice(0, 5)
              .map((song, i) => (
                <Song
                  song={song.track}
                  i={i}
                  key={song.track.key}
                  data={search.tracks.hits}
                  className="w-full"
                />
              ))}
        </div>
      </div>
    </>
  );
};

export default withLayout(ArtistPage);
