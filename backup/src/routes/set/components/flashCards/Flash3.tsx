import {
  Typography,
  Container,
} from "@material-ui/core";
import React from "react";
import useStyles from "../../styles/styles";


function Flash3() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes.cardDiv}>
        <Typography className={classes.flashCardTitle} variant="h3" gutterBottom>
          Season Pass
        </Typography>
        <Typography className={classes.flashCardText} variant="h6" gutterBottom>
        Simplify season pass sales with pick your seat for ticket holders. 
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default Flash3;
