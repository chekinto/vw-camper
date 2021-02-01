import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';
import { navigationLinks } from 'routes'

const StyledMobileNav = styled.nav`
  width: 80%;
  height: 100vh;
  background-color: red;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  padding: 7.2rem 3.2rem 0;

  h2 {
    text-align: center;
  }

  ul {
    display: flex;
    flex-direction: column;
    li {
    font-size: 2rem;

    }
  }
  }
`;

export const MobileNav = () => {
  return (
    <StyledMobileNav>
      <h2>VW CAMPER </h2>
      <ul>
        {navigationLinks.map(link => (
          <li>
            <Link to={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </StyledMobileNav>
  )
}
