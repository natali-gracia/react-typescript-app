import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar: React.FC = () => {
    return (
    <nav>
        <div className="nav-wrapper teal darken-1 px1">
          <NavLink to="/" className="brand-logo">React + Typescript</NavLink>
          <ul className="right hide-on-med-and-down">
            <li><NavLink to="/">ToDo List</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
        </div>
      </nav>
    )
}
