import {
  DetailedHTMLProps,
  HTMLAttributes,
  Dispatch,
  SetStateAction,
  EventHandler,
} from "react";

export interface VolumeProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  value: number;
  min: number;
  max: number;
  setVolume: Dispatch<SetStateAction<number>>;
  onChange: (e: any) => void;
}
