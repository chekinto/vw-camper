import React from 'react'
import { Box, Container, IconButton, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'600'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};


export const Footer = () => {
  return (
    <Box
      bg={'gray.600'}
      color={'white'}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <a href={'#'}>About us</a>
            <a href={'#'}>Meet the buses</a>
            <a href={'#'}>Services</a>
            <a href={'#'}>Contact Us</a>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <a href={'#'}>FAQ</a>
            <a href={'#'}>Safety Center</a>
            <a href={'#'}>Community Guidelines</a>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
            <a href={'#'}>What's included</a>
            <a href={'#'}>Terms & Conditions</a>
            <a href={'#'}>Privacy Policy</a>
          </Stack>

          <Stack align={'flex-start'} direction="column">
            <ListHeader>Find us</ListHeader>
            <Stack direction="row">
              <IconButton
                colorScheme="gray"
                aria-label="Phone icon"
                icon={<PhoneIcon />}
              />
              <IconButton
                colorScheme="gray"
                aria-label="Search database"
                icon={<EmailIcon />}
              />
              <IconButton
                colorScheme="gray"
                aria-label="Search database"
                icon={<EmailIcon />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={'white'}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© 2020 vwcvch london. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
