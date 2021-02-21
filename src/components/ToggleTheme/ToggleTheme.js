import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from '@linaria/react';
import React, { useContext } from 'react';
import { MyContext } from '../store';
import * as color from '../styleSheets/colorVariables';

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(MyContext);

  return (
    <ThemeButton type="button" onClick={toggleTheme}>
      <UpdatedFontAwesomeIcon icon={theme === 'light' ? ['fas', 'moon'] : ['fas', 'sun']} theme={theme} />
    </ThemeButton>
  );
};

const ThemeButton = styled.button`
  outline: none;
  background-color: transparent;
  border: none;
`;

const UpdatedFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 40px;
  margin: 10px;
  color: ${props => (props.theme === 'light' ? color.thirdColor : color.firstColor)}
`;
export default ToggleTheme;
