import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useContext, useEffect } from 'react';
import LinkButton from '../LinkButton/LinkButton';
import store from '../store';
import Language from '../Language/Language';

type ModalOneProjectType = { 
  projectId: string, 
  setProjectId: (arg0: string) => void
}


const ModalOneProject = ({ projectId, setProjectId }: ModalOneProjectType) => {
  console.warn(projectId);
  
  const { projects } = useContext(store);

  const project = projects.find(project => project.id === parseInt(projectId, 10));
  
  if (!project) return null;

  const closeModal = () => setProjectId('');

  const escFunction = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      closeModal();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', escFunction);

    return () => {
      document.removeEventListener('keydown', escFunction);
    };
  }, []);

  return (
    <div onClick={() => setProjectId('')} className='fixed top-0 bottom-0 left-0 right-0 h-full z-50 text-third p-4 bg-black bg-opacity-70'>
      <div className='relative w-full h-full  '>
        <button className=' text-third absolute top-[5%] right-[5%] z-50 p-2 bg-fifth rounded-tr-lg rounded-bl-lg' type="button" onClick={closeModal} >
          <FontAwesomeIcon icon={['fas', 'times']} />
        </button>
        <div
          onClick={e => { e.stopPropagation() }}
          className='absolute top-[5%] bottom-[5%] left-[5%] right-[5%] overflow-y-scroll bg-fifth rounded-2xl md:overflow-y-clip'
        >
          <img
            className='object-cover hover:z-[60]'
            src={project.projectImage}
            alt={project.name}
          />
          <div className='md:absolute bg-fifth bottom-0 w-full p-2 md:p-8 md:h-24 transition-all duration-300 md:hover:h-3/4'>
            <div className='relative flex md:justify-between gap-8 items-center'>

              
              <div className='text-xl font-bold h-full self-center'>{project.name}</div>
              
              <div className='bottom-full right-0 flex gap-4'>
                {project.liveLink && (
                <LinkButton title="Live Demo Link" href={project.liveLink}>
                  <div className="hidden md:block">
                    Live Demo
                  </div>
                  <FontAwesomeIcon icon={['fas', 'paper-plane']} />
                </LinkButton>
                )}
                <LinkButton title="Source Code" href={project.sourceLink}>
                  <div className="hidden md:block">
                    Source Code
                  </div>
                  <FontAwesomeIcon icon={['fab', 'github']} />
                </LinkButton>
              </div>
            </div>
            <div className='flex my-2 flex-wrap'>
              {project.usedLanguages.map(language => (
                <Language key={language} name={language}/>
                
              ))}
            </div>
            <div>{project.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalOneProject;
