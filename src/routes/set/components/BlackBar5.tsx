import Grid from "@material-ui/core/Grid";
import useStyles from "../styles/styles";

export default function BlackBar5() {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center" spacing={2} style={{ maxWidth: '100%', marginTop: '1em', }} >
      <Grid container item xs={12} spacing={0}>
        <Grid container item xs={12} spacing={0}>
          <p className={classes.whiteBarDiv}>
            Testimonials
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
}
