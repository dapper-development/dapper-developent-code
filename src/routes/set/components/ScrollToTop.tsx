import React, { useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import { Typography } from "@material-ui/core";
import useStyles from "../styles/styles";
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const classes = useStyles();
  // Show but, Typographyton when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible &&
        <div className={classes.scrollToTop} onClick={scrollToTop}>
          <Button style={{
              color: 'red',
            textDecoration: 'none',
            fontWeight: 'bold',
            marginTop: 'auto',
            marginBottom: 'auto',
            textTransform: 'none',
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

            Top of Page

          </Button>
        </div>}
    </div>
  );
}
