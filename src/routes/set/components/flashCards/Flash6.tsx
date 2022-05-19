import {
  Typography,
  Container,
} from "@material-ui/core";
import React from "react";
import useStyles from "../../styles/styles";

function Flash6() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes.cardDiv}>
        <Typography
          className={classes.flashCardTitle}
          variant="h3"
          gutterBottom
        >
          Mobile Scan
        </Typography>
        <Typography className={classes.flashCardText} variant="h6" gutterBottom>
          Mobile Scan Scan parents, visitors and fans digital or printed printed
          tickets.
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default Flash6;
