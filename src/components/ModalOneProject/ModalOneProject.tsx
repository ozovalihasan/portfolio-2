import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useContext, useEffect } from 'react';
import LinkButton from '../LinkButton/LinkButton';
import store from '../store';

type ModalOneProjectType = { 
  projectId: string, 
  setProjectId: (arg0: string) => void
}


const ModalOneProject = ({ projectId, setProjectId }: ModalOneProjectType) => {
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
    <div onClick={() => setProjectId('')}>
      <button type="button" onClick={closeModal}>
        <FontAwesomeIcon icon={['fas', 'times']} />
      </button>
      <div onClick={e => {
        e.stopPropagation();
      }}
      >

        <img
          src={`/assets/${project.projectImage}`}
          alt={project.name}
        />
        <div>
          <div>
            <div>{project.name}</div>
            <div>
              {project.liveLink && (
              <LinkButton title="Live Demo Link" href={project.liveLink}>
                <div>
                  See Live
                </div>
                <FontAwesomeIcon icon={['fas', 'paper-plane']} />
              </LinkButton>
              )}

              <LinkButton title="Source Code" href={project.sourceLink}>
                <div>
                  See Source
                </div>
                <FontAwesomeIcon icon={['fab', 'github']} />
              </LinkButton>

            </div>
          </div>
          <div>
            {project.usedLanguages.map(language => (
              <div key={language}>
                {language}
              </div>

            ))}
          </div>

          <div>{project.description}</div>

        </div>
      </div>
    </div>
  );
};

export default ModalOneProject;
