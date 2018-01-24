import React from 'react'
import {NavLink} from 'react-router-dom'
import LanguageSelect from './LanguageSelect'

const Navigation = () => (
  <nav className="navigation">
    <ul className="navigation__links">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/dictionary">Dictionary</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </ul>
    <LanguageSelect />
  </nav>
)

export default Navigation