import { styled } from '@linaria/react';
import React, { useContext, useState } from 'react';
import ModalOneProject from '../ModalOneProject/ModalOneProject';
import SearchBar from '../SearchBar/SearchBar';
import store from '../store';
import * as color from '../styleSheets/colorVariables';

const Projects = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const { projects } = useContext(store);
  let filteredProjects = projects;

  if (searchKeyword) {
    filteredProjects = projects.filter(project => (
      JSON.stringify(project.usedLanguages).toLowerCase().includes(searchKeyword.toLowerCase())
    ));
  }

  const searchKeys = projects.reduce((allKeys, project) => {
    allKeys.push(...project.usedLanguages);
    return allKeys;
  }, []);

  const [showHover, setShowHover] = useState([]);
  const [showProjectId, setShowProjectId] = useState('');

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
      <TitleSearch>

        <ProjectsTitle>
          My portfolio
        </ProjectsTitle>

        <SearchBar
          searchKeys={[...new Set(searchKeys.sort())]}
          projects={projects}
          keyword={searchKeyword}
          setKeyword={setSearchKeyword}
        />

      </TitleSearch>
      <ProjectsInner>
        {filteredProjects.length ? filteredProjects.map((project, index) => (
          <Project
            key={project.name}
            onMouseOver={() => handleMouseEnter(index)}
            onFocus={() => handleMouseEnter(index)}
            onMouseOut={() => handleMouseLeave(index)}
            onBlur={() => handleMouseLeave(index)}
            className={showHover[index]}
            alt={project.name}
          >
            <ProjectButton type="button" onClick={() => setShowProjectId(project.id.toString())}>
              <ProjectImageContainer
                showHover={showHover[index]}
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

              <ProjectLanguages showHover={showHover[index]}>

                {project.usedLanguages.map(language => (
                  <ProjectLanguage key={language}>
                    {language}
                  </ProjectLanguage>

                ))}
              </ProjectLanguages>

            </ProjectButton>

          </Project>
        ))

          : (
            <Project>
              No result...
            </Project>
          )}
        {
          showProjectId?.toString()
          && <ModalOneProject projectId={showProjectId} setProjectId={setShowProjectId} />
        }
      </ProjectsInner>
    </ProjectsOuter>
  );
};

const ProjectsOuter = styled.div`
  padding: 2rem;
  background-color: ${color.fifthColor};

  @media screen and (min-width: 768px) {
    padding: 3rem;
  }
`;

const TitleSearch = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const ProjectsTitle = styled.div`
  font-size: 28px;
  font-weight: 700;
`;

const ProjectsInner = styled.div`
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

const ProjectButton = styled.div`
  cursor: pointer;
  width: 100%;
  border: none;
  height: 100%;
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

export default Projects;
