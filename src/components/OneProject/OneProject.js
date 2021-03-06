import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from '@linaria/react';
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import store from '../store';
import * as color from '../styleSheets/colorVariables';

const OneProject = () => {
  const { id } = useParams();
  const { projects } = useContext(store);
  const [showHover, setShowHover] = useState([]);

  const handleMouseEnter = e => {
    const updateShowHover = [...showHover];
    updateShowHover[e] = true;
    setShowHover(updateShowHover);
  };

  const handleMouseLeave = e => {
    const updateShowHover = [...showHover];
    updateShowHover[e] = false;
    setShowHover(updateShowHover);
  };

  const project = projects[parseInt(id, 10)];

  if (!project) return null;

  return (
    <div>
      <Project
        onMouseOver={() => handleMouseEnter(id)}
        onFocus={() => handleMouseEnter(id)}
        onMouseOut={() => handleMouseLeave(id)}
        onBlur={() => handleMouseLeave(id)}
        className={showHover[id]}
        alt={project.name}
      >

        <ProjectImageContainer
          showHover={showHover[id]}
        >
          <ProjectImage
            src={`/assets/${project.projectImage}`}
            alt={project.name}
          />

          <ProjectGradient />
        </ProjectImageContainer>

        <ProjectName>
          {project.name}
        </ProjectName>

        <ProjectLanguages showHover={showHover[id]}>

          {project.usedLanguages.map(language => (
            <ProjectLanguage key={language}>
              {language}
            </ProjectLanguage>

          ))}
        </ProjectLanguages>
        <ProjectLinks>

          {project.liveLink && (
            <ProjectLink target="blank" title="Live Demo Link" href={project.liveLink}>
              <FontAwesomeIcon icon={['fas', 'paper-plane']} />
            </ProjectLink>
          )}

          <ProjectLink target="blank" title="Source Code" href={project.sourceLink}>
            <FontAwesomeIcon icon={['fab', 'github']} />
          </ProjectLink>

        </ProjectLinks>

      </Project>

    </div>
  );
};

const Project = styled.div`
  position: relative;
  width: 100%;
  border-radius: 10px;
  border: 2px solid ${color.fifthColor};
  margin: 30px 0;
  transition: all 0.3s ease-out;
  transform: translate(0, 0);
  filter: drop-shadow(0 0 0 ${color.firstColor});
  background-color: ${color.sixthColor};

  &:hover {
    transform: translate(-5px, -10px);
    filter: drop-shadow(5px 10px 10px ${color.firstColor});
  }
`;

const ProjectImageContainer = styled.div`
  width: 100%;
  height: 100%;
  line-height: 0;
  position: relative;
  object-fit: cover;
  border-radius: 10px;
  border: 2px solid ${color.fifthColor};
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  line-height: 0;
  position: relative;
  object-fit: cover;
  border-radius: 10px;
  border: 2px solid ${color.fifthColor};
`;

const ProjectGradient = styled.div`
  background-image:
    linear-gradient(
      180deg,
      rgba(var(${color.fifthColorNumbers}), 1) 10px,
      rgba(var(${color.fifthColorNumbers}), 0.95) 20px,
      rgba(var(${color.fifthColorNumbers}), 0.55) 40px,
      rgba(var(${color.fifthColorNumbers}), 0.25) 60px,
      rgba(var(${color.fifthColorNumbers}), 0) 98.35%
    );
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 10px;

`;

const ProjectName = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  color: ${color.thirdColor};
  font-size: 28px;
  font-weight: bold;
`;

const ProjectLanguages = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 50px;
    left: 10px;
    display: ${props => (props.showHover ? 'flex' : 'none')};
  }
`;
const ProjectLanguage = styled.div`
  color: ${color.fifthColor};
  margin: 10px;
  border-radius: 20px;
  background-color: ${color.thirdColor};
  padding: 3px 20px;

`;

const ProjectLinks = styled.div`
  margin: 10px;
  display: flex;
  justify-content: flex-end;

  @media screen and (min-width: 768px) {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

const ProjectLink = styled.a`
  font-size: 30px;
  color: ${color.sixthColor};
  background-color: ${color.firstColor};
  border-radius: 50%;
  padding: 15px;
  transition: all 0.5s;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }

  &:hover {
    color: ${color.thirdColor};
    background-color: ${color.seventhColor};
  }
`;

export default OneProject;
