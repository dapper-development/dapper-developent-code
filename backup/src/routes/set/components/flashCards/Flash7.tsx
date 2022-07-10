import {
  Typography,
  Container,
} from "@material-ui/core";
import React from "react";
import useStyles from "../../styles/styles";

function Flash7() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes.cardDiv}>
        <Typography
          className={classes.flashCardTitle}
          variant="h3"
          gutterBottom
        >
          Ticket Reports
        </Typography>
        <Typography className={classes.flashCardText} variant="h6" gutterBottom>
          View ticket sales in real time to know how many seats are sold and
          still available.{" "}
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default Flash7;
