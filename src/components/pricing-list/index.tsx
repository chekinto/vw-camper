import React from 'react'
import styled from 'styled-components';
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

export const PricingList = ({ items }) => {
  return (
    <StyledList>
      {items.map((item, index) => (
        <PricingCard key={index} {...item} />
      ))}
    </StyledList>
  )
}
