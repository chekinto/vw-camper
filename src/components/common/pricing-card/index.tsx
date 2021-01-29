import React, { FunctionComponent } from 'react'
import styled from 'styled-components';

const StyledPricingCard = styled.article`
  border-radius: 0.8rem;
  overflow: hidden;

`;

const Top = styled.div`
  padding: 2.4rem 0 2.4rem;
  background-color:var(--primary);
  color: var(--white);
  text-align: center;

  h5 {
    font-size: 1.8rem;
    margin-bottom: 1.6rem;
  }
  p {
    font-size: 1.4rem;
  }
`;

const Bottom = styled.div`
  padding: 3.2rem;
  background-color:#f4f5f6;

  .pricing {
    display: flex;
    justify-content: space-between;

    span {
      color: var(--white);
      font-size: 1.6rem;
    }
  }
`;

interface PricingCardProps {
  title: string;
  season: string;
  period?: string;
  price?: number;
}

export const PricingCard: FunctionComponent<PricingCardProps> = ({ title, season, period, price }) => {
  return (
    <StyledPricingCard>
      <Top>
        <h5>{title}</h5>
        <p>{season}</p>
      </Top>
      <Bottom>
        <div className="pricing">
          <span>{period}</span>
          <span>{price}</span>
        </div>
      </Bottom>
    </StyledPricingCard>
  )
}
