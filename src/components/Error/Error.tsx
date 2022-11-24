import { ErrorProps } from "./Error.props";

export const Error = ({ ...props }: ErrorProps): JSX.Element => (
  <div {...props} className="text-2xl font-bold text-white ">
    Ops, something went wrong...
  </div>
);
