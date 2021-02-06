import React, { FunctionComponent } from 'react'
import styled, { css } from 'styled-components';
import { variables } from 'styles/variables'

const StyledBurger = styled.button<{ isOpen: boolean }>`
  display: block;
  background-color: transparent;
  border: none;
  width: 3.2rem;
  height: 2.4rem;
  z-index: 1000;
  cursor: pointer;
  outline: none;
  z-index: 1000;
  position: relative;
  div {
    position: relative;
    background-color: var(--secondary);
    height: 0.3rem;
    transition: 0.2s ease-in;
    &::before, 
    &::after {
      content: '';
      position: absolute;
      display: block;
      background-color: var(--secondary);
      height: 0.3rem;
      width: 100%;
      transition: 0.3s ease-in;
    }
    &::before {
      top: -0.8rem;
    }
    &::after {
      top: 0.8rem;
    }
  }

  ${({ isOpen }) => isOpen && css`
    div {
      background-color: transparent;

      &::before {
        color: var(--black);
        transform: rotate(45deg); 
        top: 0;
      }
      &::after {
        color: var(--black);
        transform: rotate(-45deg);  
        top: 0;  
      }
    }
  `}

  @media(min-width: ${variables.breakpoints.desktop}) {
    display: none;
  }
`;

interface BurgerProps {
  isOpen: boolean;
  onClick: () => void;
}

export const Burger: FunctionComponent<BurgerProps> = ({ isOpen, onClick }) => {
  return (
    <StyledBurger onClick={onClick} isOpen={isOpen}>
      <div />
    </StyledBurger>
  )
}

