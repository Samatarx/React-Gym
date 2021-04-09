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
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  list: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  App: {
    width: "100%",
  },
  listItem: {
    listStyle: "none",
   
    border: '1px red solid',
   backgroundColor: 'red',
    borderRadius: '5px'
  },
  link: {
    color:'white',
    textDecoration: "none",
 
  } 
});

function Nav() {
  const classes = useStyles();
  return (
    <AppBar className={classes.App} position="static">
      <Toolbar className={classes.nav}>
        <Typography>
          <Link to="/">React Gym</Link>
        </Typography>
        <List className={classes.list}>
          <ListItem button>
            <Link to="/Location">Locations</Link>
          </ListItem>
          <ListItem className={classes.listItem} button>
            <Link to="/Signup" className={classes.link} >Join Now</Link>
          </ListItem>
        </List>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
