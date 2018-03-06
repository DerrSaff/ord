import React from 'react'
import QueryForm from './QueryForm'
import {BrowserRouter as Router, Link} from 'react-router-dom'
const { Translate } = require('react-i18nify');
import db from '../api/db'

class DictPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {action: "search"}
  }
  render() {
    return (
      <main className="query_page">
        <QueryForm/>
        <br/>
        
        <Link to="/create_entity"><Translate value="ui.create" /></Link>
      </main>
    )
  }
}

export default DictPage