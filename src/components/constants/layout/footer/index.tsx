import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';
import { Container } from 'components/constants'
import {
  navigationLinks,
  termsAndConditions,
  findUs
} from 'routes'

const StyledFooter = styled.footer`
  background-color: var(--secondary);
  padding: 9.6rem 0 4.8rem;

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
`

const SocialIcons = styled.div`
  display: flex;
  gap: 2.4rem;

  .footer__social-icons {
    width: 2.4rem;
    height: 2.4rem;
  }
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
              <li>
                <Link to={link.path}>{link.title}</Link>
              </li>
            ))}
          </NavList>

          <NavList>
            <h5>Find us</h5>
            {findUs.map(link => (
              <SocialIcons>
                <a href={link.path}>
                  <img src={link.icon} className="footer__social-icons" />
                </a>
              </SocialIcons>
            ))}
          </NavList>
        </FooterInner>
      </Container>
    </StyledFooter>
  )
}
