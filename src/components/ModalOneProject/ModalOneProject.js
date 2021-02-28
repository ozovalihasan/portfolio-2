import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from '@linaria/react';
import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import LinkButton from '../LinkButton/LinkButton';
import store from '../store';
import * as color from '../styleSheets/colorVariables';

const ModalOneProject = () => {
  const history = useHistory();
  const { id } = useParams();
  const { projects } = useContext(store);

  const project = projects.find(project => project.id === parseInt(id, 10));

  if (!project) return null;

  const back = e => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <ModalOuter onClick={back}>
      <ModalInner onClick={e => {
        e.stopPropagation();
      }}
      >
        <CloseButton type="button" onClick={back}>
          <FontAwesomeIcon icon={['fas', 'times']} />
        </CloseButton>
        <ProjectImage
          src={`/assets/${project.projectImage}`}
          alt={project.name}
        />
        <ProjectInformation>
          <h1>{project.name}</h1>

          <ProjectLanguages>
            {project.usedLanguages.map(language => (
              <ProjectLanguage key={language}>
                {language}
              </ProjectLanguage>

            ))}
          </ProjectLanguages>

          <div>{project.description}</div>

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
  background: rgba(var(${color.fifthColorNumbers}), 0.8);
  z-index: 20;
`;

const ModalInner = styled.div`
  position: absolute;
  top: 10%;
  bottom: 10%;
  left: 10%;
  right: 10%;
  box-shadow: 0 0 20px ${color.thirdColor};
  background: ${color.fifthColor};
  border-radius: 20px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 30;
  transform: translate(50%, -50%);
  border-radius: 50%;
  font-size: 30px;
  background-color: ${color.firstColor};
  color: ${color.sixthColor};
  border: none;
  outline: none;
`;
const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  line-height: 0;
  position: relative;
  object-fit: cover;
  border-radius: 10px;
`;

const ProjectInformation = styled.div`
  padding: 10px;
  width: 100%;
  background: ${color.fifthColor};
  position: absolute;
  bottom: 0;
  height: auto;
  border-radius: 10px;

`;

const ProjectLanguages = styled.div`
  display: flex;

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

const ProjectLinks = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-120%);
  heigth: auto;
`;

const ProjectLink = styled(LinkButton)`
  border-radius: 100px;
`;

const LinkName = styled.div`
  font-size: 20px;
  padding: 0 10px;
`;
export default ModalOneProject;
