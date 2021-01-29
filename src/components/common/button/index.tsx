import React, { FunctionComponent } from 'react'
import styled, { css } from 'styled-components';


const StyledButton = styled.button<ButtonProps>`
  border: none;
  border-radius: var(--borderRadius-sm);
  box-sizing: inherit;
  background-color: var(--primary);
  color: var(--white);
  font-size: 1.6rem;
  padding: 0.8em 1.2em;
  text-transform: uppercase;
  width: 21.8rem;

  ${({ secondary }) => secondary && css`
    background-color: var(--secondary);
  `}

  ${({ navBtn }) => navBtn && css`
    font-size: 1.6rem;
    width: auto;
  `}
`;

interface ButtonProps {
  children: React.ReactNode;
  secondary?: boolean;
  type?: "button" | "submit" | "reset";
  navBtn?: boolean;
  className?: string;
}

export const Button: FunctionComponent<ButtonProps> = ({ children, type = 'button', navBtn, className, secondary }) => {
  return (
    <StyledButton
      type={type}
      navBtn={navBtn}
      className={className}
      secondary={secondary}>
      {children}
    </StyledButton>
  )
}
