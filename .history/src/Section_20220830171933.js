import React from "react";
import "./Section.css";
function Section({ Icon, title, color, selected }) {
  return (
    <div className="outline-none text-gray-600 hover:bg-red-400 hover:text-white hover:shadow-xl hover:rounded-xl">
      <Icon />

      <h4> {title}</h4>
    </div>
  );
}

export default Section;
