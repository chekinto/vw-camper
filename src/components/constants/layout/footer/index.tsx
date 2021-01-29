import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Icon } from 'components/common'
import { Container } from 'components/constants'
import {
  navigationLinks,
  termsAndConditions,
  findUs
} from 'routes'

const StyledFooter = styled.footer`
  background-color: var(--secondary);
  padding: 4.8rem 0;

  .footer__logo {
    color: var(--white);
    font-family: var(--rubik);
    font-size: 2rem;
    font-weight: var(--bold);
  }
`;

const FooterInner = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3.2rem;
`;

const NavList = styled.ul`
  color: var(--white);
  font-size: 1.6rem;
  h5 {
    font-size: 1.6rem;
    margin-bottom: 1.6rem;
  }

  li {
    margin-bottom: 1.6rem;
  }
`

const SocialIcons = styled.div`
  display: flex;
  gap: 2.4rem;
`

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterInner>
          <Link className="footer__logo" to="/">VW CAMPER</Link>
          <NavList>
            <h5>Pages</h5>
            {navigationLinks.map(link => (
              <li>
                <Link to={link.path}>{link.title}</Link>
              </li>
            ))}
          </NavList>

          <NavList>
            <h5>Terms & conditions</h5>
            {termsAndConditions.map(link => (
              <li key={link.title}>
                <Link to={link.path}>{link.title}</Link>
              </li>
            ))}
          </NavList>

          <NavList>
            <h5>Find us</h5>
            <SocialIcons>
              {findUs.map(link => (
                <a href={link.path}>
                  <Icon src={link.icon} size={3.4} />
                </a>
              ))}
            </SocialIcons>
          </NavList>
        </FooterInner>
      </Container>
    </StyledFooter>
  )
}
