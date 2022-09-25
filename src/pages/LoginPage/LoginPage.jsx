import React, { useState } from "react";
import "./LoginPage.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import { Button, Checkbox, Form, Grid } from 'semantic-ui-react'

export default function LoginPage(props) {
  return (
      // <h1>Setup Login Page</h1>
      <Grid
      textAlign="center"
      style={{ height: "100vh", width: "100vw" }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <h1 as="h2">Please log in below</h1>
      <Form>
        
      <Form.Field>
        <label>Username</label>
        <input />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input />
      </Form.Field>
    </Form>
    
    </Grid.Column>
    </Grid>
  );
}
