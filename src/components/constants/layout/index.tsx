import React from 'react'
import { FunctionComponent } from 'react'
import { Header } from '../header'
import { Footer } from '../footer'

interface ILayout {
  children?: React.ReactNode;
}

export const Layout: FunctionComponent = ({ children }: ILayout) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
