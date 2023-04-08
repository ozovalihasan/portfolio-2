import React, { useContext, useState } from 'react';
import ModalOneProject from '../ModalOneProject/ModalOneProject';
import SearchBar from '../SearchBar/SearchBar';
import store from '../store';

const Projects = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const { projects } = useContext(store);
  let filteredProjects = projects;

  if (searchKeyword) {
    filteredProjects = projects.filter(project => (
      JSON.stringify(project.usedLanguages).toLowerCase().includes(searchKeyword.toLowerCase())
    ));
  }

  const searchKeys = projects.reduce((allKeys: string[], project) => {
    allKeys.push(...project.usedLanguages);
    return allKeys;
  }, []);

  const [showProjectId, setShowProjectId] = useState('');

  return (
    <div id="portfolio">
      <div>

        <div>
          My portfolio
        </div>

        <SearchBar
          searchKeys={[...new Set(searchKeys.sort())]}
          keyword={searchKeyword}
          setKeyword={setSearchKeyword}
        />

      </div>
      <div>
        {filteredProjects.length ? filteredProjects.map((project, index) => (
          <section
            key={project.name}
          >
            <button type="button" onClick={() => setShowProjectId(project.id.toString())}>
              <div>
                <img
                  src={`/assets/${project.projectImage}`}
                  alt={project.name}
                />
                <div />
              </div>

              <div>
                {project.name}
              </div>

              <div>

                {project.usedLanguages.map(language => (
                  <div key={language}>
                    {language}
                  </div>

                ))}
              </div>

            </button>

          </section>
        ))

          : (
            <section>
              No result...
            </section>
          )}
        {
          showProjectId
          && <ModalOneProject projectId={showProjectId} setProjectId={setShowProjectId} />
        }
      </div>
    </div>
  );
};

export default Projects;
