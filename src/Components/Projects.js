import React from "react";
import "./Assets/Projects.css";

function Projects() {
  return (
    <section className="projects">
      <div className="container">
        <h2>Development</h2>
        <div className="project-list">
          <div className="project-item">
            <h3>Project 1</h3>
            <p>React-based Todo App</p>
          </div>
          <div className="project-item">
            <h3>Project 2</h3>
            <p>Full Stack</p>
          </div>
          <div className="project-item">
            <h3>Project 3</h3>
            <p>Portfolio Website</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
