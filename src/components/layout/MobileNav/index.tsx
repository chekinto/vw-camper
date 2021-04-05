import React, { FunctionComponent } from 'react'
import styled, { css, keyframes } from 'styled-components';
import { AnchorLink } from "gatsby-plugin-anchor-links";

const slideIn = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const StyledMobileNav = styled.nav<{ isOpen: boolean }>`
  width: 80%;
  height: 100vh;
  background-color: red;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  padding: 7.2rem 3.2rem 0;
  transform: translateX(100%);

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

  .anchor__link {
    list-style: none;
  }

  ${({ isOpen }) => isOpen && css`
    animation: 0.2s ${slideIn} ease-in forwards;
  `}
`;

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (boolean) => void;
}

export const MobileNav: FunctionComponent<MobileNavProps> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <StyledMobileNav isOpen={isOpen}>
        <ul>
          <li>
            <AnchorLink className="anchor__link" to="/#services" title="Services" onAnchorLinkClick={() => setIsOpen(false)}>
              Services
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor__link" to="/#pricing" title="Pricing" onAnchorLinkClick={() => setIsOpen(false)}>
              Pricing
            </AnchorLink>
          </li>
        </ul>
      </StyledMobileNav>
    </>
  )
}
