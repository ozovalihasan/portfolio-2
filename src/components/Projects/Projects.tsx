import { useContext, useState } from 'react';
import ModalOneProject from '../ModalOneProject/ModalOneProject';
import SearchBar from '../SearchBar/SearchBar';
import store from '../store';
import Language from '../Language/Language';

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
    <div id="portfolio" className='px-16 bg-fifth pt-16'>
      <div className="flex items-center">

        <div className="text-3xl font-bold h-full whitespace-nowrap">
          My portfolio
        </div>

        <SearchBar
          searchKeys={[...new Set(searchKeys.sort())]}
          keyword={searchKeyword}
          setKeyword={setSearchKeyword}
        />

      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-16 py-8 '>
        {filteredProjects.length ? filteredProjects.map((project, index) => (
          <section
            key={project.name}
            className='relative group'
          >
            <button type="button" onClick={() => setShowProjectId(project.id.toString())} className='w-full md:h-full bg-transparent'>
              
              <div className='relative object-cover w-full h-full'>
                <img
                  src={project.projectImage}
                  alt={project.name}
                  className='w-full h-full block object-cover  rounded-lg'
                />
                
                <div className="left-0 top-0 absolute w-full h-full project-image-gradient rounded-lg" />
                
              </div>

              <div className="left-3 top-3 absolute text-third text-xl font-bold group-hover:md:text-2xl transition-all" >
                {project.name}
              </div>

              <div className='flex flex-wrap md:absolute md:top-[50px] md:left-[10px] md:hidden md:group-hover:flex'>

                {project.usedLanguages.map(language => (
                  <Language key={language} name={language}/>
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
