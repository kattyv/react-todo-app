import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div className='home'>
      <h1>404: Page not found</h1>
      <blockquote>Looks like this page is missing.</blockquote>
      <Link to="/" className='btn btn-primary'>Go to Home page</Link>
    </div>
  )
}
