import React from "react";
import "./Section.css";
function Section({ Icon, title, color, selected }) {
  return (
    <div
      className={`section ${
        selected &&
        "outline-none focus-within:outline-none border-b border-black  hover:shadow-xl "
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
