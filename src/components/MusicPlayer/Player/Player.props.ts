import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Song } from "../../../redux/models/Song.interface";
export interface PlayerProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLAudioElement>,
    HTMLAudioElement
  > {
  repeat: boolean;
  activeSong: Song;
  isPlaying: boolean;
  onEnded: () => void;
  onTimeUpdate: (e: any) => void;
  onLoadedData: (e: any) => void;
  volume: number;
  seekTime: number;
}
