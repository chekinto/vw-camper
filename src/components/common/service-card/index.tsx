import React, { FunctionComponent } from 'react'
import styled from 'styled-components';

const StyledServiceCard = styled.article`
  padding: 7.2rem 4.2rem;
  background-color: grey;

  h4 {
    text-align: center;
  }
`;

interface ServiceCardProps {
  bgImage: string;
  title: string;
}

export const ServiceCard: FunctionComponent<ServiceCardProps> = ({ bgImage, title }) => {
  return (
    <StyledServiceCard style={{ backgroundImage: bgImage }}>
      <h4>{title}</h4>
    </StyledServiceCard>
  )
}
``