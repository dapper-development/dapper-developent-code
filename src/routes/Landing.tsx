import React from "react";
import "../App.css";
import IDKFULL from './idk/components/App'


import BlackLogo from "../resources/images/MainLogo.png";
import idk from "../resources/images/network.png";
import set from "../resources/images/set.png";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

// End of imorts
function Landing() {
  const useStyles = makeStyles(() =>
    createStyles({
      navBar: {

        flexGrow: 1,
      },
      ImgSet: {
        maxWidth: '33%',
        margin: '5em'

      },
      Img: {
        maxWidth: '20%',
        margin: '5em'
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
        marginBottom: '1em',
        paddingBottom: '1em'

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
        wrap="nowrap"

      >
        <Link style={{ textDecoration: 'none', }} to={"/Idk-full"}>
          {/* <h1 style={{ color: 'white', textAlign: 'center', }} >IDK That's Perfect</h1> */}
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
       

      >

      </Grid>
    
    </React.Fragment>
  );

}

export default Landing;
