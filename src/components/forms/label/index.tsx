import React, { FunctionComponent } from 'react'
import styled from 'styled-components';

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.4rem;
  span {
    font-family: var(--poppins);
    font-size: 1.6rem;
    font-weight: var(--semiBold);
    margin-bottom: 1.6rem;
  }
`

interface LabelProps {
  children?: React.ReactNode;
  htmlFor: string;
  label: string;
}

export const Label: FunctionComponent<LabelProps> = ({ children, htmlFor, label }) => {
  return (
    <StyledLabel htmlFor={htmlFor}>
      <span>{label}:</span>
      {children}
    </StyledLabel>
  )
}
