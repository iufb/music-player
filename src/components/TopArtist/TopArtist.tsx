import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetTopChartsQuery } from "../../redux/services/shazamCore";
import "swiper/css";
import { SeeMore } from "../SeeMore/SeeMore";
import { useRouter } from "next/router";
import { Loader } from "../Loader/Loader";
import { Error } from "../Error/Error";
import { FreeMode } from "swiper";
import Link from "next/link";
export const TopArtist = () => {
  const { data, isLoading, error } = useGetTopChartsQuery("");
  const TopArtists = data && data.slice(0, 5);
  const { push } = useRouter();
  if (isLoading) return <Loader size="md" />;
  if (error) return <Error />;
  return (
    <div className="space-y-4 ">
      <div className="w-full flex justify-between px-4">
        <p className="text-2xl font-bold">Top Artists</p>
        <SeeMore onClick={() => push("/top-artists")} />
      </div>

      <Swiper
        slidesPerView="auto"
        spaceBetween={15}
        freeMode
        centeredSlides
        centeredSlidesBounds
        modules={[FreeMode]}
        className="mt-4"
      >
        {TopArtists &&
          TopArtists.map((artist) => (
            <SwiperSlide
              key={artist?.key}
              style={{ width: "25%", height: "auto" }}
              className="shadow-lg rounded-full animate-slideright"
            >
              <Link href={`${`/artist/${artist.artists[0].adamid}`}`}>
                <a href="">
                  <Image
                    src={artist?.images?.background}
                    alt="Name"
                    width={200}
                    height={200}
                    className="rounded-full w-full object-cover"
                  />
                </a>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};
