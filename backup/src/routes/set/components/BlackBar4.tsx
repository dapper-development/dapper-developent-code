import Grid from "@material-ui/core/Grid";
import useStyles from "../styles/styles";

export default function BlackBar4() {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center" spacing={2} style={{marginTop: '1em',}} >

      <Grid container item xs={12} spacing={0}>
          <p className={classes.whiteBarDiv}>
              Industry Leading Features 
          </p>

      </Grid>

    </Grid>
  );
}
