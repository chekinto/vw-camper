import React, { useState } from 'react'
import {
  Box,
  Container,
  Flex,
  IconButton,
  Spacer,
  Stack,
  Text,
  Slide
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

const NAVIGATION_LINKS = [
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Services',
    href: '#services'
  },
  {
    label: 'Meet the buses',
    children: [
      {
        label: 'Ada',
        href: 'meet-the-buses/ada'
      },
      {
        label: 'Hudson',
        href: 'meet-the-buses/hudson'
      },
    ]
  },
  {
    label: 'Pricing',
    href: '#pricing'
  },
]

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Box bg="teal.500" p={{ base: 4, md: 6 }} color="white" position="fixed" w="100%" zIndex="1000">
        <Container maxW="7xl">
          <Flex alignItems="center">
            <Text fontSize="md" fontWeight="extrabold">VW CAMPER</Text>
            <Spacer />
            <IconButton
              size="md"
              aria-label={`Toggle navigation ${isOpen ? 'off' : 'on'}`}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon w={6} h={6} />}
              display={{ md: 'none' }}
              variant={'ghost'}
              onClick={() => setIsOpen(!isOpen)}
            />

            <Flex display={{ base: 'none', md: 'block' }}>
              <Stack direction="row" spacing={8}>
                {NAVIGATION_LINKS.map(link => (
                  <Box key={link.label}>
                    <Text
                      fontWeight="bold"
                      transition={'all .3s ease'}
                      _hover={{
                        textDecoration: 'none',
                        color: "white",
                      }}>
                      {link.label}
                    </Text>
                  </Box>
                ))}
              </Stack>
            </Flex>
          </Flex>

        </Container>
      </Box>


      <Slide direction="top" in={isOpen}>
        <Box
          p={4}
          color="black"
          mt="16"
          bg="white"
          rounded="md"
          shadow="md"
        >
          Menu items
        </Box>
      </Slide>
    </>
  )
}