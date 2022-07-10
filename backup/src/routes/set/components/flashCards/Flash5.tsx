import {
  Typography,
  Container,
} from "@material-ui/core";
import React from "react";
import useStyles from "../../styles/styles";

function Flash5() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes.cardDiv}>
        <Typography
          className={classes.flashCardTitle}
          variant="h3"
          gutterBottom
        >
          Passcodes
        </Typography>
        <Typography className={classes.flashCardText} variant="h6" gutterBottom>
          Provide unique passcodes for each parents to access tickets or private
          events before the general public.
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default Flash5;
