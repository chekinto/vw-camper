import React, { useState } from 'react'
import { Link } from 'gatsby'

import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Button, Container } from 'components'
import { Burger } from '../Burger'
import { MobileNav } from '../MobileNav'
import { useGlobalContext } from 'context'

import {
  StyledHeader,
  InnerHeader,
  Nav,
  DropdownContainer,
  DropdownItem
} from './styles'

export const Header = () => {
  const { observeNode } = useGlobalContext()
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdown = () => {
    setIsDropdownOpen(prev => !prev)
  }

  return (
    <>
      <StyledHeader>
        <Container>
          <InnerHeader>
            <Link className="nav__logo" to="/">VW CAMPER <span>HIRE</span></Link>
            <Nav>
              <ul>
                <li>
                  <AnchorLink className="nav__link" to="/#about" title="About">
                    About
                  </AnchorLink>
                </li>
                <li>
                  <AnchorLink
                    className={`${observeNode.services ? 'nav__link titleActive' : 'nav__link'}`} to="/#services" title="Services">
                    Services
                  </AnchorLink>
                </li>
                <li>
                  <button className="nav__link nav__dropdown" onClick={handleDropdown}>
                    Meet the buses
                  </button>
                  {isDropdownOpen && (
                    <DropdownContainer>
                      <DropdownItem>
                        <Link to="/meet-the-buses/ada">Ada</Link>
                      </DropdownItem>

                      <DropdownItem>
                        <Link to="/meet-the-buses/hudson">Hudson</Link>
                      </DropdownItem>
                    </DropdownContainer>
                  )}
                </li>
                <li>
                  <AnchorLink className={`${observeNode.pricing ? 'nav__link titleActive' : 'nav__link'}`} to="/#pricing" title="Pricing">
                    Pricing
                  </AnchorLink>
                </li>
              </ul>
            </Nav>

            <AnchorLink to="/#contact" title="Contact">
              <Button className="nav__btn" navBtn>Contact us</Button>
            </AnchorLink>

            <Burger onClick={() => setIsOpen(prevState => !prevState)} isOpen={isOpen} />
          </InnerHeader>
        </Container>
        <MobileNav setIsOpen={setIsOpen} isOpen={isOpen} />
      </StyledHeader>
    </>
  )
}