import React, { FunctionComponent } from 'react'
import styled from 'styled-components';
import { variables } from 'styles/variables';

const StyledServiceCard = styled.article<{ bgImage: string }>`
  display: grid;
  place-items: center;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: var(--borderRadius-md);
  box-shadow: var(--shadow);
  height: auto;
  width: 24.6rem;
  min-height: 16rem;
  position: relative;
  overflow: hidden;
  margin: 0 auto;

  @media(min-width: ${variables.breakpoints.mobile}) {
    width: 100%;
    margin: revert;
  }
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
    font-family: var(--rubik);
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