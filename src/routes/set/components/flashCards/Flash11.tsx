import {
  Typography,
  Container,
} from "@material-ui/core";
import React from "react";
import useStyles from "../../styles/styles";

function Flash11() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes.cardDiv}>
        <Typography
          className={classes.flashCardTitle}
          variant="h3"
          gutterBottom
        >
          Customer Support
        </Typography>
        <Typography className={classes.flashCardText} variant="h6" gutterBottom>
          School Event Tickets provides support to you as well as your fans, by
          web, phone, chat and e-mail. Our customer support team are available
          whenever your fans have questions even after business hours.
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default Flash11;
