import React from 'react'
const { Translate } = require('react-i18nify');

class EntityForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      "action": "create"
    }
  }

  render() {
    return (
      <div className="entity-form">
        <h1>
          <Translate value={"ui." + this.state.action} />
        </h1>

        <div className="input-group">
          <label><Translate value="ui.select_type" />:</label>
          <select>
            <option><Translate value="ui.word" /></option>
            <option><Translate value="ui.phrase" /></option>
          </select>
        </div>

        <div className="input-group">
          <label>Spelling:</label>
          <input type="text"/>
        </div>

        <h3>Common params</h3>

        <div className="input-group">
          <input type="text"/>:
          <input type="text"/>
        </div>
        <div className="input-group">
          <input type="text"/>:
          <input type="text"/>
        </div>
        <div className="input-group">
          <input type="text"/>:
          <input type="text"/>
        </div>

        <h3>Semantics</h3>
      </div>

    )
  }
}

export default EntityForm