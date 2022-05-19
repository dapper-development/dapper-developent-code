import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import useStyles from "../styles/styles";

export default function BlackBar3() {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center" spacing={2}>
      <Grid container item xs={12} spacing={0}>
        <p className={classes.whiteBarDiv} style={{marginTop: '2em',}} >Top Notch Support </p>
      </Grid>
    </Grid>
  );
}
