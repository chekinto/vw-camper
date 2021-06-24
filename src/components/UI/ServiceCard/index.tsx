import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import { Box, WrapItem, VStack, Center, Text } from '@chakra-ui/react'

interface Props {
  slug: string;
  title: string;
}

export const ServiceCard: FunctionComponent<Props> = ({ title, slug }) => {
  return (
    <Link to={`services/${slug}`}>
      <Center h="208px" w="100%" boxShadow="lg" rounded="md">
        <Text>{title}</Text>
      </Center>
    </Link>
  )
}
