import React, { FunctionComponent } from 'react'
import styled from 'styled-components';
import { Label } from 'components'

const StyledInput = styled.input`
  height: 4.6rem;
  display: block;
  width: 100%;
  border-radius: 0.4rem;
  border: 1px solid var(--grey3);
  outline: none;
  padding: 0 1.6rem; 
  appearance: none;
  font-family: var(--wotfard);
  font-size: 1.6rem;

  &:focus {
    border-color:var(--primary);
  } 
`;

interface InputProps {
  type: 'text' | 'password' | 'search' | 'email' | 'number';
  value?: string | number;
  id?: string;
  label?: string;
  name?: string;
  required?: boolean;
  placeholder?: string;
  onChange?: (e) => void;
  onBlur?: (e) => void;
  onFocus?: (e) => void;
  ref: unknown;
}

export const Input: FunctionComponent<InputProps> = ({
  type = 'text',
  id,
  value,
  label,
  name,
  placeholder,
  required = false,
  ref,
  onChange,
  onBlur,
  onFocus
}) => {
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
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            ref={ref}
          />
        </Label>
      ) : (
        <StyledInput
          type={type}
          id={id}
          name={name}
          value={value}
          required={required}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          ref={ref}
        />
      )}
    </>
  )
}
