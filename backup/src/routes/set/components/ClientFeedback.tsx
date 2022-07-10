import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import client1 from '../resources/images/client1.png'
import client2 from '../resources/images/client2.png'
import client3 from '../resources/images/client3.png'

import BlackBar5 from './BlackBar5';
import ContactUs from './ContactUs';

const tutorialSteps = [
  {
    imgPath:
      client1,
  },
  {
    imgPath:
      client2,
  },
  {
    imgPath:
      client3,
  },
];

const useStyles = makeStyles(() => ({
  root: {

    flexGrow: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  img: {
    margin: 'auto',
    height: '80%',
    maxWidth: '80%',
    overflow: 'hidden',
    display: 'block',
    width: '100%',
    paddingTop: '2em',
    paddingBottom: '2em',
  },
}));

export default function ClientFeedback() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <React.Fragment>
      <Paper elevation={12} style={{ maxWidth: '100%', marginBottom: '10em', paddingBottom: '5em', }} className={classes.root}>
        <BlackBar5 />
        <Paper elevation={12} style={{ maxWidth: '60%', marginLeft: 'auto', marginRight: 'auto',}} >
          <img
            className={classes.img}
            src={tutorialSteps[activeStep].imgPath}

          />

          <MobileStepper
            steps={maxSteps}
            position="static"
            variant="text"
            activeStep={activeStep}
            nextButton={
              <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                Next
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                Back
              </Button>
            }
          />
        </Paper>
        <div style={{ padding: '5em', }} >
          <ContactUs />
        </div>
      </Paper>
    </React.Fragment>
  );
}