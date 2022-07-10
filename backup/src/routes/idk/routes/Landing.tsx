import React from "react";
import "../App.css";

import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import idkLogo from "../resources/images/idkBlackLogo.png";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import idkNetworkLogo from "../resources/images/network.png";
import fiveLogo from "../resources/images/over500.png";
import twoHourLogo from "../resources/images/2HLB-full.png";
// End of imorts
function Landing() {
  const useStyles = makeStyles(() =>
    createStyles({
      navBar: {
        backgroundColor: "black",
        flexGrow: 1,
      },
      Img: {
        maxWidth: '33%',
        marginTop: '2em',
      },
      Mainimg: {
        marginTop: '5em',
        width: "66%",
        
      },
      hourImg: {
        height: "38vh",
        marginLeft: "1em",
        marginRight: "auto",
        marginBottom: ".25em",
        marginTop: ".25em",
      },
      gridContainer: {
        justifyContent: "center",
      },
      navGridItem: {},
    })
  );
  const classes = useStyles();
  return (
    <React.Fragment>
      {/* Title Section */}
     
        {/* MainIMG */}
      <div style={{textAlign: 'center'}} >
        <div style={{textAlign: 'center',}} >
            <img
              src={idkNetworkLogo}
              className={classes.Mainimg}
              alt="IDK Network Logo"
            />
        </div>
      
      {/* IDK Section */}
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        wrap="nowrap"

      >
        <Link style={{ textDecoration: 'none', }} to={"/Idk"}>
          {/* <h1 style={{ color: 'white', textAlign: 'center', }} >IDK That's Perfect</h1> */}
          <img
            src={idkLogo}
            className={classes.Img}
            alt="IDKThat's Perfect Logo"
          />
        </Link>
      </Grid>
      {/* Over500 Section */}
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        wrap="nowrap"

      >
        <Link style={{ textDecoration: 'none', }} to={"/Over500"}>
          {/* <h1 style={{ color: 'white', textAlign: 'center', }} >Over500</h1> */}
          <img
            src={fiveLogo}
            className={classes.Img}
            alt="Over500 Logo"
          />
        </Link>
      </Grid>
      {/* THLB Section */}
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        wrap="nowrap"

      >
        <Link style={{ textDecoration: 'none', paddingBottom: '2em', }} to={"/2HourLunchBreak"}>
          {/* <h1 style={{ color: 'white', textAlign: 'center', }} >IDK That's Perfect</h1> */}
          <img
            src={twoHourLogo}
            className={classes.Img}
            alt="THLB Logo"
          />
        </Link>
      </Grid>
        </div>
\    </React.Fragment>
  );
}

export default Landing;
