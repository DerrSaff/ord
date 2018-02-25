import React from 'react'
import QueryForm from './QueryForm'
import {BrowserRouter as Router, Link} from 'react-router-dom'

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

        <Link to="/create_entity">Create</Link>
      </main>
    )
  }
}

export default DictPage