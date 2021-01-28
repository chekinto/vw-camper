import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
      /* Border radius */
    --borderRadius-sm: 0.4rem;
    --borderRadius-md: 0.6rem;
    --borderRadius-lg: 0.8rem;

    /* Colors */
    --primary: #F9AA33;
    --secondary: #232F34;
    --black: #414141;
    --white: #FFFFFF;
    --grey1: #FAFAFA;
    --grey2: #F2F2F2;

    /* Fonts */
    --rubik: 'Rubik';
    --poppins: 'Poppins';

    /* Shadows */

    /* Widths */
    --max-width: 118rem;
  }

  body {
    font-size: 10px;
    font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    scroll-behavior: smooth;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;