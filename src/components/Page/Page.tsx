import { Song } from "../../redux/models/Song.interface";
import Songcard from "../Songcard/Songcard";
import { PageProps } from "./Page.props";

export const Page = ({
  data,
  isPlaying,
  activeSong,
  ...props
}: PageProps): JSX.Element => {
  return (
    <div {...props}>
      <div className="grid justify-center sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2  2xl:grid-cols-3 3xl:grid-cols-4 gap-5 mt-5">
        {data &&
          data.map((song: Song, i: number) => (
            <Songcard
              key={i}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              i={i}
              data={data}
            />
          ))}
      </div>
    </div>
  );
};
