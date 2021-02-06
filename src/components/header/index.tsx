import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';
import { Button, Burger, Container, MobileNav } from 'components'
import { variables } from 'styles/variables'
import { navigationLinks } from 'routes'

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  z-index: 10;
  /* box-shadow: 0 30px 60px rgb(0 0 0 / 2%), 0 0 20px rgb(0 0 0 / 4%); */
`;

const InnerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem 0;
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

const Nav = styled.nav`
  display: none;
  ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 3.2rem;
  }
  li {
    list-style: none;
  }
  .nav__link {
    font-size: 1.6rem;
    font-weight: var(--fontWeight-semiBold);
  }
  @media(min-width: ${variables.breakpoints.desktop}) {
    display: flex;
  }
`;


export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <StyledHeader>
        <Container>
          <InnerHeader>
            <Link className="nav__logo" to="/">VW CAMPER <span>HIRE</span></Link>
            <Nav>
              <ul>
                {navigationLinks.map(link => (
                  <li key={link.title}>
                    <Link className="nav__link" to={link.path}>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Nav>
            <Button className="nav__btn" navBtn>Contact us</Button>
            <Burger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
          </InnerHeader>
        </Container>
      </StyledHeader>
      {isOpen ? (<MobileNav />) : null}
    </>
  )
}
