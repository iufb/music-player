import {
  DetailedHTMLProps,
  Dispatch,
  HTMLAttributes,
  SetStateAction,
} from "react";

export interface SeekbarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  min: number;
  max: number;
  setSeekTime: Dispatch<SetStateAction<number>>;
  onInput: (e: any) => void;
  value: number;
}
