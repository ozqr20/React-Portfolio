import React from "react";
import { useNavigate} from "react-router-dom";
import GitHubIcon from "@material-ui/icons/GitHub";

function ProjectItem({ image, name, url, skills }) {
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
      <p><b>Skills:</b> {skills}</p>
     
    </div>
  );
}

export default ProjectItem;
