// import React, { useRef, useEffect } from "react"
import React from "react"
import { Container, Text } from '@chakra-ui/react'
import {
  Bus, 
  ContactForm, 
  HeaderScripts,
  Hero,
  Section,
} from 'components'

import Ada from 'assets/images/ada.jpeg'
// import { useGlobalContext } from 'context'

const Index = () => {
  // const { setObserveNode } = useGlobalContext()
  // const callback = (entries) => {
  //   entries.forEach(entry => {
  //     if (entry.isIntersecting) {
  //       if (entry.target.id === 'services') {
  //         setObserveNode({
  //           services: true,
  //           pricing: false
  //         })
  //       }
  //       if (entry.target.id === 'pricing') {
  //         setObserveNode({
  //           services: false,
  //           pricing: true
  //         })
  //       }
  //     }
  //   })
  // }

  // const options = {
  //   root: null,
  //   rootMargin: '0px',
  //   threshold: 1.0
  // }

  // This is config for the Netlify form
  // const encode = (data) => {
  //   return Object.keys(data)
  //     .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
  //     .join("&");
  // }

  // const submitForm = async (data: any) => {
  //   try {
  //     await fetch("/", {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded'
  //       },
  //       body: encode({ "form-name": "contact", ...data })
  //     })
  //       .then(() => console.log('message sent'))
  //   } catch (error) {
  //     console.error(error, error.message)
  //   }
  // }

  // useEffect(() => {
  //   const observer = new IntersectionObserver(callback, options)
  //   if (servicesRef) {
  //     observer.observe(servicesRef.current)
  //   }
  //   if (pricingRef) {
  //     observer.observe(pricingRef.current)
  //   }
  // }, [])

  return (
    <>
      <HeaderScripts pageMeta={{
        title: 'Home',
        description: 'VW Camper hire in London for rental '
      }} />

      <Hero />

      <Section title="Meet the buses" bg="gray.50">
        <Bus
          name="Ada"
          description="Ada’s classic yellow style lights up any surrounding, standing still or rolling heads go up so get used to waving! Ada joint us in 2019 and underwent a total restoration. Now 45 Years old she offer you the chance to take a break, go and party go site seeing or go and hide for a few days! Ada has been delivered for hire to home addresses for drive-less holidays! She is delivered and parked in the desired space then used as a holiday home. Then collected."
          buttonText="VIEW FEATURES & SPECS"
          to="meet-the-buses/ada"
          src={Ada}
        />
      </Section>

      <Section 
        id="#services" 
        title="Services" 
        subtitle="Whether it's for adventurous family holidays, outdoor sports, bird watching trips, festivals or just to get away from it all - VW Camper van is the place to get exactly what you need. For more information click here">
        {/* <Services /> */}
      </Section>

      <Section title="Our Story" bg="gray.50">
        <Container>
          <Text>
            Family trio Peter Julie and Steven are seriously passionate about VW Campers! We have always been huge lovers of the great outdoors taking every opportunity to rome freely across the land, from rolling hills to open fields, private hideaways to sea views, from weddings and proms to festivals, films and videos, Our classic VW campers are perfect for any special occasion! Steven has been driving and maintaining campers for 35 years, you can rest assured that you will be traveling in style.
  
            My family and I love the great outdoors and after working with Kids all day it's great to get away, whether it's to sit under the stars, watch the sun set, listen to the sea roll in or hide away in the woods, it doesn't take much to just get away!
          </Text>
        </Container>
      </Section>

      <Section 
        id="#pricing" 
        title="Pricing" 
        subtitle="All prices per day are subject to VAT">
        <Container maxW={{ base: '7xl', md: '3xl' }}>
        </Container>
      </Section>

      <ContactForm/>
    </>
  )
}

export default Index