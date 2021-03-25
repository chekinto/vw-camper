import React, { FunctionComponent } from 'react'
import styled from 'styled-components';
import { Label } from 'components'

const StyledTextArea = styled.textarea`
  display: block;
  width: 100%;
  border-radius: 0.4rem;
  border: 1px solid var(--grey3);
  outline: none;
  padding: 1.6rem; 
  appearance: none;
  font-family: var(--wotfard);
  font-size: 1.6rem;
  height: 12.8rem;

  &:focus {
    border-color:var(--primary);
  } 
`;

interface TextAreaProps {
  id?: string;
  label: string;
  name: string;
  value: string;
  onChange: (e) => void;
}

export const TextArea: FunctionComponent<TextAreaProps> = ({ id, label, name }) => {
  return (
    <Label htmlFor={id} label={label}>
      <StyledTextArea id={id} name={name} />
    </Label>
  )
}
