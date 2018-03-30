import React from 'react'
import Morphology from '../api/morphology'

class QueryForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleClickClear = this.handleClickClear.bind(this);
    this.handleClickSubmit = this.handleClickSubmit.bind(this);
  }
  handleClickClear() {
    this.textInput.value = ''
    this.textInput.focus();
  }
  handleClickSubmit(){
    let m = new Morphology(this.textInput.value)
    console.log("words:", m.split_sentence())
  }
  render() {
    return (
      <div>
        <div className="search_form">
          <input
            className="search_field"
            type="text"
            ref={(input) => { this.textInput = input; }}
          />

          <button
            onClick={this.handleClickSubmit}>
            Submit
          </button>

          <button
            onClick={this.handleClickClear}>
            Clear
          </button>

        </div>
        <div className="morphology_output">dsfsdfsfsdf</div>
      </div>
    )
  }
}

export default QueryForm