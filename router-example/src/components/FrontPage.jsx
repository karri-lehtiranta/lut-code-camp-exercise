import React from 'react'
import { Link } from 'react-router-dom'

const FrontPage = () => {
  return (
    <div className="some-class">
      <Link to="products">To Products page</Link>
      <Link to="profile">To Profile page</Link>
    </div>
  )
}

export default FrontPage
