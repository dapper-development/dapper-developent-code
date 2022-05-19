import Grid from "@material-ui/core/Grid";
import useStyles from "../styles/styles";

export default function BlackBar6() {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center" spacing={2} style={{ maxWidth: '100%', paddingTop: '0em', }} >
      <Grid container item xs={12} spacing={0}>
        <Grid container item xs={12} spacing={0}>
          <p className={classes.whiteBarDiv}>
            Meet School Event Tickets
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
}
