import { styled } from '@linaria/react';
import React, { useContext } from 'react';
import store from '../store';

const Projects = () => {
  const { projects } = useContext(store);

  return (
    <div className="projects">
      {projects.map(project => (
        <Project key={project.name}>
          <ProjectImage
            src={`assets/${project.projectImage}`}
            alt=""
          />
          {project.liveLink}
          {project.name}
        </Project>
      ))}
    </div>
  );
};

const Project = styled.div`
  color: red;
`;

const ProjectImage = styled.img`
  height: 100px;
  width: 100px;

`;
export default Projects;
