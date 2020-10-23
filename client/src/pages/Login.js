import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Form from '../components/login/Form';
import Copyright from '../components/copyright/Copyright';

export default function Login() {
  return (
    <Container component="main" maxWidth="xs">
      <Form />
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}