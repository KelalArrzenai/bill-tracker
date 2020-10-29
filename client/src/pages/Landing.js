import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Copyright from '../components/copyright/Copyright';
import Table from "../components/table/Table";
import Header from "../components/header/Header";

  export default function User() {
    return (
      <Container component="main" maxWidth="lg">
        {/* <Header /> */}
        <Table />
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }
 