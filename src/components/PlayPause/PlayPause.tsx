import { PlayPauseProps } from "./PlayPause.props";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { useAppDispatch } from "../../helpers/hooks/redux";
import { playPause, setActiveSong } from "../../redux/features/PlayerSlice";

const PlayPause = ({
  className,
  song,
  isPlaying,
  activeSong,
  i,
  data,
  color,
  ...props
}: PlayPauseProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const handlePlay = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  const handlePause = () => {
    dispatch(playPause(false));
  };

  return (
    <div className={`${className} cursor-pointer`} {...props}>
      {isPlaying && activeSong.title == song.title ? (
        <FaPauseCircle
          size={color === "green" ? 50 : 32}
          onClick={handlePause}
          className={` hover:scale-y-105 hover:scale-x-105  ${
            color === "green" ? "text-screamingGreen" : "text-gray-400"
          }`}
        />
      ) : (
        <FaPlayCircle
          size={color === "green" ? 50 : 32}
          onClick={handlePlay}
          className={`hover:scale-y-105 hover:scale-x-105 ${
            color === "green" ? "text-screamingGreen" : "text-gray-400"
          }`}
        />
      )}
    </div>
  );
};
export default PlayPause;
