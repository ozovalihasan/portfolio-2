import { useContext } from 'react';
import store from '../store';


const Skills = () => {
  const { skills } = useContext(store);
  return (
    <div>
      {skills.map(skill => (
        <div key={skill.name}>
          <h2>
            {skill.name}
          </h2>
          {skill.items.map(skill => (
            <div key={skill}>
              {skill}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};


export default Skills;
