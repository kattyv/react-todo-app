import React from 'react'

export const About = () => {
  return (
    <div className="home">
      <h1>About this app</h1>
      <p>
        The React app is created for educational purposes only, 
        to demonstrate various React features in action.
      </p>

      <p>
      Definitely a work in progress, but if you like it, feel free to use it for inspiration.
      </p>

      <h3>React features in use</h3>
      <ul>
        <li>React routing</li>
        <li>React hooks</li>
        <li>Work with Contexts</li>
      </ul>

      <h3>Credits and Thanks</h3>
      <ol>
        <li>
          <strong>Photo by: </strong>
          <a href="https://www.pexels.com/photo/collection-of-delicate-feathers-on-black-background-4004374/" target="_blank" rel="nofollow">
            Evie Shaffer from Pexels
          </a>
        </li>
        <li>
          <strong>Icons from: </strong>
          <a href="https://www.svgrepo.com/vectors/carbon-design-line-icons/" target="_blank" rel="nofollow">
            Carbon Design Line Icons Vectors
          </a>
        </li>

        <li>
          <strong>Placeholder avatar from: </strong>
          <a href="" target="_blank" rel="nofollow">
            Carbon Design Line Icons Vectors
          </a>
        </li>
      </ol>

      <h3>To be done:</h3>
      <ul>
        <li>Styling for mobile devices, Optimising styles</li>
        <li>Dynamic user details</li>
        <li>Themes switcher</li>
      </ul>

    </div>
  )
}
