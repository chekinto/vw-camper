import styled, { css } from 'styled-components';

export const Section = styled.section<{ isGrey?: boolean }>`
  padding: 6rem 0 6.4rem;
  scroll-margin-top: 12em;

  ${({ isGrey }) => isGrey && css`
    background-color: var(--grey2);
  `}
`;