import { Song } from "./Song.interface";

export interface Hit {
  track: Song;
}
export interface Artist {
  artist: {
    avatar: string;
    name: string;
  };
}
export interface SongsBySearch {
  artists: {
    hits: Artist[];
  };
  tracks: {
    hits: Hit[];
  };
}
