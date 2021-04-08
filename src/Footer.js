import {
  AppBar,
  List,
  ListItem,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

function Footer() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <List className={classes.list}>
        <ListItem button>
          <Link to="/AboutUs">About Us</Link>
        </ListItem>
        <ListItem>
          <Link to="/Careers">Careers</Link>
        </ListItem>
        <ListItem>
          <Link to="/Terms">Terms & conditions</Link>
        </ListItem>
      </List>
    </AppBar>
  );
}

export default Footer;
