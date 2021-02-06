import React, { FunctionComponent } from 'react'
import styled from 'styled-components';
import { formatPrice } from 'helpers'
import { variables } from 'styles/variables';

const StyledPricingCard = styled.article`
  border-radius: 0.8rem;
  overflow: hidden;
  width: 100%;
  box-shadow: var(--shadow);
  max-width: 246px;
  margin: auto;

  @media(${variables.breakpoints.tablet}) {
    width: 100%;
  }
`;

const Top = styled.div`
  padding: 2.4rem 0;
  background-color:var(--primary);
  text-align: center;
  color: var(--white);
  display: flex;
  flex-direction: column;

  h4 {
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
    p {
      font-size: 1.4rem;
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
        <h4>{title}</h4>
        <p>{season}</p>
      </Top>
      <Bottom>
        {type.map(t => (
          <div className="pricing">
            <p>{t.period}</p>
            <p>{formatPrice(t.price)}</p>
          </div>
        ))}
      </Bottom>
    </StyledPricingCard>
  )
}
