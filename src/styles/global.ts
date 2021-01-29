import { createGlobalStyle } from 'styled-components';
import { variables } from 'styles/variables'

export const GlobalStyles = createGlobalStyle`
  /* @font-face {
      font-family: 'Poppins';
      src: url('../assets/fonts/Poppins-Light.ttf') format('truetype');
      font-weight: 300;
      font-style: normal;
      font-display: swap;
  }


  @font-face {
      font-family: 'Poppins';
      src: url('../assets/fonts/Poppins-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Poppins';
      src: url('../assets/fonts/Poppins-SemiBold.ttf') format('truetype');
      font-weight: 600;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Poppins';
      src: url('../assets/fonts/Poppins-Bold.ttf') format('truetype');
      font-weight: bold;
      font-style: normal;
      font-display: swap;
  }


  @font-face {
      font-family: 'Rubik';
      src: url('../assets/fonts/Rubik-Regular.ttf') format('truetype');
      font-weight: normal;
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
      font-weight: bold;
      font-style: normal;
      font-display: swap;
  }


  @font-face {
      font-family: 'Rubik';
      src: url('../assets/fonts/Rubik-Black.ttf') format('truetype');
      font-weight: 900;
      font-style: normal;
      font-display: swap;
  } */


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
    --rubik: 'Rubik';
    --poppins: 'Poppins';
    --light: 300;
    --regular: normal;
    --semiBold: 600;
    --bold: bold;
    --black: 900;
    --max-width: 110.6rem;
  }

  html {
    color: var(--black);
    font-size: 10px;
    scroll-behavior: smooth;
  }

  body {
    font-family: var(---poppins);
  }


  h1, h2, h3, h4, h5, h6 {
    font-family: var(--rubik);
    font-weight: var(--bold);
  }

  h1 {
    font-size: 6rem;
    letter-spacing: -0.05rem;
  }
  
  h2 {
    font-size: 3.2rem;
    letter-spacing: -0.025rem;
  }

  h3 {
    font-size: 2.4rem;
  }

  p {
    font-size: 1.6rem;
    line-height: 150%;
  }

  li {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    width: 100%;
  }

  hr {
    color: var(---primary);
  }

  @media(max-width: ${variables.breakpoints.desktop}) {
    h1 {
      font-size: 4rem;
    }

    h2 {
      font-size: 2rem;
    }
  }

`;