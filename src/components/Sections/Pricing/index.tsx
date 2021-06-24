import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
import { Box, Divider, Flex, HStack, VStack, Text } from '@chakra-ui/react'
import { Wrapper, H2, P } from 'components'

const rates = [
  {
    type: '1 Day',
    price: '£110',
    period: '8am - 8pm'
  },
  {
    type: '1 Night',
    price: '£140',
    period: '8am - 8pm'
  },
  {
    type: 'Short weekend',
    price: '£280',
    period: '8am - 8pm'
  },
  {
    type: 'Long weekend',
    price: '£390',
    period: '8am - 10am'
  },
  {
    type: 'Mid weekend',
    price: '£504',
    period: '8am - 8am'
  },
  {
    type: 'Week',
    price: '£833',
    period: '8am - 10am'
  },
]


export const Pricing = () => {
  // const data = useStaticQuery(graphql`
  //   query PricingQuery {

  //   }
  // `)

  return (
    <Wrapper>
      <Flex>
        {rates.map(rate => (
          <VStack>
            <Text>{rate.type}</Text>
            <Text>{rate.price}</Text>
            <Text>{rate.period}</Text>
          </VStack>
        ))}
      </Flex>
    </Wrapper>
    // <Wrapper pt={16} pb={56} id="pricing">
    //   <H2 textAlign="center">Pricing</H2>
    //   <Text fontSize="26px" textAlign="center">All year round prices</Text>

    //   <HStack spacing={6} mt={16}>
    //     <Box boxShadow="lg" rounded="lg" h="346px" w="220px" p={8}>
    //       <VStack spacing={4}>
    //         <H2>1 Day</H2>

    //         <H2 textAlign="left">£100</H2>
    //         <P textAlign="left">8am - 8pm</P>
    //       </VStack>
    //     </Box>
    //     <Box boxShadow="lg" rounded="lg" h="346px" w="220px" p={8}>
    //       <VStack spacing={4}>
    //         <H2>1 Night</H2>

    //         <H2 textAlign="left">£100</H2>
    //         <P textAlign="left">8am - 8pm</P>
    //       </VStack>
    //     </Box>
    //     <Box boxShadow="lg" rounded="lg" h="346px" w="220px" p={8}>
    //       <VStack spacing={4}>
    //         <H2>Friday - Sunday</H2>

    //         <H2 textAlign="left">£100</H2>
    //         <P textAlign="left">8am - 8pm</P>
    //       </VStack>
    //     </Box>
    //     <Box boxShadow="lg" rounded="lg" h="346px" w="220px" p={8}>
    //       <VStack spacing={4}>
    //         <H2>Thursday - Friday</H2>

    //         <H2 textAlign="left">£100</H2>
    //         <P textAlign="left">8am - 8pm</P>
    //       </VStack>
    //     </Box>
    //     <Box boxShadow="lg" rounded="lg" h="346px" w="220px" p={8}>
    //       <VStack spacing={4}>
    //         <H2>Monday - Thursdayy</H2>

    //         <H2 textAlign="left">£100</H2>
    //         <P textAlign="left">8am - 8pm</P>
    //       </VStack>
    //     </Box>
    //     <Box boxShadow="lg" rounded="lg" h="346px" w="220px" p={8}>
    //       <VStack spacing={4}>
    //         <H2>1 Week</H2>

    //         <H2 textAlign="left">£100</H2>
    //         <P textAlign="left">8am - 8pm</P>
    //       </VStack>
    //     </Box>
    //   </HStack>
    // </Wrapper>
  )
}
