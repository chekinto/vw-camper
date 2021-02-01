import { createGlobalStyle } from 'styled-components';
import { variables } from 'styles/variables'

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Wotfard';
    src: url('../assets/fonts/wotfard-regular-webfont.ttf') format('truetype');
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
    --max-width: 110.6rem;
    --shadow: 0 0.4rem 1.6rem 0 rgba(0,0,0,0.25);
  }

  html {
    color: var(--black);
    font-size: 10px;
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--wotfard), ---apple-system, BlinkMacSystemFont, 'Open Sans', 'Helvetica Neue', sans-serif;
  }


  h1, h2, h3, h4, h5, h6 {
    font-family: var(--rubik);
    font-weight: var(--fontWeight-bold);
  }

  h1 {
    font-size: 6rem;
    letter-spacing: -0.05rem;
  }
  
  h2 {
    font-size: 4rem;
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
    color: var(--primary);
  }

  @media(max-width: ${variables.breakpoints.desktop}) {
    h1 {
      font-size: 4rem;
    }

    h2 {
      font-size: 3.2rem;
    }
  }

`;