import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, url }) {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        // Opens a new window
        navigate(window.open(url));
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
    </div>
  );
}

export default ProjectItem;
