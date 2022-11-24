import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Song } from "../../redux/models/Song.interface";
import { Hit } from "../../redux/models/SongsBySearch.interface";

export interface SongProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  song: Song;
  i: number;
  data: Song[] | Hit[];
}
