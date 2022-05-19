import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import "../App.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import AppleIcon from "@material-ui/icons/Apple";
import FacebookIcon from "@material-ui/icons/Facebook";
import fiveLogo from "../resources/images/over500.png";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { createStyles, Grid, makeStyles, Typography } from "@material-ui/core";
import Footer from "../components/Footer";
import { Icon } from "@iconify/react";
function Over500() {
  const useStyles = makeStyles(() =>
    createStyles({
      // STYLING
      Mainimg: {
        height: "auto",
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "3.5em",
        marginTop: "2.5em",
       
      },

      gridContainer: {
        justifyContent: "center",
      },
      navGridItem: {},
    })
  );
  // STYLING

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
        style={{ textAlign: "center", maxWidth: '66%', margin: 'auto', }}
      >
        {/* MAIN-IMAGE */}
          {/* <img
            src={fiveLogo}
            className={classes.Mainimg}
            alt="IDK Network Logo"
          /> */}
      </Grid>
      {/* MAIN-IMAGE */}
      <Grid style={{ textAlign: "center" }}>
        {/* INTRO */}
        <Typography style={{ textAlign: "center", margin: "3em" }} variant="h6">
        Join us at the IDK Network in welcoming our newest family member, OVER 500. Our hosts Mark and Big Nesto talk everything current day sports, while sneaking in some drunken tangents in there.
        </Typography>
        {/* INTRO */}
        {/* SOCIAL */}
        <Grid  item style={{margin: '5em'}} >
            <a
              target={"_blank"}
              rel={"noreferrer"}
              style={{ textDecoration: "none", color: "white", margin: '1em' }}
              href="https://www.instagram.com/over500pod/"
            >
              <InstagramIcon />
            </a>
            {/* <a
              target={"_blank"}
              rel={" noreferrer"}
              style={{ textDecoration: "none", color: "white", margin: '1em' }}
              href="https://www.facebook.com/idkthatsperfect/"
            >
              <FacebookIcon />
            </a> */}

            <a
              target={"_blank"}
              rel={"noreferrer"}
              style={{ textDecoration: "none", color: "white", margin: '1em' }}
              href="https://open.spotify.com/show/3dFOsPq2REhApbdM1Wz1so"
            >
              <Icon icon="mdi:spotify" height="24" />
            </a>
            {/* <a
              target={"_blank"}
              rel={"noreferrer"}
              style={{ textDecoration: "none", color: "white", margin: '1em' }}
              href="https://podcasts.apple.com/us/podcast/idk-thats-perfect/id1453639753"
            >
              <AppleIcon />
            </a> */}
            {/* <a
              target={"_blank"}
              rel={"noreferrer"}
              style={{ textDecoration: "none", color: "white", margin: '1em' }}
              href="https://www.youtube.com/c/IDKThatsPerfect"
            >
              <YouTubeIcon /> */}
            {/* </a> */}
          </Grid>
        </Grid>
        {/* YOUTUBE
        <Grid style={{ textAlign: "center", maxWidth: "80%", margin: "auto", paddingBottom: '5em', }}>
          <iframe
            frameBorder="0"
            width="auto"
            height="300%"
            src="https://www.youtube.com/embed/JXgy7TNcuTU"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
          ></iframe>
        </Grid> */}
        {/* SoundCloud */}
        <Grid
          style={{
            textAlign: "center",
          }}
        >
          <Grid
            style={{ textAlign: "center", maxWidth: "80%", margin: "auto" }}
          >
            <iframe
              frameBorder="0"
              src="https://open.spotify.com/embed/show/3dFOsPq2REhApbdM1Wz1so?utm_source=generator"
              height={"300%"}
              width={"auto"}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </Grid>
        </Grid>
        {/* SPOTIFY */}
        <Grid
          style={{
            textAlign: "center",
            marginBottom: '5em'
          }}
        >
          
        {/* YOUTUBE */}
      </Grid>

    </React.Fragment>
  );
}

export default Over500;

