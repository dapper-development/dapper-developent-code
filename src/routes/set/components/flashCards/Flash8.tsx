import {
  Typography,
  Container,
} from "@material-ui/core";
import React from "react";
import useStyles from "../../styles/styles";

function Flash8() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes.cardDiv}>
        <Typography
          className={classes.flashCardTitle}
          variant="h3"
          gutterBottom
        >
          Cashless{" "}
        </Typography>
        <Typography className={classes.flashCardText} variant="h6" gutterBottom>
          Offer cashless payment options for fans and prevent your staff from
          handling cash. Sell digital tickets to all school sports events from a
          single online box office.
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default Flash8;
