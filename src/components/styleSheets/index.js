import { css } from '@linaria/core';
import * as color from './styleVariables';

const index = css`
  :global() {

    * {
      box-sizing: border-box;
    }
    
    html {
      overflow-y: scroll;
      scrollbar-color: ${color.secondColor} ${color.firstColor};
      scroll-padding-top: 110px;
    }
    
    html::-webkit-scrollbar {
      width: 10px;
      background: ${color.firstColor};
    }
    
    html::-webkit-scrollbar-thumb {
      background: ${color.secondColor};
    }
    
    body {
      font-family: Helvetica, Arial, sans-serif;
      font-size: 20px;
      line-height: 1.5;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    button {
      font-size: inherit;
      &:hover {
        cursor: pointer;
      }
    }
  }

`;

export default index;
