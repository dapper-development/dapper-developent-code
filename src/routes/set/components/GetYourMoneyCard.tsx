import {
  Card,
  Typography,
  Button,
  Dialog,
  createStyles,
  Theme,
  withStyles,
  Container,
} from "@material-ui/core";
import React from "react";
import useStyles from "../styles/styles";
import moneyImg from "../resources/images/getMoney.png";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function GetYourMoneCard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Container className={classes.cardDiv}>
        <Typography className={classes.cardTitle} variant="h3" gutterBottom>
          Get Your<br />Money
        </Typography>
        <img
          className={classes.cardImg3}
          src={moneyImg}
          alt="sell tickets"
        />
        {/* POP UP */}
        <div>
          <Button style={{
            background: "black",
            color: "white",
            fontWeight: "bold",
          }} onClick={handleClickOpen}>
            More Information
          </Button>
          <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <DialogContent dividers>
              <DialogActions>
                <Typography gutterBottom>
                  <ul>
                    <li>
                      No fees on refunded events, clients get 100% of the money back
                    </li>
                    <li>
                      Complete Financial Transparency
                    </li>
                    <li>
                      Real-Time Reports
                    </li>
                    <li>
                      Opportunity to highlight sponsors on tickets and keep the ad revenue
                    </li>
                    <li>
                      Decreased attrition and resources needed onsite.
                    </li>
                  </ul>
                </Typography>
              </DialogActions>
            </DialogContent>
          </Dialog>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default GetYourMoneCard;
