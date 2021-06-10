import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { PricingCard } from 'components'
import { variables } from 'styles/variables'

const StyledList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 3.2rem;
  margin-bottom: 8rem;
  
  @media(min-width: ${variables.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.4rem;
  }
`;

export const PricingList = () => {
  const { allGraphCmsPricing: { nodes } } = useStaticQuery(graphql`
    query PricingQuery {
      allGraphCmsPricing {
        nodes {
          title
          subHeading
        }
      }
    }
  `)

  console.log('data', nodes)
  return (
    <StyledList>
      {nodes.map((item, index) => (
        <PricingCard key={index} {...item} />
      ))}
    </StyledList>
  )
}
