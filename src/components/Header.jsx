import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/Header.css'

export const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect( () => {
    window.addEventListener( "scroll", () => {
      setScroll(window.scrollY > 50);
    })
      setIsOpen(false);
  }, [location] )

  return (
    <header className={ !scroll ? "app-header" : "app-header scrolled" }>
      <nav className={isOpen ? 'open' : ''}>
        <button className='btn-nav-toggle' onClick={ () => {setIsOpen( !isOpen )} }>
          <span></span>
        </button>

        <ul className='main-menu'>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/all">Tasks</NavLink></li>
        </ul>
      </nav>
      
      <section className="user-details">
        <div>
          <strong>Katty V.</strong>
          <small>
            52 created { "  /  " }
            24 completed
          </small>
        </div>

        <figure className='avatar'>
          <img src={"https://i.pravatar.cc/50?img=38"} />
          <figcaption title='Ending soon'>5</figcaption>
        </figure>
      </section>
      
    </header>
  )
}
