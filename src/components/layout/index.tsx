import React, { FunctionComponent } from 'react'
import { Header } from '../header'
import { Footer } from '../footer'

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
