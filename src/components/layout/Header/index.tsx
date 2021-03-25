import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Button, Container } from 'components'
import { Burger } from '../Burger'
import { MobileNav } from '../MobileNav'
import { variables } from 'styles/variables'

import chevronDown from 'assets/icons/chevron-down.svg'
import chevronUp from 'assets/icons/chevron-up.svg'

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--primary);
  z-index: 100;
`;

const InnerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 0;
  .nav__logo {
    color: var(--black);
    font-size: 2rem;
    font-family: var(--rubik);
    font-weight: var(--fontWeight-bold);
    span {
      color: var(--white);
    }
  }
  .nav__btn {
    display: none;
  }

  @media(min-width: ${variables.breakpoints.desktop}) {
    .nav__btn {
      display: initial;
    }
  }
`;

const Nav = styled.nav<{ isDropdownOpen?: boolean }>`
  display: none;
  ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 3.2rem;
  }

  li {
    list-style: none;
    position: relative;
  }

  .nav__link {
    font-size: 1.6rem;
    font-weight: var(--fontWeight-semiBold);
  }

  .nav__dropdown {
    position: relative;
    border: none;
    background-color: transparent;

    &::focus-within {
      background-color: red;
    }

    &::after {
      content: url(${chevronDown});
      position: absolute;
      transform: scale(0.8);
      top: -1px;
    }
  }

  @media(min-width: ${variables.breakpoints.desktop}) {
    display: flex;
  }
`;

const DropdownContainer = styled.div`
  position: absolute;
  top: 5.4rem;
  width: 120%;
  padding: 2.4rem;
  padding-left: 1.6rem;
  border-radius: 0 0 2.4rem 2.4rem;
`;

const DropdownItem = styled.div<{ isFocused?: boolean }>`
  font-size: 1.6rem;
  color: var(--black);
  font-weight: bold;
  box-shadow: 0 30px 60px rgb(0 0 0 / 2%), 0 0 20px rgb(0 0 0 / 4%);
  
    &:first-child {
      margin-bottom: 1.6rem;
    }
  }
`;

export const Header = () => {
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
                  <AnchorLink className="nav__link" to="/#services" title="Services">
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
                  <AnchorLink className="nav__link" to="/#pricing" title="Pricing">
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
        <MobileNav isOpen={isOpen} />
      </StyledHeader>
    </>
  )
}