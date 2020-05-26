import React from 'react';
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import Nav from './components/Nav'





const App = props => {

  return (
    <BrowserRouter>
      <div>
      <Nav></Nav>
      <Router/>
      </div>
    </BrowserRouter>
  )
}

export default App



