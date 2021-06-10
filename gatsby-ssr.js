import React from 'react'
import { Layout } from 'components/Layout'
import { AppContextProvider } from 'src/context'

export const wrapPageElement = ({ element, props }) => {
  return (
    <>
      <Layout {...props}>
        {element}
      </Layout>
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