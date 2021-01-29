import React, { FunctionComponent } from 'react'
import styled from 'styled-components';
import SVG from 'react-inlinesvg';

const StyledIcon = styled.div<{ fill: string, height: number, width: number }>`
  width: ${({ width }) => width ? `${width}rem` : '2.4rem'};
  height: ${({ height }) => height ? `${height}rem` : '2.4rem'};
  svg {
    fill: ${({ fill }) => fill ? fill : 'var(--white)'};
  }
`;

interface IconProps {
  src: string;
  width?: number;
  height?: number;
  fill?: string;
}

export const Icon: FunctionComponent<IconProps> = ({ src, fill, width, height }): JSX.Element => {
  return (
    <StyledIcon>
      <SVG src={src} width={width} height={height} fill={fill} />
    </StyledIcon>
  )
}
