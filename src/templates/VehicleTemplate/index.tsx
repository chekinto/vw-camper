import React, { FunctionComponent, useState, useEffect } from 'react'
import { Container } from 'components'
import { buses } from 'features'

interface Props {
  pageContext: {
    name: string;
  }
}

interface VehicleProps {
  title: string;
  content: string;
  image: string;
  buttonText: string;
  path: string;
  isReversed?: boolean;
}

const VehicleTemplate: FunctionComponent<Props> = ({ pageContext }) => {
  const [vehicle, setVehicle] = useState<VehicleProps>({
    title: '',
    content: '',
    image: '',
    buttonText: '',
    path: '',
    isReversed: false
  })

  useEffect(() => {
    const singleCamper = buses.find((camper => {
      return camper.title === pageContext.name
    }))
    setVehicle(singleCamper)
  }, [])

  const { title, content, image, buttonText, path, isReversed } = vehicle;

  return (
    <Container style={{ marginTop: '9.4rem' }}>
      <div className="vehicle--grid">
        <div>
          <h1 className="capitalize">{title}</h1>
          <p>{content}</p>
        </div>
        <img src={image} alt={`${title}`} />
      </div>
    </Container>
  )
}

export default VehicleTemplate
