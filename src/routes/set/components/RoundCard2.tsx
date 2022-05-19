import { Container } from "@material-ui/core";
import React from "react";
import useStyles from "../styles/styles";
import arts from '../resources/images/cir2.png'



export default function RoundCard2() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container style={{border: 'none',}}>
        <img
          className={classes.cirImg}
          src={arts}
          alt="arts"
        />
      </Container>
    </React.Fragment>
  );
}

