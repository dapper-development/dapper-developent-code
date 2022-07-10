import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import React from "react";
import logo from "../resources/images/logo.png";
import useStyles from "../styles/styles";
import Videos from "./Videos";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import ScrollToTop from "./ScrollToTop";
import AboutUs from "./AboutUs";

export default function NavBar() {
  const classes = useStyles();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <React.Fragment>
      <Router>
        <AppBar elevation={24} className={classes.navBarDiv} position="sticky">
          <Grid container justify="center" alignItems="center" spacing={0}>
            {/* Menu */}
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Link to="/" className={classes.navLogoBox}>
                <img
                  className={classes.navLogo}
                  onClick={scrollToTop}
                  src={logo}
                  alt="logo"
                />
              </Link>
            </Grid>
            <Grid
              item
              style={{ justifyContent: "center", alignSelf: "center" }}
              spacing={10}
            >
              <Grid item>
                <a
                  href="https://schooleventticketslogin.com/"
                  className={classes.navLink}
                >
                  Find Game Tickets
                </a>
                <Link
                  className={classes.navLink}
                  onClick={scrollToTop}
                  to="/Videos"
                  style={{ paddingLeft: "1em" }}
                >
                  Video Tutorials
                </Link>
                <Link
                  className={classes.navLink}
                  onClick={scrollToTop}
                  style={{
                    paddingBottom: "1em",
                    paddingLeft: "1em",
                    margin: "auto",
                    textAlign: "center",
                  }}
                  to="/AboutUs"
                >
                  About Us
                </Link>
                <ScrollToTop />
              </Grid>
            </Grid>
          </Grid>
        </AppBar>
        <ScrollToTop />
        {/* SWITCH  */}

        <Switch>
          <Route path="/AboutUs">
            <AboutUs />
          </Route>
          <Route path="/Videos">
            <Videos />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}
