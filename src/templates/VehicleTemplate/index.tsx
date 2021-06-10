import React, { FunctionComponent, useState, useEffect } from 'react'
import { Container } from 'components'
import { buses } from 'features'
import './styles.css'

interface Props {
  pageContext: {
    slug: string;
  }
}

// interface VehicleProps {
//   title: string;
//   content: string;
//   image: string;
//   buttonText: string;
//   path: string;
//   isReversed?: boolean;
// }

const VehicleTemplate: FunctionComponent<Props> = ({ pageContext }) => {
  console.log('pageContext', pageContext)
  // const [vehicle, setVehicle] = useState<VehicleProps>({
  //   title: '',
  //   content: '',
  //   image: '',
  //   buttonText: '',
  //   path: '',
  //   isReversed: false
  // })

  // useEffect(() => {
  //   const singleCamper = buses.find((camper => {
  //     return camper.title === pageContext.name
  //   }))
  //   setVehicle(singleCamper)
  // }, [])

  // const { title, content, image } = vehicle;

  return (
    <Container style={{ marginTop: '9.4rem' }}>
      <div className="vehicle--grid">
        <div>
          <h1 className="capitalize">TEST</h1>
          <p>AOXPOWX</p>
        </div>
        {/* <img src={image} alt={`${title}`} /> */}
      </div>
    </Container>
  )
}

export default VehicleTemplate
