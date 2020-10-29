import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Copyright from '../components/copyright/Copyright';
import Table from "../components/table/Table";
import { useUserContext } from '../utils/Context';
import Header from "../components/header/Header";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
  },
  cardHeader: {
    padding: theme.spacing(1, 2),
  },
  list: {
    width: 200,
    height: 230,
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto',
  },
  button: {
    margin: theme.spacing(0.5, 0),
  },
}));

  export default function User() {
    const [state, dispatch] = useUserContext();
      useEffect(() => {
      dispatch({type: 'get'});
      }, [dispatch]);
    
    return (
      <Container component="main" maxWidth="lg">
        <Header />
        <Table />
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }