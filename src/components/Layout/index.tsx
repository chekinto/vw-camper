import React, { FunctionComponent } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

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
