import React from 'react';
import useStyles from '../styles/styles';
import bannerImg from '../resources/images/bannerLarge.jpg'
import Button from '@material-ui/core/Button';
import { Grid, Paper } from '@material-ui/core';
import BannerImgCard from './BannerImgCard';


export default function Banner() {
  const classes = useStyles();

  return (
    <React.Fragment   >
      <Paper elevation={16} style={{ marginBottom: '10em'}} >
      <Grid container >
        <Grid item xs sm md lg xl  >
          <div style={{
            backgroundImage: "url(" + `${bannerImg}` + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            textAlign: 'center',
            overflow: 'hidden' 
            
          }}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)'}} >
            <BannerImgCard  />
          </Grid>
          <Grid  item xs sm md lg xl  style={{textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)'}} >
            <Button href='https://schooleventticketslogin.com/' style={{
              position: "sticky",
              background: "red",
              color: "white",
              fontWeight: "bold",
              fontSize: "13px",
              borderRadius: "10px",
              borderColor: "black",
              marginBottom: "2.8em",
              marginTop: "2.8em",
              padding: '5px',
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
            }} >
              Purchase Tickets Here
            </Button>
          </Grid>
          </div>
        </Grid>
      </Grid>
      </Paper>
    </React.Fragment>
  );
}
