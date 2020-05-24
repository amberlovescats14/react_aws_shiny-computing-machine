import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import Nav from './components/Nav'




const App = props => {

  return (
    <BrowserRouter>
      <Nav></Nav>
      <Router/>
    </BrowserRouter>
  )
}

export default App



