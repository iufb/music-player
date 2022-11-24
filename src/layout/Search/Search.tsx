import React from "react";
import { Searchbar } from "../../components";
import { SearchProps } from "./Search.props";

const Search = ({ className }: SearchProps): JSX.Element => {
  return (
    <div className={`${className}`}>
      <Searchbar />
    </div>
  );
};

export default Search;
