import React from 'react'
import { Box } from '@chakra-ui/react'

export const Services = () => {
  return (
    <Box
      role={'group'}
      p={6}
      maxW={'330px'}
      w={'full'}
      bg={'white'}
      boxShadow={'2xl'}
      rounded={'lg'}
      pos={'relative'}
      zIndex={1}>
      {/* <Box
        rounded={'lg'}
        mt={-12}
        pos={'relative'}
        height={'230px'}
        _after={{
          transition: 'all .3s ease',
          content: '""',
          w: 'full',
          h: 'full',
          pos: 'absolute',
          top: 5,
          left: 0,
          backgroundImage: `url(${IMAGE})`,
          filter: 'blur(15px)',
          zIndex: -1,
        }}
        _groupHover={{
          _after: {
            filter: 'blur(20px)',
          },
        }}>
        <Image
          rounded={'lg'}
          height={230}
          width={282}
          objectFit={'cover'}
          src={IMAGE}
        />
      </Box>
      <Stack pt={10} align={'center'}>
        <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
          Brand
          </Text>
        <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
          Nice Chair, pink
          </Heading>
        <Stack direction={'row'} align={'center'}>
          <Text fontWeight={800} fontSize={'xl'}>
            $57
            </Text>
          <Text textDecoration={'line-through'} color={'gray.600'}>
            $199
            </Text>
        </Stack>
      </Stack> */}
    </Box>
  )
}
