import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, Button, Center, Flex, SimpleGrid, Spacer, Text, VStack, Wrap, WrapItem } from '@chakra-ui/react'
import { Wrapper, H2, P, ServiceCard } from 'components'

import AddCommentRoundedIcon from '@material-ui/icons/AddCommentRounded';

export const Services = () => {
  const { graphcms } = useStaticQuery(graphql`
    query SERVICES_QUERY {
      graphcms {
        section (where:{id:"ckpyhxfvkr9860c539l1732vx"}) {
          title
          subtitle
        }
      }

      graphcms {
        services {
          slug
          title
        }
      }
    }
  `)

  return (
    <Wrapper pt={14} pb={14} id="services">
      <H2 mb={4} textAlign={{ base: 'center', md: 'center' }}>{graphcms.section.title}</H2>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
        {graphcms.services.map(service => (
          <ServiceCard {...service} />
        ))}
      </SimpleGrid>
    </Wrapper>
  )
}
