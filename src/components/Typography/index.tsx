import React, { FunctionComponent } from 'react'
import { Heading, Text } from '@chakra-ui/react'

interface TextProps {
  [key: string]: string | number | TextProps
}

export const BigHeading: FunctionComponent<TextProps> = ({ children, ...props }) => (
  <Heading
    as="h1"
    textAlign={{ base: 'center', md: 'left' }}
    fontWeight='black'
    fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
    lineHeight="110%"
    letterSpacing="tight"
    mb={4}
    {...props}>
    {children}
  </Heading>
)

export const H1: FunctionComponent<TextProps> = ({ children, ...props }) => (
  <Text
    as="h1"
    fontSize={{ base: '', md: '' }}
    {...props}>
    {children}
  </Text>
)

export const H2: FunctionComponent<TextProps> = ({ children, ...props }) => (
  <Heading
    as="h2"
    fontSize={{ base: 'xl', sm: '2xl', md: "4xl" }}
    fontWeight="black"
    textAlign={{ base: 'center', md: 'left' }}
    {...props}>
    {children}
  </Heading>
)

export const H3: FunctionComponent<TextProps> = ({ children, ...props }) => (
  <Heading
    as="h3"
    fontSize={{ base: 'l', md: 'xl' }}
    fontWeight="black"
    textAlign={{ base: 'center', md: 'left' }}
    {...props}>
    {children}
  </Heading>
)

export const P: FunctionComponent<TextProps> = ({ children, ...props }) => (
  <Text
    as="p"
    fontSize={{ base: '', md: '' }}
    lineHeight="1.5"
    {...props}>
    {children}
  </Text>
)