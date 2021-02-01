import React from 'react'
import styled, { keyframes } from 'styled-components';
import { Section } from 'components/common/section'
import { Button } from 'components/common'
import { Container } from 'components/constants'
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
  padding: 18rem 0 7.2rem;
`;

const HeroInner = styled.div`
  display: flex;
  flex-direction: column;
  .hero__image {
    display: grid;
    place-items: center;
    margin-bottom: 1.6rem;
    animation: 1s ${slideIn} ease-in;
    img {
      height: 14.8rem;
      object-fit: contain;
    }
    @media(min-width: ${variables.breakpoints.tablet}) {
      order: 2;
    }
  }

  .hero__content {
    h1,
    p {
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

    .hero__btn {
      display: block;
      margin: 0 auto;
    }
    @media(min-width: ${variables.breakpoints.tablet}) {
      order: 1;
      h1, p {
        text-align: revert;
      }

      .hero__btn {
        display: revert;
      }
    }
  }

  @media(min-width: ${variables.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <HeroInner>
          <div className="hero__image">
            <img src={camperVan} alt="camper van" />
          </div>

          <div className="hero__content">
            <h1>Retro Style, <br />modern comfort</h1>
            <p>
              Whatever the occasion we have you covered. Here at VW Camper we aim to provide first class van hire every time.
            </p>
            <Button className="hero__btn">Book now</Button>
          </div>
        </HeroInner>
      </Container>
    </HeroSection>

  )
}
