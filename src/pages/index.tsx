import React from "react"
import { Box } from '@chakra-ui/react'
import {
  ContactForm,
  HeaderScripts,
  Hero,
  MeetTheBuses,
  OurStory,
  Pricing,
  Services
} from 'components'
import { WhatsIncluded } from "components/Sections/WhatsIncluded"

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
        description: 'VW Camper hire in London for rental',
        keywords: ['vw camper', 'camper hire']
      }} />

      <Hero />
      <MeetTheBuses />
      <Services />
      <WhatsIncluded />
      <OurStory />
      <Pricing />
      <Box>
        <h1>Lets chat</h1>
      </Box>
    </>
  )
}

export default Index