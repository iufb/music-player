import { Song } from "./Song.interface";
import { Hit } from "./SongsBySearch.interface";

export interface IPlayer<T extends Song | Hit> {
  currentSongs: T extends Hit[] ? Hit[] : Song[];
  currentIndex: number;
  isActive: boolean;
  isPlaying: boolean;
  activeSong: T extends Song ? Song : Hit;
  genreListId: string;
}
