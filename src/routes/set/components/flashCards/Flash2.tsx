import {
  Typography,
  Container,
} from "@material-ui/core";
import React from "react";
import useStyles from "../../styles/styles";


function Flash2() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes.cardDiv}>
        <Typography className={classes.flashCardTitle} variant="h3" gutterBottom>
          Seat Maps 
        </Typography>
        <Typography className={classes.flashCardText} variant="h6" gutterBottom>
        Design online seat maps of your school’s stadium, field or gymnasium allowing fans to pick their seats. 
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default Flash2;
