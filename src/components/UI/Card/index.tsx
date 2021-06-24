import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import { Box, Text } from '@chakra-ui/react'

interface Props {
  title: string;
  slug: string;
}

export const Card: FunctionComponent<Props> = ({ title, slug }) => {
  return (
    <Link to={slug}>
      <Box
        p={6}
        maxW="1fr"
        w="100%"
        bg={'white'}
        boxShadow={'lg'}
        rounded={'md'}
        p={12}
        h="100%">
        <Text textAlign="center">{title}</Text>
      </Box>
    </Link>
  )
}