export interface Song {
  id: string;
  attributes: {
    albumName: string;
    genreNames: string[];
    releaseDate: string;
    artwork: {
      url: string;
    };
    artistName: string;
    name: string;
  };
}
export interface Album extends Song {
  recordLabel: string;
  trackCount: number;
}
export interface Artist {
  attributes: {
    genreNames: string[];
    name: string;
    artwork: {
      url: string;
    };
  };
}
export interface IArtist {
  artists: Record<string, Artist>;
  songs: Song[];
  albums: Album[];
}
