import React from "react";
import "./Section.css";
function Section({ Icon, title, color, selected }) {
  return (
    <div className="flex flex-1 sm:justify-between items-center outline-none px-6 py-4 text-gray-600 hover:bg-red-400 hover:text-white hover:shadow-xl hover:rounded-md">
      <Icon />

      <h4> {title}</h4>
    </div>
  );
}

export default Section;
