import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Copyright from "../components/copyright/Copyright";
import Form from "../components/signup/Form";
import Header from "../components/header/Header";

export default function Signup() {
  return (
    <>
      <Header />
      <Container component="main" maxWidth="xs">
        <Form />
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
