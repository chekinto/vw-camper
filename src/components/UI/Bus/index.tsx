import React from 'react'
import { Box, Button, Divider, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { Wrapper } from 'components'

export const Bus = ({ name, description, src, to, buttonText }) => {
  return (
    <Wrapper>
      <Heading textAlign="center">{name}</Heading>
      <Flex>
        {/* <Image objectFit="cover" src={src} w="100%" /> */}
        <Box>
          <Text>{description}</Text>
          <Button colorScheme="teal" display="block" mx="auto">{buttonText}</Button>
        </Box>
      </Flex >
      <Divider />
    </Wrapper>
  )
}
