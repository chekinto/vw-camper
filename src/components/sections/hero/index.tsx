import React from 'react'
import styled from 'styled-components';
import { Section } from 'components/common/section'
import { Button } from 'components/common'
import { Container } from 'components/constants'
import camperVan from 'assets/images/vw-camper.png'
import blob from 'assets/icons/hero-blob.svg'
import { variables } from 'styles/variables'

const HeroSection = styled(Section)`
  padding: 9.6rem 0 7.2rem;
`;

const HeroInner = styled.div`
  display: flex;
  flex-direction: column;
  .hero__image {
    display: grid;
    place-items: center;
    margin-bottom: 1.6rem;
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
    }

    p {
      margin-bottom: 2.4rem;
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
