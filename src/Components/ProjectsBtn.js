import React from "react";
import "../Style/Social.css";
import { Link } from "react-router-dom";

const ProjectsBtn = () => {
  return (
    <div class="hover">
      <span>Projects</span>
      <a class="social-link" href="./Portfolio">
        <i href="#" class="fa fa-code" />
      </a>
    </div>
  );
};
export default ProjectsBtn;
