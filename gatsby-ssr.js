import React from 'react'
import { GlobalStyles } from './src/styles/global'
import { Layout } from './src/components/Layout'
import { AppContextProvider } from './src/context'

export const wrapPageElement = ({ element, props }) => {
  return (
    <>
      <GlobalStyles />
      <Layout {...props}>{element}</Layout>
    </>
  )
}

export const wrapRootElement = ({ element }) => {
  return (
    <AppContextProvider>
      {element}
    </AppContextProvider>
  )
}