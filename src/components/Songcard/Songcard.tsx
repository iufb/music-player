import Image from "next/image";
import PlayPause from "../PlayPause/PlayPause";
import { SongTitle } from "../SongTitle/SongTitle";
import { SongcardProps } from "./Songcard.props";

const Songcard = ({
  song,
  data,
  isPlaying,
  activeSong,
  i,
  ...props
}: SongcardProps): JSX.Element => {
  return (
    <div
      {...props}
      className="w-[250px] backdrop-blur-sm bg-white/5 px-5 py-5 rounded-md flex flex-col justify-center items-center cursor-pointer animate-slide-up"
    >
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex z-10 ${
            activeSong?.title === song.title
              ? "flex bg-black bg-opacity-70 rounded-md"
              : "hidden"
          }`}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            i={i}
            data={data}
          />
        </div>

        <div className="w-full h-full rounded-lg flex z-0">
          <Image
            className="w-full h-full rounded-lg"
            src={song?.images?.coverart}
            alt={song?.images?.background}
            width={270}
            height={270}
          />
        </div>
      </div>
      <SongTitle
        title={song.title}
        subtitle={song.subtitle}
        id={song.key}
        artistid={song.artists ? song.artists[0].adamid : ""}
        size="md"
        className={`flex flex-col gap-4 justify-start w-full mt-5 ${
          activeSong.title == song.title && "text-screamingGreen"
        } `}
      />
    </div>
  );
};

export default Songcard;
