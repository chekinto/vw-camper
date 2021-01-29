import React from "react"
import styled from 'styled-components';
import { Container, Flex, HeaderScripts } from 'components/constants'
import { Button, Divider, Icon, PricingCard, ServiceCard, Section, TitleBanner } from 'components/common'
import { Input, TextArea } from 'components/forms'
import { Hero } from 'components/sections/hero'
import { MeetTheBuses } from 'components/sections/meet-the-buses'
import { services, pricing, whatsIncluded, optionalExtras } from 'features'

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

      <Section id="#services">
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

      <Section id="#our-story">
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

      <Section id="#pricing">
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

          <h3>Whats included?</h3>
          {whatsIncluded.map(item => (
            <Flex gap={0.8}>
              <Icon src={item.icon} fill="red" />
              <span>{item.content}</span>
            </Flex>
          ))}

          <Divider />

          <h3>Optional extras</h3>
          {optionalExtras.map(item => (
            <Flex gap={0.8}>
              <Icon src={item.icon} fill="red" />
              <span>{item.content}</span>
            </Flex>
          ))}
        </Container>
      </Section>

      <Section id="#contact">
        <Container>
          <TitleBanner
            title="Let's chat"
          />
          <form>
            <Input type="text" label="Name" value={''} name="name" required />
            <Input type="text" label="Email" value={''} name="email" required />
            <Input type="text" label="Telephone" value={''} name="telephone" />
            <TextArea id="" label="Message" name="message" />
            <Button fullWidth type="submit">Submit</Button>
          </form>
        </Container>
      </Section>



    </>
  )
}

export default Home