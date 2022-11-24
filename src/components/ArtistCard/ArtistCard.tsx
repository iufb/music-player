import Image from "next/image";
import Link from "next/link";
import { ArtistcardProps } from "./ArtistCard.props";

const Artistcard = ({
  className,
  image,
  name,
  artistId,
  ...props
}: ArtistcardProps): JSX.Element => {
  return (
    <Link href={`/artist/${artistId}`}>
      <a href="">
        <div
          className={`${className} w-[250px] backdrop-blur-sm bg-white/5 px-5 py-5 rounded-md flex flex-col justify-center items-center cursor-pointer gap-y-4 text-center`}
          {...props}
        >
          <Image
            src={image}
            alt="artist"
            width={160}
            height={160}
            className="rounded-full"
          />
          <p className="font-bold truncate ">{name}</p>
          <p className="text-md opacity-50">Performer</p>
        </div>
      </a>
    </Link>
  );
};

export default Artistcard;
