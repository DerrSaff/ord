import * as React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navigation from './Navigation'
import QueryPage from './QueryPage'
import DictPage from './DictPage'
import About from './About'
import EntityForm from './EntityForm'

export const App : React.StatelessComponent < {} > = () => {
  return (
    <Router>
      <div>
        <Navigation/>

        <Route exact path="/" component={QueryPage}/>
        <Route path="/dictionary" component={DictPage}/>
        <Route path="/about" component={About}/>
        <Route path="/create_entity" component={EntityForm}/>
      </div>
    </Router>
  )
}

export default App