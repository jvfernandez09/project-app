import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ModuleContainer from 'containers/ModuleContainer'


const Routes = (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={ModuleContainer}/>
      </Switch>
    </Router>
  )
}

export default Routes
