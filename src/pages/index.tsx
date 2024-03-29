import React, { useRef, useEffect } from "react"
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
import { useGlobalContext } from 'context'
import email from 'assets/icons/email.svg'
import phone from 'assets/icons/phone.svg'
import './index.css'

const Index = () => {
  const { setObserveNode } = useGlobalContext()
  const { register, handleSubmit, errors } = useForm();

  const servicesRef = useRef()
  const pricingRef = useRef()

  const callback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.id === 'services') {
          setObserveNode({
            services: true,
            pricing: false
          })
        }
        if (entry.target.id === 'pricing') {
          setObserveNode({
            services: false,
            pricing: true
          })
        }
      }
    })
  }

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  }

  // This is config for the Netlify form
  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const submitForm = async (data: any) => {
    try {
      await fetch("/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: encode({ "form-name": "contact", ...data })
      })
        .then(() => console.log('message sent'))
    } catch (error) {
      console.error(error, error.message)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options)
    if (servicesRef) {
      observer.observe(servicesRef.current)
    }
    if (pricingRef) {
      observer.observe(pricingRef.current)
    }
  }, [])

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

      <Section id="services" ref={servicesRef}>
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

          <p>
            My family and I love the great outdoors and after working with Kids all day it's great to get away, whether it's to sit under the stars, watch the sun set, listen to the sea roll in or hide away in the woods, it doesn't take much to just get away!
          </p>
        </Container>
      </Section>

      <Section id="pricing" ref={pricingRef}>
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
          <h3 className="text-centered">Contact info</h3>
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
            // action="/"
            method="POST"
            name="contact"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit(submitForm)}
          >
            <input type="hidden" name="form-name" value="contact" />
            <Input
              type="text"
              label="Name*"
              name="name"
              placeholder="Enter you name.."
              ref={register}
            />
            {errors.name && <span>{errors.name.message}</span>}
            <Input
              type="text"
              label="Email*"
              name="email"
              placeholder="example@mail.com"
              ref={register({
                required: true
              })}
            />
            <Input
              type="tel"
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
            />
            <Button fullWidth type="submit">Submit</Button>
          </Form>
          {/* <Popup message={popupActive.message} type="success" isOpen={popupActive.active} /> */}
        </Container>
      </Section>
    </>
  )
}

export default Index