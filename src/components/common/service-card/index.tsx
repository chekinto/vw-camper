import React, { FunctionComponent } from 'react'
import styled from 'styled-components';

const StyledServiceCard = styled.article<{ bgImage: string }>`
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: var(--borderRadius-md);
  box-shadow: var(--shadow);
  padding: 7.2rem 4.2rem;
  width: 100%;
  min-height: 16rem;
  position: relative;
  overflow: hidden;
  &::before {
    content: ''; 
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: var(--black);
    opacity: 0.66;
  }

  h4 {
    text-align: center;
    color: var(--white);
    font-size: 1.8rem;
    position: relative;
    z-index: 90;
  }
`;

interface ServiceCardProps {
  bgImage: string;
  title: string;
}

export const ServiceCard: FunctionComponent<ServiceCardProps> = ({ bgImage, title }) => {
  return (
    <StyledServiceCard bgImage={bgImage}>
      <h4>{title}</h4>
    </StyledServiceCard>
  )
}
``