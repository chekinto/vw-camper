import styled, { css } from 'styled-components';
import { variables } from 'styles/variables'

export const BusSpec = styled.article<{ isReversed: boolean }>`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;

  @media(min-width: ${variables.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: minmax(min-content, max-content);
    gap: 3.2rem;

    ${({ isReversed }) => isReversed && css`
      ${BusImage} {
        order: 2;
      }
    `}
  }
`;

export const BusImage = styled.div`
  overflow: hidden;
  margin-bottom: 2.4rem;
  img {
    border-radius: var(--borderRadius-lg);
    max-height: 22.4.rem;
    height: 100%;
    object-fit: contain;
  }
`;

export const BusContent = styled.div`
  h3 {
    text-align: center;
    margin-bottom: 1.6rem;
  }
  p {
    text-align: initial;
    margin-bottom: 1.6rem;
  }
  button {
    display: block;
    margin: 0 auto;
  }

  @media(min-width: ${variables.breakpoints.tablet}) {
    h3, p {
      text-align: initial;
    }
    button {
      margin: revert;
    }
  }
`;