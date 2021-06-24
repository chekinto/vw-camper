import React, { FunctionComponent } from 'react'
import { Center } from '@chakra-ui/react'
import { H1 } from 'components'

interface Props {
  title: string;
  bgImage: string;
}

export const Banner: FunctionComponent<Props> = ({ title, bgImage }) => {
  return (
    <Center backgroundImage={bgImage} objectFit="cover" h="45vh">
      <H1>{title}</H1>
    </Center>
  )
}
