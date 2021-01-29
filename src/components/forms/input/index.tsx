import React, { FunctionComponent } from 'react'
import styled from 'styled-components';
import { Label } from 'components/forms'

const StyledInput = styled.input`
  height: 4.6rem;
  display: block;
  width: 100%;
  border-radius: 0.4rem;
  border: 1px solid var(--grey2);
  outline: none;
  padding: 0 1.6rem; 
  appearance: none;
  font-family: var(--poppins);
  font-size: 1.6rem;

  &:focus {
    border-color:var(--primary);
  } 
`;

interface InputProps {
  type: 'text' | 'password' | 'search' | 'email';
  value: string | number;
  id?: string;
  label?: string;
  name?: string;
  required?: boolean;
}

export const Input: FunctionComponent<InputProps> = ({
  type = 'text',
  id,
  value,
  label,
  name,
  required }) => {
  return (
    <>
      {label ? (
        <Label htmlFor={id} label={label}>
          <StyledInput
            type={type}
            id={id}
            name={name}
            value={value}
            required={required}
          />
        </Label>
      ) : (
          <StyledInput
            type={type}
            id={id}
            name={name}
            value={value}
            required={required}
          />
        )}
    </>
  )
}
