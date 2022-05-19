import { Typography, Container, Grid } from "@material-ui/core";
import React from "react";
import useStyles from "../styles/styles";
import digital from '../resources/images/2.png'


function BannerImgCard() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes.cardDiv}>
        <Grid container 
         direction="column"
         alignItems="center"
         justify="center"
        >
          <Grid item >
            <Typography variant="h2" className={classes.bannerDiv}>
              Complete School Digital Ticketing <br />
              All At No Cost
            </Typography>

          </Grid>
          <Grid item md={12} lg={12} xl={12} >
            <img
              className={classes.bannerCardImg}
              src={digital}
              alt="go digital"
            />
          </Grid>
          <Grid md={6} lg={6} xl={6} >
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center"

            >
              < Grid item >
              <Typography variant="h6" style={{ color: 'white', fontSize: '1.35em' , borderRadius: '1em', marginTop: '1.5em', }}>
                School-wide digital ticketing solution that provides event management, secure transactions, reporting, & touchless entry.
              </Typography>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
      </Container>
    </React.Fragment >
  );
}

export default BannerImgCard;