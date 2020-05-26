import React from 'react';
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import Nav from './components/Nav'
import Colors from './shared/Colors'
import { height } from '@material-ui/system';


const style = {
  root : { 
     background: Colors.tan,
     height: '100vh',
     padding: '10px'
     }
  }



const App = props => {

  return (
    <BrowserRouter>
      <div style={style.root}>
      <Nav></Nav>
      <Router/>
      </div>
    </BrowserRouter>
  )
}

export default App



