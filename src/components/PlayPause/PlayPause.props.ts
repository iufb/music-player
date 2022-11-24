import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Song } from "../../redux/models/Song.interface";
import { Hit } from "../../redux/models/SongsBySearch.interface";

export interface PlayPauseProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  song: Song;
  isPlaying: boolean;
  activeSong: Song;
  data?: Song[] | Hit[];
  i: number;
  color?: "green";
}
