import React, { FunctionComponent } from 'react'
import { FormControl, FormLabel, Textarea } from '@chakra-ui/react'

interface TextareaProps {
  id: string;
  label?: string;
  placeholder?: string;
  isRequired?: boolean;
}

export const CustomTextArea: FunctionComponent<TextareaProps> = ({ id, label, placeholder, isRequired }) => {
  return (
    <FormControl id={id} isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      <Textarea placeholder={placeholder} bg="white" />
    </FormControl>
  )
}
