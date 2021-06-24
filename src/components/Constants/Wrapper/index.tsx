import React, { FunctionComponent } from 'react'
import { Box } from '@chakra-ui/react'

interface Props {
  [key: string]: string | number;
}


export const Wrapper: FunctionComponent<Props> = ({ children, ...props }) => {
  return (
    <Box {...props}>
      <Box maxWidth="6xl" m="auto" px={8}>
        {children}
      </Box>
    </Box>
  )
}
