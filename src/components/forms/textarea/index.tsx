import React, { FunctionComponent } from 'react'
import styled from 'styled-components';
import { Label } from 'components/forms'

const StyledTextArea = styled.textarea`
  display: block;
  width: 100%;
  border-radius: 0.4rem;
  border: 1px solid var(--grey2);
  outline: none;
  padding: 1.6rem; 
  appearance: none;
  font-family: var(--poppins);
  font-size: 1.6rem;

  &:focus {
    border-color:var(--primary);
  } 
`;

interface TextAreaProps {
  id: string;
  label: string;
  name: string;
}

export const TextArea: FunctionComponent<TextAreaProps> = ({ id, label, name }) => {
  return (
    <Label htmlFor={id} label={label}>
      <StyledTextArea id={id} name={name} />
    </Label>
  )
}
