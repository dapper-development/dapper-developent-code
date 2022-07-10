import { makeStyles, createStyles, Typography, } from "@material-ui/core";
import React from "react";
import Grid from "@material-ui/core/Grid";

import "../App.css";


function Contact() {
  const useStyles = makeStyles(() =>
  createStyles({
    container: {
      margin: '.5em',

    },
  })
);
const classes = useStyles();
  return (
    <React.Fragment>
     <Grid
       container
       spacing={0}
       direction="row"
       justify="center"
       alignItems="center"
       alignContent="center"
       className={classes.container}
     >
       <Typography variant="h6" color="initial"> Podcast Booking + General Information </Typography>
     </Grid>
    </React.Fragment>
  );
}

export default Contact;
