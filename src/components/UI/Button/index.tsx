import React, { FunctionComponent } from 'react'
import styled, { css } from 'styled-components';

const StyledButton = styled.button<ButtonProps>`
  border: none;
  border-radius: var(--borderRadius-sm);
  box-sizing: border-box;
  background-color: var(--primary);
  color: var(--white);
  font-weight: var(--fontWeight-bold);
  font-family: var(--rubik);
  padding: 1.2rem 2.4rem;
  text-transform: uppercase;
  cursor: pointer;

  ${({ secondary }) => secondary && css`
    background-color: var(--secondary);
  `}

  ${({ large }) => large && css`
    width: 24.6rem;
    padding: 1.6rem 3.2rem;
  `}



  ${({ navBtn }) => navBtn && css`
    font-size: 1.4rem;
    /* width: auto; */
  `}

  ${({ fullWidth }) => fullWidth && css`
    display: block;  
    width: 100%;
  `}
`;

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  secondary?: boolean;
  large?: boolean;
  navBtn?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
}

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  type = 'button',
  onClick,
  navBtn,
  className,
  secondary,
  fullWidth,
  large
}) => {
  return (
    <StyledButton
      type={type}
      className={className}
      onClick={onClick}
      navBtn={navBtn}
      secondary={secondary}
      large={large}
      fullWidth={fullWidth}
    >
      {children}
    </StyledButton>
  )
}
