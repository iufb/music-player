import { LoaderProps } from "./Loader.props";

export const Loader = ({ size, ...props }: LoaderProps): JSX.Element => (
  <div className="flex items-center justify-center" {...props}>
    <div
      className={`bg-trasparent  ${
        size == "lg" ? "w-[84px] h-[84px]" : "w-11 h-11"
      } rounded-[50%] animate-spin border-4 border-t-loaderBorder border-r-loaderBorder border-l-loaderBorder border-l-white`}
    ></div>
  </div>
);
