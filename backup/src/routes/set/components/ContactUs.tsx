import {
  Typography,
  Button,
  Dialog,
  Theme,
  withStyles,
  Container,
  Box,
  Grid,
  IconButton,
} from "@material-ui/core";
import React from "react";
import useStyles from "../styles/styles";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import emailjs from "emailjs-com";
import CloseIcon from "@material-ui/icons/Close";

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



function ContactUs() {
  const classes = useStyles();
  function sendEmail(e: any) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ukaav7c",
        "template_c8roe4t",
        e.target,
        "user_SAp7YJ2eVCLgCjHBPYxYG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

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
        {/* POP UP */}
        <div>
          <Button
            onClick={handleClickOpen}
            style={{
              backgroundColor: "red",
              // marginBottom: "5em",
              fontWeight: "bold",
              color: 'white',
              fontSize: '1.5em', 
              fontFamily: [
              
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
              ].join(','),
            }}
          >
            Contact Us
          </Button>
          <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <DialogContent dividers style={{ fontWeight: 'bold', padding: '1em', }}>
              <DialogActions>
                <React.Fragment>
                  <Grid container xs sm md lg xl >
                    <IconButton
                      aria-label="close"
                      className={classes.closeButton}
                      onClick={handleClose}
                    >
                      <CloseIcon />
                    </IconButton>
                    <form onSubmit={sendEmail} className={classes.form}>
                      <Grid item xs sm md lg xl>
                        <Box style={{ textAlign: "center" }}>
                          <Typography variant="h4">First Name</Typography>
                          <br />
                          {/* <input className={classes.input} type="text" name="firstName" /> */}
                          <input className={classes.input} name="firstName" />
                        </Box>
                      </Grid>
                      <br />
                      <Grid item xs sm md lg xl>
                        <Typography variant="h4">Last Name</Typography> <br />
                        <input className={classes.input} name="lastName" />
                      </Grid>
                      <br />
                      <Grid item xs sm md lg xl>
                        <Grid item xs sm md lg xl>
                          <Typography variant="h4">School</Typography> <br />
                          <input className={classes.input} name="School" />
                        </Grid>
                        <br />
                        <Typography variant="h4">Email</Typography> <br />
                        <input className={classes.input} name="email" />
                      </Grid>
                      <br />


                      <Grid item xs sm md lg xl>
                        <Typography variant="h4">Phone Number</Typography>{" "}
                        <br />
                        <input className={classes.input} type="number" name="phone" />
                      </Grid>

                      <Grid item xs sm md lg xl>
                        <Button
                          style={{ color: 'white', backgroundColor: 'red', fontWeight: 'bold', marginTop: '1em' }}
                          type="submit"
                          value="Send"
                          onClick={handleClose}
                        >
                          {" "}
                          Submit{" "}
                        </Button>


                      </Grid>
                    </form>
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

export default ContactUs;
