import React from "react"
import { useForm } from 'react-hook-form'
import {
  Button,
  Container,
  Form,
  HeaderScripts,
  Divider,
  Icon,
  Input,
  TextArea,
  Hero,
  PricingList,
  ServiceList,
  Section,
  TitleBanner,
  ItemsList,
  BusList,
  // Popup
} from 'components'
import { buses, services, pricing, whatsIncluded, optionalExtras } from 'features'
import email from 'assets/icons/email.svg'
import phone from 'assets/icons/phone.svg'
import './index.css'

const Index = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  // const [popupActive, setPopupActive] = useState({ message: '', active: false })
  // This is config for the Netlify form

  console.log(watch("name"))
  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const submitForm = (data: any) => {
    console.log(`data =>>>>>`, data)
    // try {
    //   fetch("/", {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded'
    //     },
    //     body: encode({ "form-name": "contact", ...data })
    //   })
    //     .then(() => console.log('message sent'))
    // } catch (error) {
    //   console.error(error, error.message)
    // }
  }

  return (
    <>
      <HeaderScripts pageMeta={{
        title: 'Home',
        description: 'VW Camper hire in London for rental '
      }} />

      <Hero />

      <Section isGrey>
        <Container>
          <TitleBanner title="Meet the buses" />
          <BusList buses={buses} />
        </Container>
      </Section>

      <Section id="services">
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
          <TitleBanner title="Our story" />
          <p>
            Family trio Peter Julie and Steven are seriously passionate about VW Campers! We have always been huge lovers of the great outdoors taking every opportunity to rome freely across the land, from rolling hills to open fields, private hideaways to sea views, from weddings and proms to festivals, films and videos, Our classic VW campers are perfect for any special occasion! Steven has been driving and maintaining campers for 35 years, you can rest assured that you will be traveling in style.
          </p>
        </Container>
      </Section>

      <Section id="pricing">
        <Container>
          <TitleBanner title="Pricing" subtitle="All prices per day are subject to VAT" />
          <PricingList items={pricing} />
          <ItemsList label="Whats included?" items={whatsIncluded} />
          <Divider />
          <ItemsList label="Optional extras" items={optionalExtras} />
        </Container>
      </Section>

      <Section style={{ background: 'var(--primary)' }}>
        <Container>
          <h3>Contact info</h3>
          <div className="chat-grid">
            <div>
              <div className="address">
                <p>12 random Street,</p>
                <p>Islington</p>
                <p>North London,</p>
                <p>N16 YUB</p>
              </div>

              <div className="info-column">
                <Icon src={phone} alt="" />
                <a href="tel:01224392545">01224392545</a>
              </div>
              <div className="info-column">
                <Icon src={email} alt="" />
                <a href="mailto:hire@vwcamper.com">01224392545</a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section isGrey id="contact">
        <Container>
          <TitleBanner
            title="Let's chat"
            subtitle="If your interested in booking one of our beautiful campers or have any questions about what we do then please do get in touch."
          />

          <Form
            action="/"
            method="POST"
            name="contact"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit(submitForm)}
          >
            <input type="hidden" name="form-name" value="contact" />
            <Input
              type="text"
              // label="Name*"
              name="name"
              placeholder="Enter you name.."
              ref={register}
            />
            {/* {errors.name && <span>{errors.name.message}</span>} */}
            {/* <Input
              type="text"
              label="Email*"
              name="email"
              placeholder="example@mail.com"
              ref={register({
                required: true
              })}
            />
            <Input
              type="number"
              label="Telephone"
              name="telephone"
              ref={register({
                required: true
              })}
            />
            <TextArea
              label="Message*"
              name="message"
              ref={register({
                required: true
              })}
            /> */}
            <Button fullWidth type="submit">Submit</Button>
          </Form>
          {/* <Popup message={popupActive.message} type="success" isOpen={popupActive.active} /> */}
        </Container>
      </Section>
    </>
  )
}

export default Index