
import NavBar from './NavBar';
import useStyles from '../styles/styles';
import React from 'react';
import Footer from './Footer';

function App() {
  const classes = useStyles();
  return (
    // <Router> 
        <React.Fragment> 
        <NavBar />
        <Footer />
        </React.Fragment>
    // </Router>
  );
}

export default App;
