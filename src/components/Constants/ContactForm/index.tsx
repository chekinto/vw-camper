import React from 'react'
import { Button, Container, FormControl, FormHelperText, FormLabel, Stack, Textarea, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { Section } from 'components'
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'

export const ContactForm = () => {
  return (
    <Section
      title="Let's chat"
      subtitle="If your interested in booking one of our beautiful campers or have any questions about what we do then please do get in touch."
    >
      <Container maxW={{ base: '7xl', md: 'md' }}>

        <form>
          <Stack spacing={6}>
            <FormControl id="name" isRequired>
              <FormLabel>Full name</FormLabel>
              <Input type="text" />
            </FormControl>

            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<EmailIcon color="gray.300" />}
                />
                <Input type="email" placeholder="example@email.com" />
              </InputGroup>
            </FormControl>

            <FormControl id="telephone" isRequired>
              <FormLabel>Telephone</FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<PhoneIcon color="gray.300" />}
                />
                <Input type="email" placeholder="Phone number" />
              </InputGroup>
            </FormControl>

            <FormControl id="telephone" isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Here is a sample placeholder" />
            </FormControl>


            <Button type="submit" colorScheme="teal">Submit</Button>
          </Stack>
        </form>

      </Container>
    </Section>
  )
}
