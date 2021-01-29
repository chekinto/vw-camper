import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';
import { Container } from 'components/constants'
import { Button } from 'components/common'
import { Burger } from './burger'
import { variables } from 'styles/variables'
import { navigationLinks } from 'routes'

const StyledHeader = styled.header``;

const InnerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.6rem;
  .nav__logo {
    color: var(--black);
    font-size: 1.8rem;
    font-family: var(--rubik);
    font-weight: var(--bold);
    span {
      color: var(--primary);
    }
  }

  .nav__btn {
    display: none;
  }

  @media(min-width: ${variables.breakpoints.tablet}) {
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

  .nav__link {
    font-size: 1.6rem;
    font-weight: var(--semiBold);
  }

  @media(min-width: ${variables.breakpoints.tablet}) {
    display: flex;
  }
`;


export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <InnerHeader>
          <Link className="nav__logo" to="/">VW CAMPER <span>HIRE</span></Link>
          <Nav>
            <ul>
              {navigationLinks.map(link => (
                <li>
                  <Link className="nav__link" to={link.path}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Nav>
          <Button className="nav__btn" navBtn>Contact us</Button>
          <Burger />
        </InnerHeader>
      </Container>
    </StyledHeader>
  )
}
