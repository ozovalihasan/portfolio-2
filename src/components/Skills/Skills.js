import { styled } from '@linaria/react';
import React, { useContext } from 'react';
import store from '../store';
import * as color from '../styleSheets/styleVariables';

const Skills = () => {
  const { skills } = useContext(store);
  return (
    <SkillsOuter>
      <SkillsCategory>
        <SkillsCategoryTitle>
          Languages
        </SkillsCategoryTitle>
        {skills.languages.map(skill => (
          <SkillsCategoryItem key={skill}>
            {skill}
          </SkillsCategoryItem>
        ))}
      </SkillsCategory>
      <SkillsCategory>
        <SkillsCategoryTitle>
          Frameworks
        </SkillsCategoryTitle>
        {skills.frameworks.map(skill => (
          <SkillsCategoryItem key={skill}>
            {skill}
          </SkillsCategoryItem>
        ))}
      </SkillsCategory>
      <SkillsCategory>
        <SkillsCategoryTitle>
          Skills
        </SkillsCategoryTitle>
        {skills.skills.map(skill => (
          <SkillsCategoryItem key={skill}>
            {skill}
          </SkillsCategoryItem>
        ))}
      </SkillsCategory>
    </SkillsOuter>
  );
};

const SkillsOuter = styled.div`
  display: flex;
  width: 100%;
  padding: 2rem;

  @media screen and (min-width: 768px) {
    padding: 3rem;
  }
`;

const SkillsCategory = styled.div`
  width: 100%;
  background-color: ${color.sixthColor}
  padding: 40px 20px;
  line-height: 1.5;
`;

const SkillsCategoryTitle = styled.h2`
  font-size: 28px;
  font-weight: bold;
  padding-bottom: 1rem;
`;

const SkillsCategoryItem = styled.div`
  padding: .25rem;
`;

export default Skills;
