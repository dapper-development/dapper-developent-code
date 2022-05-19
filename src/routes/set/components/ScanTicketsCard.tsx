import { Typography, Button, Dialog, createStyles, Theme, withStyles, Container } from "@material-ui/core";
import React from "react";
import useStyles from "../styles/styles";
import scanTicketsImg from '../resources/images/scanImg.png'
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

function ScanTicketsCard() {
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
        <Typography
          className={classes.cardTitle}
          variant="h3"
          gutterBottom
        >
          Scan Your Tickets
        </Typography>
        <img
          className={classes.cardImg2}
          src={scanTicketsImg}
          alt="scan tickets"
        />
        {/* POP UP */}
        <div>
          <Button
            style={{
              background: "black",
              color: "white",
              fontWeight: "bold",
            }}
            onClick={handleClickOpen}
          >
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
                      User-level security to app for scanning tickets
                    </li>
                    <li>
                      Tickets are scanned in real time preventing duplicate tickets from being used
                    </li>
                    <li>
                      Alerts for Valid Ticket, Duplicate Ticket or Wrong Event will appear after tickets are scanned
                    </li>
                    <li>
                      Check In/Out Ability for Increased attendee management
                    </li>
                    <li>
                      Search guest names quickly for lost tickets to allow check-in on the spot
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

export default ScanTicketsCard;