import {
  Typography,
  Container,
} from "@material-ui/core";
import React from "react";
import useStyles from "../../styles/styles";

function Flash4() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes.cardDiv}>
        <Typography
          className={classes.flashCardTitle}
          variant="h3"
          gutterBottom
        >
          Capacity{" "}
        </Typography>
        <Typography className={classes.flashCardText} variant="h6" gutterBottom>
          Capacity Control maximum capacity for each venue, section or event to
          manage event attendance.
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default Flash4;
