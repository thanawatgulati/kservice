import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import cal from '../../icons/calendar.svg';

function App() {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    paper: {
      height: 300,
      width: 200,
      textAlign: 'center'
    },
    control: {
      padding: theme.spacing(2)
    }
  }));
  const [spacing, setSpacing] = React.useState(10);
  const classes = useStyles();

  const handleChange = event => {
    setSpacing(Number(event.target.value));
  };
  return (
    <div>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            {/* //item 1 */}
            <Grid item>
              <Paper className={classes.paper}>
                <img src={cal} width="130" style={{ font-color: '#5D5493' }} />
                <br />
                Claim products quickly and on time
              </Paper>
            </Grid>
            {/* item 2 */}
            <Grid item>
              <Paper className={classes.paper} />
            </Grid>
            {/* item 3 */}
            <Grid item>
              <Paper className={classes.paper} />
            </Grid>
            {/* item 4 */}
            <Grid item>
              <Paper className={classes.paper} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
