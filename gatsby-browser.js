import React from 'react'
import { GlobalStyles } from './src/styles/global'
import { Layout } from './src/components/constants'

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyles />
      <Layout>{element}</Layout>
    </>
  )
}