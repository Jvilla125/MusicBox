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

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
  function handleImageInput(e){
    console.log(e.target.files,"<-- this is the image upload")
    setSelectedFile(e.target.files[0])
  }

  // function to handle form submission using 'formdata' 
  // 
  async function handleSubmit(e){
    e.preventDefault()
    const formData = new FormData()
    formData.append('photo', selectedFile)
    for (let value in state){
      formData.append(value, state[value]);
    }
    
    try {
      await userService.signup(formData);
    } catch(err){
      setError(err.message)
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
        <Form>
          <Segment stacked>
            <Form.Input
              name="username"
              placeholder="username"
              value={state.username}
              onChange={handleChange}
            />
            <Form.Input
              name="email"
              placeholder="email"
              value={state.email}
              onChange={handleChange}
            />
            <Form.Input
              name="password"
              placeholder="password"
              value={state.password}
              onChange={handleChange}
            />
            <Form.Input
              name="passwordConf"
              placeholder="password Confirmation"
              value={state.passwordConf}
              onChange={handleChange}
            />
            <Form.Input
              type="file"
              name="photo"
              placeholder="upload image"
              onChange={handleImageInput}
            />
            <Button type='submit' >
              Sign up
            </Button>
          </Segment>
        </Form>

      </Grid.Column>
    </Grid>
  );
}
