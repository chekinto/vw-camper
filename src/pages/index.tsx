import React from "react"
import { Button, Container, Form, HeaderScripts, Divider, Icon, Input, TextArea, Hero, PricingList, ServiceList, Section, TitleBanner, ItemList, BusList } from 'components'
import { buses, services, pricing, whatsIncluded, optionalExtras } from 'features'
import { useGlobalContext } from 'context'
import email from 'assets/icons/email.svg'
import phone from 'assets/icons/phone.svg'
import './index.css'

const Home = () => {
  const { formData, setFormData } = useGlobalContext();

  const handleFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <HeaderScripts pageMeta={{ title: 'Home', description: 'Home page' }} />

      <Hero />

      {/* <Banner>
        <Container className="test">
          <p>Hire a VW Camper van now</p>
          <Button onClick={() => navigate('/#contact')} secondary>Contact us</Button>
        </Container>
      </Banner> */}

      <Section isGrey>
        <Container>
          <TitleBanner title="Meet the buses" />
          <BusList buses={buses} />
        </Container>
      </Section>

      <Section>
        <Container>
          <TitleBanner
            title="Services"
            subtitle="Whether it's for adventurous family holidays, outdoor sports, bird watching trips, festivals or just to get away from it all - VW Camper van is the place to get exactly what you need. For more information click here"
          />
          <ServiceList services={services} />
        </Container>
      </Section>

      <Section isGrey className="our-story">
        <Container>
          <img src="https://via.placeholder.com/150C/O https://placeholder.com/" alt="placeholder image" />
          <TitleBanner title="Our story" />
          <p>
            Family trio Peter Julie and Steven are seriously passionate about VW Campers! We have always been huge lovers of the great outdoors taking every opportunity to rome freely across the land, from rolling hills to open fields, private hideaways to sea views, from weddings and proms to festivals, films and videos, Our classic VW campers are perfect for any special occasion! Steven has been driving and maintaining campers for 35 years, you can rest assured that you will be traveling in style.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <TitleBanner title="Pricing" subtitle="All prices per day are subject to VAT" />
          <PricingList items={pricing} />
          <ItemList label="Whats included?" items={whatsIncluded} />
          <Divider />
          <ItemList label="Optional extras" items={optionalExtras} />
        </Container>
      </Section>

      <Section style={{ background: 'var(--primary)' }}>
        <Container>
          <h3 style={{ textAlign: 'center' }}>Contact info</h3>
          <div className="chat-grid">
            <div>
              <div className="address">
                <p>12 random Street,</p>
                <p>Islington</p>
                <p>North London,</p>
                <p>N16 YUB</p>
              </div>

              <div className="info-column">
                <Icon src={phone} alt="" /> <a href="tel:01224392545">01224392545</a>
              </div>
              <div className="info-column">
                <Icon src={email} alt="" /> <a href="mailto:hire@vwcamper.com">01224392545</a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section isGrey>
        <Container>
          <TitleBanner
            title="Let's chat"
            subtitle="If your interested in booking one of our beautiful campers or have any questions about what we do then please do get in touch."
          />

          <Form action="/" onSubmit={handleFormSubmit} name="contact" data-netlify="true" method="POST">
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
          </Form>
        </Container>
      </Section>
    </>
  )
}

export default Home