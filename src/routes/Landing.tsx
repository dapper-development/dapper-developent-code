import React from "react";
import "../App.css";
import idk from "../resources/images/network.png";
import set from "../resources/images/set.png";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";


// End of imorts
function Landing() {
  const useStyles = makeStyles(() =>
    createStyles({
      Img: {
       height: '3em',
       margin: '1em',
      },
      title: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
      },
    })
  );
  const classes = useStyles();
  return (
    <React.Fragment>

      <Grid
       container
       spacing={1}
       direction="row"
       justifyContent="center"
       alignItems="center"
       alignContent="center"
       wrap="wrap"

      >
        <Link style={{ textDecoration: 'none', }} to={"/Idk-full"}>
          <img
            src={idk}
            className={classes.Img}
            alt="IDKThat's Perfect Logo"
          />
        </Link>

      </Grid>

     <Grid
       container
       spacing={1}
       direction="row"
       justifyContent="center"
       alignItems="center"
       alignContent="center"
       wrap="wrap"
       
     >
       
        <Link style={{ textDecoration: 'none', }} to={"/Set-full"}>
          <img
            src={set}
            className={classes.Img}
            alt="SET Logo"
          />
        </Link>
      </Grid>
      <Grid
       container
       spacing={1}
       direction="row"
       justifyContent="center"
       alignItems="center"
       alignContent="center"
       wrap="wrap"

      >
        <Link style={{ textDecoration: 'none', }} to={"/Resume"}>
          <Typography className={classes.title} >Resume</Typography>
        </Link>

      </Grid>

    </React.Fragment>
  );

}

export default Landing;
