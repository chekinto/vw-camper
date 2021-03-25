import React, { FunctionComponent, useEffect, useState } from 'react'
import { Container } from 'components'
import { services } from 'features'
import './styles.css'

interface Props {
  pageContext: {
    slug: string;
  }
}

interface ServiceProps {
  title: string;
  bgImage: string;
  slug: string;
}

const ServiceTemplate: FunctionComponent<Props> = ({ pageContext }) => {
  const [service, setService] = useState<ServiceProps>({
    title: '',
    bgImage: '',
    slug: ''
  })

  useEffect(() => {
    const singleService = services.find((service => {
      return service.slug === pageContext.slug
    }))
    setService(singleService)
  }, [])

  return (
    <Container>
      <h1 style={{ marginTop: '9.6rem' }}>{service.title}</h1>
      <img src={service.bgImage} alt={`${service.title} image`} />
    </Container>
  )
}

export default ServiceTemplate
