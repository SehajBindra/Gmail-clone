import React from "react";
import "./Section.css";
function Section({ Icon, title, color, selected }) {
  return (
    <div
      className={`section ${
        selected &&
        "outline-none bg-red-400 text-white active:scale-90 transition duration-150 focus-within:outline-none border-b border-red-400 mx-2  hover:shadow-xl hover:rounded-2xl"
      }`}
      style={{
        borderBottom: `3px solid ${color}`,
        color: `${selected && color}`,
      }}
    >
      <Icon />

      <h4> {title}</h4>
    </div>
  );
}

export default Section;
