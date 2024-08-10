import React from "react";

export default function Chips({text}) {
  return (
    <li className="mr-1.5 mt-2">
      <div className="flex items-center rounded-full bg-secondaryColorLight px-3 py-1 text-xs font-medium leading-5 text-secondaryColor ">
        {text}
      </div>
    </li>
  );
}
