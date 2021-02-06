import React from 'react'
import { Router } from '@reach/router'
import BusPage from '../bus-page'

// interface MeetTheBusesProps {
//   path: string;
// }

const MeetTheBuses = () => {
  return (
    <>
      <h1>Meet the buses</h1>
      <Router>
        <BusPage path="/meet-the-buses/:id" />
      </Router>
    </>
  )
}

export default MeetTheBuses
