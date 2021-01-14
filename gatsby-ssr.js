import React from 'react'
import { Layout } from './src/components/constants'
import { GlobalStyles } from './src/styles/global'

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        {element}
      </Layout>
    </>
  )
}