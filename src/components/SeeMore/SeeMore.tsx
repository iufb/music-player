import { SeeMoreProps } from "./SeeMore.props";

export const SeeMore = ({ className, ...props }: SeeMoreProps): JSX.Element => {
  return (
    <button
      className={`${className} appearance-none hover:text-screamingGreen `}
      {...props}
    >
      See More
    </button>
  );
};
