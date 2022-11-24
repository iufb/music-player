import Image from "next/image";
import { useAppSelector } from "../../helpers/hooks/redux";
import PlayPause from "../PlayPause/PlayPause";
import { SongTitle } from "../SongTitle/SongTitle";
import { SongProps } from "./Song.props";

export const Song = ({
  className,
  song,
  i,
  data,
  topChart,
  ...props
}: SongProps): JSX.Element => {
  const { activeSong, isPlaying } = useAppSelector((state) => state.player);
  return (
    <div
      {...props}
      className={`${className} ${
        activeSong.title === song.title && "bg-[#4c426e]"
      } grid grid-cols-songBar  items-center w-full gap-2 lg:px-5 px-3 rounded-md py-1 hover:bg-[#4c426e]`}
    >
      <p className="w-7 col-start-1 col-end-2">{`${i + 1} .`}</p>
      <div className="block lg:w-20 lg:h-20 w-14  h-14 col-start-2 col-end-3">
        <Image
          src={song?.images?.coverart}
          alt={song?.images?.background}
          layout="responsive"
          width={80}
          height={80}
          className="rounded-lg"
        />
      </div>
      <SongTitle
        title={song.title}
        subtitle={song.subtitle}
        id={song.key}
        size="md"
        artistid={song.artists[0].adamid}
        className={` col-start-3 col-end-4 ${
          activeSong.title == song.title && "text-screamingGreen"
        }`}
      />
      <PlayPause
        song={song}
        activeSong={activeSong}
        isPlaying={isPlaying}
        data={data}
        i={i}
        className="col-start-4 col-end-5"
      />
    </div>
  );
};
