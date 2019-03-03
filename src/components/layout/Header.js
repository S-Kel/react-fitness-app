import React from 'react';
import {AppBar,Toolbar, Typography,IconButton,Button} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Header =(props)=> {
  return (
     <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" color="inherit">
            Exercise Database
          </Typography>
        </Toolbar>
      </AppBar>
  )
}

export default Header;