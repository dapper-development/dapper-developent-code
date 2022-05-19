import React from "react";
import "../App.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import AppleIcon from "@material-ui/icons/Apple";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Icon } from '@iconify/react';
import thlbLogo from "../resources/images/2HLB-full.png";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { createStyles, Grid, makeStyles, Typography } from "@material-ui/core";
import Footer from "../components/Footer";

function Thlb() {
  const useStyles = makeStyles(() =>
    createStyles({
      // STYLING
      Mainimg: {
        height: "auto",
        width: "85%",
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
                  <img
            src={thlbLogo}
            className={classes.Mainimg}
            alt="IDK Network Logo"
          />      </Grid>
      {/* MAIN-IMAGE */}
      <Grid style={{ textAlign: "center" }}>
        {/* INTRO */}
        <Typography style={{ textAlign: "center", margin: "3em" }} variant="h6">
        Follow Nic <a target={"_blank"}
              rel={"noreferrer"}
              style={{ textDecoration: "none", color: "white", margin: '1em' }}
              href="https://soundcloud.com/neighborhoodnic" >@neighborhoodnic</a> and Zeus (@trotwood_zeus), two young, black professionals from north Austin, TX as they discuss current events, various sports hot takes and issues that affect their hometown. They're unfiltered, definitely spicy, sometimes brilliant and always hilarious!
        </Typography>
        {/* INTRO */}
        {/* SOCIAL */}
        <Grid  item style={{margin: '5em'}} >
            <a
              target={"_blank"}
              rel={"noreferrer"}
              style={{ textDecoration: "none", color: "white", margin: '1em' }}
              href="https://twitter.com/The2HourLunch?s=20"
            >
              <TwitterIcon />
            </a>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              style={{ textDecoration: "none", color: "white", margin: '1em' }}
              href="https://www.instagram.com/the2hourlunchbreak/"
            >
              <InstagramIcon />
            </a>

            <a
              target={"_blank"}
              rel={"noreferrer"}
              style={{ textDecoration: "none", color: "white", margin: '1em' }}
              href="https://soundcloud.com/the2hourlunchbreak"
            >
              <Icon icon="mdi:soundcloud" width="28" />
            </a>
            {/* <a
              target={"_blank"}
              rel={"noreferrer"}
              style={{ textDecoration: "none", color: "white", margin: '1em' }}
              href="https://podcasts.apple.com/us/podcast/idk-thats-perfect/id1453639753"
            >
              <AppleIcon />
            </a> */}
            <a
              target={"_blank"}
              rel={"noreferrer"}
              style={{ textDecoration: "none", color: "white", margin: '1em' }}
              href="https://www.youtube.com/channel/UC5O7USm8rPVNXwIhrj1j3jg"
            >
              <YouTubeIcon />
            </a>
          </Grid>
        </Grid>
        {/* YOUTUBE */}
        <Grid style={{ textAlign: "center", maxWidth: "80%", margin: "auto", }}>
          <iframe
            frameBorder="0"
            width="auto"
           
            src="https://www.youtube.com/embed/EsZRq9Ls3Pw"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" ></iframe>
        </Grid>
        {/* SoundCloud */}
          <Grid
            style={{ textAlign: "center", maxWidth: "80%", margin: "auto", marginTop: '1em', }}
          >
             <iframe
              frameBorder="0"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1162672345&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
         
              width={"auto"}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </Grid>
       



    </React.Fragment>
  );
}

export default Thlb;
