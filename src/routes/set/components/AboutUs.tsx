import { Grid, Paper, Typography } from "@material-ui/core";
import IframeResizer from "iframe-resizer-react";
import React from "react";
import useStyles from "../styles/styles";
import BlackBar6 from "./BlackBar6";
import ClientFeedback from "./ClientFeedback";
import ContactUs from "./ContactUs";

function VideoCard() {
  const classes = useStyles();

  return (
    <React.Fragment>
      
      <Paper elevation={16} style={{ marginBottom: '10em', marginTop: '10em', width: '100%', marginLeft: 'auto', marginRight: 'auto',}}  >
        <Grid
          container
          spacing={1}
          direction="column"
          justify="center"
          alignItems="center"
          alignContent="center"
          wrap="nowrap"


        >

          <Grid item style={{textAlign: 'center', padding: '3em', marginBottom: '2.5em', }} >
            <BlackBar6  />
            <Typography variant="body1" color="initial" style={{ fontSize: '2em', marginBottom: '0em',}}>
              At School Event Tickets it is our mission to bring communities and schools together through live experiences such as athletic events, band concerts, dance competitions, and theater productions.
              <br />
              <br />

              Since beginning our journey in the summer of 2020, we have helped over 150 School Districts and have hosted more then 10,000 events through our all-inclusive digital ticketing software, resulting in over 500,000 tickets sold. Located Deep in the Heart of Texas; School Event Tickets is driven to provide complete digital ticketing solutions for High Schools and Colleges whose fans prefer a cashless option when purchasing tickets.
            </Typography>
          </Grid>
        </Grid>
        <div className={classes.vidCardDiv}>
          <IframeResizer className={classes.vid}
            log
            // heightCalculationMethod="bodyScroll"
            src="https://www.youtube.com/embed/hY1TBDL9zAI"
          />
        </div>
        <div style={{ paddingBottom: '5em', }} >
        </div>
      </Paper>
          <ClientFeedback />

    </React.Fragment>
  );
}

export default VideoCard;