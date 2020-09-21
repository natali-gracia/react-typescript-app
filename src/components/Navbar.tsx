import React from 'react'

export const Navbar: React.FC = () => {
    return (
    <nav>
        <div className="nav-wrapper deep-purple darken-2 px1">
          <a href="#" className="brand-logo">React + Typescript</a>
          <ul className="right hide-on-med-and-down">
            <li><a href="/">ToDo List</a></li>
            <li><a href="/">About</a></li>
          </ul>
        </div>
      </nav>
    )
}
