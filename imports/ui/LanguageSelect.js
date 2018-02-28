import React from 'react'
const {I18n} = require('react-i18nify');

class LanguageSelect extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    const languages = { "English": "en", "Русский": "ru"}
    I18n.setLocale(languages[event.target.value])
  }
  render() {
    return (
      <select onChange={this.handleChange}>
        <option>English</option>
        <option>Русский</option>
      </select>

    )
  }
}

export default LanguageSelect