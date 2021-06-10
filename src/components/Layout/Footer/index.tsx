import React from 'react'
import { Box, Container, IconButton, SimpleGrid, Stack, Text } from '@chakra-ui/react'

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
            <a href={'#'}>About Us</a>
            <a href={'#'}>Blog</a>
            <a href={'#'}>Careers</a>
            <a href={'#'}>Contact Us</a>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <a href={'#'}>Help Center</a>
            <a href={'#'}>Safety Center</a>
            <a href={'#'}>Community Guidelines</a>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
            <a href={'#'}>Cookies Policy</a>
            <a href={'#'}>Privacy Policy</a>
            <a href={'#'}>Terms of Service</a>
            <a href={'#'}>Law Enforcement</a>
          </Stack>

          <Stack align={'flex-start'} direction="column">
            <ListHeader>Find us</ListHeader>
            <Stack direction="row">
              <IconButton
                colorScheme="blue"
                aria-label="Search database"
                icon={""}
              />
              <IconButton
                colorScheme="blue"
                aria-label="Search database"
                icon={""}
              />
              <IconButton
                colorScheme="blue"
                aria-label="Search database"
                icon={""}
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
          <Text>© 2020 VWCVCH LONDON. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            {/* <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton> */}
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
