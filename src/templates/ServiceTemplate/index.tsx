import React, { FunctionComponent, useEffect, useState } from 'react'
import { Banner, Wrapper } from 'components'

interface Props {
  pageContext: {
    id: string;
    slug: string;
  }
}

// interface ServiceProps {
//   title: string;
//   bgImage: string;
//   slug: string;
// }

const ServiceTemplate: FunctionComponent<Props> = ({ pageContext }) => {
  // const [service, setService] = useState<ServiceProps>({ title: '', bgImage: '', slug: '' })

  // useEffect(() => {
  //   const singleService = services.find((service => {
  //     return service.slug === pageContext.slug
  //   }))
  //   setService(singleService)
  // }, [])

  return (
    <>
      <Banner title="Test" bgImage="https://images.pexels.com/photos/210010/pexels-photo-210010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
      <Wrapper h="100vh" pt={56} w="100%">
        {/* <h1 style={{ marginTop: '9.6rem' }}>{service.title}</h1>
      <img src={service.bgImage} alt={`${service.title} image`} /> */}
      </Wrapper>
    </>
  )
}

export default ServiceTemplate
