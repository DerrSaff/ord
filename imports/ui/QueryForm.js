import React from 'react'
const { Translate } = require('react-i18nify');

const QueryForm = () => (
  <div>
    <input className="search_field" type="text" />
    <button><Translate value="ui.search" /></button>
  </div>
)

export default QueryForm