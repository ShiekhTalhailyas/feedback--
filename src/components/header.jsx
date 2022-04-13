import React from 'react'
import { useState } from 'react'


function Header(props) {
  return (
      <header style={{backgroundColor:'blue', color:'orange', padding: 20}}>
          <h2>{props.name}</h2>
      </header>
    
  )
}

export default Header