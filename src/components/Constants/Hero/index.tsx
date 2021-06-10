import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
import { Button, Container, Heading, Stack, Text } from '@chakra-ui/react'

export const Hero = () => {
  // const data = useStaticQuery(graphql`

  // `)

  return (
    <Container h={{ base: '24rem', md: '100vh' }} centerContent>
      <Stack maxW="7xl" spacing={6} pt={{ base: 36, md: 48 }}>
        <Stack spacing={6}>
          <Heading
            as="h1"
            size="6xl"
            textAlign="center"
            fontWeight='black'
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Retro Style, modern comfort
            </Heading>
          <Text fontWeight="light" fontSize="large" lineHeight="1.5" textAlign="center">
            Whatever the occasion we have you covered. Here at VW Camper we aim to provide first class van hire every time.
          </Text>
        </Stack>
        <Button display="block" mx="auto" colorScheme="teal" fontWeight="bold">BOOK NOW</Button>
      </Stack>
    </Container>
  )
}
