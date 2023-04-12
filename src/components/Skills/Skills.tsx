import { useContext } from 'react';
import store from '../store';


const Skills = () => {
  const { skills } = useContext(store);
  return (
    <div className='bg-fifth px-16 py-8'>
      <div className='bg-fifth p-8 grid grid-cols-1 md:flex md:flex-wrap justify-center  md:justify-between w-full border-first border-solid border rounded-lg gap-8'>
        {skills.map(skill => (
          <div key={skill.name} className=''>
            <h2 className="text-2xl pb-2">
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
    </div>
  );
};


export default Skills;
