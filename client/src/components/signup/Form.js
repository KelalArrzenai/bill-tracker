import React, { useState }  from "react";
import { useHistory, Redirect } from 'react-router-dom';
import { useUserContext, UserProvider } from '../../utils/Context';
import { Button, TextField, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



export default function Form() {
  const [state, dispatch] = useUserContext();
  const classes = useStyles();
  const history = useHistory();

  const [form, setForm] = useState({});
  
  function handleSubmit(props) {
    console.log(form);
    if (!form.firstName){
      console.log('Please enter a first and last name');
      return;
    } 
    else if (!form.lastName) {
      console.log('Please enter a first and last name');
      return; 
    }
    else if (!form.email) {
      console.log('Please enter a valid email');
      return; 
    }
    else if (!form.password) {
      console.log('Please eanter a valid password');
      return; 
    }
    else {
      dispatch({type:'set', data: form})
      
    }
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setForm({...form, [name]:value})
  }

  console.log("STATE : ", state);
  // let path = `/${props._id}`;
  if(state.user){
    console.log(state.user);
    history.push(`/${state.user._id}` );
    }

  return (
    <div className={classes.paper}>
      <Typography component="h1" variant="h4" color="secondary">
        Sign up
      </Typography>
      <form className={classes.form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus 
              onChange={(e) => handleChange(e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lname"
              onChange={(e) => handleChange(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={(e) => handleChange(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => handleChange(e)}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={(e) => {
            e.preventDefault();
            handleSubmit(state);
          }}
        >
          Sign Up
        </Button>
        <Grid container justify="center">
          <Grid item>
            <Link to="/login" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

