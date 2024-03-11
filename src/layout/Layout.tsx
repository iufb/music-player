import React, { FunctionComponent, memo } from "react";
import { LayoutProps } from "./Layout.props";
import Search from "./Search/Search";
import Sidebar from "./Sidebar/Sidebar";
import TopSide from "./Top/TopSide";
import styles from "./Layout.module.css";
import MusicPlayer from "../components/MusicPlayer/MusicPlayer";
import { useAppSelector } from "../helpers/hooks/redux";
// eslint-disable-next-line react/display-name
const Layout = memo(({ children }: LayoutProps): JSX.Element => {
  const { isActive } = useAppSelector((state) => state.player);
  return (
    <div className={styles.layout}>
      <Search className={`${styles.search}`} />
      <Sidebar className={`${styles.sidebar}`} />
      <div className={`${styles.main} ${isActive && "pb-24"}`}>{children}</div>
      <TopSide className={`${styles.topside} ${isActive && "pb-24"}`} />
      <div
        className={`${styles.footer} fixed bottom-0 w-full h-24 m-0 rounded-2xl`}
      >
        <MusicPlayer />
      </div>
    </div>
  );
});

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>,
) => {
  return function Wrapper(props: T) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
