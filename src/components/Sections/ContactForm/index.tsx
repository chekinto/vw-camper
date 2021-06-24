import React from 'react'
import { Box, Button, Flex, FormControl, FormLabel, Stack, Textarea, Input, InputGroup, InputLeftElement, Select } from '@chakra-ui/react'
import { CustomInput, Wrapper, H2, P } from 'components'
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'

export const ContactForm = () => {
  return (
    <Wrapper bg="gray.50" p={16}>
      <Box pb={8}>
        <H2 textAlign="center">Contact us</H2>
        <P fontSize="26px" fontWeight="medium" textAlign="center">Let's chat</P>
      </Box>

      <Box maxWidth={{ base: '100%', md: '346px' }} m={{ base: 0, md: 'auto' }}>
        <form>
          <Stack spacing={6}>
            <CustomInput
              id="name"
              label="Full name"
              type="text"
              placeholder="John Doe"
              isRequired
            />

            <CustomInput
              id="email"
              label="Email address"
              type="email"
              placeholder="example@email.com"
              isRequired
              icon={<EmailIcon color="gray.300" />}
            />

            <CustomInput
              id="telephone"
              label="Telephone"
              type="text"
              placeholder="Phone number"
              isRequired
              icon={<PhoneIcon color="gray.300" />}
            />

            <FormControl id="vehicle">
              <FormLabel>Select Vehicle</FormLabel>
              <Select placeholder="Select option" bg="white">
                <option value="ada">Ada</option>
                <option value="hudson">Hudson</option>
              </Select>
            </FormControl>

            <Textarea
              id="message"
              label="Message"
              placeholder="Enter message..."
              isRequired
            />

            <Button type="submit" colorScheme="teal">Submit</Button>
          </Stack>
        </form>
      </Box>
    </Wrapper>
  )
}
