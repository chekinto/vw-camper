import React from 'react'
import { Link } from 'gatsby'
import {
  Box,
  Flex,
  IconButton,
  Spacer,
  Stack,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

import { Wrapper } from 'components'

import { NavItem } from './NavItem'
import { DropdownItem } from './DropdownItem'


const NAVIGATION_LINKS = [
  {
    label: 'Services',
    href: '/#services'
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
    href: '/#pricing'
  },
  {
    label: 'Contact us',
    href: '/contact-us'
  },
]


export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box
        as="header"
        bg={{ base: "teal.500", md: 'white' }}
        position="fixed"
        w="100%"
        py={{ base: 4, md: 6 }}
        color={{ base: 'white', md: 'teal.500' }}
        boxShadow={{ base: 'lg', md: 'sm' }}
        zIndex="4000"
      >
        <Wrapper>
          <Flex align="center" justify="space-between">
            <Link to="/">
              <Text fontSize="md" fontWeight="extrabold" color={{ base: 'white', md: 'black' }}>VW CAMPER</Text>
            </Link>
            <Spacer />
            <IconButton
              size="md"
              aria-label={`Toggle navigation ${isOpen ? 'off' : 'on'}`}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon w={6} h={6} />}
              display={{ md: 'none' }}
              variant={'ghost'}
              onClick={onOpen}
              onClose={onClose}
              zIndex="999999"
            />

            <Flex
              as="nav"
              display={{ base: 'none', md: 'block' }}>
              <Stack direction="row" spacing={8}>
                {NAVIGATION_LINKS.map(link => (
                  link.label === 'Meet the buses' ? (
                    <DropdownItem label={link.label} />
                  ) : (
                    <NavItem label={link.label} href={link.href} />
                  )
                ))}
              </Stack>
            </Flex>
          </Flex>
        </Wrapper>
      </Box>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent mt="72px">
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <ul>
              <li>Services</li>
              <li>Pricing</li>
            </ul>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}