import {
  Button,
  Dialog,
  Theme,
  withStyles,
  Container,
  Grid,
  IconButton,
} from "@material-ui/core";
import React, { useEffect } from 'react';
import useStyles from "../styles/styles";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import giveBack from '../resources/images/giveBack.jpg'
import CloseIcon from "@material-ui/icons/Close";
import ContactUs from "./ContactUs";


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

function GiveBack() {
  const classes = useStyles();
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Container className={classes.giveBackDiv}>
        {/* POP UP */}
        <div>

          <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <DialogContent>
              <DialogActions>
                <React.Fragment>
                  <Grid container >
                    <Grid item xs sm md lg xl style={{ textAlign: 'center', }}>
                      <img src={giveBack} className={classes.giveBackImg} alt="giveBack" />
                  
                        <ContactUs />
                
                      <IconButton
                        aria-label="close"
                        className={classes.closeButton}
                        onClick={handleClose}
                      >
                        <CloseIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </React.Fragment>
              </DialogActions>
            </DialogContent>
          </Dialog>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default GiveBack;
