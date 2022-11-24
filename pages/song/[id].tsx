import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { Error, Loader } from "../../src/components";
import { Song } from "../../src/components/Song/Song";
import { SongTitle } from "../../src/components/SongTitle/SongTitle";
import { withLayout } from "../../src/layout/Layout";
import {
  useGetRelatedSongsQuery,
  useGetSongDetailsQuery,
} from "../../src/redux/services/shazamCore";

const SongPage = () => {
  const { query } = useRouter();
  const id = query.id;
  const { data: songDetails, isLoading, error } = useGetSongDetailsQuery(id);
  const {
    data: relatedSongs,
    isLoading: isFetching,
    error: relatedSongsError,
  } = useGetRelatedSongsQuery(id);
  if (isLoading && isFetching) return <Loader size="lg" />;
  if (error && relatedSongsError) return <Error />;
  return (
    <>
      <Head>
        <title>
          {songDetails?.subtitle} - {songDetails?.title}
        </title>
      </Head>
      {songDetails && relatedSongs && (
        <div className="px-2 md:px-0">
          <div className="flex items-center justify-start gap-10 bg-gradient-to-b from-screamingGreen to-purpleHeart h-[300px] px-4 py-4">
            <div>
              <Image
                src={songDetails.images.coverart}
                alt="Artist Image"
                width={250}
                height={250}
                className="rounded-full border-white border-1px "
              />
            </div>
            <SongTitle
              title={songDetails?.title}
              subtitle={songDetails?.subtitle}
              id={songDetails?.key}
              size="lg"
              artistid={songDetails.artists[0].adamid}
            />
          </div>
          <div className="space-y-6">
            <hr className="border-1px border-white w-full mt-5" />
            <Song
              song={songDetails}
              data={relatedSongs}
              i={0}
              className="border border-1 border-gray-400 px-3 py-3 rounded-xl"
            />
            <div>
              <p className="text-2xl font-bold">Lyrics:</p>
              {songDetails.sections &&
              songDetails?.sections[1]?.type === "LYRICS" ? (
                songDetails?.sections[1]?.text.map((line, i) => (
                  <p key={`lyrics -${line}- ${i}`}>{line}</p>
                ))
              ) : (
                <p> Lyrics not found...</p>
              )}
            </div>
            <p className="text-2xl font-bold ">Related Songs:</p>
            {relatedSongs.slice(0, 6).map((song, i) => (
              <Song key={song.key} song={song} data={relatedSongs} i={i} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default withLayout(SongPage);
