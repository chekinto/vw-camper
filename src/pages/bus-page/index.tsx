import React from 'react'
import { useParams } from '@reach/router'

const BusPage = () => {
  const { id } = useParams()

  console.log(id)
  return (
    <div>
      <h1>Bus Page</h1>
    </div>
  )
}

export default BusPage
