import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <footer>
        <p>Coppyright &copy; 2023</p>
        <Link to='/about'>About</Link>
    </footer>
  )
}

export default Footer