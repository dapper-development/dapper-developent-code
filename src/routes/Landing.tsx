import React from "react";
import "../App.css";
import Idk from "../routes/Idk";
import Over500 from "../routes/Over500";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlackLogo from "../resources/images/BlackLogo.png";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

// End of imorts
function Landing() {
  const useStyles = makeStyles(() =>
    createStyles({
      navBar: {
       
        flexGrow: 1,
      },
      Img: {
        maxWidth: '20%',

      },
      Mainimg: {
        paddingBottom: "1em",
        maxWidth: "66%",

      },
      gridContainer: {
        justifyContent: "center",
      },
      titleText: {
        color: 'white',
        textDecoration: 'bold',
        fontSize: '1em'
      },
      subTitleText: {
        color: 'white',

      },
    })
  );
  const classes = useStyles();
  return (
    <React.Fragment>
      <div style={{ textAlign: 'center', }} >
        <img
          src={BlackLogo}
          className={classes.Mainimg}
          alt="dapperEyes"
        />
      </div>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        wrap="nowrap"
      >
        <Typography className="titleText" variant="h1" >
          Dapper Development
        </Typography>
      </Grid>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        wrap="nowrap"

      >
        <Typography className="subTitleText" variant="h5" >
          Victor Jaimes-Puente
        </Typography>
      </Grid>
    </React.Fragment>
  );
}

export default Landing;

        // <Link style={{ textDecoration: 'none', }} to={"/Idk"}>
        //   {/* <h1 style={{ color: 'white', textAlign: 'center', }} >IDK That's Perfect</h1> */}
        //   <img
        //     src={dapperEyes}
        //     className={classes.Img}
        //     alt="IDKThat's Perfect Logo"
        //   />
        // </Link>