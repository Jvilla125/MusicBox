import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import userService from "../../utils/userService";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Grid, Segment } from 'semantic-ui-react'

export default function SignUpPage(props) {
  const [error, setError] = useState('')
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    passwordConf: '',
  })

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Grid
      textAlign="center"
      style={{ height: "100vh", width: "100vw" }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <h1 as="h2">Please Sign Up</h1>
        <Form>
          <Segment stacked>
            <Form.Input
              name="username"
              placeholder="username"
              value={state.username}
            />
            <Form.Input
              name="email"
              placeholder="email"
              value={state.email}
            />
            <Form.Input
              name="password"
              placeholder="password"
              value={state.password}
            />
            <Form.Input
              name="passwordConf"
              placeholder="password Confirmation"
              value={state.passwordConf}
            />
            <Form.Field>
              <Form.Input
                type="file"
                name="photo"
                placeholder="upload image"
                // onChange={handleFileInput}
              />
            </Form.Field>
            <Button>
              Sign up
            </Button>
          </Segment>
        </Form>

      </Grid.Column>
    </Grid>
  );
}
