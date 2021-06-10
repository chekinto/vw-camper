// import React, { useState } from 'react'
// import { Link } from 'gatsby'

// import { AnchorLink } from "gatsby-plugin-anchor-links";
// import { Button, Container } from 'components'
// import { Burger } from '../Burger'
// import { MobileNav } from '../MobileNav'
// import { useGlobalContext } from 'context'

// import {
//   StyledHeader,
//   InnerHeader,
//   Nav,
//   DropdownContainer,
//   DropdownItem
// } from './styles'

// export const Header = () => {
//   const { observeNode } = useGlobalContext()
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const handleDropdown = () => {
//     setIsDropdownOpen(prev => !prev)
//   }

//   return (
//     <>
//       <StyledHeader>
//         <Container>
//           <InnerHeader>
//             <Link className="nav__logo" to="/">VW CAMPER <span>HIRE</span></Link>
//             <Nav>
//               <ul>
//                 <li>
//                   <AnchorLink className="nav__link" to="/#about" title="About">
//                     About
//                   </AnchorLink>
//                 </li>
//                 <li>
//                   <AnchorLink
//                     className={`${observeNode.services ? 'nav__link titleActive' : 'nav__link'}`} to="/#services" title="Services">
//                     Services
//                   </AnchorLink>
//                 </li>
//                 <li>
//                   <button className="nav__link nav__dropdown" onClick={handleDropdown}>
//                     Meet the buses
//                   </button>
//                   {isDropdownOpen && (
//                     <DropdownContainer>
//                       <DropdownItem>
//                         <Link to="/meet-the-buses/ada">Ada</Link>
//                       </DropdownItem>

//                       <DropdownItem>
//                         <Link to="/meet-the-buses/hudson">Hudson</Link>
//                       </DropdownItem>
//                     </DropdownContainer>
//                   )}
//                 </li>
//                 <li>
//                   <AnchorLink className={`${observeNode.pricing ? 'nav__link titleActive' : 'nav__link'}`} to="/#pricing" title="Pricing">
//                     Pricing
//                   </AnchorLink>
//                 </li>
//               </ul>
//             </Nav>

//             <AnchorLink to="/#contact" title="Contact">
//               <Button className="nav__btn" navBtn>Contact us</Button>
//             </AnchorLink>

//             <Burger onClick={() => setIsOpen(prevState => !prevState)} isOpen={isOpen} />
//           </InnerHeader>
//         </Container>
//         <MobileNav setIsOpen={setIsOpen} isOpen={isOpen} />
//       </StyledHeader>
//     </>
//   )
// }

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
      <Box bg="teal.500" p={{ base: 4, md: 6 }} color="white">
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