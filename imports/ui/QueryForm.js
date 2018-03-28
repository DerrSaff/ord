import React from 'react'

class QueryForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleClickClear = this.handleClickClear.bind(this);
  }
  handleClickClear() {
    console.log(this.textInput)
    this.textInput.value = ''
    this.textInput.focus();
  }
  render() {
    return (
      <div className="search_form">
        <input
          className="search_field"
          type="text"
          ref={(input) => { this.textInput = input; }}
        />

        <button
          onClick={this.handleClickClear}>
          Clear
        </button>

        <button>Submit</button>
      </div>
    )
  }
}

export default QueryForm