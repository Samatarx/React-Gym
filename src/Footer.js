import {
  Grid,
  List,
  ListItem,
  Typography,
  makeStyles,
  AppBar,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItem: {
    justifyContent: "center",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
  footer: {
    marginTop: "calc(80% + 60px)",
    bottom: "0",
  },
});

function Footer() {
  const classes = useStyles();
  return (
    <AppBar className={classes.footer}>
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <Link to="/Covid-19" className={classes.link}>
            Covid-19
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link to="/AboutUs" className={classes.link}>
            About Us
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link to="/Careers" className={classes.link}>
            Careers
          </Link>
        </ListItem>
        <ListItem className={classes.link}>
          <Link to="/Terms" className={classes.link}>
            Terms & conditions
          </Link>
        </ListItem>
      </List>
    </AppBar>
  );
}

export default Footer;
