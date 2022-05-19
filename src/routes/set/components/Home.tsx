
import useStyles from '../styles/styles';
import Banner from './Banner';
import React from 'react';
import RoundCards from './RoundCards';
import SquareCards from './SquareCards';
import FlashCards from './FlashCards';
import GiveBack from './GiveBack';
import ClientReviews from './ClientFeedback';

function Home() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Banner />
      <RoundCards />
      <SquareCards />
      <FlashCards />
      <ClientReviews />
      <GiveBack />
    </React.Fragment>
  );
}

export default Home;
