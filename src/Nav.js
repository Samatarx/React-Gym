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
import {FitnessCenter} from '@material-ui/icons';


const useStyles = makeStyles({});

function Nav() {
  return (
    <AppBar>
      <Toolbar className='nav'>
        <Typography><Link to="/">React Gym</Link></Typography>
        <List>
          <ListItem>
            <Link to="/Signup">Sign Up</Link>
          </ListItem>
          <ListItem>
            <Link to="/Location">Locations</Link>
          </ListItem>
        </List>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
