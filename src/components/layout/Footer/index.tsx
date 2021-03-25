import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Container, Icon } from 'components'
import {
  navigationLinks,
  termsAndConditions,
  findUs
} from 'routes'
import email from 'assets/icons/email.svg'
import phone from 'assets/icons/phone.svg'
import { variables } from 'styles/variables'

const StyledFooter = styled.footer`
  background-color: var(--secondary);
  padding: 4.8rem 0;

  .footer__logo {
    display: block;
    color: var(--white);
    font-family: var(--rubik);
    font-size: 2rem;
    font-weight: var(--fontWeight-bold);
    margin-bottom: 2.4rem;
  }
  
  .copyright {
    color: var(--white);
    font-size: 1.4rem;
    opacity: 0.75;
  }
`;

const FooterInner = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.4rem;

  @media(min-width: ${variables.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }

  @media(min-width: ${variables.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr)
  }
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
    display: flex;
    align-items: center;
    gap: 1.2rem;
    opacity: 0.75;
  }
  img {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 2.4rem;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Link className="footer__logo" to="/">VW CAMPER</Link>
        <FooterInner>
          <NavList>
            <h5>Company</h5>
            {navigationLinks.map(link => (
              <li key={link.title}>
                <Link to={link.path}>{link.title}</Link>
              </li>
            ))}
          </NavList>

          <NavList>
            <h5>Legal</h5>
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
                <a key={link.title} href={link.path}>
                  <Icon src={link.icon} />
                </a>
              ))}
            </SocialIcons>
          </NavList>

        </FooterInner>
        <hr style={{ margin: '3.2rem 0' }} />
        <p className="copyright">&copy; VW Camper {new Date().getFullYear()}. All rights reserved</p>
      </Container>
    </StyledFooter>
  )
}
