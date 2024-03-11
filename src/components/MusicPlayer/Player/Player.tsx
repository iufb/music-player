import { useEffect, useRef } from "react";
import { PlayerProps } from "./Player.props";

export const Player = ({
  activeSong,
  onLoadedData,
  repeat,
  isPlaying,
  onEnded,
  onTimeUpdate,
  volume,
  seekTime,
}: PlayerProps): JSX.Element => {
  const ref = useRef<HTMLAudioElement>(null);
  if (isPlaying) {
    ref.current?.play();
  } else {
    ref.current?.pause();
  }
  useEffect(() => {
    if (null !== ref.current) {
      ref.current.volume = volume;
    }
  }, [volume]);
  useEffect(() => {
    if (null !== ref.current) {
      ref.current.currentTime = seekTime;
    }
  }, [seekTime]);
  return (
    <audio
      ref={ref}
      src={activeSong.hub.actions[1]?.uri ?? null}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  );
};
