import React from "react";
import useStyles from "../styles/styles";
import { Grid, Paper } from "@material-ui/core";

import Container from "@material-ui/core/Container";
import SellTicketsCard from "./SellTicketsCard";
import ScanTicketsCard from "./ScanTicketsCard";
import GetYourMoneCard from "./GetYourMoneyCard";
import BlackBar2 from "./BlackBar2";
import BlackBar1 from "./BlackBar1";

export default function SquareCards() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Paper elevation={16} style={{paddingBottom: '5em', marginBottom: '10em'}}  className={classes.cardSectionDiv} >
      <Container className={classes.cardSectionDiv}>
      <BlackBar1 />
        <Grid container spacing={10}>
          <Grid item spacing={10} xs sm md lg xl  >
            <SellTicketsCard />
          </Grid>
          <Grid item spacing={10} xs sm md lg xl>
            <ScanTicketsCard />
          </Grid>
          <Grid item spacing={10} xs sm md lg xl>
            <GetYourMoneCard />
          </Grid>
        </Grid>
      </Container>
      </Paper>
    </React.Fragment>
  );
}
