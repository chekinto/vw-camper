import React from 'react'
import { useParams } from '@reach/router'

const Vehicle = () => {
  const value = useParams()
  console.log('value :>> ', value);
  return (
    <div>
      <h1>{value}</h1>
    </div>
  )
}

export default Vehicle
