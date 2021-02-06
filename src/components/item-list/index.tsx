import React, { FunctionComponent } from 'react'
import styled from 'styled-components';
import { Icon, Flex } from 'components'
import { variables } from 'styles/variables'

const Container = styled.div`
  h3 {
    text-align: center;
    margin-bottom: 2.4rem;
  }
  @media (min-width: ${variables.breakpoints.tablet}) {
    h3 {
      text-align: revert;
    }
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
  
  span {
    font-size: 1.2rem;
  }
  
  @media (min-width: ${variables.breakpoints.tablet}) {
    span {
      font-size: 1.6rem;
    }
  }
  
  @media (min-width: ${variables.breakpoints.desktop}) {
    grid-template-columns: 32rem auto;
    
  }
`;

interface ItemListProps {
  label: string;
  items: {
    icon: string;
    content: string;
  }[]
}

export const ItemList: FunctionComponent<ItemListProps> = ({ label, items }) => {
  return (
    <Container>
      <h3>{label}</h3>
      <GridContainer>
        {items.map((item, index) => (
          <Flex key={index} gap={0.8}>
            <Icon src={item.icon} fill="red" />
            <span>{item.content}</span>
          </Flex>
        ))}
      </GridContainer>
    </Container>
  )
}