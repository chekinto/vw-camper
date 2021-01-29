import styled from 'styled-components';
import { variables } from 'styles/variables'

export const Container = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.6rem;

  @media(min-width: ${variables.breakpoints.tablet}) {
    padding: 0 6.4rem;
  }
`;