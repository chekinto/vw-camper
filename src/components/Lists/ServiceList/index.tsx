import React from 'react'
import styled from 'styled-components';
import { ServiceCard } from 'components';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 2.4rem;
  
  @media(min-width: 945px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ServiceList = ({ services }) => {
  return (
    <StyledGrid>
      {services.map(service => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </StyledGrid>
  )
}
