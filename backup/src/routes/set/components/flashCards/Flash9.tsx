import {
  Typography,
  Container,
} from "@material-ui/core";
import React from "react";
import useStyles from "../../styles/styles";


function Flash9() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes.cardDiv}>
        <Typography className={classes.flashCardTitle} variant="h3" gutterBottom>
        Mobile POS
        </Typography>
        <Typography className={classes.flashCardText} variant="h6" gutterBottom>
 Manage on-site ticket sales along with online purchases from one online box office.         </Typography>
      </Container>
    </React.Fragment>
  );
}

export default Flash9;
