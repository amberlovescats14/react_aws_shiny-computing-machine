import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Typography} from '@material-ui/core'
import { MenuIcon } from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  nav: {
    height: '10%'
  }
}));

const Nav = props => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Typography variant="h3">React_App</Typography>
      </AppBar>
    </div>
  )
}

Nav.propTypes = {

}

export default Nav
