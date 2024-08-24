import React from "react";
import { IoMdSearch } from "react-icons/io";

function SearchBar() {
  return (
    <div className="bg-blue-50 flex px-2 gap-2 w-full rounded-md">
      <button>
        <IoMdSearch size={20} />
      </button>
      <input
        placeholder="search anything "
        className="p-1 text-xs bg-blue-50 flex-1"
      />
    </div>
  );
}

export default SearchBar;
