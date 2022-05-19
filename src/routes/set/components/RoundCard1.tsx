import { Container } from "@material-ui/core";
import React from "react";
import useStyles from "../styles/styles";
import athletics from '../resources/images/cir1.png'



function RoundCard1() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes.cardDiv}>
        <img
          className={classes.cirImg}
          src={athletics}
          alt="athletics"
        />
      </Container>
    </React.Fragment>
  );
}

export default RoundCard1;