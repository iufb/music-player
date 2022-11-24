import React, { useState } from "react";
import { SearchbarProps } from "./Searchbar.props";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/router";
const Searchbar = ({ className }: SearchbarProps): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const { push } = useRouter();
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    push(`/search?search-field=${search}`);
  };
  return (
    <form
      onSubmit={onSubmit}
      autoComplete="off"
      className={`${className} w-full p-2 text-gray-400  focus-within:text-gray-600`}
    >
      <label htmlFor="search-field" className="sr-only">
        Search
      </label>
      <div className="flex items-center  w-full">
        <FiSearch
          aria-hidden="true"
          className="ml-4 text-2xl text-gray-400 focus-within:hidden"
        />
        <input
          className="w-full h-10 rounded-2xl bg-trasparent border-none px-5 placeholder:text-gray-600 placeholder:text-xl  text-base text-white outline-none "
          name="search-field"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Searchbar;
