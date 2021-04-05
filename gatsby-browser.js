import React from 'react'
import { GlobalStyles } from 'styles/global'
import { Layout } from 'components'
import { AppContextProvider } from 'context'

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