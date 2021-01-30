import React from 'react'
import { GlobalStyles } from './src/styles/global'
import { Layout } from './src/components/constants'

export const wrapPageElement = ({ element, props }) => {
  console.log('props :>> ', props);
  return (
    <>
      <GlobalStyles />
      <Layout {...props}>{element}</Layout>
    </>
  )
}