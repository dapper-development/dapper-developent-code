import React from "react";
import "../App.css";


import BlackLogo from "../resources/images/MainLogo.png";
import idk from "../resources/images/network.png";
import set from "../resources/images/set.png";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

// End of imorts
function Landing() {
  const useStyles = makeStyles(() =>
    createStyles({
      navBar: {

        flexGrow: 1,
      },
      ImgSet: {
        maxWidth: '16%',
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
        marginBottom: '5em',

      },
    })
  );
  const classes = useStyles();
  return (
    <React.Fragment>
      <div style={{ textAlign: 'center', marginTop: "5em" }} >
      <a
          
          rel={"noreferrer"}
          style={{ textDecoration: "none", color: "white", }}
          href="https://dapperdevelopment.net/"

        >

        <img
          src={BlackLogo}
          className={classes.Mainimg}
          alt="dapperEyes"
        />
        </a>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
       

      >
      </Grid>

      
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
       

      >
        <a
          target={"_blank"}
          rel={"noreferrer"}
          style={{ textDecoration: "none", color: "white", }}
          href="https://portfolio-idk.dapperdevelopment.net"

        >
          <img src={idk} className={classes.Img} alt="idk" />
        </a>



        <a
          target={"_blank"}
          rel={"noreferrer"}
          style={{ textDecoration: "none", color: "white", }}
          href="https://portfolio-set.dapperdevelopment.net/"

        >
          <img src={set} className={classes.ImgSet} alt="set" />
        </a>
      </Grid>
        <Typography className="subTitleText" variant="h5" >
         Designed, Developed, Tested, and Deployed by: Victor Jaimes-Puente
        </Typography>
      </div>
    </React.Fragment>
  );
}

export default Landing;
