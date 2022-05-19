import {
  Typography,
  Container,
} from "@material-ui/core";
import React from "react";
import useStyles from "../../styles/styles";

function Flash12() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes.cardDiv}>
        <Typography
          className={classes.flashCardTitle}
          variant="h3"
          gutterBottom
        >
          Product Support
        </Typography>
        <Typography className={classes.flashCardText} variant="h6" gutterBottom>
          School Event Tickets on-call support team is available to help with
          tech questions <br /> and system monitoring via phone, chat and e-mail.{" "}
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default Flash12;
