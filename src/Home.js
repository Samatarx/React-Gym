import React from "react";
import { Grid, Container, makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles({
  main: {
    position: "relative",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height:'100vh'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.2)',
  },

  text: {
    position: "relative",
    alignItems:'center',
    justifyContent:'center',
    height:'100%',
    // zIndex:'10'

  },
});

const urlLink = 'https://images.unsplash.com/photo-1540496905036-5937c10647cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'

function Home() {
  const classes = useStyles();
  return (
    <Container className={classes.main} style={{backgroundImage:`url(${urlLink})`}} >
      <div className={classes.overlay}/>
        <Grid container className={classes.text}>
          <h1>Hi</h1>
        </Grid>
      
    </Container>
  );
}

export default Home;
