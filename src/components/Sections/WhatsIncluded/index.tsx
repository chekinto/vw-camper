import React from 'react'
import { Text, VStack, SimpleGrid } from '@chakra-ui/react'
import { Wrapper, H1 } from 'components'

const whatsIncluded = [
  {
    name: 'Insurance',
    content: 'Fully Comprehensive Insurance'
  },
  {
    name: 'Roadside assistance',
    content: 'Full UK & European cover'
  },
  {
    name: 'Comprehensive handover',
    content: 'Our campers include all the essentials for your adventure'
  },
  {
    name: 'Full tank of fuel',
    content: 'On collection your camper will be full of fuel, ready to go'
  },
  {
    name: 'Telephone support',
    content: 'We\'re here if you need us'
  },
  {
    name: 'Telephone support',
    content: 'On collection your camper will be full of fuel, ready to go'
  },
]

export const WhatsIncluded = () => {
  return (
    <Wrapper>
      <H1>Don't worry we got you covered.</H1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos deleniti, dolores laudantium non esse adipisci labore quibusdam possimus commodi quo animi, tempora, iste quod? Libero voluptates velit facere nostrum sint!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos deleniti, dolores laudantium non esse adipisci labore quibusdam possimus commodi quo animi, tempora, iste quod? Libero voluptates velit facere nostrum sint!</p>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={8}>
        {whatsIncluded.map(item => (
          <VStack boxShadow="md">
            <h3>{item.name}</h3>
            <Text textAlign="center">{item.content}</Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Wrapper>
  )
}
