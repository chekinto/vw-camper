import styled from 'styled-components';
import { variables } from 'styles/variables'

export const Banner = styled.div`
  background-color: var(--primary);
  padding: 2.4rem;
  p {
    text-align: center;
    margin-bottom: 1.6rem;
  }
  button {
    display: block;
    margin: 0 auto;
  }

  @media(min-width: ${variables.breakpoints.tablet}) {
    .test {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    p {
      margin-bottom: 0;
    }
  }
`;