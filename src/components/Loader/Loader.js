import { styled } from '@linaria/react';
import React from 'react';
import * as color from '../styleVariables';

const Loader = () => (
  <MainLoading />
);

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
