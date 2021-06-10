import React from 'react'
// import { GlobalStyles } from 'styles/global'
import { Layout } from 'components/Layout'
import { ChakraProvider } from "@chakra-ui/react"
import { AppContextProvider } from 'context'

export const wrapPageElement = ({ element, props }) => {
  return (
    <>
      {/* <GlobalStyles /> */}
      <Layout {...props}>{element}</Layout>
    </>
  )
}

export const wrapRootElement = ({ element }) => {
  return (
    <ChakraProvider>
      <AppContextProvider>
        {element}
      </AppContextProvider>
    </ChakraProvider>
  )
}