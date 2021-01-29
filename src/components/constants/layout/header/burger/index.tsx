import React from 'react'
import styled from 'styled-components';
import { variables } from 'styles/variables'

const StyledBurger = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  width: 3.2rem;
  height: 2.4rem;
  z-index: 1000;
  cursor: pointer;
  div {
    position: relative;
    background-color: var(--secondary);
    height: 0.3rem;
    visibility: visible;
    opacity: 1;
    &::before, 
    &::after {
      content: '';
      position: absolute;
      display: block;
      background-color: var(--secondary);
      height: 0.3rem;
      width: 100%;
    }
    &::before {
      top: -0.8rem;
    }
    &::after {
      top: 0.8rem;
    }
  }

  @media(min-width: ${variables.breakpoints.tablet}) {
    display: none;
  }
`;

export const Burger = () => {
  return (
    <StyledBurger>
      <div />
    </StyledBurger>
  )
}

