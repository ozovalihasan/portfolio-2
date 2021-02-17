import { css } from '@linaria/core';
import * as color from './colorVariables';

const index = css`
  :global() {
    * {
      box-sizing: border-box;
    }

    html {
      overflow-y: scroll;
      scrollbar-color: var(${color.secondColor}) var(${color.firstColor});
      scroll-padding-top: 110px;

      @media screen and (min-width: 768px) {
        scroll-padding-top: 0;
      }
    }

    html::-webkit-scrollbar {
      width: 10px;
      background: var(${color.firstColor});
    }

    html::-webkit-scrollbar-thumb {
      background: var(${color.secondColor});
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
