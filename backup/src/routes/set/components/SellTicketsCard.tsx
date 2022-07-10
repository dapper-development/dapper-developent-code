import { Typography, Button, Dialog, createStyles, Theme, withStyles, Container } from "@material-ui/core";
import React from "react";
import useStyles from "../styles/styles";
import sellTicketsImg from '../resources/images/setllTicketsImg.png'
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";




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

function SellTicketsCard() {
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
          Sell Your Tickets
        </Typography>
        <img
          className={classes.cardImg}
          src={sellTicketsImg}
          alt="sell tickets"
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
                      Fully personalized to the client’s website and brand
                    </li>
                    <li>
                      Customizable Event and Venue Information
                    </li>
                    <li>
                      Access codes assist with prioritizing access for parents and guardians
                    </li>
                    <li>
                      Offer Season tickets to your team's biggest fans.
                    </li>
                    <li>
                      Share Tickets by Email or Text Message
                    </li>
                    <li>
                      Free customizable ad space to sell to your sponsors
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

export default SellTicketsCard;