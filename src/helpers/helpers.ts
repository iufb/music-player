import { useMemo } from "react";
import {
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlineMenu,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { SidebarCategory, SidebarMenu } from "../interfaces/sidebar.interface";
export const SidebarMenuList: SidebarMenu[] = [
  {
    route: "/",
    name: "Discover",
    icon: HiOutlineHome,
    id: SidebarCategory.Discover,
  },
  {
    route: "/around-you",
    name: "Around You",
    icon: HiOutlineMenu,
    id: SidebarCategory.AroundYou,
  },
  {
    route: "/top-artists",
    name: "Top Artists",
    icon: HiOutlineUserGroup,
    id: SidebarCategory.TopArtist,
  },
  {
    route: "/top-charts",
    name: "Top Charts",
    icon: HiOutlineHashtag,
    id: SidebarCategory.TopCharts,
  },
];
interface IGenre {
  title: string;
  value: string;
}
export const genres: IGenre[] = [
  { title: "Pop", value: "POP" },
  { title: "Hip-Hop", value: "HIP_HOP_RAP" },
  { title: "Dance", value: "DANCE" },
  { title: "Electronic", value: "ELECTRONIC" },
  { title: "Soul", value: "SOUL_RNB" },
  { title: "Alternative", value: "ALTERNATIVE" },
  { title: "Rock", value: "ROCK" },
  { title: "Latin", value: "LATIN" },
  { title: "Film", value: "FILM_TV" },
  { title: "Country", value: "COUNTRY" },
  { title: "Worldwide", value: "WORLDWIDE" },
  { title: "Reggae", value: "REGGAE_DANCE_HALL" },
  { title: "House", value: "HOUSE" },
  { title: "K-Pop", value: "K_POP" },
];
