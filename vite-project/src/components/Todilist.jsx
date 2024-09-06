import React from "react";

export const Todilist = (props) => {
  return (
    <ul className="w-full">
      <li className="flex items-center justify-between w-full px-10">
        <span className="flex items-center gap-3">
          <input type="checkbox" />
          <span>{props.title}</span>
        </span>
        <p className="flex items-center text-lg">...</p>
      </li>
    </ul>
  );
};

export default Todilist;
