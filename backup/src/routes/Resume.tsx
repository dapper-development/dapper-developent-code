import React from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../App.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import AppleIcon from "@material-ui/icons/Apple";
import FacebookIcon from "@material-ui/icons/Facebook";
import idkMain from "../resources/images/idkLogoLarge.png";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { createStyles, Grid, makeStyles, Typography } from "@material-ui/core";
import Footer from "../components/Footer";
import { Icon } from "@iconify/react";


function Resume() {
  const useStyles = makeStyles(() =>
    createStyles({
      // STYLING
      mainDiv: {
        margin: 'auto',
        width: '66%',
        textAlign: 'center',

      },
      title: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        maring:'.5em',
      },
      subTitle: {
        fontSize: '1em',
        textAlign: 'center',
        fontWeight: 'bold',
        margin: '.5em',

       
      },
      body: {
        fontSize: '.7em',
        textAlign: 'center',
        margin: '.5em',

      }

    })
  );
  // STYLING

  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        className={classes.mainDiv}
      >
        <Typography variant="h5" className={classes.title} >
          Victor Jaimes-Puente
        </Typography>
        <Typography variant="h5" className={classes.subTitle} >
          victor.jaimes.puente@gmail.com 737-224-3665
        </Typography>
        <Typography className={classes.body} >
          I am a full stack web developer. I specialize in React + NextJS and in cloud architecture + deployment automation. I am always  striving to learn more in cloud computing, modern software development, and cyber security/operations.
        </Typography>
        <br></br>
        <Typography variant="h5" className={classes.title} >
          Experience
        </Typography>
        <br></br>
        <Typography variant="h5" className={classes.subTitle} >
          Web Developer / DevOps Jun 2021 - Jan 2022 School Event Tickets, San Antonio, US
        </Typography>
        <br></br>
        <Typography className={classes.body} >
          Developed web applications using React and Nodejs (MERN). Worked with client and design teams in order to  meet client design and performance expectations.
          Designed cloud infrastructure for the deployment of: development, testing, staging and production environments  for both small and large scale platforms.
          Reduced deployment, and update time with automated development pipeline. Drastically reduced hosting costs.
        </Typography>
        <br></br>
        <Typography variant="h5" className={classes.subTitle} >
          Web Developer / DevOps Jul 2020 - Jun 2021 Appddiction Studio, San Antonio, US
        </Typography>
        <br></br>
        <Typography className={classes.body} >
          Assisted with the development, testing, deploying and securing of a large scale application on the cloud using tools like AWS, Docker, Kubernetes, Jenkings, Gitlab, Trivy, in order to ensure the infrastructure would automate the  deployment process while scaling correctly and securely.
          Developed a full-stack web platform for large scale clients utilizing React and Typescript.
        </Typography>
        <br></br>
        <Typography variant="h5" className={classes.subTitle} >
          Infantry Team Leader Jan 2013 - Apr 2016 United States Army
        </Typography>
        <br></br>
        <Typography className={classes.body} >
          Organized and instructed over seventy two job oriented classes to groups of up to thirty personnel over a twenty four month period.
          Supervised up to ten personnel in over fifty high stress, highly adverse operations with zero percent failure or loss.  Oversaw all aspects of my soldiers lives which included finances, basic survival needs, identifying learning styles, individual attitudes, psychological state of mind, physical and mental abilities all with the purpose of developing an elite soldier.
        </Typography>
        <br></br>        
        <Typography variant="h5"  className={classes.title} >
          Skills + Specialization        
          </Typography>
          <br></br>
        <Typography className={classes.body}  display="block">
          Agile, SCRUM,Javascript, Typescript, Node, React, HTML, CSS, Redux
          ,API creation + implementation, Java, Spring Boot, MySQL, NestJS, MongoDB,
          ,Cloud Architecture, Deployment Automation, AWS, Google Cloud, Azure, Cloud + Local Networking, Cloud + Local Hosting
        </Typography>
        <br></br>
        <Typography variant="h5"  className={classes.title} >
          Education</Typography>
        <br></br>
        <Typography variant="h5" className={classes.subTitle} >
        Alamo Colleges 2020 - Presently Enrolled         </Typography>
        <br></br>
        <Typography className={classes.body} >
          Associate's Degree, Cloud Networking
          San Antonio
        </Typography>
        <br></br>    
             <Grid  
              container
              spacing={1}
              direction="row"
              justifyContent="center"
              alignItems="center"
              alignContent="center">
        <Typography variant="h5" display="block" className={classes.title} >
        Licenses + Certifications 
         </Typography>
         </Grid>
        <br></br>
        <Typography className={classes.subTitle} >
        Codeup 2020, Full-stack Web Development
        </Typography>
        <Typography className={classes.body} >
        6 months, 40 hour weeks of coding. Full-stack Web Development in LAMP stack. 
        </Typography>
        <br></br>      </Grid>

    </React.Fragment>
  );
}

export default Resume;
