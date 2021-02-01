import React, { FunctionComponent } from 'react'
import styled from 'styled-components';
import { formatPrice } from 'helpers'

const StyledPricingCard = styled.article`
  border-radius: 0.8rem;
  overflow: hidden;
  width: 100%;
  box-shadow: var(--shadow);
`;

const Top = styled.div`
  padding: 2.4rem 0;
  background-color:var(--primary);
  text-align: center;
  color: var(--white);

  h5 {
    font-size: 1.8rem;
    margin-bottom: 1.6rem;
  }
  p {
    font-size: 1.4rem;
  }
`;

const Bottom = styled.div`
  padding: 2.4rem;
  .pricing {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.6rem;
    h5 {
      font-size: 1.8rem;
    }
    p {
      color: var(--black);
      font-size: 1.8rem;
      font-weight: var(--fontWeight-bold);
    }
  }
`;

interface PricingCardProps {
  title: string;
  season: string;
  type: {
    period: string;
    price: number;
  }[]
}

export const PricingCard: FunctionComponent<PricingCardProps> = ({ title, season, type }) => {
  return (
    <StyledPricingCard>
      <Top>
        <h5>{title}</h5>
        <p>{season}</p>
      </Top>
      <Bottom>
        {type.map(t => (
          <div className="pricing">
            <h5>{t.period}</h5>
            <p>{formatPrice(t.price)}</p>
          </div>
        ))}
      </Bottom>
    </StyledPricingCard>
  )
}
