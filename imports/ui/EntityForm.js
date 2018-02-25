import React from 'react'

const EntityForm = () => (
  <div>
    <h1>
      action
    </h1>

    <div>
      <label>Select type:</label>
      <select>
        <option>Word</option>
        <option>Phrase</option>
      </select>
    </div>

    <div>
      <label>Spelling:</label>
      <input type="text"/>
    </div>

    <h3>Common params</h3>

    <div>
      <input type="text"/>: 
      <input type="text"/>
    </div>
    <div>
      <input type="text"/>: 
      <input type="text"/>
    </div>
    <div>
      <input type="text"/>: 
      <input type="text"/>
    </div>

    <h3>Semantics</h3>
  </div>
)

export default EntityForm