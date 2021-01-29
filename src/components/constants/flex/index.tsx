import styled from 'styled-components';

interface FlexProps {
  justify?: string;
  align?: string;
  direction?: string;
  gap?: number;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${({ justify }) => justify ? justify : 'start'};
  align-items: ${({ align }) => align ? align : 'center'};
  flex-direction: ${({ direction }) => direction ? direction : 'row'};
  gap: ${({ gap }) => gap ? `${gap}rem` : '3.2rem'};
`;