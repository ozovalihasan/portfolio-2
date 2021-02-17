import { styled } from '@linaria/react';
import React, { useContext } from 'react';
import store from '../store';
import * as color from '../styleSheets/colorVariables';

const Skills = () => {
  const { skills } = useContext(store);
  return (
    <SkillsOuter>
      {skills.map(skill => (
        <SkillsCategory key={skill.name}>
          <SkillsCategoryTitle>
            {skill.name}
          </SkillsCategoryTitle>
          {skill.items.map(skill => (
            <SkillsCategoryItem key={skill}>
              {skill}
            </SkillsCategoryItem>
          ))}
        </SkillsCategory>
      ))}
    </SkillsOuter>
  );
};

const SkillsOuter = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: var(${color.fifthColor});

  @media screen and (min-width: 768px) {
    padding: 3rem;
    display: flex;
  }
`;

const SkillsCategory = styled.div`
  width: 100%;
  background-color: var(${color.sixthColor});
  padding: 40px 20px;
  line-height: 1.5;
  margin: 10px 0;
`;

const SkillsCategoryTitle = styled.h2`
  font-size: 28px;
  font-weight: bold;
  padding-bottom: 1rem;
`;

const SkillsCategoryItem = styled.div`
  padding: 0.25rem;
`;

export default Skills;
