import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Song } from "../../../redux/models/Song.interface";

export interface TrackProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isActive: boolean;
  isPlaying: boolean;
  activeSong: Song;
}
