import React from 'react'
import { Layout } from 'components/Layout'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from 'config/chakra'
import { AppContextProvider } from 'context'

export const wrapPageElement = ({ element, props }) => {
  return (
    <>
      <Layout {...props}>{element}</Layout>
    </>
  )
}

export const wrapRootElement = ({ element }) => {
  return (
    <ChakraProvider theme={theme}>
      <AppContextProvider>
        {element}
      </AppContextProvider>
    </ChakraProvider>
  )
}