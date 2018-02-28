import React from 'react'
import {NavLink} from 'react-router-dom'
import LanguageSelect from './LanguageSelect'
const { Translate } = require('react-i18nify');

const Navigation = () => (
  <nav className="navigation">
    <ul className="navigation__links">
      <li>
        <NavLink to="/"><Translate value="ui.home" /></NavLink>
      </li>
      <li>
        <NavLink to="/dictionary"><Translate value="ui.dictionary" /></NavLink>
      </li>
      <li>
        <NavLink to="/about"><Translate value="ui.about" /></NavLink>
      </li>
    </ul>
    <LanguageSelect />
  </nav>
)

export default Navigation