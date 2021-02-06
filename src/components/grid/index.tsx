import styled from 'styled-components';

interface GridProps {
  columns: string;
  rows: string;
  gap: number;
}

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${({ columns }) => columns ? columns : '1fr'};
  grid-template-rows: ${({ columns }) => columns ? columns : 'auto'};
  gap: ${({ gap }) => gap ? `${gap}rem` : '2.4rem'};
`;