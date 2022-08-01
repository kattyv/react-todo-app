import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className="home">
      <h1>Welcome back, Katty!</h1>

      <blockquote>
      <h2>Did you know?</h2>
      The levels of dopamine, often called the "feel-good" hormone, can be manipulated 
      by setting small goals and then accomplishing them. 
      For instance, your brain may receive a spike in dopamine if you promise yourself that you’ll 
      clean out your desk, and then you do. <br />
      Or maybe nah?...
      </blockquote>

      <Link to='/all' className='btn btn-primary'>
        See All Tasks
      </Link>
      
    </div>
  )
}
