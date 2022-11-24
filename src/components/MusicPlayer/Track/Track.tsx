import Image from "next/image";
import { TrackProps } from "./Track.props";

const Track = ({
  isActive,
  isPlaying,
  activeSong,
}: TrackProps): JSX.Element => (
  <div className="flex items-start justify-center w-72">
    <Image
      src={activeSong?.images?.coverart}
      alt="Song"
      className={`rounded-full ${isActive && isPlaying && "animate-spin-slow"}`}
      width={55}
      height={55}
    />
    <div className="ml-5 w-[50%]">
      <p className="text-xl font-bold truncate">
        {activeSong.title ? activeSong.title : "No Active Song"}
      </p>
      <p className="truncate">
        {activeSong.subtitle ? activeSong.subtitle : "No Active Song"}
      </p>
    </div>
  </div>
);
export default Track;
