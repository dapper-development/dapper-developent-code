import React from "react";
import useStyles from "../styles/styles";
import { Grid, Paper } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import RoundCard1 from "./RoundCard1";
import RoundCard2 from "./RoundCard2";
import RoundCard3 from "./RoundCard3";
import BlackBar1 from "./BlackBar1";
import BlackBar2 from "./BlackBar2";


export default function RoundCards() {
  const classes = useStyles();

  return (
    <React.Fragment>
    <Paper elevation={16} style={{paddingBottom: '5em', marginBottom: '10em'}}   className={classes.roundCardSectionDiv} >
    <BlackBar2 />
    <Container className={classes.roundCardSectionDiv}>
      <Grid container spacing={10}>
        <Grid item spacing={10} xs={12} sm md lg xl  >
          <RoundCard1 />
        </Grid>
        <Grid item spacing={10} xs={12} sm md lg xl>
          <RoundCard2 />
        </Grid>
        <Grid item spacing={10} xs={12} sm md lg xl>
          <RoundCard3 />
        </Grid>
      </Grid>
    </Container>
    </Paper>
  </React.Fragment>
  );
}
