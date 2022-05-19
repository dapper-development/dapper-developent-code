import {
  Typography,
  Container,
  Paper,
} from "@material-ui/core";
import React from "react";
import useStyles from "../styles/styles";
import IframeResizer from "iframe-resizer-react";


function Videos() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container >
        <Paper elevation={12} style={{width: '100%',}} >
          <Typography
            style={{
              color: 'red',
              fontWeight: 'bold',
              paddingTop: '.5em',
              paddingBottom: '.5em',
              textAlign: 'center',
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
            variant="h2"
            gutterBottom
          >
            Tutorial Videos
          </Typography>
        </Paper>
        <React.Fragment>
          {/* 1 */} <Paper elevation={12} >
            <p className={classes.videoTitles} >Account Settings</p>
            <div className={classes.vidCardDiv}  style={{width: '100%',}}>
              <IframeResizer className={classes.vid}
                log
                // heightCalculationMethod="bodyScroll"
                src="https://www.youtube.com/embed/5-za-IZcCbM" />
            </div>
          </Paper>
        </React.Fragment>
        <React.Fragment>
          <Paper elevation={16} >
            {/* 2 */}
            <p className={classes.videoTitles} >Create An Event</p>
            <div className={classes.vidCardDiv}>
              <IframeResizer className={classes.vid}
                log
                // heightCalculationMethod="bodyScroll"
                src="https://www.youtube.com/embed/Zzr5iUCRyEk" />
            </div>
          </Paper>
        </React.Fragment>
        <React.Fragment>
          <Paper elevation={16} >
            {/* 3 */}
            <p className={classes.videoTitles} >Create Access Codes</p>
            <div className={classes.vidCardDiv}>
              <IframeResizer className={classes.vid}
                log
                // heightCalculationMethod="bodyScroll"
                src="https://www.youtube.com/embed/3CtyEM3ElCI"
              />
            </div>
          </Paper>
        </React.Fragment>
        <React.Fragment>
          <Paper elevation={16} >
            {/* 4 */}
            <p className={classes.videoTitles} >Design An Event For Your School</p>
            <div className={classes.vidCardDiv}  >
              <IframeResizer className={classes.vid}
                style={{ marginBottom: '10em' }}
                log
                // heightCalculationMethod="bodyScroll"
                src="https://www.youtube.com/embed/RwLAOVgHgYM"
              />
            </div>
          </Paper>
        </React.Fragment>
        <React.Fragment>
          <Paper elevation={16} >
            {/* 5 */}
            <p className={classes.videoTitles} >Add Users To Account</p>
            <div className={classes.vidCardDiv}>
              <IframeResizer className={classes.vid}
                log
                // heightCalculationMethod="bodyScroll"
                src="https://www.youtube.com/embed/tenzNj-khp4" />
            </div>
          </Paper>
        </React.Fragment>
        <React.Fragment>
          <Paper elevation={16} >
            {/* 6 */}
            <p className={classes.videoTitles} >Selling Cash Tickets </p>
            <div className={classes.vidCardDiv}>
              <IframeResizer className={classes.vid}
                log
                // heightCalculationMethod="bodyScroll"
                src="https://www.youtube.com/embed/Yq9LbTAjiGc" />
            </div>
          </Paper>
        </React.Fragment>
        <React.Fragment>
          <Paper elevation={16} >
            {/* 7 */}
            <p className={classes.videoTitles} >Using Ticket Scanner</p>
            <div className={classes.vidCardDiv}>
              <IframeResizer className={classes.vid}
                log
                // heightCalculationMethod="bodyScroll"
                src="https://www.youtube.com/embed/EGMBXyGN-HY"
              />
            </div>
          </Paper>
        </React.Fragment>
        <React.Fragment>
          <Paper elevation={16} >
            {/* 8 */}
            <p className={classes.videoTitles} >Example : Buying Tickets With School Event Tickets</p>
            <div className={classes.vidCardDiv} style={{ marginBottom: '5em' }} >
              <IframeResizer className={classes.vid}
                style={{ marginBottom: '10em' }}
                log
                // heightCalculationMethod="bodyScroll"
                src="https://www.youtube.com/embed/U_ZjsnCFaNE"
              />
            </div>
          </Paper>
        </React.Fragment>
      </Container>
    </React.Fragment>
  );
}

export default Videos;
