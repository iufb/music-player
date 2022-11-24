import { IconType } from "react-icons";

export enum SidebarCategory {
  Discover,
  AroundYou,
  TopArtist,
  TopCharts,
}
export interface SidebarMenu {
  route: string;
  name: string;
  icon: IconType;
  id: SidebarCategory;
}
