import React from "react"
import styled from 'styled-components';
import { Container, HeaderScripts } from 'components/constants'
import { Button, PricingCard, ServiceCard, Section, TitleBanner } from 'components/common'
import { Hero } from 'components/sections/hero'
import { MeetTheBuses } from 'components/sections/meet-the-buses'
import { services, pricing } from 'features'

export const Banner = styled.div`
  background-color: var(--primary);
  padding: 2.4rem;
  p {
    text-align: center;
    margin-bottom: 1.6rem;
  }
  button {
    display: block;
    margin: 0 auto;
  }
`;

const Home = () => {
  console.log('pricing :>> ', pricing);
  return (
    <>
      <HeaderScripts
        pageMeta={{ title: 'Home', description: 'Home page' }}
      />
      <Hero />

      <Banner>
        <p>Hire a VW Camper van now</p>
        <Button secondary>Contact us</Button>
      </Banner>

      <MeetTheBuses />

      <Section>
        <Container>
          <TitleBanner
            title="Services"
            subtitle="Whether it's for adventurous family holidays, outdoor sports, bird watching trips, festivals or just to get away from it all - VW Camper van is the place to get exactly what you need. For more information click here"
          />

          {services.map(service => (
            <ServiceCard
              title={service.title}
              bgImage={service.bgImage}
            />
          ))}
        </Container>
      </Section>

      <Section>
        <Container>
          <TitleBanner
            title="Our story"
          />
          <img src="https://via.placeholder.com/150C/O https://placeholder.com/" alt="" />
          <p>
            Family trio Peter Julie and Steven are seriously passionate about VW Campers! We have always been huge lovers of the great outdoors taking every opportunity to rome freely across the land, from rolling hills to open fields, private hideaways to sea views, from weddings and proms to festivals, films and videos, Our classic VW campers are perfect for any special occasion! Steven has been driving and maintaining campers for 35 years, you can rest assured that you will be traveling in style.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <TitleBanner
            title="Pricing"
            subtitle="All prices per day are subject to VAT"
          />
          {pricing.map(price => (
            <PricingCard
              title={price.title}
              season={price.season}
            />
          ))}
        </Container>
      </Section>


      <Section>
        <Container>
          <TitleBanner
            title="Let's chat"
          />
        </Container>
      </Section>



    </>
  )
}

export default Home