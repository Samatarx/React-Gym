import React from "react";
import { Link } from "react-router-dom";
import {
  Toolbar,
  Typography,
  AppBar,
  makeStyles,
  ListItem,
  List,
} from "@material-ui/core";
// import {FitnessCenter} from '@material-ui/icons';


const useStyles = makeStyles({
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  list : {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  App : {
    width:'100%'
  },
  listItem: {
    listStyle:'none',
    textDecoration:'none'
  }

});

function Nav() {
  const classes = useStyles()
  return (
    <AppBar className={classes.App} position="static" >
      <Toolbar className={classes.nav}>
        <Typography><Link to="/">React Gym</Link></Typography>
        <List className={classes.list}>
          <ListItem className={classes.listItem} button>
            <Link to="/Signup">Sign Up</Link>
          </ListItem>
          <ListItem button>
            <Link to="/Location"  >Locations</Link>
          </ListItem>
        </List>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
