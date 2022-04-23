import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import blackLogo from "../resources/images/BlackLogo.png";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Idk from "../routes/Idk";
import Landing from "../routes/Landing";
import Over500 from "../routes/Over500";
import Thlb from "../routes/Thlb";

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
            {/* <Link to={"/Home"}>
              <img
                src={blackLogo}
                className={classes.networkImg}
                alt="IDK Network Logo"
              />
            </Link> */}
            {/* Second Button */}

          </Grid>
        </Grid>
        <Switch>
        {/* <Route path="/2HourLunchBreak">
            <Thlb />
          </Route>
          <Route path="/Idk">
            <Idk />
          </Route>
          <Route path="/Over500">
            <Over500 />
          </Route> */}
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </AppBar>
    </Router>
  );
}
