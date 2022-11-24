import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SongTitleProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  subtitle: string;
  id: string;
  artistid: string;
  size: "md" | "lg";
}
