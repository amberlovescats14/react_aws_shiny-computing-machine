import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DehazeIcon from '@material-ui/icons/Dehaze';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import {AppBar, Typography} from '@material-ui/core'
import { Link } from 'react-router-dom'
import Colors from '../shared/Colors';
const { lightBlue, tan, deepPurple } = Colors;



const useStyles = makeStyles({
  root: {
    background: deepPurple,
    color: tan,
    marginBottom: '0px !important'
  },
  list: {
    width: 250
    },
  sideList: {
    width: 'auto',
    background: deepPurple,
    color: tan
  },
  button: {
    color: lightBlue + '!important' ,
    marginRight: 'auto'
  },
  anchors: {
    color: lightBlue,
    textDecoration: 'none',
    padding: '5px'
  }
});

export default function TemporaryDrawer(props) {
  const { children } = props
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };


  const sideList = side => (
    <div
      className={classes.sideList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
      <ListItem button>
            <HomeIcon/>
            <ListItemText>
              <Link to='/' className={classes.anchors}>Home</Link>
              </ListItemText>
          </ListItem>
      <Divider />
         <ListItem button>
            <MailIcon/>
            <ListItemText>
              <Link to='/temp' className={classes.anchors}>Temp</Link>
              </ListItemText>
          </ListItem>
      <Divider />
      </List>

    </div>
  );
  return (
    <div >
      <AppBar position="static" className={classes.root}>
      <Button onClick={toggleDrawer('left', true)} style={{width: '20vw'}}>
      <DehazeIcon style={{color: 'white'}}/>
      </Button>
      <div style={{width: '65vw'}}>
      <Typography variant="h4" style={{float: 'right'}}>REACT_App</Typography>
      </div>
      </AppBar>

      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
      {children}
    </div>
  );
}