import React from "react"
import { navigate } from 'gatsby'
import { Banner, Button, Divider, Icon, PricingCard, ServiceCard, Section, TitleBanner } from 'components/common'
import { Container, Flex, HeaderScripts } from 'components/constants'
import { Input, TextArea } from 'components/forms'
import { Hero } from 'components/sections/hero'
import { MeetTheBuses } from 'components/sections/meet-the-buses'
import { services, pricing, whatsIncluded, optionalExtras } from 'features'
import { useGlobalContext } from 'context'

const Home = () => {
  const { formData, setFormData } = useGlobalContext();
  const handleFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value
    })

    console.log('formData submitted:>> ', formData);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('formData :>> ', formData);
  }

  return (
    <>
      <HeaderScripts
        pageMeta={{ title: 'Home', description: 'Home page' }}
      />
      <Hero />

      <Banner>
        <p>Hire a VW Camper van now</p>
        <Button onClick={() => navigate('/#contact')} secondary>Contact us</Button>
      </Banner>

      <MeetTheBuses />

      <Section id="#services">
        <Container>
          <TitleBanner
            title="Services"
            subtitle="Whether it's for adventurous family holidays, outdoor sports, bird watching trips, festivals or just to get away from it all - VW Camper van is the place to get exactly what you need. For more information click here"
          />

          <Flex direction="column" gap={1.6}>
            {services.map(service => (
              <ServiceCard
                title={service.title}
                bgImage={service.bgImage}
              />
            ))}
          </Flex>
        </Container>
      </Section>

      <Section id="#our-story" isGrey>
        <Container>
          <img src="https://via.placeholder.com/150C/O https://placeholder.com/" alt="placeholder image" />
          <TitleBanner title="Our story" />
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
          <Flex direction="column">
            {pricing.map((price, index) => (
              <PricingCard key={index} {...price} />
            ))}
          </Flex>

          <h3>Whats included?</h3>
          {whatsIncluded.map((item, index) => (
            <Flex key={index} gap={0.8}>
              <Icon src={item.icon} fill="red" />
              <span>{item.content}</span>
            </Flex>
          ))}

          <Divider />

          <h3>Optional extras</h3>
          {optionalExtras.map((item, index) => (
            <Flex key={index} gap={0.8}>
              <Icon src={item.icon} fill="red" />
              <span>{item.content}</span>
            </Flex>
          ))}
        </Container>
      </Section>

      <Section id="#contact" isGrey>
        <Container>
          <TitleBanner
            title="Let's chat"
            subtitle="Interesting in booking one of our beautiful campers or have any questions about what we do then please do get in touch."
          />
          <form onSubmit={handleFormSubmit} name="contact" data-netlify="true" method="POST">
            <input type="hidden" name="form-name" value="contact" />
            <Input
              type="text"
              label="Name*"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              required
            />
            <Input
              type="text"
              label="Email*"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              required
            />
            <Input
              type="text"
              label="Telephone"
              name="telephone"
              value={formData.telephone}
              onChange={handleFormChange}
            />
            <TextArea
              label="Message*"
              name="message"
              value={formData.message}
              onChange={handleFormChange}
            />
            <Button fullWidth type="submit">Submit</Button>
          </form>
        </Container>
      </Section>



    </>
  )
}

export default Home