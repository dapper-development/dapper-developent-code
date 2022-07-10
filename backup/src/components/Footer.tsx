import React from "react";
import "../App.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles } from "@material-ui/core";
const useStyles = makeStyles(() =>
  createStyles({
    container: {
      marginTop: '5em',
      background: "#191A1A",
      textAlign: 'center',
    },
    item: {
      marginBottom: '1px',
     
    },
  })
);
function Footer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid
        className={classes.container}
        container
        spacing={1}
        direction="column"
        justify="center"
        alignItems="center"
        alignContent="center"
        wrap="nowrap"
     
      >
        <Grid className={classes.item} item>
          <p className={classes.item} style={{ color: 'white' }}>Austin Owned and Operated</p>
          <p style={{ color: 'white' }}>Contact Us</p>
          <p> About Us </p>
        </Grid>

      </Grid>
    </React.Fragment>
  );
}

export default Footer;
