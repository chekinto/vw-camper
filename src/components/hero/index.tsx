import React from 'react'
import styled, { keyframes } from 'styled-components';
import { Button, Container } from 'components'
import { Section } from 'components/section'
import camperVan from 'assets/images/vw-camper.png'
import blob from 'assets/icons/hero-blob.svg'
import { variables } from 'styles/variables'

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-1rem);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const HeroSection = styled(Section)`
  display: grid;
  place-items: center;
  height: calc(100vh - 4rem);
  padding-top: 4rem;
  background-color: var(--primary);
`;

const HeroImage = styled.div`
  display: grid;
  place-items: center;
  margin-bottom: 1.6rem;
  animation: 1s ${slideIn} ease-in;
  gap: 2.4rem;
  img {
    height: 14.8rem;
    object-fit: contain;
  }

  @media(min-width: ${variables.breakpoints.tablet}) {
    img {
      height: 28.4rem;
    }
  }
`;

const HeroContent = styled.div`
  h1, p {
    text-align: center;
  }
  h1 {
    margin-bottom: 1.6rem;
    animation: 1s ${slideIn} ease-in 0.3s;
  }
  p {
    font-size: 2rem;
    margin-bottom: 2.4rem;
    animation: 1s ${slideIn} ease-in;
  }

  button {
    display: block;
    margin: 0 auto;
  }
  @media(min-width: ${variables.breakpoints.tablet}) {
    order: 1;
    h1, p {
      text-align: revert;
    }
    button {
      display: revert;
    }
  }
`;

const HeroInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media(min-width: ${variables.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    ${HeroImage} {
      order: 2;
    }
  }
`;

export const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <HeroInner>
          <HeroImage>
            <img src={camperVan} alt="camper van" />
          </HeroImage>

          <HeroContent>
            <h1>Retro Style, <br />modern comfort</h1>
            <p>
              Whatever the occasion we have you covered. Here at VW Camper we aim to provide first class van hire every time.
            </p>
            <Button large secondary>Book now</Button>
          </HeroContent>
        </HeroInner>
      </Container>
    </HeroSection >

  )
}
