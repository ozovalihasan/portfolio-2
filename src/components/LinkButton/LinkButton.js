import { styled } from '@linaria/react';
import * as color from '../styleSheets/colorVariables';

const LinkButton = styled.a`
  font-size: 20px;
  color: ${color.sixthColor};
  background-color: ${color.firstColor};
  border-radius: 50%;
  padding: 15px;
  transition: all 0.5s;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }

  &:hover {
    color: ${color.thirdColor};
    background-color: ${color.seventhColor};
  }
`;
export default LinkButton;
