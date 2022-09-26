import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import userService from "../../utils/userService";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Grid, Segment } from 'semantic-ui-react'

export default function SignUpPage(props) {
  const [error, setError] = useState({
    message: "",
    passwordError: false
  })

  // setting up the useState for user sign up form below
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    passwordConf: '',
  })

  // setting up the useState for the photo upload below
  const [selectedFile, setSelectedFile] = useState('')
  const navigate = useNavigate();

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
  function handleImageInput(e) {
    console.log(e.target.files, "<-- this is the image upload")
    setSelectedFile(e.target.files[0])
  }

  function isPasswordMatch(passwordOne, passwordConf) {
    return passwordOne === passwordConf;
  }

  // function to handle form submission using 'formdata' 
  // 
  async function handleSubmit(e) {
    e.preventDefault()
    if (!isPasswordMatch(state.password, state.passwordConf)) return setError({ message: 'Passwords Must Match!', passwordError: true })
    setError({ message: '', passwordError: false })
    const formData = new FormData()
    formData.append('photo', selectedFile)
    for (let value in state) {
      formData.append(value, state[value]);
    }

    console.log(formData.forEach((item) => console.log(item)), "<- this is each value in the formData")

    try {
      await userService.signup(formData);
      props.handleSignUpOrLogin();
      navigate("/");
    } catch (err) {
      setError({ message: err.message, passwordError: false })
    }
  }



  return (
    <Grid
      textAlign="center"
      style={{ height: "100vh", width: "100vw" }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <h1 as="h2">Please Sign Up</h1>
        <Form onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              name="username"
              placeholder="username"
              value={state.username}
              onChange={handleChange}
              required
            />
            <Form.Input
              type="email"
              name="email"
              placeholder="email"
              value={state.email}
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
            <Form.Input
              type="password"
              name="passwordConf"
              placeholder="password Confirmation"
              value={state.passwordConf}
              onChange={handleChange}
              required
            />
            <Form.Input
              type="file"
              name="photo"
              placeholder="upload image"
              onChange={handleImageInput}
              required
            />
            <Button type='submit' >
              Sign up
            </Button>
          </Segment>
          {error.message ? <ErrorMessage error={error.message} /> : null}
        </Form>
      </Grid.Column>
    </Grid>
  );
}
