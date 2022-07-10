import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import idkNetworkLogo from "../resources/images/network.png";
import idkLogo from "../resources/images/idkBlackLogo.png";
import fiveLogo from "../resources/images/over500.png";
import twoHourLogo from "../resources/images/2HLB-full.png";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Idk from "../routes/Idk";
import Landing from "../routes/Landing";
import Over500 from "../routes/Over500";
import Thlb from "../routes/Thlb";
import Contact from "../routes/Contact";

// Function for Navbar
export default function NavBar() {
  const useStyles = makeStyles(() =>
    createStyles({
      navBar: {
        backgroundColor: "black",
        flexGrow: 1,
      },
      networkImg: {
        height: "3em",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: ".25em",
        marginTop: ".25em",
      },
      gridContainer: {
        marginTop:'1em',
        justifyContent: "center",
      },
      navGridItem: {},
    })
  );
  const classes = useStyles();
  return (
    <Router>
      <AppBar position="sticky" className={classes.navBar}>
        <Grid className={classes.gridContainer}>
          {/* First Button */}
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className={classes.navGridItem}
          >
            <Link to={"/Home"}>
              <img
                src={idkNetworkLogo}
                className={classes.networkImg}
                alt="IDK Network Logo"
              />
            </Link>
            {/* Second Button */}
            <Link to={"/Idk"}>
              <img
                src={idkLogo}
                className={classes.networkImg}
                alt="IDKThat's Perfect Logo"
              />
            </Link>
            {/* Third Button */}
            <Link to={"/Over500"}>
              <img
                src={fiveLogo}
                className={classes.networkImg}
                alt="Over 500 Logo"
              />
            </Link>
            {/* Fourth Button */}
            <Link to={"/2HourLunchBreak"}>
              <img
                src={twoHourLogo}
                className={classes.networkImg}
                alt="2Hour Lunch Break Logo"
              />
            </Link>
          </Grid>
        </Grid>
        <Switch>
        <Route path="/Contact">
            <Contact />
          </Route>
        <Route path="/2HourLunchBreak">
            <Thlb />
          </Route>
          <Route path="/Idk">
            <Idk />
          </Route>
          <Route path="/Over500">
            <Over500 />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </AppBar>
    </Router>
  );
}
