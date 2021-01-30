import React, { useContext } from 'react';
import store from '../store';

const Projects = () => {
  const { projects } = useContext(store);

  return (
    <div className="projects">
      {projects.map(project => (
        <div key={project.name}>
          {project.liveLink}
          {project.name}
        </div>
      ))}
    </div>
  );
};

export default Projects;
