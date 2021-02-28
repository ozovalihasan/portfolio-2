import { css } from '@linaria/core';

const index = css`
  :global() {
    
    
    * {
      box-sizing: border-box;
    }

    html {
      scroll-padding-top: 110px;

      @media screen and (min-width: 768px) {
        scroll-padding-top: 0;
      }
    }

    html::-webkit-scrollbar {
      width: 10px;
    }


    body {
      font-family: Helvetica, Arial, sans-serif;
      font-size: 14px;
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
