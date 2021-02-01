import React, { FunctionComponent } from 'react'
import styled from 'styled-components';
import { variables } from 'styles/variables'

const StyledTitleBanner = styled.div`
  margin-bottom: 2.4rem;
  h2, p {
    text-align: center;
  }

  h2 {
    margin-bottom: 0.8rem;
    font-size: 2.6rem;
    
    @media(min-width: ${variables.breakpoints.tablet}) {
      margin-bottom: 1.6rem;
    }
  }
`;

interface TitleBannerProps {
  title: string;
  subtitle?: string;
}

export const TitleBanner: FunctionComponent<TitleBannerProps> = ({ title, subtitle }) => {
  return (
    <StyledTitleBanner>
      <h2>{title}</h2>
      {subtitle ? (
        <p>{subtitle}</p>
      ) : null
      }
    </StyledTitleBanner>
  )
}
