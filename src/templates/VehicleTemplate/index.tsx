import React, { FunctionComponent, useState, useEffect } from 'react'
import { Container } from '@chakra-ui/react'

interface PageProps {
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

const VehicleTemplate: FunctionComponent<PageProps> = ({ pageContext }) => {
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
    <Container>
      SINGLE VEHICLE PAGE
    </Container>
  )
}

export default VehicleTemplate
