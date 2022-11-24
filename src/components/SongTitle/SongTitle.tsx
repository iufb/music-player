import Link from "next/link";
import React from "react";
import { SongTitleProps } from "./SongTitle.props";

export const SongTitle = ({
  className,
  title,
  subtitle,
  id,
  artistid,
  size = "md",
  ...props
}: SongTitleProps): JSX.Element => (
  <div className={`${className} w-[150px] lg:w-[16rem]  pl-4`} {...props}>
    <Link href={`/song/${id}`}>
      <a href="">
        <p
          className={` text-bold  ${
            title.length > 13 && "lg:w-[14rem] w-[200px]"
          } ${
            size == "md"
              ? "truncate  lg:text-xl text-xl font-bold"
              : "lg:text-3xl text-2xl"
          }`}
        >
          {title}
        </p>
      </a>
    </Link>
    <Link href={`${artistid && `/artist/${artistid}`}`}>
      <a href="">
        <p className="truncate font-thin text-md text-white md:w-full lg:w-full max-w-[170px]">
          {subtitle}
        </p>
      </a>
    </Link>
  </div>
);
