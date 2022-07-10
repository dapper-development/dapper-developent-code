import React from "react";
import emailjs from "emailjs-com";
import Grid from "@material-ui/core/Grid";
import { Button, Box, Typography, TextField,  } from "@material-ui/core";
import useStyles from "../styles/styles";

// import './ContactUs.css';

export default function ContactUs() {
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

  return (
    <React.Fragment>
      <Grid container xs sm md lg xl>
        <form onSubmit={sendEmail} className={classes.form}>
          <Grid item xs sm md lg xl>
            <Box style={{ textAlign: "center" }}>
              <Typography variant="h6">First Name</Typography>
              <br />
              {/* <input type="text" name="firstName" /> */}
              <TextField required name="firstName"  />
            </Box>
          </Grid>
          <br />
          <Grid item xs sm md lg xl>
            <Typography variant="h6">Last Name</Typography> <br />
            <TextField  required name="lastName" />
          </Grid>
          <br />
          <Grid item xs sm md lg xl>
            <Typography variant="h6">Email</Typography> <br />
            <TextField required name="email" />
          </Grid>
          <br />

          <Grid item xs sm md lg xl>
            <Typography variant="h6">School</Typography> <br />
            <TextField name="School" />
          </Grid>
          <br />

          <Grid item xs sm md lg xl>
            <Typography variant="h6">Phone Number</Typography> <br />
            <TextField required type="number" name="phone" />
          </Grid>
          <br />

          <Grid item xs sm md lg xl>
            <Typography variant="h6">How did you hear of us?</Typography> <br />
            <TextField name="hearOfUs" />
          </Grid>
          <br />

          <Grid item xs sm md lg xl>
            <Typography variant="h6">Questions?</Typography> <br />
            <TextField multiline rows={4} name="questions" />
          </Grid>
          <br />
          <Grid item xs sm md lg xl>
            <Button
              className={classes.formButton}
              type="submit"
              value="Send"
            >
              {" "}
              Submit{" "}
            </Button>
          </Grid>
        </form>
      </Grid>
    </React.Fragment>
  );
}
