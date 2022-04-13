import React from 'react'
import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'
function Aboutpage() {
  return (
    <Card className='about'>
      <h1>About this Page</h1>
      <p>This about page made with ReactJs</p>
      <p>Version 1.0.0</p>
      <p>
        <Link to='/'>Back to Home</Link>
      </p>
      </Card>
  )
}

export default Aboutpage