import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { AspectRatio, Box, Button, Divider, Flex, Image, Spacer } from '@chakra-ui/react'
import { Wrapper, H2, H3, P } from 'components'

import Img from '../../../../static/assets/images/ada.jpeg'

export const MeetTheBuses = () => {
  const { graphcms: { busSections } } = useStaticQuery(graphql`
    query BusQuery {
      graphcms {
        busSections {
          title
          description
          slug
          buttonText
          reverse
          image {
            url
          }
        }
      }
    }
  `)

  return (
    <Wrapper pt={16} pb={56} bg="gray.50">

      <H2 textAlign="center" mb={6}>Meet the buses</H2>

      {busSections.map((bus, index) => (
        <>
          {bus.reverse ? (
            <Flex key={index} direction={{ base: 'column', md: 'row' }} align="center" justify={{ base: 'center', md: 'flex-start' }}>
              <Box w={{ base: '100%', md: '50%' }}>
                <H3>{bus.title}</H3>
                <P>{bus.description}</P>
                <Link to={`/meet-the-buses/${bus.slug}`}>
                  <Button colorScheme="teal" type="button">{bus.buttonText}</Button>
                </Link>
              </Box>

              <Spacer />
              {/* 
              <AspectRatio maxW="400px" ratio={16 / 9}>
                <Img src={""} alt="naruto" objectFit="cover" />
              </AspectRatio> */}
            </Flex>
          ) : (
            <Flex direction={{ base: 'column', md: 'row' }} alignItems="center">
              {/* <AspectRatio maxW={{ base: '100%', md: '50%' }} ratio={4 / 3}>
                <Image src={""} alt="naruto" objectFit="cover" boxSize="100%" />
              </AspectRatio> */}

              <Spacer />

              <Box w={{ base: '100%', md: '50%' }} pl={{ base: 0, md: 6 }}>
                <H3>{bus.title}</H3>
                <P>{bus.description}</P>
                <Link to={`/meet-the-buses/${bus.slug}`}>
                  <Button colorScheme="teal" type="button">{bus.buttonText}</Button>
                </Link>
              </Box>
            </Flex>
          )}
          {index === 2 && (<Divider />)}
        </>
      ))}
    </Wrapper>
  )

}