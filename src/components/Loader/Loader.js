import { styled } from '@linaria/react';
import React from 'react';
import * as color from '../styleSheets/colorVariables';

const Loader = () => (
  <LoaderOuter>
    <MainLoading />
  </LoaderOuter>
);

const LoaderOuter = styled.div`
  background-color: ${color.fifthColor};
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
`;

const MainLoading = styled.div`
  position: absolute;
  z-index: 1;
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid ${color.firstColor};
  border-bottom: 16px solid ${color.secondColor};
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  left: 50%;
  top: 50%;

  @keyframes spin {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%)  rotate(360deg); }
  }

`;
export default Loader;
