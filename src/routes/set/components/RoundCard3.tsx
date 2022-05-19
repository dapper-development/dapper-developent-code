import { Container } from "@material-ui/core";
import React from "react";
import useStyles from "../styles/styles";
import dance from '../resources/images/cir3.png'



export default function RoundCard3() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container style={{border: 'none',}}>
        <img
          className={classes.cirImg}
          src={dance}
          alt="dance"
        />
      </Container>
    </React.Fragment>
  );
}

