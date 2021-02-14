import { styled } from '@linaria/react';
import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import store from '../store';
import * as color from '../styleSheets/styleVariables';

const Projects = () => {
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

  return (
    <ProjectsOuter id="portfolio">
      <ProjectsTitle>
        My portfolio
      </ProjectsTitle>
      <ProjectsInner>
        {projects.map((project, index) => (
          <Project
            key={project.name}
            onMouseOver={() => handleMouseEnter(index)}
            onFocus={() => handleMouseEnter(index)}
            onMouseOut={() => handleMouseLeave(index)}
            onBlur={() => handleMouseLeave(index)}
            className={showHover[index]}
          >
            <ProjectImageContainer
              showHover={showHover[index]}
            >
              <ProjectImage
                src={`assets/${project.projectImage}`}
                alt={`Screenshot of ${project.name}`}
              />
              <ProjectGradient />
            </ProjectImageContainer>

            <ProjectName>
              {project.name}
            </ProjectName>

            <ProjectLanguages showHover={showHover[index]}>

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
        ))}
      </ProjectsInner>
    </ProjectsOuter>
  );
};

const ProjectsOuter = styled.div`
  padding: 2rem;

  @media screen and (min-width: 768px) {
    padding: 3rem;
  }
`;

const ProjectsTitle = styled.div`
  font-size: 28px;
  font-weight: 700;
`;

const ProjectsInner = styled.div`
  background-color: white;

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-gap: 20px 20px;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Project = styled.div`
  position: relative;
  width: 100%;
  border-radius: 10px;
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
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  line-height: 0;
  position: relative;
  object-fit: cover;
  border-radius: 10px;
`;

const ProjectGradient = styled.div`
  background-image:
    linear-gradient(
      180deg,
      rgba(245, 252, 253, 0.85) 0%,
      rgba(245, 252, 253, 0.55) 30px,
      rgba(255, 255, 255, 0.25) 60px,
      rgba(255, 255, 255, 0) 98.35%
    );
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
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

export default Projects;
