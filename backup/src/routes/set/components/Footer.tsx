import useStyles from "../styles/styles";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import Linked from '@material-ui/icons/LinkedIn';
import logo from "../resources/images/logo.png";
import texas from "../resources/images/texas3.png";

export default function NavBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Paper elevation={24}  >
        <footer className={classes.footerDiv}>
          <Grid container >
            <Grid item xs={12} sm md lg xl>
              <Typography align="center">
                <Button
                  href="https://schooleventticketslogin.com/"
                  className={classes.navLogoBox}
                >
                  <img className={classes.footLogo} src={logo} alt="logo" />
                </Button>
                <div className={classes.socialDiv}>
                  <Button href="https://www.facebook.com/School-Event-Tickets-108237487587102/">
                    <Typography   >
                      <FacebookIcon className={classes.socialLinks} />
                    </Typography>
                  </Button>
                  {/* <Button href="https://www.instagram.com/schooleventtickets/">
                  <Typography   >
                    <InstagramIcon className={classes.socialLinks} />
                  </Typography>
                </Button> */}
                  <Button href="https://www.linkedin.com/company/school-event-tickets">
                    <Typography  >
                      <Linked className={classes.socialLinks} />
                    </Typography>
                  </Button>
                </div>
              </Typography>
            </Grid>
            <Grid item xs={12} sm md lg xl>
              <Typography variant="subtitle2" align="center" component="p" className={classes.copyRight}>
                Call <Typography variant="subtitle2" style={{ color: 'red', }} >877-536-8285</Typography> Text <Typography variant="subtitle2" style={{ color: 'red', }} >210-887-9506</Typography>
                Email <br />
                {/* <Button style={{ color: 'red', }} href="mailto:Info@schooleventtickets.com" target="_top">Info@SchoolEventTickets.com</Button> */}
                <a style={{ color: 'red', }} href="mailto:Info@schooleventtickets.com">Info@SchoolEventTickets.com</a>
                <br />
                {"Copyright © "}
                {new Date().getFullYear()}
                {"."}
              </Typography>
            </Grid>
            <Grid item xs={12} sm md lg xl>
              <img src={texas} alt="texas" className={classes.texas} />
            </Grid>
          </Grid>
        </footer>
      </Paper>
    </React.Fragment>
  );
}
