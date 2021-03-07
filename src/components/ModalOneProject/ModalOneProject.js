import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from '@linaria/react';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import LinkButton from '../LinkButton/LinkButton';
import store from '../store';
import * as color from '../styleSheets/colorVariables';

const ModalOneProject = ({ projectId, setProjectId }) => {
  const { projects } = useContext(store);

  const project = projects.find(project => project.id === parseInt(projectId, 10));

  if (!project) return null;

  return (
    <ModalOuter onClick={() => setProjectId('')}>
      <CloseButton type="button" onClick={() => setProjectId('')}>
        <FontAwesomeIcon icon={['fas', 'times']} />
      </CloseButton>
      <ModalInner onClick={e => {
        e.stopPropagation();
      }}
      >

        <ProjectImage
          src={`/assets/${project.projectImage}`}
          alt={project.name}
        />
        <ProjectInformation>
          <ProjectHeader>
            <ProjectName>{project.name}</ProjectName>
            <ProjectLinks>
              {project.liveLink && (
              <ProjectLink target="blank" title="Live Demo Link" href={project.liveLink}>
                <LinkName>
                  See Live
                </LinkName>
                <FontAwesomeIcon icon={['fas', 'paper-plane']} />
              </ProjectLink>
              )}

              <ProjectLink target="blank" title="Source Code" href={project.sourceLink}>
                <LinkName>
                  See Source
                </LinkName>
                <FontAwesomeIcon icon={['fab', 'github']} />
              </ProjectLink>

            </ProjectLinks>
          </ProjectHeader>
          <ProjectLanguages>
            {project.usedLanguages.map(language => (
              <ProjectLanguage key={language}>
                {language}
              </ProjectLanguage>

            ))}
          </ProjectLanguages>

          <ProjectDescription>{project.description}</ProjectDescription>

        </ProjectInformation>
      </ModalInner>
    </ModalOuter>
  );
};

const ModalOuter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  background: rgba(var(${color.fifthColorNumbers}), 0.8);
  z-index: 20;
`;

const ModalInner = styled.div`
  position: absolute;
  top: 10%;
  left: 5%;
  right: 5%;
  bottom: 5%;
  box-shadow: 0 0 20px ${color.thirdColor};
  background: ${color.fifthColor};
  border-radius: 20px;
  overflow-y: scroll;

  @media screen and (min-width: 768px) {
    overflow-y: unset;
    left: 10%;
    right: 10%;
    bottom: 10%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10%;
  right: 5%;
  z-index: 30;
  border-radius: 0 10px 0 20px;
  font-size: 30px;
  background-color: ${color.firstColor};
  color: ${color.sixthColor};
  border: none;
  outline: none;

  @media screen and (min-width: 768px) {
    right: 10%;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;;
  line-height: 0;
  position: relative;
  object-fit: cover;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    height: 100%;
  }
`;

const ProjectInformation = styled.div`
  padding: 10px;
  width: 100%;
  background: ${color.fifthColor};
  bottom: 0;
  height: auto;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    position: absolute;
  }
`;

const ProjectHeader = styled.div`

`;

const ProjectName = styled.div`
  
  left: 10px;
  color: ${color.thirdColor};
  font-size: 28px;
  font-weight: bold;
  position: relative;
  height: 100%;

  @media screen and (min-width: 768px) {
    position: unset;
    top: 10px;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  top: 0;
  right: 0;
  
  @media screen and (min-width: 768px) {
    position: absolute;
    transform: translateY(-120%);
  }
`;

const ProjectLink = styled(LinkButton)`
  border-radius: 100px;
  width: auto;
  
`;

const LinkName = styled.div`
  font-size: 20px;
  padding: 0 10px;
  display: none;
  

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const ProjectLanguages = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const ProjectLanguage = styled.div`
  color: ${color.fifthColor};
  margin: 10px;
  border-radius: 20px;
  background-color: ${color.thirdColor};
  padding: 3px 20px;
`;

const ProjectDescription = styled.div`
  color: ${color.thirdColor};
`;

ModalOneProject.propTypes = {
  projectId: PropTypes.string.isRequired,
  setProjectId: PropTypes.func.isRequired,
};

export default ModalOneProject;
