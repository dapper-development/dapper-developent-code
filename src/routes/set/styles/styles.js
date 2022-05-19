
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  // GiveBack 
  giveBackDiv: {
    textAlign: 'center',
    margin: '0',
    backgroundColor: 'none',
 },
  giveBackImg: {
    maxWidth: '100%',
    maxHeight: '100%',
    border: 'none',
    marginBottom: '-3em'
  },
  giveBackButton: {
    background: "red",
    color: "white",
    fontWeight: "bold",
    borderRadius: '5%',
    fontSize: '1.5em',

  },
  // NavBar-----
  navBarDiv: {
    background: "black",
    color: "white",
    width: "100%",
    height: "auto",
    padding: ".5em",
    textAlign: 'center',

  },
  navButton: {
    fontSize: "11px",
    fontWeight: 'bold',
    padding:'.25em',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: '1em',
    padding: '0em',
  },
  navLogoBox: {
    textAlign: "center",
    color: "inherit",
  },
  navLogo: {
    background: "black",
    height: "auto",
    width: "9em",
    textAlign: "center",
    margin:'.25em'
  },
  // Banner ------
  bannerDiv: {
    textAlign: 'center',
    maxWidth: '100%',
    color: 'white', 
    fontWeight: 'bold',  borderRadius: '1em', padding: '.66em', 
    marginTop: '1em',
  },
  //RoundCards ------
  roundCardSectionDiv: {
    background: "white",
    textAlign: 'center',
    marginBottom: '1em',
  },
  banner2Div: {
    background: "white",
    textAlign: 'center',
    // marginBottom: "5em",
  },
  bannerImg2:{
    height: "auto",
    width: "100%",
    marginBottom: '2em',
  },
  cirImg: {
    textAlign: 'center',
    height: "auto",
    maxWidth: "100%",
    padding:'0',
 

  },
  // BlackBard Div ---
 grayBarDiv: {
    marginTop: '1em',
    textAlign: 'center',
    fontWeight: 'bold',
    width: "100%",
    height: "auto",
    fontSize: '3em',
    backgroundColor: '#F8F8F8',
    border: 'none',

  },
  whiteBarDiv: {
    marginTop: '1em',
    textAlign: 'center',
    fontWeight: 'bold',
    width: "100%",
    height: "auto",
    fontSize: '3em',
    padding: '1em,'

  },
  blackBarText: {
    fontWeight: 'bold',
  },

  // SquareCards ------

  cardSectionDiv: {
    marginTop: '0px',
    textAlign: 'center',
    background: "#F8F8F8",
    width: '100%',
    height: 'auto',
  },
  cardDiv: {
    textAlign: "center",
    maxWidth: '100%',
    
  },
  bannerCardImg: {
    maxWidth: '80%'
  },
  cardImg: {
    maxWidth: "100%",
  },
  cardImg2: {
    maxWidth: "102%",
  },
  cardImg3: {
    textAlign: 'center',
    maxWidth: "75%",
    marginTop: '1em',
    paddingBottom: '.7em',
  },
  cardButton: {
    background: "black",
    color: "white",
    fontWeight: "bold",
  },
  popDiv: {
    textAlign: 'center',
    width: '60em',
  },
  cardTitle: {
    color: "red",
    fontWeight:'bold',
  },
  cardText: {
    textAlign: "start",
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
    padding: '1em',
  },
  title: {
    margin: 0,
    padding: theme.spacing(2),
  },
  scanCardButton: {
    background: "black",
    color: "white",
    fontWeight: "bold",
  },
  moneyCardButton: {
    background: "black",
    color: "white",
    fontWeight: "bold",
  },
  //Banner3
  bannerImg3: {
    height: "auto",
    width: "100%",

  },
  banner3Div: {
    background: "white",
    // marginBottom: "5em",
  },
  //Video
  vidCardDiv: {
    textAlign: "center",
    height: '25em',
    width: 'auto',
    // marginBottom: '-6.5em',

    
  },
  vid: {
    background: 'white',
    border: 'none',
    height: '75%',
    minWidth: '66%',
    background: 'none',
 
  },
//FlashCards
topNotchFlashCardSectionDiv:{
  marginTop:'2em',
  background: 'white',
  textAlign: "center",
  maxWidth: '100%',
},
flashCardSectionDiv:{
  marginTop:'2em',
  background: '#F8F8F8',
  textAlign: "center",
  maxWidth: '100%',
},
flashCardTitle: {
  color: 'red',
  paddign: '0',
},
flashCardText:{

},
scrollToTop: {
  textAlign: 'center',  
  maxWidth: '30%',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '1px',
  borderRadius: '10px',
},

scrollToTopButton: {
 
  fontWeight: "bold",
  fontSize: '.8em',
  padding: '0em',

},

formButton: {
  background: "red",
  color: "white",
  fontWeight: "bold",
  borderRadius: '5%',
  fontSize: '1em',
  margin: '1em',
  
},
  // Footer-----
  footerDiv: {
    backgroundColor: "black",
    color: "white",
    textAlign: 'center',
    justifyContent: 'center',
  },
  footLogo: {
    background: "black",
    height: "auto",
    width: "15em",
    textAlign: "center",
    marginLeft: '6.em',
    marginTop: '3em',
  },
  socialDiv: {
    textAlign: 'center',
    color: 'white',
  },
  copyRight: {
    paddingTop: '2em',
  },
  socialLinks: {
    // fontSize: '50px',
    color: 'white',
  },
  texas:{
    background: "black",
    height: "100%",
    width: "20em",
    textAlign: "center",
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
    padding: '0px',
  },
  form: {
    backgroundColor: 'white',
    textAlign: 'center',
    width: '40em',
    color: 'red',
    borderRadius: '20px',
    margin: '0px',
    fontWeight: 'bold',
  },
 input: {
  borderTop: 'none',
  borderLeft: 'none',
  borderRight: 'none',
  fontSize: '1em',
  outline: 'none',
 },
//  Videos 
videoTitles: {
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: '2em',
  paddingTop: '1em',
  textDecoration: 'underline',
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
},
}));

export default useStyles;
