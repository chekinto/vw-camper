import React from 'react'
import { Link } from 'gatsby'
import * as Styled from './styles'
import { Button, Divider } from 'components';

export const BusList = ({ buses }) => (
  <>
    {buses.map((bus, index) => (
      <>
        <Styled.BusSpec key={index} isReversed={bus.isReversed}>
          <Styled.BusImage>
            <img src={bus.image} alt={`image of ${bus.title}`} />
          </Styled.BusImage>

          <Styled.BusContent>
            <h3 className="capitalize">{bus.title}</h3>
            <p>{bus.content}</p>
            <Link to={bus.path}>
              <Button>{bus.buttonText}</Button>
            </Link>
          </Styled.BusContent>
        </Styled.BusSpec>
        {index < buses.length - 1 && (<Divider />)}
      </>
    ))}
  </>
)
