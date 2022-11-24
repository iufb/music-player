import { ControlsProps } from "./Controls.props";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import {
  BsArrowRepeat,
  BsShuffle,
  BsFillPauseFill,
  BsFillPlayFill,
} from "react-icons/bs";
export const Controls = ({
  isPlaying,
  currentSongs,
  shuffle,
  setShuffle,
  repeat,
  setRepeat,
  handleNextSong,
  handlePrevSong,
  handlePlayPause,
}: ControlsProps): JSX.Element => (
  <div className="flex items-center gap-4">
    <BsArrowRepeat
      color={`${repeat ? "green" : "black"}`}
      className="cursor-pointer"
      size={25}
      onClick={() => setRepeat((prev) => !prev)}
    />
    {currentSongs?.length && (
      <MdSkipPrevious
        color="black"
        className="cursor-pointer"
        size={45}
        onClick={handlePrevSong}
      />
    )}
    {isPlaying ? (
      <BsFillPauseFill
        color="black"
        className="cursor-pointer"
        size={45}
        onClick={handlePlayPause}
      />
    ) : (
      <BsFillPlayFill
        color="black"
        className="cursor-pointer"
        size={45}
        onClick={handlePlayPause}
      />
    )}
    {currentSongs.length > 1 ? (
      <MdSkipNext
        color="black"
        className="cursor-pointer"
        size={45}
        onClick={handleNextSong}
      />
    ) : (
      <MdSkipNext color="gray" seed={45} />
    )}

    <BsShuffle
      color={`${shuffle ? "green" : "black"}`}
      className="cursor-pointer"
      size={25}
      onClick={() => setShuffle((prev) => !prev)}
    />
  </div>
);
