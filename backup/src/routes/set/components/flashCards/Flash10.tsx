import {
  Typography,
} from "@material-ui/core";
import React from "react";
import useStyles from "../../styles/styles";

function Flash10() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography className={classes.flashCardTitle} variant="h3" gutterBottom>
        Success Managers
      </Typography>
      <Typography className={classes.flashCardText} variant="h6" gutterBottom>
        Every school is assigned a dedicated success manager to help schools
        sell event tickets online. School Event Tickets provides hands-on
        support every step of the way.
      </Typography>
    </React.Fragment>
  );
}

export default Flash10;
