import React, { useRef, Redirect } from "react";
import { useUserContext } from '../../utils/Context';
import { Link } from 'react-router-dom';
import { Button, TextField, FormControlLabel, Checkbox, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Form() {
  const dispatch = useUserContext();
  const classes = useStyles();
  const lastRef = useRef();
  const emailRef =useRef();
  const firstRef = useRef();

  function handleSubmit(event) {
    const { name, value } = event.target;
  }

  return (
    <div className={classes.paper}>
      <Typography component="h1" variant="h4" color="secondary">
        Login to Bill Tracker
        </Typography>
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          ref={emailRef}
        />
        <TextField
          variant="outlined"
          margin="normal"
          color="4B7631"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onSubmit={() => {
            dispatch('set');
            return <Redirect to="/landing" />;
          }}
        >
          Sign In
          </Button>
        <Grid container>
          <Grid item>
            <Link to="/signup" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}