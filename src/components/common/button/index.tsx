import React, { FunctionComponent } from 'react'
import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  box-sizing: inherit;
  font-size: 1.6rem;
  padding: 0.8rem 1.2rem;
`;

interface ButtonProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
}

export const Button: FunctionComponent<ButtonProps> = ({ children, type = 'button' }) => {
  return (
    <StyledButton type={type}>
      {children}
    </StyledButton>
  )
}
