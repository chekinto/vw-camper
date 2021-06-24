import React, { FunctionComponent } from 'react'
import { FormControl, FormLabel, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'

interface InputProps {
  id: string;
  label?: string;
  type?: string;
  placeholder?: string;
  isRequired?: boolean;
  icon?: JSX.Element;
}

export const CustomInput: FunctionComponent<InputProps> = ({ id, label, type = 'text', isRequired = false, icon, placeholder }) => {
  return (
    <>
      <FormControl id={id} isRequired={isRequired}>
        {label && <FormLabel>{label}</FormLabel>}
        {icon ? (
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={icon}
            />
            <Input type={type} placeholder={placeholder} bg="white" />
          </InputGroup>
        ) : (
          <Input type={type} bg="white" />
        )}
      </FormControl>
    </>
  )
}
