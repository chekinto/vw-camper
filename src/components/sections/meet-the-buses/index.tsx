import React from 'react'
import styled from 'styled-components';
import { Button, Divider, TitleBanner } from 'components/common'
import { Container } from 'components/constants'
import { buses } from 'features'

const MeetBusesSection = styled.section`
  padding: 4rem 0 6.4rem;
`;

const BusSpec = styled.article`
  display: flex;
  flex-direction: column;

  .buses__image {
    margin: 2.4rem 0;
    overflow: hidden;
    
    img {
      border-radius: var(--borderRadius-lg);
    }
  }

  .buses__content {
    h3 {
      text-align: center;
      margin-bottom: 1.6rem;
    }
    p {
      text-align: initial;
      margin-bottom: 1.6rem;
    }
  }

  .buses__btn {
    display: block;
    margin: 0 auto;
  }
`;


export const MeetTheBuses = () => {
  return (
    <MeetBusesSection>
      <Container>
        <TitleBanner
          title="Meet the buses"
          subtitle="We have 2 lovingly restored classic T5 Volkswagen Campervans with a cool modern twist. Our buses were restored and are maintained by Voodoo Works in Bulkington."
        />

        {buses.map((bus, index) => (
          <>
            <BusSpec>
              <div className="buses__image">
                <img src={bus.image} alt="" />
              </div>

              <div className="buses__content">
                <h3>{bus.title}</h3>
                <p>{bus.content}</p>
                <Button className="buses__btn">{bus.buttonText}</Button>
              </div>
            </BusSpec>
            {index < buses.length - 1 && (
              <Divider />
            )}
          </>
        ))}

      </Container>
    </MeetBusesSection>
  )
}
