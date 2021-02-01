import React, { FunctionComponent } from 'react'
import styled, { css } from 'styled-components';

const StyledButton = styled.button<ButtonProps>`
  border: none;
  border-radius: var(--borderRadius-sm);
  box-sizing: border-box;
  background-color: var(--primary);
  color: var(--white);
  font-weight: var(--fontWeight-bold);
  padding: 1.6rem 2.4rem;
  text-transform: uppercase;
  width: 21.8rem;
  cursor: pointer;

  ${({ secondary }) => secondary && css`
    background-color: var(--secondary);
  `}

  ${({ navBtn }) => navBtn && css`
    font-size: 1.6rem;
    width: auto;
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
  fullWidth
}) => {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      navBtn={navBtn}
      className={className}
      secondary={secondary}
      fullWidth={fullWidth}>
      {children}
    </StyledButton>
  )
}
