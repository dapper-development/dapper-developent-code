import {
  Typography,
  Container,
} from "@material-ui/core";
import React from "react";
import useStyles from "../../styles/styles";

function Flash1() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes.cardDiv}>
        <Typography
          className={classes.flashCardTitle}
          variant="h3"
          gutterBottom
        >
          Box Office
        </Typography>
        <Typography className={classes.flashCardText} variant="h6" gutterBottom>
        Sell digital tickets to all school sports events from a single online box office. 
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default Flash1;
