import { css } from '@linaria/core';

const firstColor = 'rgb(var(--firstColor))';
const secondColor = 'rgb(var(--secondColor))';
const thirdColor = 'rgb(var(--thirdColor))';
const fourthColor = 'rgb(var(--fourthColor))';
const fifthColor = 'rgb(var(--fifthColor))';
const sixthColor = 'rgb(var(--sixthColor))';
const seventhColor = 'rgb(var(--seventhColor))';
const eightColor = 'rgb(var(--eightColor))';
const fifthColorNumbers = '--fifthColor';

const theme = {
  light: {
    '--firstColor': '70, 194, 251',
    '--secondColor': '250, 172, 71',
    '--thirdColor': '42, 43, 46',
    '--fourthColor': '115, 121, 134',
    '--fifthColor': '255, 255, 255',
    '--sixthColor': '245, 252, 253',
    '--seventhColor': '162, 224, 253',
    '--eightColor': '252, 213, 162',
  },
  dark: {
    '--firstColor': '60, 100, 130',
    '--secondColor': '125, 86, 35',
    '--thirdColor': '213, 212, 209',
    '--fourthColor': '134, 123, 115',
    '--fifthColor': '0, 0, 0',
    '--sixthColor': '3, 3, 2',
    '--seventhColor': '93, 31, 2',
    '--eightColor': '3, 42, 93',
  },
};

const lightTheme = css`
  ${theme.light}
`;

const darkTheme = css`
  ${theme.dark}
`;

export {
  firstColor,
  secondColor,
  thirdColor,
  fourthColor,
  fifthColor,
  sixthColor,
  seventhColor,
  eightColor,
  fifthColorNumbers,
  lightTheme,
  darkTheme,
  theme,
};
