import React from "react";
import useStyles from "../styles/styles";
import { Grid, Paper } from "@material-ui/core";

import Container from "@material-ui/core/Container";
import Flash1 from "./flashCards/Flash1";
import Flash2 from "./flashCards/Flash2";
import Flash3 from "./flashCards/Flash3";
import Flash4 from "./flashCards/Flash4";
import Flash8 from "./flashCards/Flash8";
import Flash5 from "./flashCards/Flash5";
import Flash6 from "./flashCards/Flash6";
import Flash7 from "./flashCards/Flash7";
import Flash9 from "./flashCards/Flash9";
import Flash10 from "./flashCards/Flash10";
import Flash11 from "./flashCards/Flash11";
import BlackBar3 from "./BlackBar3";
import BlackBar4 from "./BlackBar4";
import Flash12 from "./flashCards/Flash12";
import ContactUs from "./ContactUs";

export default function FlashCards() {
  const classes = useStyles();

  return (
    <React.Fragment>
            <Paper elevation={16} style={{paddingBottom: '5em', marginBottom: '10em'}} >
      <Container className={classes.topNotchFlashCardSectionDiv}>
            <BlackBar3 />
        <Grid container spacing={10}>
          <Grid item xs>
            <Flash10 />
          </Grid>
          <Grid item xs>
            <Flash11 />
          </Grid>
          <Grid item xs>
            <Flash12 />
          </Grid>
        </Grid>
      </Container>
        </Paper>

            <Paper elevation={16} style={{paddingBottom: '5em', marginBottom: '10em'}}  className={classes.cardSectionDiv} >
            <BlackBar4 />
      <Container className={classes.flashCardSectionDiv}>
        <Grid container spacing={0}>
          <Grid item spacing={5} xs={12} sm md lg xl >
            <Flash1 />
          </Grid>
          <Grid item spacing={5} xs={12} sm md lg xl >
            <Flash2 />
          </Grid>
          <Grid item spacing={5} xs>
            <Flash3 />
          </Grid>
        </Grid>
      </Container>
      {/* Container 2  */}
      <Container className={classes.flashCardSectionDiv}>
        <Grid container spacing={0}>
          <Grid item spacing={5} xs>
            <Flash4 />
          </Grid>
          <Grid item spacing={5} xs>
            <Flash5 />
          </Grid>
          <Grid item spacing={5} xs>
            <Flash6 />
          </Grid>
        </Grid>
      </Container>
      <Container className={classes.flashCardSectionDiv}>
        <Grid container spacing={0}>
          <Grid item spacing={5} xs>
            <Flash7 />
          </Grid>
          <Grid item spacing={5} xs>
            <Flash8 />
          </Grid>
          <Grid item spacing={5} xs>
            <Flash9 />
          </Grid>
        </Grid>
      </Container>
      </Paper>
    </React.Fragment>
  );
}
