import React from "react";
import "./Section.css";
function Section({ Icon, title, color, selected }) {
  return (
    <div
      className={`section ${
        selected &&
        "outline-none focus-within:outline-none border-b border-red-400 mx-2  hover:shadow-xl hover:rounded-2xl"
      }`}
    >
      <Icon />

      <h4> {title}</h4>
    </div>
  );
}

export default Section;
