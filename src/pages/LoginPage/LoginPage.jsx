import React, { useState } from "react";
import "./LoginPage.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import { Button, Checkbox, Form, Grid, Segment } from 'semantic-ui-react'
import { useNavigate, Link } from "react-router-dom"

export default function LoginPage(props) {
  const [error, setError] = useState('')

  const [state, setState] = useState({
    username: "",
    password: ""
  })

  const navigate = useNavigate();

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e){
    e.preventDefault();
    try {
      await userService.login(state);
      props.handleSignUpOrLogin();
      navigate("/");
    } catch(err){
      setError(err.message)
    }
  }
  return (
    // <h1>Setup Login Page</h1>
    <Grid
      textAlign="center"
      style={{ height: "100vh", width: "100vw" }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <h1 as="h2">Please log in below</h1>
        <Form onSubmit={handleSubmit}>
          <Segment>
            <Form.Input
            type="username"
            name="username"
            placeholder="username"
            value={state.username}
            onChange={handleChange}
            required
            />
            <Form.Input
            type="password"
            name="password"
            placeholder="password"
            value={state.password}
            onChange={handleChange}
            required
            />
            <Button type="submit">
              Log in
            </Button>
          </Segment>
          {error.message ? <ErrorMessage error={error.message} /> : null}
        </Form>
        <Segment>
          <h3>If you do you have an account, please <Link to="/Signup">Sign up.</Link></h3>
        </Segment>
      </Grid.Column>
    </Grid>
  );
}
