import { HTMLAttributes } from "react";
export interface ArtistcardProps extends HTMLAttributes<HTMLDivElement> {
  image: string;
  name: string;
  artistId: string;
}
