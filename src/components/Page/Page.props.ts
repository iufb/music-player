import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Song } from "../../redux/models/Song.interface";

export interface PageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: Song[];
  isPlaying: boolean;
  activeSong: Song;
}
