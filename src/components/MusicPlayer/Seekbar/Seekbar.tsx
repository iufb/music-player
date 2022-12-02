import React from "react";
import { SeekbarProps } from "./Seekbar.props";

export const Seekbar = ({
  max,
  min,
  onInput,
  setSeekTime,
  value,
}: SeekbarProps): JSX.Element => {
  const getTime = (time: number): string => {
    const minute = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    const res = sec < 10 ? `${minute} : 0${sec}` : `${minute} : ${sec}`;
    return res;
  };
  return (
    <div className="flex gap-3 items-center whitespace-nowrap w-full">
      <button onClick={() => setSeekTime(value - 5)}>-</button>
      <p className="w-14">{value === 0 ? "0:00" : getTime(value)}</p>
      <input
        type="range"
        step="any"
        min={min}
        max={max}
        onInput={onInput}
        value={value}
        className="w-full"
      />
      <p className="w-14">{max === 0 ? "0:00" : getTime(max)}</p>
      <button onClick={() => setSeekTime(value + 5)}> + </button>
    </div>
  );
};
