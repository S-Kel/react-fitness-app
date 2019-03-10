import React from 'react';
import { AppBar, Toolbar, Typography, } from '@material-ui/core';
// import { AppBar, Toolbar, Typography, IconButton, Button, Fab,Icon, } from '@material-ui/core';
// import AddIcon from '@material-ui/icons/Add';

import GoogleAuth from '../GoogleAuth/GoogleAuth';

const Header =(props)=> {
  return (
    <div style={styles.root}>
     <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" style={styles.grow}>
            Exercise Database
          </Typography>
          <GoogleAuth styles={styles} />        
        </Toolbar>
      </AppBar>
    </div>
  )
}

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  avatar: {
    margin: 10,
  },
  // fab: {
  //   margin: theme.spacing.unit,
  // },
};
export default Header;