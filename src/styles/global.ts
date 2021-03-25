import { createGlobalStyle } from 'styled-components';
import { variables } from 'styles/variables'

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Wotfard';
    src: url('../assets/fonts/wotfard.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Rubik';
    src: url('../assets/fonts/Rubik-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Rubik';
    src: url('../assets/fonts/Rubik-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Rubik';
    src: url('../assets/fonts/Rubik-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

 :root {
    --borderRadius-sm: 0.4rem;
    --borderRadius-md: 0.6rem;
    --borderRadius-lg: 0.8rem;
    --primary: #F9AA33;
    --secondary: #232F34;
    --black: #000000;
    --white: #FFFFFF;
    --grey1: #FAFAFA;
    --grey2: #F2F2F2;
    --grey3: #d6dbdd;
    --rubik: 'Rubik';
    --wotfard: 'Wotfard';
    --fontWeight-light: 300;
    --fontWeight-regular: 400;
    --fontWeight-semiBold: 600;
    --fontWeight-bold: 700;
    --max-width: 120rem;
    --shadow: 0 0.4rem 1.6rem 0 rgba(0,0,0,0.25);
  }

  html {
    color: var(--black);
    font-size: 10px;
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
  }

  body {
    font-family: 'Inter', ---apple-system, BlinkMacSystemFont, 'Open Sans', sans-serif;
  }

  main {
    display: block;
  }

  h1, h2, h3, h4, h5, h6 {
    color: inherit;
    font-weight: bold;
    font-family: var(--rubik);
  }

  h1 {
    font-size: 5.6rem;
    letter-spacing: 1.2%;
  }

  h2 {
    font-size: 4rem;
    letter-spacing: 1.2%;
  }

  h3 {
    font-size: 2.4rem;
    letter-spacing: 0%;
  }

  p {
    font-size: 1.6rem;
    line-height: 150%;
  }

  small {
    font-size: 1.4rem;
    line-height: 150%;
  }

  a {
    background-color: transparent;
    color: inherit;
    text-decoration: none;
  }

  img {
    border-style: none;
    width: 100%;
  }

  hr {
    box-sizing: content-box;
    height: 0; 
    overflow: visible; 
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  button,
  input {
    overflow: visible;
    font-family: inherit;
    font-size: 1.6rem;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  textarea {
    overflow: auto;
  }

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }

  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }

  [hidden] {
    display: none;
  }


  @media(max-width: ${variables.breakpoints.tablet}) {
    h1 {
      font-size: 4rem; 
    }
    h2 {
      font-size: 3.2rem; 
    }
    h3 {
      font-size:2rem; 
    }
  }

  /* Utils */
  .capitalize {
    text-transform: capitalize;
  }
`;