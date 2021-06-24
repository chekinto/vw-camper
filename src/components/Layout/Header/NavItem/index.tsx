import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import { Box, Text } from '@chakra-ui/react'

interface Props {
  href: string;
  label: string;
}

export const NavItem: FunctionComponent<Props> = ({ href, label }) => (
  <Box>
    <Text
      fontWeight="bold"
      transition={'all .3s ease'}
      _hover={{
        textDecoration: 'none',
        color: "black",
      }}>
      <Link to={href}> {label}</Link>
    </Text>
  </Box>
)
