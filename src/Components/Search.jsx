import React from "react";
import { SearchIcon } from "@heroicons/react/solid";
export const Search = () => {
  return (
    <>
      <div className="inputDiv">
        <input className="inputBox" placeholder="  Search..." type="Text" />
        <SearchIcon
          id="serchIcon"
          style={{
            width: "25px",
            height: "25px",
            marginBottom: "-10px",
            marginLeft: "-25px",
          }}
        />

        
      </div>
    </>
  );
};
