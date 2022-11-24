import { VolumeProps } from "./Volume.props";
import {
  BsFillVolumeUpFill,
  BsFillVolumeDownFill,
  BsFillVolumeMuteFill,
} from "react-icons/bs";
export const Volume = ({
  value,
  min,
  max,
  onChange,
  setVolume,
}: VolumeProps): JSX.Element => (
  <div className="flex gap-2">
    {value <= 1 && value >= 0.5 && (
      <BsFillVolumeUpFill size={25} onClick={() => setVolume(0)} />
    )}
    {value !== 0 && value <= 0.5 && (
      <BsFillVolumeDownFill size={25} onClick={() => setVolume(0)} />
    )}
    {value === 0 && (
      <BsFillVolumeMuteFill size={25} onClick={() => setVolume(1)} />
    )}
    <input
      type="range"
      value={value}
      min={min}
      max={max}
      onChange={onChange}
      step="any"
    />
  </div>
);
