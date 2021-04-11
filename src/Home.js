import React from "react";
import { Grid, Container, makeStyles, Button, Card } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles({
  main: {
    position: "relative",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100vh",
  },
  text: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    color: "white",
    textAlign: "center",
    transform: "rotate(-5deg)",
  },
  text2: {
    flexDirection: "column",
  },

  h1Text: {
    margin: "1px",
    fontSize: "xxx-large",
    textTransform: "uppercase",
  },
  h2Text: {
    margin: "1px",
    fontSize: "xx-large",
  },
  textSpan: {
    backgroundColor: "#03a9f4",
    padding: "2px 20px",
  },
  button: {
    margin: "50px 0",
  },
});

const urlLink =
  "https://images.unsplash.com/photo-1540496905036-5937c10647cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";

function Home() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Container
      className={classes.main}
      style={{ backgroundImage: `url(${urlLink})` }}
      maxWidth="m"
    >
    
      <Grid container className={classes.text}>
        <Grid container className={classes.text2}>
          <h1 className={classes.h1Text}>
            <span className={classes.textSpan}>TRAIN WITH CONFIDENCE</span>
          </h1>
          <h2 className={classes.h2Text}>
            <span className={classes.textSpan}>AT THE UK's BEST GYM</span>
          </h2>
          <Grid className={classes.button}>
            <Button variant="contained" color="secondary">
              first month free!
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        <Card>we</Card>
        <Card>are</Card>
        <Card>worl</Card>
      </Grid>
    </Container>
  );
}

export default Home;
