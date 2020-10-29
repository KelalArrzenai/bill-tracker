import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Copyright from '../components/copyright/Copyright';
import Form from '../components/login/Form';
import Header from '../components/header/Header';


export default function Login() {
  return (
    <>
    <Header />
    <Container component="main" maxWidth="xs">
      <Form />
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    </>
  );
}