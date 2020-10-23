import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Form from '../components/signup/Form';



export default function SignUp() {
  return (
    <Container component="main" maxWidth="xs">
      <Form />
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}