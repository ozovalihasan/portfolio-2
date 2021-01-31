import React, { useContext } from 'react';
import store from '../store';

const Skills = () => {
  const { skills } = useContext(store);
  return (
    <div>
      {skills.frameworks.map(skill => (
        <div key={skill}>
          {skill}
        </div>
      ))}
    </div>
  );
};

export default Skills;
