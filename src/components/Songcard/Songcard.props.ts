import { HTMLAttributes } from "react";
import { Song } from "../../redux/models/Song.interface";
import { Hit } from "../../redux/models/SongsBySearch.interface";

export interface SongcardProps extends HTMLAttributes<HTMLDivElement> {
  song: Song;
  isPlaying: boolean;
  activeSong: Song;
  data: Song[] | Hit[];
  i: number;
}
