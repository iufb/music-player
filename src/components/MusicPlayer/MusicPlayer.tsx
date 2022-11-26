import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../helpers/hooks/redux";
import { useLocalStorage } from "../../helpers/hooks/useLocalStorage";
import {
  nextSong,
  playPause,
  prevSong,
} from "../../redux/features/PlayerSlice";
import { Controls } from "./Controls/Controls";
import { Player } from "./Player/Player";
import { Seekbar } from "./Seekbar/Seekbar";
import Track from "./Track/Track";
import { Volume } from "./Volume/Volume";

const MusicPlayer = () => {
  const { currentSongs, currentIndex, isActive, isPlaying, activeSong } =
    useAppSelector((state) => state.player);
  const [duration, setDuration] = useState<number>(0);
  const [seekTime, setSeekTime] = useState<number>(0);
  const [appTime, setAppTime] = useLocalStorage(0, "appTime");
  const [volume, setVolume] = useLocalStorage(0, "volume");
  const [repeat, setRepeat] = useState<boolean>(false);
  const [shuffle, setShuffle] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (currentSongs.length && isPlaying == true) dispatch(playPause(true));
  }, [currentSongs?.length, dispatch, currentIndex, isPlaying]);
  const handlePlayPause = () => {
    if (!isPlaying) {
      dispatch(playPause(true));
    } else {
      dispatch(playPause(false));
    }
  };
  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setVolume(Number(e.target.value));
  };
  const handleNextSong = () => {
    dispatch(playPause(true));
    if (!shuffle) {
      dispatch(nextSong((currentIndex + 1) % currentSongs.length));
    } else {
      dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)));
    }
  };
  const handlePrevSong = () => {
    dispatch(playPause(false));
    if (currentIndex === 0) {
      dispatch(prevSong(currentSongs.length - 1));
    } else if (shuffle) {
      dispatch(prevSong(Math.floor(Math.random() * currentSongs.length)));
    } else {
      dispatch(prevSong(currentIndex - 1));
    }
  };
  return (
    <div className="w-full lg:px-10 gap-6 z-50  h-full backdrop-blur-sm bg-opacity-80 bg-white/5 bg-gray-400 grid grid-cols-musicPlayer items-center">
      <div className="  h-full items-center col-start-1 col-end-2 hidden md:flex">
        <Track
          isPlaying={isPlaying}
          isActive={isActive}
          activeSong={activeSong}
        />
      </div>
      <div className="flex flex-col  items-center col-start-2 col-end-3">
        <Controls
          repeat={repeat}
          shuffle={shuffle}
          setRepeat={setRepeat}
          setShuffle={setShuffle}
          isPlaying={isPlaying}
          currentSongs={currentSongs}
          handlePlayPause={handlePlayPause}
          handlePrevSong={handlePrevSong}
          handleNextSong={handleNextSong}
        />
        <Player
          repeat={repeat}
          activeSong={activeSong}
          isPlaying={isPlaying}
          onEnded={handleNextSong}
          onTimeUpdate={(e) => setAppTime(e.target.currentTime)}
          onLoadedData={(e) => setDuration(e.target.duration)}
          volume={volume}
          seekTime={seekTime}
        />
        <Seekbar
          min={0}
          max={duration}
          value={appTime}
          setSeekTime={setSeekTime}
          onInput={(e) => setSeekTime(e.target.value)}
        />
      </div>
      <div className="col-start-3 col-end-4 hidden lg:block">
        <Volume
          value={volume}
          setVolume={setVolume}
          min={0}
          max={1}
          onChange={handleVolume}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
