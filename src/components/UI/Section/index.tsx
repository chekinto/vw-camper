import React, { FunctionComponent } from 'react'
import { Box, Container, Heading, Text } from '@chakra-ui/react'

interface SectionProps {
  title: string,
  subtitle?: string;
  bg?: string;
  id?: string;
}

export const Section: FunctionComponent<SectionProps> = ({ title, subtitle, children, bg = "white" }) => {
  return (
    <Box bg={bg} py={8}>
      <Container maxW={{ base: '7xl', md: '3xl' }}>
        <Heading as="h2" size="lg" textAlign="center" mb={2}>
          {title}
        </Heading>
        {subtitle && <Text textAlign="center" mb={2}>{subtitle}</Text>}
      </Container>

      {children}
    </Box>
  )
}
