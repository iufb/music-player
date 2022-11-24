import {
  DetailedHTMLProps,
  Dispatch,
  HTMLAttributes,
  SetStateAction,
} from "react";
import { Hit } from "../../../redux/models/SongsBySearch.interface";

export interface ControlsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  repeat: boolean;
  setRepeat: Dispatch<SetStateAction<boolean>>;
  shuffle: boolean;
  setShuffle: Dispatch<SetStateAction<boolean>>;
  currentSongs: Hit[];
  handlePlayPause: () => void;
  handleNextSong: () => void;
  handlePrevSong: () => void;
  isPlaying: boolean;
}
