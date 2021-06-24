import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
import { Box, Button, Flex, Image, Stack, Text } from '@chakra-ui/react'
import { BigHeading } from 'components/Typography'
import Placeholder from 'assets/images/ada.jpeg'

export const Hero = () => {
  // const data = useStaticQuery(graphql`

  // `)

  return (
    <Flex
      align="center"
      justify="space-between"
      direction={{ base: 'column-reverse', md: 'row' }}
      maxW="6xl"
      m="auto"
      height={{ base: '80vh', md: '100vh' }}
      pb={{ base: 16, md: 0 }}
      px={8}>
      <Box width={{ base: '100%', md: '50%' }}>
        <Stack spacing={4}>
          <BigHeading>Retro Style, modern comfort</BigHeading>

          <Text
            fontWeight="light"
            fontSize={{ base: 'md', md: 'large' }}
            lineHeight="1.5"
            textAlign={{ base: 'center', md: 'left' }}>
            Whatever the occasion we have you covered. Here at VW Camper we aim to provide first class van hire every time.
          </Text>
        </Stack>
        <Button display="block" mx={{ base: 'auto', md: '0' }} colorScheme="teal" fontWeight="bold" mt={6} px={12} size="lg" >
          SEE CAMPERS
        </Button>
      </Box>
      {/* <Box width="50%">
        <Image src={Placeholder} alt="Camper van" mb={{ base: 8 }} />
      </Box> */}
    </Flex >
  )
}
