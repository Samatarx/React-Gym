import React from "react";
import { Link } from "react-router-dom";
import {
  Toolbar,
  Typography,
  AppBar,
  makeStyles,
  ListItem,
  List,
  Button,
  createMuiTheme,
} from "@material-ui/core";
// import {FitnessCenter} from '@material-ui/icons';
const theme = createMuiTheme()
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
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
  margin:{
    display: 'flex',
    justifyContent:'center',
    width:'100px',
    padding:'0'
  }
});

function Nav() {
  const classes = useStyles();
  return (
    <AppBar className={classes.App} position="static">
      <Toolbar className={classes.nav}>
        <Typography>
          <Link to="/" className={classes.link}>
            React Gym
          </Link>
        </Typography>
        <List className={classes.list}>
          <ListItem button>
            <Link to="/Location" className={classes.link}>
              Locations
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link to="/Signup" className={classes.link}>
              <Button variant="contained" color="secondary" size="large"   className={classes.margin}>
                Join Now
              </Button>
            </Link>
          </ListItem>
        </List>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
