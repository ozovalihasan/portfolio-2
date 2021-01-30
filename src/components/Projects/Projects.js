import React, { useContext } from 'react';
import store from '../store';

const Projects = () => {
  const { projects } = useContext(store);

  return (
    <div className="projects">
      {projects[0].liveLink}
    </div>
  );
};

export default Projects;
