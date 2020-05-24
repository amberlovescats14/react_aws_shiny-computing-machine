import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingContainer from './containers/LandingContainer'
import Temp from './components/Temp'


const Router = props => {
  return (
    <Switch>
      <Route exact strict path='/' component={LandingContainer}/>
      <Route exact strict path='/temp' component={Temp}/>
    </Switch>
  )
}


export default Router
