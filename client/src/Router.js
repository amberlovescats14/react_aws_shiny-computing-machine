import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingContainer from './containers/LandingContainer'
import CommentsContainer from './containers/CommentsContainer'


const Router = props => {
  return (
    <Switch>
      <Route exact strict path='/' component={LandingContainer}/>
      <Route exact strict path='/comments' component={CommentsContainer}/>
    </Switch>
  )
}


export default Router
