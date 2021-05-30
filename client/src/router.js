import React from 'react'
import {
  BrowserRouter as Router, Route, Switch, Redirect
} from 'react-router-dom'

// Components
import NavComponent from './components/nav/hearder'
import Register from './components/register'
import Login from './components/login'
import BaseRoute from './components/base'
import Loader from './components/loader/loader'
import Dashboard from './components/dashboard'

const Routes = () => (
  <Router >
    <div className="primary-layout">
    <header>
        <Switch>
          <Route path="*" component={NavComponent} />
        </Switch>
      </header>
      <main>
       <Loader/>
        <Switch>
          <BaseRoute exact path="/home" component={Dashboard} />
          <BaseRoute exact path="/login" component={Login} auth={true}/>
          <BaseRoute exact path="/register" component={Register} auth={true}/>
          <BaseRoute exact path="/dashboard" component={Dashboard} />
          <Redirect to="/home" />
        </Switch>
      </main>
    </div>
  </Router>
)
export default Routes
