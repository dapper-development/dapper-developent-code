import React from "react";
import "../App.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles(() =>
  createStyles({
    container: {
      background: "black",
      textAlign: "center",
      
      
      
    },
    item: {
      margin: '2em',
      fontWeight: 'bold',
      fontSize: '1em',
      color: 'white',
      textDecoration: 'none',
    },
  })
);
function Footer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid
        className={classes.container}
        container
        spacing={1}
        direction="column"
        justify="center"
        alignItems="center"
        alignContent="center"
        wrap="nowrap"
      >
        <Grid className={classes.item} item>
          <Link to={"/Contact"} className={classes.item} > 
            {" "}
            Contact Us
            {" "}

          </Link>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Footer;
